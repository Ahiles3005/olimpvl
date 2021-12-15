<?
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

//Params
$arParams["TYPE"] = (isset($arParams["TYPE"]) ? trim($arParams["TYPE"]) : "");

if($arParams["NOINDEX"] <> "Y")
    $arParams["NOINDEX"] = "N";

if ($arParams["CACHE_TYPE"] == "Y" || ($arParams["CACHE_TYPE"] == "A" && COption::GetOptionString("main", "component_cache_on", "Y") == "Y"))
    $arParams["CACHE_TIME"] = intval($arParams["CACHE_TIME"]);
else
    $arParams["CACHE_TIME"] = 0;

//Result
$arResult['BANNERS'] = array();
$obCache    = new CPHPCache;
$cache_id   = SITE_ID."|advertising.banner|".serialize($arParams)."|".$USER->GetGroups()."|".$APPLICATION->GetCurPage(false);
$cache_path = "/".SITE_ID.$this->GetRelativePath();

if ($obCache->StartDataCache($arParams["CACHE_TIME"], $cache_id, $cache_path)) {
    if (!CModule::IncludeModule("advertising"))
        return;

    if($arParams["PAGE_404"] == "Y"){
        $arFilter = Array("TYPE"  => $arParams["TYPE"],"ACTIVE"  => 'Y');
        $rsBanners = CAdvBanner::GetList($by, $order, $arFilter, $is_filtered, "N");
        while($arBanner = $rsBanners->GetNext())
        {
            $bannesId[] = $arBanner['ID'];

            $strReturn = CAdvBanner::GetHTML($arBanner, ($arParams["NOINDEX"] == "Y"));

            $arBanner["HTML"]  = $strReturn;
            $arBanner['IMAGE'] = CFile::GetPath($arBanner['IMAGE_ID']);

            if (strlen($arBanner["HTML"])>0)
                CAdvBanner::FixShow($arBanner);

            $arResult['BANNERS'][$arBanner['WEIGHT']] = $arBanner;
        }
    }else{
        $bannesId  = array();
        $getBanner = true;

        while ($getBanner) {
            $arBanner = CAdvBanner::GetRandom($arParams["TYPE"]);

            if (!empty($arBanner) && !in_array($arBanner['ID'], $bannesId)) {
                $bannesId[] = $arBanner['ID'];

                $strReturn = CAdvBanner::GetHTML($arBanner, ($arParams["NOINDEX"] == "Y"));

                $arBanner["HTML"]  = $strReturn;
                $arBanner['IMAGE'] = CFile::GetPath($arBanner['IMAGE_ID']);

                if (strlen($arBanner["HTML"])>0)
                    CAdvBanner::FixShow($arBanner);

                $arResult['BANNERS'][$arBanner['WEIGHT']] = $arBanner;

            } else {
                $getBanner = false;
            }
        }
        krsort($arResult['BANNERS']);
        $arResult['BANNERS'] = array_values($arResult['BANNERS']);
    }
    $this->IncludeComponentTemplate();

    $templateCachedData = $this->GetTemplateCachedData();

    $obCache->EndDataCache(
        array(
            "arResult"           => $arResult,
            "templateCachedData" => $templateCachedData
        )
    );
} else {
    $arVars   = $obCache->GetVars();
    $arResult = $arVars["arResult"];
    $this->SetTemplateCachedData($arVars["templateCachedData"]);
}