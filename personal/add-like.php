<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");
global $USER;

$isIncudeModules = CModule::IncludeModule("iblock") && CModule::IncludeModule("main") && CModule::IncludeModule("socialnetwork");
$answer = array(
    "isSuccess" => true
);
if ($isIncudeModules) {
    $idElement = $_POST['id'];

    $idUser = $USER->GetId();
    $rsUser = CUser::GetById($idUser);
    $arUser = $rsUser->Fetch();
    $idFavorite = $arUser['UF_FAVORITE'];

    $isContenId = false;
    for($i = 0; $i < count($idFavorite) && !$isContenId; $i++, $isContenId = $idFavorite[$i] == $idElement);

    if (!$isContenId && !empty($arUser)) {
        $idFavorite[] = $idElement;
        $user = new CUser;
        $fields = array(
            "UF_FAVORITE" => $idFavorite
        );
        $user->Update($idUser, $fields);
    }
    else {
        $answer['isSuccess'] = false;
    }

    echo json_encode($answer);
    return true;
}

$answer['isSuccess'] = false;
echo json_encode($answer);
return false;