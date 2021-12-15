<?
	require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetPageProperty("TITLE", "Арендодателям");
	$APPLICATION->SetTitle("Арендодателям");
?>
<div class="b-cooperation">
    <div class="b-cooperation__text">
         <p>
			<?$APPLICATION->IncludeComponent("bitrix:main.include", ".default", array(
					"COMPONENT_TEMPLATE"	 => ".default",
					"AREA_FILE_SHOW"		 => "file",
					"AREA_FILE_SUFFIX"		 => "inc",
					"EDIT_TEMPLATE"			 => "",
					"PATH" => "/arenda/include/arenda.include.text.php"
				)
			);?>
		</p>
        <h4>Более подробная информация:</h4><br>
        <p class="b-cooperation__contact">
			<strong>Телефон</strong>: 
				<a href="tel:<?$APPLICATION->IncludeComponent("bitrix:main.include", ".default", array(
						"COMPONENT_TEMPLATE"	 => ".default",
						"AREA_FILE_SHOW"		 => "file",
						"AREA_FILE_SUFFIX"		 => "inc",
						"EDIT_TEMPLATE"			 => "",
						"PATH" => "/arenda/include/include.phone.php"
					), false, array('HIDE_ICONS' => 'Y'));
					?>">
					<?$APPLICATION->IncludeComponent("bitrix:main.include", ".default", array(
						"COMPONENT_TEMPLATE"	 => ".default",
						"AREA_FILE_SHOW"		 => "file",
						"AREA_FILE_SUFFIX"		 => "inc",
						"EDIT_TEMPLATE"			 => "",
						"PATH" => "/arenda/include/include.phone.php"
							)
					);?>
				</a>
			<br />
			<strong>E-mail</strong>: 
				<a href="mailto:<?$APPLICATION->IncludeComponent("bitrix:main.include", ".default", array(
						"COMPONENT_TEMPLATE"	 => ".default",
						"AREA_FILE_SHOW"		 => "file",
						"AREA_FILE_SUFFIX"		 => "inc",
						"EDIT_TEMPLATE"			 => "",
						"PATH" => "/arenda/include/include.email.php"
					), false, array('HIDE_ICONS' => 'Y'));
					?>">
					<?$APPLICATION->IncludeComponent("bitrix:main.include", ".default", array(
						"COMPONENT_TEMPLATE"	 => ".default",
						"AREA_FILE_SHOW"		 => "file",
						"AREA_FILE_SUFFIX"		 => "inc",
						"EDIT_TEMPLATE"			 => "",
						"PATH" => "/arenda/include/include.email.php"
							)
					);?>
				</a>
		</p>
    </div>
</div>
<?$APPLICATION->IncludeComponent(
	"bitrix:form.result.new", 
	"cooperation", 
	array(
		"WEB_FORM_ID" => "4",
		"IGNORE_CUSTOM_TEMPLATE" => "N",
		"USE_EXTENDED_ERRORS" => "N",
		"SEF_MODE" => "N",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "3600",
		"LIST_URL" => "",
		"EDIT_URL" => "",
		"SUCCESS_URL" => "",
		"CHAIN_ITEM_TEXT" => "",
		"CHAIN_ITEM_LINK" => "",
		"COMPONENT_TEMPLATE" => "cooperation",
		"VARIABLE_ALIASES" => array(
			"WEB_FORM_ID" => "WEB_FORM_ID",
			"RESULT_ID" => "RESULT_ID",
		)
	),
	false
);

	require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");