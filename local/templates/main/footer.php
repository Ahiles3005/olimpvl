<? if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die(); ?>    <? if ($APPLICATION->GetProperty("container") !== "false"): ?>
            <?if(!ERROR_404):?>
            <div class="b-subscribe-index">
                <div class="b-subscribe-index__formcnt">
                     <div class="b-subscribe-index__formcaption">
                        <a href="" class="b-subscribe-index__link">Подпишитесь</a> на наши новости и получите <span class="b-subscribe-index__redtext">300 бонусов</span>
                    </div>
                    <form class="b-subscribe-index__form" role="form">
                        <input type="email" class="b-subscribe-index__input" id="exampleInputEmail2" placeholder="Ваш email">
                        <button type="button" data-toggle="modal" href="#popup-substribe" class="b-subscribe-index__button js_substribe">Подписаться</button>
                    </form>
                </div>
                <div class="b-subscribe-index__text">
                    <?
                        $APPLICATION->IncludeComponent("bitrix:main.include", ".default", array(
                            "COMPONENT_TEMPLATE"     => ".default",
                            "AREA_FILE_SHOW"         => "file",
                            "AREA_FILE_SUFFIX"       => "inc",
                            "EDIT_TEMPLATE"          => "",
                            "PATH"                   => "/include/index.include.text.below.php"
                            )
                        );
                    ?>
                </div>
            </div>
            <?endif?>
            </div>
        </div>
        <div class="modal fade" id="popup-substribe">
            <div class="modal-dialog b-popup-pass-recovery b-popup">
                <div class="modal-content b-popup__modal-content">
                    <div class="modal-header b-popup__modal-header">
                        <a aria-hidden="true" data-dismiss="modal" class="close b-popup__close">×</a>
                        <div class="b-popup__header-text b-popup__header-text--feedback">Подписка на рассылку</div>
                    </div>
                    <div class="modal-body b-popup__modal-body">
                        <div class="b-popup-feedback__form">
                            <form action="handler.php" method="post" class="b-form">
                                <div class="popup-substribe-text"></div>
                                <input type="button" data-dismiss="modal" value="Ок" class="b-popup-feedback__input-popup--feedback btn b-btn__default b-popup__close">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer class="b-footer">
            <div class="b-footer__menu">
                <div class="b-container ">
                    <div class="b-footer__nav-col">
                        <?
                            $APPLICATION->IncludeComponent("bitrix:menu", "footer", array(
                                "ROOT_MENU_TYPE"        => "footer_about",
                                "MAX_LEVEL"             => "1",
                                "CHILD_MENU_TYPE"       => "",
                                "USE_EXT"               => "N",
                                "MENU_CACHE_TYPE"       => "A",
                                "MENU_CACHE_TIME"       => "3600",
                                "MENU_CACHE_USE_GROUPS" => "Y",
                                "MENU_CACHE_GET_VARS"   => array()
                            ));
                        ?>
                        <div class="b-footer-contact">
                            <? if (!empty($cityInfo['PHONE'])): ?>
                                <p class="b-footer-contact__phone"><a class="zphone" href="tel:<?=$cityInfo['PHONE']?>"><?=$cityInfo['PHONE']?></a></p>
                            <? endif; ?>
                            <? if (!empty($cityInfo['EMAIL'])): ?>
                                <p class="b-footer-contact__mail"><a href="mailto:<?=$cityInfo['EMAIL']?>"><?=$cityInfo['EMAIL']?></a></p>
                            <? endif; ?>
                            <p class="b-footer-contact__feedback">
								<p class="b-footer-contact__feedback"><a href="#popup-feedback" data-popup="open" title="Обратная связь">Обратная связь</a></p>
							</p>
                        </div>
                    </div>
                    <div class="b-footer__nav-col">
                        <?
                            $APPLICATION->IncludeComponent("bitrix:menu", "footer", array(
                                "ROOT_MENU_TYPE"        => "footer_catalog",
                                "MAX_LEVEL"             => "1",
                                "CHILD_MENU_TYPE"       => "",
                                "USE_EXT"               => "Y",
                                "MENU_CACHE_TYPE"       => "A",
                                "MENU_CACHE_TIME"       => "3600",
                                "MENU_CACHE_USE_GROUPS" => "Y",
                                "MENU_CACHE_GET_VARS"   => array()
                            ));
                        ?>
                    </div>
                    <div class="b-footer__nav-col" > <?//2 спринт?>
                        <?
                            $APPLICATION->IncludeComponent("bitrix:menu", "footer", array(
                                "ROOT_MENU_TYPE"        => "footer_customers",
                                "MAX_LEVEL"             => "1",
                                "CHILD_MENU_TYPE"       => "",
                                "USE_EXT"               => "N",
                                "MENU_CACHE_TYPE"       => "A",
                                "MENU_CACHE_TIME"       => "3600",
                                "MENU_CACHE_USE_GROUPS" => "Y",
                                "MENU_CACHE_GET_VARS"   => array()
                            ));
                        ?>
                        <div class="b-footer-bonus">
							<a href="/gift-cards/" class="b-footer-bonus__card--bonus" title="Подарочные карты">Подарочные<br />карты</a>
							<a href="/loyalty-program/" class="b-footer-bonus__card--gift" title="Программа лояльности">Программа<br />Лояльности</a>
                        </div>
                    </div>
                    <div class="b-footer__nav-col" <?//2 спринт?>
                        <h5 class="b-footer__nav--name">Присоединяйтесь</h5>
                        <div class="b-subscribe" >
							<a name = "subscribe"></a>
                            <form action="/">
                                <div class="b-subscribe__form-group">
                                    <input type="email" class="form-control b-form__input b-subscribe__input js-validation-change js_footer_substr" placeholder="Ваш e-mail" data-rules="email;req;" />
                                    <div class="input-group-btn">

                                        <input type="submit" onclick="$(this).next('button').click();return false;" class="b-subscribe__button js-validation-change js_substribe" value="" />

										<button type="button" data-toggle="modal" href="#popup-substribe" style="display: none;"></button>
                                    </div>
                                </div>
                            </form>
                            <p>Подпишитесь на наши обновления<br />и получите <span>300 бонусов!</span>
<br>

<svg display="none">
	<symbol id="icon_facebook" viewBox="0 0 320 512">
		<path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
	</symbol>
	<symbol id="icon_instagram" viewBox="0 0 448 512">
		<path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
	</symbol>
	<symbol id="icon_pinterest" viewBox="0 0 384 512">
		<path fill="currentColor" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/>
	</symbol>
	<symbol id="icon_telegram" viewBox="0 0 448 512">
		<path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"/>
	</symbol>
	<symbol id="icon_twitter" viewBox="0 0 512 512">
		<path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
	</symbol>
	<symbol id="icon_viber" viewBox="0 0 512 512">
		<path fill="currentColor" d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"/>
	</symbol>
	<symbol id="icon_vk" viewBox="0 0 576 512">
		<path fill="currentColor" d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"/>
	</symbol>
	<symbol id="icon_whatsapp" viewBox="0 0 448 512">
		<path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
	</symbol>
	<symbol id="icon_youtube" viewBox="0 0 576 512">
		<path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
	</symbol>
</svg>
<div class="social facebook">
	<a href="https://www.facebook.com/olimpvl/" rel="nofollow" target="_blank" title="Facebook">
		<svg>
			<use xlink:href="#icon_facebook"></use>
		</svg>
	</a>
</div>
<div class="social instagram">
	<a href="http://instagram.com/olimpsport/" rel="nofollow" target="_blank" title="Instagram">
		<svg>
			<use xlink:href="#icon_instagram"></use>
		</svg>
	</a>
</div>
<div class="social pinterest">
	<a href="https://www.pinterest.ru/olimpvl_ru/_saved/" rel="nofollow" target="_blank" title="Pinterest">
		<svg>
			<use xlink:href="#icon_pinterest"></use>
		</svg>
	</a>
</div>
<div class="social telegram">
	<a href="https://tgmssg.ru/Olimpvl.ru" rel="nofollow" target="_blank" title="Telegram">
		<svg>
			<use xlink:href="#icon_telegram"></use>
		</svg>
	</a>
</div>
<div class="social twitter">
	<a href="https://twitter.com/olimpvl" rel="nofollow" target="_blank" title="Twitter">
		<svg>
			<use xlink:href="#icon_twitter"></use>
		</svg>
	</a>
</div>
<div class="social viber">
	<a href="https://viber.click/79841902951" rel="nofollow" target="_blank" title="Viber">
		<svg>
			<use xlink:href="#icon_viber"></use>
		</svg>
	</a>
</div>
<div class="social vk">
	<a href="https://vk.com/olimpvl" rel="nofollow" target="_blank" title="Vk">
		<svg>
			<use xlink:href="#icon_vk"></use>
		</svg>
	</a>
</div>
<div class="social whatsapp">
	<a href="https://wa.me/79841902951" rel="nofollow" target="_blank" title="Whatsapp">
		<svg>
			<use xlink:href="#icon_whatsapp"></use>
		</svg>
	</a>
</div>
<div class="social youtube1">
	<a href="https://www.youtube.com/channel/UCcd-XvWl6Zfsr1vyIkiEugw" rel="nofollow" target="_blank" title="Youtube">
		<svg>
			<use xlink:href="#icon_youtube"></use>
		</svg>
	</a>
</div>

<br>
</p>
<a href="https://clck.yandex.ru/redir/dtype=stred/pid=47/cid=73582/path=dynamic.88x31/*https://market.yandex.ru/shop--olimp-set-sportivnykh-magazinov/299624/reviews" rel="nofollow" target="_blank" title="Рейтинг Яндекс Маркет"> <img src="https://clck.yandex.ru/redir/dtype=stred/pid=47/cid=73581/path=dynamic.88x31/*https://grade.market.yandex.ru/?id=299624&action=image&size=0" border="0" alt="Читайте отзывы покупателей и оценивайте качество магазина Олимп - сеть спортивных магазинов на Яндекс.Маркете" /> </a>                       </div>

                        <div class="b-footer-pay" style="display:none;">
                            <ul class="b-footer-pay__list">
                                <li class="b-footer-pay__item">
                                    <a href="#" rel="nofollow" class="b-footer-pay__cash" title=""></a>
                                </li>
                                <li class="b-footer-pay__item">
                                    <a href="#" rel="nofollow" class="b-footer-pay__visa" title=""></a>
                                </li>
                                <li class="b-footer-pay__item">
                                    <a href="#" rel="nofollow" class="b-footer-pay__mc" title=""></a>
                                </li>
                                <li class="b-footer-pay__item">
                                    <a href="#" rel="nofollow" class="b-footer-pay__yad" title=""></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="b-footer__menu-mobile">
                <div class="b-aside__block b-footer-filter">
                    <?
                        $APPLICATION->IncludeComponent("bitrix:menu", "footer_mobile", array(
                            "ROOT_MENU_TYPE"        => "footer_about",
                            "MAX_LEVEL"             => "1",
                            "CHILD_MENU_TYPE"       => "",
                            "USE_EXT"               => "N",
                            "MENU_CACHE_TYPE"       => "A",
                            "MENU_CACHE_TIME"       => "3600",
                            "MENU_CACHE_USE_GROUPS" => "Y",
                            "MENU_CACHE_GET_VARS"   => array()
                        ));

                        $APPLICATION->IncludeComponent("bitrix:menu", "footer_mobile", array(
                            "ROOT_MENU_TYPE"        => "footer_catalog",
                            "MAX_LEVEL"             => "1",
                            "CHILD_MENU_TYPE"       => "",
                            "USE_EXT"               => "Y",
                            "MENU_CACHE_TYPE"       => "A",
                            "MENU_CACHE_TIME"       => "3600",
                            "MENU_CACHE_USE_GROUPS" => "Y",
                            "MENU_CACHE_GET_VARS"   => array()
                        ));

                        $APPLICATION->IncludeComponent("bitrix:menu", "footer_mobile", array(
                            "ROOT_MENU_TYPE"        => "footer_customers",
                            "MAX_LEVEL"             => "1",
                            "CHILD_MENU_TYPE"       => "",
                            "USE_EXT"               => "Y",
                            "MENU_CACHE_TYPE"       => "A",
                            "MENU_CACHE_TIME"       => "3600",
                            "MENU_CACHE_USE_GROUPS" => "Y",
                            "MENU_CACHE_GET_VARS"   => array()
                        ));

                    ?>
                </div>

                <div class="b-container"> <?//2 спринт?>
                    <div class="b-footer__row">
                        <div class="b-footer-contact">
                            <? if (!empty($cityInfo['PHONE'])): ?>
                                <p class="b-footer-contact__phone"><a href="tel:<?=$cityInfo['PHONE']?>"><?=$cityInfo['PHONE']?></a></p>
                            <? endif; ?>
                            <? if (!empty($cityInfo['EMAIL'])): ?>
                                <p class="b-footer-contact__mail"><a href="mailto:<?=$cityInfo['EMAIL']?>"><?=$cityInfo['EMAIL']?></a></p>
                            <? endif; ?>
                            <p class="b-footer-contact__feedback">
                                <p class="b-footer-contact__feedback"><a href="#popup-feedback" data-popup="open" title="Обратная связь">Обратная связь</a></p>
                            </p>
                        </div>
                        <div class="b-footer-bonus">
                            <a href="#" class="b-footer-bonus__card--bonus" title="Подарочные карты">Подарочные<br />карты</a>
                            <a href="/loyalty-program/" class="b-footer-bonus__card--gift" title="Программа лояльности">Программа<br />лояльности</a>
                        </div>
                    </div>

                    <h5 class="fw_bold">ПРИСОЕДИНЯЙТЕСЬ</h5>
                    <div class="b-subscribe">
                    <form action="/">
                                <div class="b-subscribe__form-group">
                                    <input type="email" class="form-control b-form__input b-subscribe__input js-validation-change js_footer_substr" placeholder="Ваш e-mail" data-rules="email;req;" />
                                    <div class="input-group-btn">

                                        <input type="submit" onclick="$(this).next('button').click();return false;" class="b-subscribe__button js-validation-change js_substribe" value="" />

										<button type="button" data-toggle="modal" href="#popup-substribe" style="display: none;"></button>
                                    </div>
                                </div>
                            </form>
                            </div>

<svg display="none">
	<symbol id="icon_facebook" viewBox="0 0 320 512">
		<path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
	</symbol>
	<symbol id="icon_instagram" viewBox="0 0 448 512">
		<path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
	</symbol>
	<symbol id="icon_pinterest" viewBox="0 0 384 512">
		<path fill="currentColor" d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"/>
	</symbol>
	<symbol id="icon_telegram" viewBox="0 0 448 512">
		<path fill="currentColor" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"/>
	</symbol>
	<symbol id="icon_twitter" viewBox="0 0 512 512">
		<path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
	</symbol>
	<symbol id="icon_viber" viewBox="0 0 512 512">
		<path fill="currentColor" d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"/>
	</symbol>
	<symbol id="icon_vk" viewBox="0 0 576 512">
		<path fill="currentColor" d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"/>
	</symbol>
	<symbol id="icon_whatsapp" viewBox="0 0 448 512">
		<path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
	</symbol>
	<symbol id="icon_youtube" viewBox="0 0 576 512">
		<path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
	</symbol>
</svg>
<div class="social facebook">
	<a href="https://www.facebook.com/olimpvl/" rel="nofollow" target="_blank" title="Facebook">
		<svg>
			<use xlink:href="#icon_facebook"></use>
		</svg>
	</a>
</div>
<div class="social instagram">
	<a href="http://instagram.com/olimpsport/" rel="nofollow" target="_blank" title="Instagram">
		<svg>
			<use xlink:href="#icon_instagram"></use>
		</svg>
	</a>
</div>
<div class="social pinterest">
	<a href="https://www.pinterest.ru/olimpvl_ru/_saved/" rel="nofollow" target="_blank" title="Pinterest">
		<svg>
			<use xlink:href="#icon_pinterest"></use>
		</svg>
	</a>
</div>
<div class="social telegram">
	<a href="https://tgmssg.ru/Olimpvl.ru" rel="nofollow" target="_blank" title="Telegram">
		<svg>
			<use xlink:href="#icon_telegram"></use>
		</svg>
	</a>
</div>
<div class="social twitter">
	<a href="https://twitter.com/olimpvl" rel="nofollow" target="_blank" title="Twitter">
		<svg>
			<use xlink:href="#icon_twitter"></use>
		</svg>
	</a>
</div>
<div class="social viber">
	<a href="https://viber.click/79841902951" rel="nofollow" target="_blank" title="Viber">
		<svg>
			<use xlink:href="#icon_viber"></use>
		</svg>
	</a>
</div>
<div class="social vk">
	<a href="https://vk.com/olimpvl" rel="nofollow" target="_blank" title="Vk">
		<svg>
			<use xlink:href="#icon_vk"></use>
		</svg>
	</a>
</div>
<div class="social whatsapp">
	<a href="https://wa.me/79841902951" rel="nofollow" target="_blank" title="Whatsapp">
		<svg>
			<use xlink:href="#icon_whatsapp"></use>
		</svg>
	</a>
</div>
<div class="social youtube1">
	<a href="https://www.youtube.com/channel/UCcd-XvWl6Zfsr1vyIkiEugw" rel="nofollow" target="_blank" title="Youtube">
		<svg>
			<use xlink:href="#icon_youtube"></use>
		</svg>
	</a>
</div>

                    <!--<div class="b-social">
                        <ul class="b-social__list clearfix">
                            <li class="b-social__item"><a href="http://facebook.com/olimpvl/" rel="nofollow" class="b-social__link b-social__link--facebook"></a></li>
                            <li class="b-social__item"><a href="https://www.youtube.com/channel/UCcd-XvWl6Zfsr1vyIkiEugw" rel="nofollow" class="b-social__link b-social__link--youtube"></a></li>
                            <li class="b-social__item"><a href="http://instagram.com/olimpsport/" rel="nofollow" class="b-social__link b-social__link--insagram"></a></li>
                            <li class="b-social__item"><a href="https://vk.com/olimpvl" rel="nofollow" target="_blank"><img src="/upload/medialibrary/social_buttons/vk.png" height="25" width="28"></a></li>
                            <li class="b-social__item"><a href=" https://wa.me/79841902951" rel="nofollow" target="_blank"><img src="/upload/medialibrary/social_buttons/whatsapp.png" height="25" width="28"></a></li>
                            <li class="b-social__item"><a href="https://viber.click/79841902951" rel="nofollow" target="_blank"><img src="/upload/medialibrary/social_buttons/viber.png" height="25" width="28"></a></li>
                        </ul>
                    </div>-->
                </div>
            </div>
            <div class="b-footer-mobile__pay" style = "display:none;"><?//2 спринт?>
                <ul class="b-footer-mobile__pay--list">
                    <li class="b-footer-mobile__pay--item">
                        <a href="#" rel="nofollow" class="b-footer-mobile__pay--link b-footer-pay__cash" title="Наличные"></a>
                    </li>
                    <li class="b-footer-mobile__pay--item">
                        <a href="#" rel="nofollow" class="b-footer-mobile__pay--link b-footer-pay__visa" title="Visa"></a>
                    </li>
                    <li class="b-footer-mobile__pay--item">
                        <a href="#" rel="nofollow" class="b-footer-mobile__pay--link b-footer-pay__mc" title="MasterCard"></a>
                    </li>
                    <li class="b-footer-mobile__pay--item">
                        <a href="#" rel="nofollow" class="b-footer-mobile__pay--link b-footer-pay__yad" title="Яндекс Деньги"></a>
                    </li>
                </ul>
            </div>
            <div class="b-footer__copyright">
                <div class="container b-container">
                    <div class="b-footer__copyright-text">
                    <p>© 2021.  Группа компаний «Олимп».  Все права защищены.</p>
                    <p> Обращаем ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями Статьи 437 (2) Гражданского кодекса Российской Федерации. Для получения подробной информации о наличии и стоимости указанных товаров и (или) услуг, пожалуйста, обращайтесь к менеджеру сайта с помощью специальной формы связи или по телефону!</p>
						<p class="developed-by" style="margin-top:5px">Разработка сайта – <a href="https://vladweb.ru" rel="nofollow" target="_blank">Vladweb</a></p>
                    </div>
                    <div class="b-footer__copyright-design-studio">

                        </p>
                    </div>
                </div>
            </div>

            </footer>
          <div id="popup-cart"  style="display:none" >
         <div class="b-popup b-popup-cart">
             <div class="b-popup__modal-content">
                 <div class="b-popup__modal-header">
                     <a class="close b-popup__close" data-popup="close">×</a>
                     <div class="b-popup__header-text">Оформление заказа</div>
                     <div class="message_from_cart"><div>
                 </div>
                 <div class="b-popup__modal-body">
                     <div class="b-popup-cart__form b-popup__main-block">
                         <form class="b-popup-cart form-cart" name="SIMPLE_FORM_3" method="get" action="/cart/" enctype="multipart/form-data"><?=bitrix_sessid_post()?><input type="hidden" name="WEB_FORM_ID" value="3" />
                             <h3>Товар успешно добавлен в корзину!</h3>
                             <input type="hidden" name="web_form_apply" value="Y" />
                             <input type="button" data-popup="close" name="web_form_submit" class="btn b-btn__default--continue" value="Продолжить покупки">  <input type="submit" name="web_form_submit" class="btn b-btn__default b-btn__default--continue" value="В корзину">
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     </div>
         </div>
</div>
          <a href="#popup-cart" id="mgc-cart-open" data-popup="open" ></a>
            <div id="popup-feedback" style="display:none">
                <div class="b-popup b-popup-feedback">
                    <div class="b-popup__modal-content">
                        <div class="b-popup__modal-header">
                            <a class="close b-popup__close" data-popup="close">×</a>
                            <div class="b-popup__header-text">Написать нам</div>
                            <div class="message_from_feedback"><div>
                        </div>
                        <div class="b-popup__modal-body">
                            <div class="b-popup-feedback__form b-popup__main-block">
                                <form class="b-popup-feedback form-feedback" name="SIMPLE_FORM_3" method="post" action="/ajax/feedback.php" enctype="multipart/form-data"><?=bitrix_sessid_post()?><input type="hidden" name="WEB_FORM_ID" value="3" />
                                    <div class="form-group b-popup-feedback__form-group">
                                        <label class="b-form__label" for="name-contact">Имя*</label>
                                        <input type="text" name="form_text_11" id="name-contact" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req">
                                    </div>
                                    <div class="form-group b-popup-feedback__form-group">
                                        <label class="b-form__label" for="email-contact">Эл. почта*</label>
                                        <input type="email" name="form_email_12" id="email-contact" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req;email">
                                    </div>
                                    <div class="form-group b-popup-feedback__form-group">
                                        <label class="b-form__label" for="tel-contact">Телефон*</label>
                                        <input type="tel" name="form_text_13" id="tel-contact" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req;phone" placeholder="+7 (___) ___-__-__">
                                    </div>
                                    <label><input type="hidden"  id="18" name="form_radio_SIMPLE_QUESTION_736" id="form_radio_SIMPLE_QUESTION_736" value="18"></label>
                                    <div class="form-group b-popup-feedback__form-group">
                                        <label class="b-form__label" for="text-contact">Сообщение*</label>
                                        <textarea id="text-contact" name="form_textarea_15" class="b-form__input b-popup-feedback__input b-popup-feedback__textarea js-validation-change" rows="3" data-rules="req"></textarea>
                                    </div>
                                    <input type="hidden" name="web_form_apply" value="Y" />
                                    <input type="submit" name="web_form_submit" class="b-popup-feedback__input-popup--feedback btn b-btn__default" value="Отправить">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>




            </div>


    <? endif; ?>

    <?if(!$USER->IsAuthorized()):?>
        <?$APPLICATION->IncludeComponent("bitrix:system.auth.authorize", "", Array(
                "PROFILE_URL" => "/lk",
                "SHOW_ERRORS" => "Y"
            ),
            false
        );?>
    <?endif?>


<div id="popup-sign-up" style="display:none;">

<div class="b-popup-sign-up b-popup">
		<div class="b-popup-sign-up__modal-content">
			<div class="b-popup__modal-header">
				<a class="close b-popup__close" data-popup="close">×</a>
				<div class="b-popup__header-text">Регистрация</div>
			</div>
			<div class="b-popup__modal-body">
				<div class="b-popup-feedback__form b-popup-sign-up__form">



    <?/*if(!$USER->IsAuthorized()):*/?>
        <?$APPLICATION->IncludeComponent(
            "bitrix:main.register",
            "",
            Array(
                "AUTH" => "Y",
                "REQUIRED_FIELDS" => array("EMAIL", "NAME", "LAST_NAME"),
                "SET_TITLE" => "N",
                "SHOW_FIELDS" => array("EMAIL", "NAME", "LAST_NAME", "PERSONAL_GENDER", "PERSONAL_BIRTHDAY", "PERSONAL_PHONE", "PERSONAL_MOBILE"),
                "SUCCESS_PAGE" => "/",
                "USER_PROPERTY" => array(),
                "USER_PROPERTY_NAME" => "",
                "USE_BACKURL" => "Y",
                "USER_PROPERTY" => Array("UF_SUBSCRIBE")
            )
        );?>


        				</div>
			</div>
		</div>
	</div>


    <?/*endif*/?>







    </div>








            <!-- Модальное окно "Написать нам" -->
            <div id="popup-label-info" style="display:none">
                <div class="b-popup b-popup-label-info">
                    <div class="b-popup__modal-content">
                        <div class="b-popup__modal-header">
                            <a class="close b-popup__close" data-popup="close">×</a>
                            <div class="b-popup-label-info__header-text b-popup__header-text">Информация</div>
                            <div class="message_from_feedback"><div>
                        </div>
                        <div class="b-popup__modal-body">
                            <div class="b-popup-label-info__form b-popup__main-block">




                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>




            </div>













 <div id="popup-low_price" style="display:none">
                <div class="b-popup b-popup-feedback">
                    <div class="b-popup__modal-content">
                        <div class="b-popup__modal-header">
                            <a class="close b-popup__close" aria-hidden="true" data-dismiss="modal" data-popup="close">×</a>

                            <div class="b-popup__header-text">Сообщить о снижении цены</div>
                            <div class="message_from_feedback"><div>
                        </div>
                        <div class="b-popup__modal-body">
                            <div class="b-popup-feedback__form b-popup__main-block">
                                <form class="b-popup-feedback form-feedback" name="SIMPLE_FORM_a3" method="post" action="" enctype="multipart/form-data">

                                <?=bitrix_sessid_post()?>



                                   <input type="hidden" name="SEND_OK" value="3" />


                                    <div class="form-group b-popup-feedback__form-group">
                                        <label class="b-form__label" for="email-contact1">Эл. почта*</label>
                                        <input type="email" name="form_email_25" id="form_email_25" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req;email">
                                         <input type="hidden" name="form_text_26" id="form_text_26" class="b-form__input b-popup-feedback__input js-validation-change">
                                           <input type="hidden" name="form_text_27" id="form_text_27" class="b-form__input b-popup-feedback__input js-validation-change" >
                                        <input type="hidden" name="form_text_28" id="form_text_28" class="b-form__input b-popup-feedback__input js-validation-change" >


                                    </div>

                                    <label><input type="hidden"  id="18" name="" id="" value="18"></label>




                                    <input type="hidden" name="web_form_apply" value="Y" />
                                    <input type="button" name="js_fn_submit_low_price" class="js_fn_submit_low_price b-popup-feedback__input-popup--feedback btn b-btn__default" value="Отправить">




                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>






            </div>






  <div id="popup-found_cheaper" style="display:none">
                <div class="b-popup b-popup-feedback">
                    <div class="b-popup__modal-content">
                        <div class="b-popup__modal-header">
                            <a class="close b-popup__close" data-popup="close">×</a>
                            <div class="b-popup__header-text">Нашли дешевле? Снизим цену!</div>
                            <div class="message_from_feedback">Делая покупки в нашем магазине, вы можете быть уверены, что не переплачиваете за аналогичный товар. Мы готовы снизить нашу цену, если вы нашли такой же товар по более низкой цене<div>
                        </div>
                        <div class="b-popup__modal-body">
                            <div class="b-popup-feedback__form b-popup__main-block">
                                <form class="b-popup-feedback form-feedback" name="SIMPLE_FORM_b3" method="post" action="" enctype="multipart/form-data"><?=bitrix_sessid_post()?>
                                    <div class="form-group b-popup-feedback__form-group">
                                        <label class="b-form__label" for="form_text_30">Имя*</label>
                                        <input type="text" name="form_text_30" id="form_text_30" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req">
                                    </div>
                                    <div class="form-group b-popup-feedback__form-group">
                                        <label class="b-form__label" for="form_email_29">Эл. почта*</label>
                                        <input type="email" name="form_email_29" id="form_email_29" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req;email">
                                    </div>
                                    <div class="form-group b-popup-feedback__form-group">
                                        <label class="b-form__label" for="form_text_31">Телефон*</label>
                                        <input type="tel" name="form_text_31" id="form_text_31" class="b-form__input b-popup-feedback__input js-validation-change" data-rules="req;phone" placeholder="+7 (___) ___-__-__">
                                    </div>
                                    <label><input type="hidden"  id="18" name="" id="" value="18"></label>
                                    <div class="form-group b-popup-feedback__form-group">
                                        <label class="b-form__label" for="form_url_32">Ссылка на товар из другого магазина</label>
                                        <input id="text-contact" id="form_url_32"  name="form_url_32" class="b-form__input b-popup-feedback__input js-validation-change" rows="3" data-rules="req">
                                    </div>
                                    <input type="hidden" name="web_form_apply" value="Y" />
                                    <input type="button" id="fn_found_cheaper_btn" name="web_form_submit" class="b-popup-feedback__input-popup--feedback btn b-btn__default" value="Отправить">
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>


            </div>






 <script>
 $(document).ready(function(){




 $(".mgc-label-click").click(function(el){
 var id = $(this).data("id");
 $(".b-popup-label-info__header-text").html($("#mgc-label-name-id"+id).html());
 $(".b-popup-label-info__form").html($("#mgc-label-info-id"+id).html());

 });

    $('#modal-register').on('submit',function(){

        var form_action = $(this).attr('action');
        var form_backurl = $(this).find('input[name="backurl"]').val();

        $.ajax({
            type: "POST",
            url: '/ajax/auth.php?TYPE=REGISTRATION',
            data: $(this).serialize(),
          //  timeout: 3000,
            error: function(request,error) {
                if (error === "timeout") {
                    alert('timeout');
                }
                else {
                    alert('Error! Please try again!');
                }
            },
            success: function(data) {

          data = data.trim();

          console.log(data,"DATA");

            if(data==='ok'){
              location.href=location.href;
             $('.mgc-error-body').html('<div class="b-popup__modal-header"><div class="b-popup__header-text">Вы успешно зарегистрированы!</div></div><script> location.href=location.href</stript>');
            }else{

              $('.mgc-error-body').html(data);
            }
//                 $('#popup-sign-up').html(data);
//                 $('#modal-register').attr('action',form_action);
//                 $('#modal-register input[name=backurl]').val(form_backurl);
//                 $('#modal-register a[href*="login"]').attr('href','#modal-login').attr('data-uk-modal','');
            }
        });

        return false;
    });



 $(".mgc-sel-city").click(function(e){
//  e.preventDefault();
//  e.stopPropagation()
//
//  var val = $(this).data('val');;
//  val = val.split(";")[0];
//  var text = $(this).text();
//  $("#mgc-cur-city").text(text);
//   console.log(val,"XXXXXXXXXXXX");
//  $.cookie("KEY_CITY",val,{expires:365,path:"/"});
//  window.location.href= window.location.href;
//
  });
 });
 </script>


<script>
$(document).ready(function(){

jQuery.fx.interval = 50;
/*
function productImgWidth(){
var w = $(".item.active").find("img").width();
return w;
}
$(window).on('load resize',productImgWidth);
*/
$(".b-btn__default--product").on("click",function(){
        $(".item.active").find("img")
            .clone()
			.addClass('product-img-clone')
            .css({'position' : 'absolute', 'z-index' : '8000', 'width' : $(".item.active").find("img").width(), 'top' : $(".item.active").find("img").offset().top, 'left' : $(".item.active").find("img").offset().left })
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $("#cart_informer").offset().left,
                top: $("#cart_informer").offset().top,
                width: 20}, 1000);

function productImgCloneRemove() {
  $('.product-img-clone').remove();
}
setTimeout(productImgCloneRemove, 1500);
});

});
</script>



<script>
$(document).ready(function(){

$(".mgc-add-compare").on("click",function(){
if (!$(this).hasClass('in-compare')) {

	if (!$('.mgc-add-compare').hasClass('b-product__item--list')) {
        $(".item.active").find("img")
            .clone()
			.addClass('product-img-clone')
            .css({'position' : 'absolute', 'z-index' : '8000', 'width' : $(".item.active").find("img").width(), 'top' : $(".item.active").find("img").offset().top, 'left' : $(".item.active").find("img").offset().left })
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $("#comparison").offset().left,
                top: $("#comparison").offset().top,
                width: 20}, 1000);
	}

	else {
	   if (!$('.mgc-add-compare').hasClass('b-product__item--inline')) {
		var parentWrapper = $(this).closest('.b-product__item');
        parentWrapper.find(".b-product__item--image")
            .clone()
			.addClass('product-img-clone')
            .css({'position' : 'absolute', 'z-index' : '8000', 'width' : parentWrapper.find(".b-product__item--image").width(), 'top' : parentWrapper.find(".b-product__item--image").offset().top, 'left' : parentWrapper.find(".b-product__item--image").offset().left })
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $("#comparison").offset().left,
                top: $("#comparison").offset().top,
                width: 20}, 1000);
	   }
	   else
	   {
		if (!$('.mgc-add-compare').hasClass('b-product__item--inline-nopic')) {
		var parentWrapper = $(this).closest('.b-catalog-photo__item');
        parentWrapper.find(".b-catalog-photo__item--photo")
            .clone()
			.addClass('product-img-clone')
            .css({'position' : 'absolute', 'z-index' : '8000', 'width' : parentWrapper.find(".b-catalog-photo__item--photo").width(), 'top' : parentWrapper.find(".b-catalog-photo__item--photo").offset().top, 'left' : parentWrapper.find(".b-catalog-photo__item--photo").offset().left })
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $("#comparison").offset().left,
                top: $("#comparison").offset().top,
                width: 20}, 1000);
		}
		else
		{
		var parentWrapper = $(this).closest('.b-catalog-photo__item');
        parentWrapper.find(".b-catalog-photo__item--nopic-link")
            .clone()
			.addClass('product-img-clone')
            .css({'position' : 'absolute', 'z-index' : '8000', 'width' : parentWrapper.find(".b-catalog-photo__item--nopic-link").width(), 'top' : parentWrapper.find(".b-catalog-photo__item--nopic-link").offset().top, 'left' : parentWrapper.find(".b-catalog-photo__item--nopic-link").offset().left })
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $("#comparison").offset().left,
                top: $("#comparison").offset().top,
                width: 20}, 1000);
		}
	   }
	}

function productImgCloneRemove() {
  $('.product-img-clone').remove();
}
setTimeout(productImgCloneRemove, 1500);
}
});

});
</script>

<script>
                                 $(document).ready(function(){







            $("#fn_found_cheaper_btn").click(function(){


             var form = $(this).closest("form");

                 $.post("/ajax/find_low_price.php", form.serialize()+ '&web_form_submit=Y' ,function(data){

                                      setTimeout(function(){

                  $("#popup-found_cheaper").find(".b-popup__main-block").hide("slow");
               $("#popup-found_cheaper").find(".message_from_feedback").hide("slow");

              $("#popup-found_cheaper").find(".b-popup__header-text").html("Отправлено!");


                                      },1);

                                                                                });







            });





                                    $(".js_substribe").click(function(){

                                        $.post("/ajax/csubscriptionadd.php",{ action:"add_sub", "EMAIL":$(".js_footer_substr").eq(0).val() },function(data){

                                            $("#popup-substribe").find(".popup-substribe-text").html(data);
                                                                                });

                                        /**
                                         * action	add_sub
                                         EMAIL	yayasyg@sdgsdg.ru
                                         */
                                    });




                                             $(".js_fn_submit_low_price").click(function(){

                                            // console.log("OKKKAAA");

                                             var form = $(this).closest("form");
                                             var dismiss = $("#popup-low_price_ok").find(".b-popup__close").eq(0);

                                      if($("#form_email_25").val().length <3) return;

                                             $("#form_text_26").val(location.href);

$("#form_text_27").val($("title").eq(0).html().replace(/"/g, '&quot;') );
var price = $(".b-product__pricenew").eq(0).text().split("<");
  $("#form_text_28").val(price[0]);


                                        $.post("/ajax/low_price.php", form.serialize()+ '&web_form_submit=Y' ,function(data){


                                     //   $("#popup-low_price_ok").show().addClass("error");
                                      setTimeout(function(){
                                    //  dismiss.trigger("click");
                                         //  $("#popup-low_price").hide();


                                                $("#popup-low_price").find(".b-popup__header-text").html("Отправлено");
             $("#popup-low_price").find(".b-popup-feedback__form-group").hide("slow");
             $(".js_fn_submit_low_price").hide("slow");
             $(".js_fn_submit_low_price_exit").show("slow");



                                      },1);

                                                                                });

                                        /**
                                         * action	add_sub
                                         EMAIL	yayasyg@sdgsdg.ru
                                         */
                                    });





                                 });
                               </script>
<script>
$(document).ready(function(){

$(".h2o_add_favor").on("click",function(){
if (!$(this).hasClass('in-favor')) {

	if (!$('.h2o_add_favor').hasClass('b-product__item--list')) {
        $(".item.active").find("img")
            .clone()
			.addClass('product-img-clone')
            .css({'position' : 'absolute', 'z-index' : '8000', 'width' : $(".item.active").find("img").width(), 'top' : $(".item.active").find("img").offset().top, 'left' : $(".item.active").find("img").offset().left })
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $("#wishlist").offset().left,
                top: $("#wishlist").offset().top,
                width: 20}, 1000);
	}

	else {

	  if (!$('.h2o_add_favor').hasClass('b-product__item--inline')) {
		var parentWrapper = $(this).closest('.b-product__item');
        parentWrapper.find(".b-product__item--image")
            .clone()
			.addClass('product-img-clone')
            .css({'position' : 'absolute', 'z-index' : '8000', 'width' : parentWrapper.find(".b-product__item--image").width(), 'top' : parentWrapper.find(".b-product__item--image").offset().top, 'left' : parentWrapper.find(".b-product__item--image").offset().left })
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $("#wishlist").offset().left,
                top: $("#wishlist").offset().top,
                width: 20}, 1000);
	  }
	  else
	  {
		if (!$('.h2o_add_favor').hasClass('b-product__item--inline-nopic')) {
		var parentWrapper = $(this).closest('.b-catalog-photo__item');
        parentWrapper.find(".b-catalog-photo__item--photo")
            .clone()
			.addClass('product-img-clone')
            .css({'position' : 'absolute', 'z-index' : '8000', 'width' : parentWrapper.find(".b-catalog-photo__item--photo").width(), 'top' : parentWrapper.find(".b-catalog-photo__item--photo").offset().top, 'left' : parentWrapper.find(".b-catalog-photo__item--photo").offset().left })
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $("#wishlist").offset().left,
                top: $("#wishlist").offset().top,
                width: 20}, 1000);
		}
		else
		{
		var parentWrapper = $(this).closest('.b-catalog-photo__item');
        parentWrapper.find(".b-catalog-photo__item--nopic-link")
            .clone()
			.addClass('product-img-clone')
            .css({'position' : 'absolute', 'z-index' : '8000', 'width' : parentWrapper.find(".b-catalog-photo__item--nopic-link").width(), 'top' : parentWrapper.find(".b-catalog-photo__item--nopic-link").offset().top, 'left' : parentWrapper.find(".b-catalog-photo__item--nopic-link").offset().left })
            .appendTo("body")
            .animate({opacity: 0.05,
                left: $("#wishlist").offset().left,
                top: $("#wishlist").offset().top,
                width: 20}, 1000);
		}
	  }
	}

function productImgCloneRemove() {
  $('.product-img-clone').remove();
}
setTimeout(productImgCloneRemove, 1500);
}
});

});
<?
if( \Bitrix\Main\Loader::includeModule('sotbit.schemaorg') && (strpos($APPLICATION->GetCurPage(), "bitrix") === false) )
{
	Sotbit\Schemaorg\EventHandlers::makeContent($APPLICATION->GetCurPage(false), 'breadcrumblist');
	$data = SchemaMain::getData();
	if($data)
	{
		foreach ($data as $k => &$dat)
		{
			if ($dat['@type'] == 'breadcrumblist')
			{
				$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
				if(!empty($APPLICATION->arAdditionalChain))
				{
					$arChain = $APPLICATION->arAdditionalChain;
					foreach ($arChain as $key => $item)
					{
						unlink($dat['itemListElement'][$key]);
						$dat['itemListElement'][$key]['@type'] = "ListItems";
						$dat['itemListElement'][$key]['name'] = $item['TITLE'];
						$dat['itemListElement'][$key]['item'] = $protocol . $_SERVER['SERVER_NAME'] . $item['LINK'];
						$dat['itemListElement'][$key]['position'] = $key + 1;
					}
				}
			SchemaMain::setData($data);
			}
		}
	}
}
?>
<?
if( \Bitrix\Main\Loader::includeModule('sotbit.schemaorg') && (strpos($APPLICATION->GetCurPage(), "bitrix") === false) ) {
   Sotbit\Schemaorg\EventHandlers::makeContent($APPLICATION->GetCurPage(false), 'localbusiness');

   $data = SchemaMain::getData();
SchemaMain::setData($data);
}
?>
</script>


 <? $dateTime = new DateTime('now'); ?>
  <script  src="<?= SITE_TEMPLATE_PATH ?>/js/external.js?11" type="text/javascript"></script>
    <script  src="<?= SITE_TEMPLATE_PATH ?>/js/internal.js?11" type="text/javascript"></script>
    	<?$APPLICATION->IncludeComponent(
	"h2o:favorites.add",
	"",
Array()
);?>
    <script  src="<?= SITE_TEMPLATE_PATH ?>/js/internal_footer.js?<?=$dateTime->format('U'); ?>" type="text/javascript"></script>


<script>
 $(document).ready(function() {
  $(".b-brand-carousel").css('visibility', 'visible');




 });
</script>
</body>
</html>
