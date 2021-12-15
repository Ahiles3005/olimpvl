<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Title");
?><div style="padding:15px; background:#efefef; margin:10px 0px 30px 0px">
	<p>
		 Условия предоставления кредитных продуктов Online:
	</p>
	<p>
	</p>
	<ol>
		<li>Необходимо заполнить заявку Online.&nbsp;</li>
		<li>Определиться с покупкой (общая сумма покупки от 15&nbsp;000 до 500&nbsp;000 руб).</li>
		<li>В случае одобрения, банк подготавливает Кредитный Договор и вы подписываете его в магазине.</li>
		<li>При продаже товара в рассрочку без переплаты акция по бесплатной доставке по городу и в регионы не действует.<br>
 </li>
	</ol>
	<p>
		 Подробности приобретения товаров в рассрочку/кредит вы можете ознакомиться по <a href="https://olimpvl.ru/news/rassrochka-bez-pereplat/">ссылке</a>.
	</p>
</div>
 <?$APPLICATION->IncludeComponent(
	"bitrix:form.result.new",
	"template1",
	Array(
		"CACHE_TIME" => "3600",
		"CACHE_TYPE" => "N",
		"CHAIN_ITEM_LINK" => "",
		"CHAIN_ITEM_TEXT" => "",
		"COMPONENT_TEMPLATE" => ".default",
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO",
		"EDIT_URL" => "result_edit.php",
		"IGNORE_CUSTOM_TEMPLATE" => "N",
		"LIST_URL" => "result_list.php",
		"SEF_MODE" => "N",
		"SUCCESS_URL" => "",
		"USE_EXTENDED_ERRORS" => "N",
		"VARIABLE_ALIASES" => array("WEB_FORM_ID"=>"WEB_FORM_ID","RESULT_ID"=>"RESULT_ID",),
		"WEB_FORM_ID" => "7"
	)
);?><br><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>