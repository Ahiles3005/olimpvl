<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Личный кабинет - История заказов");
$APPLICATION->SetTitle("История заказов");

global $USER;
if(!CModule::IncludeModule("sale"))
			{ 
			die("Error Sale Module");
			}

?><?$APPLICATION->IncludeComponent(
	"bitrix:breadcrumb",
	"template-breadcrumb",
	Array(
		"PATH" => "",
		"SITE_ID" => "s1",
		"START_FROM" => "0"
	)
);?>

	<div class="container">
		<div class="personal-area content__personal-area">
			<h1 class="title personal-area__title">Личный кабинет</h1>
			<ul class="personal-area__menu">
				<li class="personal-area__item"><a href="/personal-area/" class="personal-area__item-text">Профиль</a></li>
				<li class="personal-area__item"><a href="list-order.php" class='personal-area__item-text personal-area__item-text_selected'>История заказов</a></li>
				<li class="personal-area__item"><a href="favorite.php" class='personal-area__item-text'>Избранное</a></li>
				<li class="personal-area__item"><a href="subscribe.php" class='personal-area__item-text'>Рассылка</a></li>
				<li class="personal-area__item"><a href="/compare/" class="personal-area__item-text">Сравнение</a></li>
				<li class="personal-area__item"><a href="bonus.php" class="personal-area__item-text">Бонусы</a></li>
			</ul>

			<div class="list-order personal-area__list-order" style="width: 657px;">
				<?
				$arSort = array();
				if (isset($_GET) && !empty($_GET)) {
					$arSort = array(
						$_GET['sort'] => $_GET['type']
					);
				}
				else {
					$arSort = array(
						"ID" => "ASC"
					);
				}
				$aeFilter = array(
					"USER_ID" => $USER->GetId()
				);
				$resDB = CSaleOrder::GetList(
					$arSort,
					$aeFilter,
					false,
					false,
					array()
				);
				$arResult = array();
				while($res = $resDB->Fetch()) {
					$arResult[] = $res;
				}
//				pp($arResult);
				?>
				<?if(!empty($arResult)):?>
				<div class="list-order__headers">
					<?if (!isset($_GET) || empty($_GET)):?>
						<a href="/personal-area/list-order.php?sort=ID&type=DESC" class="list-order__col">Номер заказа</a>
						<a href="/personal-area/list-order.php?sort=PRICE&type=ASC" class="list-order__col">Сумма заказа</a>
						<a href="/personal-area/list-order.php?sort=STATUS_ID&type=ASC" class="list-order__col">Статус заказа</a>
						<a href="/personal-area/list-order.php?sort=DATE_INSERT&type=ASC" class="list-order__col">Дата заказа</a>
					<?else:?>
						<?
						$sort = $_GET['sort'];
						$type = $_GET['type'];
						?>
						<a href="/personal-area/list-order.php?sort=ID&type=<?=$sort == 'ID' && $type == 'ASC' ? 'DESC' : 'ASC'?>"
						   class="list-order__col <?=$sort == 'ID' && $type == 'DESC' ? 'list-order__col_sort_desc' : ''?>">Номер заказа</a>
						<a href="/personal-area/list-order.php?sort=PRICE&type=<?=$sort == 'PRICE' && $type == 'ASC' ? 'DESC' : 'ASC'?>"
						   class="list-order__col <?=$sort == 'PRICE' && $type == 'DESC' ? 'list-order__col_sort_desc' : ''?>">Сумма заказа</a>
						<a href="/personal-area/list-order.php?sort=STATUS_ID&type=<?=$sort == 'STATUS_ID' && $type == 'ASC' ? 'DESC' : 'ASC'?>"
						   class="list-order__col <?=$sort == 'STATUS_ID' && $type == 'DESC' ? 'list-order__col_sort_desc' : ''?>">Статус заказа</a>
						<a href="/personal-area/list-order.php?sort=DATE_INSERT&type=<?=$sort == 'DATE_INSERT' && $type == 'ASC' ? 'DESC' : 'ASC'?>"
						   class="list-order__col <?=$sort == 'DATE_INSERT' && $type == 'DESC' ? 'list-order__col_sort_desc' : ''?>">Дата заказа</a>
					<?endif;?>
				</div>
				<ul class="list-order__result" style="<?= count($arResult) > 4 ? 'height: 127px; overflow: hidden;' : ''?>">
					<?foreach($arResult as $key => $arOrder):?>
						<div class="list-order__order">
						<span class="list-order__name">
							<a href="/personal-area/detail-order.php?id=<?=$arOrder['ID']?>">№ <?=$arOrder['ID']?></a>
						</span>
							<span class="list-order__sum-price"><?=number_format($arOrder['PRICE'], 0, '', ' ')?> руб</span>
							<?
							$arStatus = CSaleStatus::GetByID($arOrder['STATUS_ID']);

							?>
							<span class="list-order__status"><?=$arStatus['NAME']?></span>
							<span class="list-order__date"><?=FormatDate('d.m.Y', MakeTimeStamp($arOrder['DATE_INSERT']))?></span>
						</div>
					<?endforeach;?>
				</ul>
<!--					h127px-->
				<?if (count($arResult) > 4):?>
					<button class="list-order__btn">Показать еще</button>
				<?endif;?>
					<script>
						$(document).ready(function () {
							$('.list-order__btn').click(function () {
								$('.list-order__result').css({'height': 'auto', 'overflow': 'none'});
								$(this).hide();
							});
						});
					</script>
				<?else:?>
					<h2 class="title personal-area__title" style="font-size: 20px;">Ваш список заказов пуст</h2>
				<?endif;?>
			</div>
		</div>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>