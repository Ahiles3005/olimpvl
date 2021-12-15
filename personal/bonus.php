<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Личный кабинет - Бонусы");
$APPLICATION->SetTitle("Бонусы");
global $USER;
CModule::IncludeModule('logictim.balls');
?><?$APPLICATION->IncludeComponent(
	"bitrix:breadcrumb",
	"template-breadcrumb",
	Array(
		"PATH" => "",
		"SITE_ID" => "s1",
		"START_FROM" => "0"
	)
);?><br>
 <?
$idUser = $USER->GetId();
$rsUser = CUser::GetById($idUser);
$arUser = $rsUser->Fetch();
?>
<div class="container">
	<div class="personal-area content__personal-area">
		<h1 class="title personal-area__title">Личный кабинет</h1>
		<ul class="personal-area__menu">
			<li class="personal-area__item"><a href="/personal-area/" class="personal-area__item-text">Профиль</a> </li>
			<li class="personal-area__item"><a href="list-order.php" class="personal-area__item-text">История заказов</a></li>
			<li class="personal-area__item"><a href="favorite.php" class="personal-area__item-text">Избранное</a> </li>
			<li class="personal-area__item"><a href="subscribe.php" class="personal-area__item-text">Рассылка</a></li>
			<li class="personal-area__item"><a href="/compare/" class="personal-area__item-text">Сравнение</a></li>
			<li class="personal-area__item"><a href="bonus.php" class="personal-area__item-text personal-area__item-text_selected">Бонусы</a> </li>
		</ul>
		 <!--            --><?//pp($arUser['UF_ACCOUNT'])?>
		<div class="bonus-section personal-area__bonus">
			 <? if ($arUser['UF_ACCOUNT']): ?> <?
                    $dbRes = CIBlockElement::GetByID($arUser['UF_ACCOUNT']);
                    $arRes = $dbRes->Fetch();
                    $userBonus = cHelper::UserBallance($idUser);
                    ?>
			<div class="bonus-section__field">
				<div class="bonus-section__field-name">
					Номер карты
				</div>
				<div class="bonus-section__field-value">
					<?= $arRes['NAME'] ?>
				</div>
			</div>
			<div class="img bonus-section__img-card">
			</div>
			<div class="bonus-section__field">
				<div class="bonus-section__field-name">
					Количество бонусов
				</div>
				<div class="bonus-section__field-value bonus-section__field-value_big">
					<?= number_format($userBonus, 0, '', ' ') ?>
				</div>
			</div>
			 <? else: ?> <? if (isset($_POST) && !empty($_POST)): ?> <?
                        $db_res = CIBlockElement::GetList(
                            array(),
                            array(
                                "IBLOCK_ID" => 24,
                                "NAME" => $_POST['ID']
                            ),
                            false,
                            false,
                            array()
                        );

                        if ($arRes = $db_res->Fetch()) {
//                            pp($arRes);
                            // Create account with id = $_POST['ID']
                            $dbResProp = CIBlockElement::GetProperty(
                                24,
                                $arRes['ID'],
                                array(),
                                array()
                            );

                            $arResProp = array();
                            while ($prop = $dbResProp->Fetch()) {
                                $arResProp[$prop['CODE']] = $prop;
                            }
//                            pp($arResProp);
                            if (empty($arResProp['EMAIL']['VALUE'])) {
                                $arField = array(
                                    "ADD_BONUS" => $arResProp['BONUS']['VALUE'],
                                    "USER_ID" => $idUser,
                                    "OPERATION_TYPE" => 'USER_BALLANCE_CHANGE',
                                    "OPERATION_NAME" => 'Активация бонусов на сайте',
                                );

                                logictimBonusApi::AddBonus($arField);

                                // Update IBlockElement
                                $el = new CIBlockElement;
                                $prop = array(
                                    "NAME" => $_POST['NAME'],
                                    "SECOND_NAME" => $_POST['SECOND_NAME'],
                                    "EMAIL" => $_POST['EMAIL'],
                                    "ID_ACCOUNT" => $idAccount,
                                    "BONUS" => $arResProp['BONUS']['VALUE'],
                                    "NUM" => $arResProp['NUM']['VALUE']
                                );
                                $arField = array(
                                    "PROPERTY_VALUES" => $prop
                                );
                                $id = $el->Update($arRes['ID'], $arField);

                                // Update info about account in user profile
                                $user = new CUser;

                                $fields = array(
                                    "UF_ACCOUNT" => $arRes['ID']
                                );

                                $user->Update($USER->GetID(), $fields);
                            }
                            else {
                                ?>
			<div class="bonus-section__msg-section">
				 Эта карта уже привязана к другому пользователю. Пожалуйста введите другой номер карты.
			</div>
			 <?
                            }
                        }
                        else {
                            ?>
			<div class="bonus-section__msg-section">
				 Ваша карта не найдена
			</div>
			 <?
                        }
                        LocalRedirect('/personal-area/bonus.php');
                        ?> <? else: ?> <!--                        --><?//pp($_POST)?>
			<div class="bonus-section__msg-section">
				 Привяжите вашу карту к профилю.
			</div>
			 <!--                    --><?//pp($arUser)?> <button class="bonus-section__btn bonus-section__btn_small">
			Привязать карту </button>
			<div class="bonus-section__form" style="display: none;">
				<form method="POST" id="form-bonus">
					<div class="bonus-section__input-block">
 <label class="bonus-section__label">Имя</label> <input type="text" name="NAME" placeholder="Введите имя" class="bonus-section__input" value="<?=$arUser['NAME']?>"> <span class="bonus-section__error">Поле не должно быть пустым</span>
					</div>
					<div class="bonus-section__input-block">
 <label class="bonus-section__label">Фамилия</label> <input type="text" name="SECOND_NAME" placeholder="Введите фамилию" class="bonus-section__input" value="<?=$arUser['LAST_NAME']?>"> <span class="bonus-section__error">Поле не должно быть пустым</span>
					</div>
					<div class="bonus-section__input-block">
 <label class="bonus-section__label">№ карты</label> <input type="text" name="ID" placeholder="Введите номер карты" class="bonus-section__input"> <button class="bonus-section__btn bonus-section__btn_pop-up" onclick="return false;">? </button> <span class="bonus-section__error">Номер карты состоит из 13 цифр</span>
					</div>
					<div class="bonus-section__input-block">
 <label class="bonus-section__label">Эл. почта</label> <input type="text" name="EMAIL" placeholder="Введите свой e-mail" class="bonus-section__input" value="<?=$arUser['EMAIL']?>">
						<div class="bonus-section__tooltip">
							<div class="bonus-section__tooltip-text">
								?
							</div>
							<div class="tooltip-text">
								Какой-то текст
							</div>
						</div>
 <span class="bonus-section__error">Неверно введен e-mail</span>
					</div>
 <button class="bonus-section__btn">Привязать карту</button> <a href="bonus.php" style="display: inline-block; margin-top: -3px; line-height: 35px;vertical-align: middle;text-align: center;" class="bonus-section__btn bonus-section__btn_cancel">Отмена</a>
				</form>
			</div>
			 <script>
                        var rEmail = /^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/;

                        $(document).ready(function () {
                            $('.bonus-section__btn_pop-up').click(function () {
                                $('.pop-background').show();
                                $('.info-bonus').show();
                            });
                            $('.info-bonus').children('.exit-btn').click(function () {
                                $('.info-bonus').hide();
                                $('.pop-background').hide();
                            });
                            $('.bonus-section__btn_small').click(function () {
                                $('.bonus-section__msg-section').hide();
                                $(this).hide();
                                $('.bonus-section__form').show();
                            });
                        });

                        $('#form-bonus').submit(function (e) {
                            var isValid = true;
                            var inputs = $('.bonus-section__input');

                            for(var i = 0; i < inputs.length; i++) {
                                var input = inputs.eq(i);
                                var name = input.attr('name');
                                var val = input.val();
                                var isValidVal = true;

                                console.log(val, name);

                                switch (name) {
                                    case 'EMAIL':
                                        isValidVal = rEmail.test(val);
                                        break;
                                    case 'ID':
                                        isValidVal = val.length === 13;
                                        break;
                                    default:
                                        isValidVal = val.length > 0;
                                        break;
                                }

                                if (isValidVal) {
                                    input.removeClass('input_error');
                                }
                                else {
                                    input.addClass('input_error');
                                    input.next().show();
                                    isValid = false;
                                }
                            }
                            return isValid;
                        });
                    </script> <? endif; ?> <? endif; ?>
		</div>
	</div>
</div><? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>