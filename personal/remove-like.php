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
    $i = 0;
    for(; $i < count($idFavorite); $i++) {
        $isContenId = $idFavorite[$i] == $idElement;
        if ($isContenId) {
            break;
        }
    }

    if ($isContenId) {
        $arRes = array_splice($idFavorite, $i, 1);
        $user = new CUser;
        $fields = array(
            "UF_FAVORITE" => $idFavorite
        );
        $user->Update($idUser, $fields);
        $answer['result'] = $i;
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