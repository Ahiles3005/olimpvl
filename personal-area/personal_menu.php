<?
global $USER;
if (!$USER->IsAuthorized())

{

LocalRedirect('/');
}

?>



<h1 class="title personal-area__title">Личный кабинет <a style="font-size:60%; display:inline-block; text-decoration:none; vertical-align: top; padding-top: 9px;" href="/?logout=yes">(выход)</a></h1>
	<ul class="personal-area__menu">
		<li class="personal-area__item"><a href="/personal-area/" class="personal-area__item-text <? if($APPLICATION->GetCurPage()==='/personal-area/') { ?> personal-area__item-text_selected<? } ?>">Профиль</a>
		</li>
            <li class="personal-area__item"><a href="/personal-area/list-order.php" class='personal-area__item-text'>История
				заказов</a></li>
		<li class="personal-area__item"><a href="/personal-area/favorite.php" class="personal-area__item-text <? if($APPLICATION->GetCurPage()==='/personal-area/favorite.php') { ?> personal-area__item-text_selected<? } ?>">Избранное</a>
		</li>
			<li class="personal-area__item"><a href="/compare/" class="personal-area__item-text <? if($APPLICATION->GetCurPage()==='/compare/') { ?> personal-area__item-text_selected<? } ?>">Сравнение</a></li>
		<!--<li class="personal-area__item"><a href="bonus.php"
										   class="personal-area__item-text">Бонусы</a>
		</li>-->
		
		<!--<li><?echo $APPLICATION->GetCurPage();?></li>-->
	</ul>
 
