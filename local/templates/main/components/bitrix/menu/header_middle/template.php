<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>
<? if (!empty($arResult)): ?>

    <div class="b-header__nav">
        <div class="b-container">
            <nav class="b-navbar">
                <ul class="b-navbar__list">

                    <? foreach ($arResult as $arItem): ?>
                        <? if ($arItem['PARAMS']['UF_NOT_MENU'] != 1): ?>
                            <li class="b-navbar__item">
                                <div class="b-navbar__horisontal-align">
                                    <div class="b-navbar__vertical-align">
                                        <a href="<?=$arItem['LINK']?>" class="b-navbar__link" title="<?=$arItem['TEXT']?>"><?=$arItem['TEXT']?></a>
                                    </div>
                                </div>
                                <? if (!empty($arItem['SECTIONS'])): ?>
                                    <div class="b-navbar__dropdown">
                                        <div class="b-container">
                                            <div class="b-navbar__columner">
                                                <? foreach ($arItem['SECTIONS'] as $arSection2): ?>
                                                    <? if ($arSection2['PARAMS']['UF_NOT_MENU'] != 1): ?>

												<div class="middle_div">
													   <div>
														<?php
														$cur_url = explode("/", $arSection2['LINK']);
														$db_list = CIBlockSection::GetList(array('sort'=>'asc'), array('IBLOCK_ID'=>1, 'ACTIVE'=>'Y', 'CODE'=>$cur_url[3]), false, array('ID'))->GetNext();
														$id_iblock = 1;
														$id_section = $db_list['ID'];
														$sql_section = CIBlockSection::GetList(Array(), Array('IBLOCK_ID'=>$id_iblock, 'ACTIVE'=>'Y', 'ID'=>$id_section));
														if($result_section = $sql_section->GetNext())
														{
															echo '<img src="'.CFile::GetPath($result_section['DETAIL_PICTURE']).'" alt="'.$result_section['NAME'].'" style="width: 128px;" />';
														}
														?>
														</div>
                                                       <div>
                                                           <ul class="b-nav-column__list">
                                                            <li class="b-nav-column__item">
                                                                <a href="<?=$arSection2['LINK']?>" class="b-nav-column__link"><?=$arSection2['TEXT']?></a>
                                                            </li>
                                                            <? foreach ($arSection2['SECTIONS_SHOW'] as $arSection3): ?>
                                                                <li class="b-nav-column__item">
                                                                    <a href="<?=$arSection3['LINK']?>" class="b-nav-column__link"><?=$arSection3['TEXT']?></a>
                                                                </li>
                                                            <? endforeach; ?>
                                                            <? if (!empty($arSection2['SECTIONS_HIDE']) && !empty($arSection2['SECTIONS_SHOW'])): ?>
                                                                <? foreach ($arSection2['SECTIONS_HIDE'] as $arSection3): ?>
                                                                    <li class="b-nav-column__item b-nav-column__item--hidden">
                                                                        <a href="<?=$arSection3['LINK']?>" class="b-nav-column__link"><?=$arSection3['TEXT']?></a>
                                                                    </li>
                                                                <? endforeach; ?>
                                                                <li class="b-nav-column__item b-nav-column__item--see-link">
                                                                    <a href="#" class="b-nav-column__link js-nav__see-link">Показать все</a>
                                                                </li>
                                                            <? endif; ?>
                                                         </ul>
                                                       </div>
                                                    </div>
                                                    <? endif; ?>
                                                <? endforeach; ?>
                                                <a href="<?=$arItem['LINK']?>" class="b-nav-column__all-product">Все товары</a>
                                            </div>
                                        </div>
                                    </div>
                                <? endif; ?>
                            </li>
                        <? endif; ?>
                    <? endforeach; ?>
                </ul>
            </nav>
        </div>
    </div>
<? endif ?>