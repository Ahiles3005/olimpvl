 <?
    require($_SERVER['DOCUMENT_ROOT'] .'/bitrix/modules/main/include/prolog_before.php');

    CModule::IncludeModule("iblock");

    $data         = array();
    $page         = intval($_REQUEST['current_page']) + 1;
    $data['page'] = $page;

    $arFilter = array(
        "IBLOCK_ID"  => IBLOCK_ID_CATALOG,
        "ACTIVE"     => "Y"
    );

    if (!empty($_REQUEST['category_id'])) {
        $arFilter['SECTION_ID'] = $_REQUEST['category_id'];
    }

    if (!empty($_REQUEST['filter'])) {
        parse_str($_REQUEST['filter'], $request_filter);
        $arFilter = array_merge($arFilter, $request_filter);
    }

    $arNav = array(
        "nPageSize" => intval($_REQUEST['product_count']),
        "iNumPage"  => $page
    );
    $arSort = array(
        $_REQUEST['sort_field'] => $_REQUEST['sort_order'],
        'created'               => 'desc'
    );

    $arElementsId     = array();
    $data['products'] = array();
    $res = CIBlockElement::GetList($arSort, $arFilter, false, $arNav, array());
    while ($ob = $res->GetNextElement()) {
        $arFields = $ob->GetFields();
        $arFields['PROPERTIES'] = $ob->GetProperties();
        $arElementsId[] = $arFields['ID'];

        if (!empty($arFields["PROPERTIES"]["PICTURES"]['VALUE'])) {
            $mainPicKey = getMainPictureKey($arFields["PROPERTIES"]["PICTURES"]["DESCRIPTION"]);
            $arFields['PREVIEW_PICTURE'] = CFile::GetPath($arFields['PROPERTIES']['PICTURES']['VALUE'][$mainPicKey]);
        }else{
            $arFields['PREVIEW_PICTURE'] = "/catalog/images/400x400.png";
        }

        //избранное
        $arComponentVoteResult  = CRatings::GetRatingVoteResult('IBLOCK_ELEMENT', $arFields['ID']);
        $favorite = ($arComponentVoteResult['USER_HAS_VOTED'] == 'Y') ? '1' : '0';

        $arProduct = array(
            "id"         => $arFields['ID'],
            "name"       => $arFields['NAME'],
            "image"      => $arFields['PREVIEW_PICTURE'],
            "url"        => $arFields['DETAIL_PAGE_URL'],
            "compared"   => "1",
            "favorite"   => $favorite,
            "vote_id"    => 'IBLOCK_ELEMENT-'.$arFields['ID'].'-'.(time()+rand(0, 1000)),
            "user_id"    => $USER->GetId(),
            "articul"    => $arFields['PROPERTIES']['ARTICUL']['VALUE'],
            "new"        => ($arFields['PROPERTIES']['NEW']['VALUE'] == 'Y') ? 1 : 0,
            "best_price" => ($arFields['PROPERTIES']['BEST_PRICE']['VALUE'] == 'Y') ? 1 : 0,
            "best"       => ($arFields['PROPERTIES']['BEST']['VALUE'] == 'Y') ? 1 : 0,
            "sale"       => ($arFields['PROPERTIES']['DISCOUNT']['VALUE'] == 'Y') ? 1 : 0
        );

        $data['products'][$arProduct['id']] = $arProduct;
    }

    //Получить все торговые предложения и минимальную цену товара
    $keyCity = (empty($_COOKIE['KEY_CITY'])) ? Olimp\City::getDefaultCityCode() : $_COOKIE['KEY_CITY'];
    $arPrices = CIBlockPriceTools::GetCatalogPrices(IBLOCK_ID_CATALOG, array($keyCity));

    $offersFilter = array(
        'IBLOCK_ID'          => IBLOCK_ID_CATALOG,
        'HIDE_NOT_AVAILABLE' => 'N'
    );

    $arOffers = CIBlockPriceTools::GetOffersArray(
        $offersFilter,
        $arElementsId,
        array('sort' => 'asc'),
        array(),
        array(),
        0,
        $arPrices,
        true
    );
    if(!empty($arOffers))
    {
        foreach ($arElementsId as $id)
            $arElementLink[$id]['OFFERS'] = array();

        foreach($arOffers as $arOffer) {
            if (isset($arElementLink[$arOffer["LINK_ELEMENT_ID"]])) {
                $arElementLink[$arOffer["LINK_ELEMENT_ID"]]['OFFERS'][] = $arOffer;
            }
            $productOffers[$arOffer["PROPERTY_14_VALUE"]] = $arOffer;
        }

        foreach ($arElementLink as $elemID => $arElement) {
            //old
            /*$arMinPrice = CIBlockPriceTools::getMinPriceFromOffers(
                $arElement['OFFERS'],
                'RUB'
            );*/
            $arMinPrice = $productOffers[$elemID]["MIN_PRICE"];
            $data['products'][$elemID]['oldprice'] = round($arMinPrice['VALUE']);
            $data['products'][$elemID]['newprice'] = round($arMinPrice['DISCOUNT_VALUE']);
            $data['products'][$elemID]['discount'] = $arMinPrice['DISCOUNT_DIFF_PERCENT'];
        }
    }

    $count = CIBlockElement::GetList($arSort, $arFilter, array(), false, array());

    if (round($count/intval($_REQUEST['product_count'])) <= $page)
        $data['more'] = 0;

    //эта "магия" для работы js, т.к. у него свое понимание работы с массивами
    $temp=array();
    foreach($data['products'] as $poduct)
        $temp[]=$poduct;
    $data['products'] = $temp;

    echo json_encode($data);