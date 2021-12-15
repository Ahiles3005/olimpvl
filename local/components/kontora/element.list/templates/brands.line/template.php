<?php

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
$this->setFrameMode(true);
?>

<? if (!empty($arResult["ITEMS"])): ?>
	<div class="b-brand-carousel">
		<p class="b-brand-carousel__headline">
			<?
			$APPLICATION->IncludeComponent("bitrix:main.include", "template1", Array(
	"COMPONENT_TEMPLATE" => ".default",
		"AREA_FILE_SHOW" => "file",	// Показывать включаемую область
		"AREA_FILE_SUFFIX" => "inc",
		"EDIT_TEMPLATE" => "",	// Шаблон области по умолчанию
		"PATH" => "/include/index.include.text.php",	// Путь к файлу области
	),
	false,
	array(
	"ACTIVE_COMPONENT" => "N"
	)
);
			?>
		</p>
		<div class="b-brand-carousel__recent">
			<ul class="b-brand-carousel__list">
				<? foreach ($arResult["ITEMS"] as $key => $arItem): ?>
					<li class="b-brand-carousel__item">
						<a href="<?= $arItem["DETAIL_PAGE_URL"] ?>" class="b-brand-carousel__name" title="<?= GetMessage("LINK_TITTLE") ?> <?= $arItem["NAME"] ?>">
							<img src="<?= $arItem["PREVIEW_PICTURE"]["SRC_SMALL"]?>" alt="<?= $arItem["NAME"] ?>" title="<?= $arItem["NAME"] ?>" class="b-brand-carousel__image" />
						</a>
					</li>
				<? endforeach; ?>
			</ul>
		</div>
	</div>
	<!-- Алфавит -->
	<div class="b-alphabet-error">
		<ul class="b-alphabet-error__list">
			<li class="b-alphabet-error__text"><a href="/brands/" class="b-link--all-brands" title="Смотреть все бренды">Смотреть все бренды</a></li>
			<? foreach (range('A', 'Z') as $letter): ?>
				<li class="b-alphabet-error__item">
					<a href="/brands/?brandName=<?=$letter?>" class="b-alphabet-error__letter<?= ($_REQUEST["brandName"] == $letter) ? " b-alphabet-error__letter--active" : "" ?>">
						<?= $letter ?>
					</a>
				</li>
			<? endforeach; ?>
			<li class="b-alphabet-error__item">
				<a href="/brands<?= $APPLICATION->GetCurPageParam("brandName=rus", array("brandName"));?>" class="b-alphabet-error__letter<?= ($_REQUEST["brandName"] == "rus") ? " b-alphabet-error__letter--active" : "" ?>">А - Я</a>
			</li>
		</ul>
	</div>
<? endif; ?>