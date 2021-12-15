<?
	require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("keywords", "магазин, время работы, адрес, телефон, 8 800 100 12 15, адрес магазина, адрес магазина Олимп, время работы магазина, время работы магазина Олимп");
$APPLICATION->SetPageProperty("description", "Владивосток, Уссурийск, Находка, Арсеньев, Комсомольск-На-Амуре — адреса, контакты, телефоны, время работы");
	$APPLICATION->SetPageProperty("TITLE", "Магазины Олимп");
	$APPLICATION->SetPageProperty("breadcrumbs", "false");
$APPLICATION->SetPageProperty("container", "false");
	$APPLICATION->SetTitle("Магазины");
?><div class="b-map" id="map">
	<div class="b-container b-container--map">
		<div class="b-shops">
			<h1 class="b-shops__title"><?$APPLICATION->ShowTitle()?></h1>
			<div class="b-shops__container">
			</div>
		</div>
	</div>
</div>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>