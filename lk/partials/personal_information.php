<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();?>
<div class="b-tab__content--item active" id="tab1">
    <div class="b-personal-information">
        <div class="row">
            <div class="col-md-5">
                <h2>Контактная информация</h2>
                <div class="row mg-tp_xlg">
                    <div class="col-sm-2">Имя:</div><div class="col-sm-6">Надежда</div>
                </div>
                <div class="row mg-tp_sm">
                    <div class="col-sm-2">Телефон:</div><div class="col-sm-6">+7 926 123-45-67</div>
                </div>
                <div class="row mg-tp_sm">
                    <div class="col-sm-2">Эл. почта: </div><div class="col-sm-6">nadya@gmail.com</div>
                </div>
                <div class="row mg-tp_sm">
                    <div class="col-sm-2">Город:</div><div class="col-sm-6">Ленинград</div>
                </div>
                <div class="row mg-tp_sm">
                    <div class="col-sm-2">Адрес:</div><div class="col-sm-6">3-я ул. Строителей д. 25, кв. 12.</div>
                </div>
                <br />
                <a href="#popup-contact" data-toggle="modal" class="b-link__dotted">Изменить данные</a><br />
                <a href="#popup-password" data-toggle="modal" class="b-link__dotted">Сменить пароль</a>
            </div>
            <div class="col-md-6">
                <h2>Адреса доставки</h2>
                <div class="mg-tp_xlg b-radio">
                    <div class="b-radio__item">
                        <input type="radio" name="city" value="ka" id="ka" checked/><label for="ka">г. Комсомольск-на-Амуре, 3-я ул. Строителей, д. 25, кв. 12</label>
                    </div>
                    <div class="mg-tp_sm mg-bt_md b-radio__item">
                        <input type="radio" name="city" value="vl" id="vl" /><label for="vl">г. Владивосток, ул. Ленина, д. 22\2</label>
                    </div>
                    <a href="#popup-add-address" data-toggle="modal" class="b-link__dotted">Добавить адрес</a>   
                    <a href="" class="b-link__dotted">Изменить</a>   
                    <a href="" class="b-link__dotted">Удалить</a>
                </div>
                <br />
                <h2>Мои магазины</h2>
                <br />
                <a href="#popup-avaiable" data-toggle="modal" class="b-link__dotted">Добавить магазин</a>
            </div>
        </div>
        <br />
        <br />
        <br />

        <div class="b-my-orders">
            <h2>Мои заказы</h2>
            <div class="b-my-orders__table-scroll">
                <div class="b-my-orders__table">

                    <div class="b-my-orders__header">
                        <div class="b-my-orders__item b-my-orders__item--order">Заказ №</div>
                        <div class="b-my-orders__item b-my-orders__item--date"><span class="b-my-orders__item--name-sort" data-orderby="date">Дата заказа</span></div>
                        <div class="b-my-orders__item b-my-orders__item--status"><span class="b-my-orders__item--name-sort" data-orderby="status">Статус заказа</span></div>
                        <div class="b-my-orders__item b-my-orders__item--number"><span class="b-my-orders__item--name-sort" data-orderby="number">Кол-во товаров</span></div>
                        <div class="b-my-orders__item b-my-orders__item--sum"><span class="b-my-orders__item--name-sort" data-orderby="sum">Сумма, руб.</span></div>
                        <div class="b-my-orders__item b-my-orders__item--archives">Архив</div>
                    </div>

                    <div class="b-my-orders__list">
                        <div class="b-my-orders__row-item js-my-orders__sort--row s1">

                            <div class="b-my-orders__row">
                                <div class="b-my-orders__item b-my-orders__item--order"><span class="b-my-orders__item--open">23642151</span></div>
                                <div class="b-my-orders__item b-my-orders__item--date" data-name="date">15.02.2015 16:22</div>
                                <div class="b-my-orders__item b-my-orders__item--status b-my-orders__item--status-delivered" data-name="status">Доставлено</div>
                                <div class="b-my-orders__item b-my-orders__item--number" data-name="number">2</div>
                                <div class="b-my-orders__item b-my-orders__item--sum" data-name="sum">70</div>
                                <div class="b-my-orders__item b-my-orders__item--archives"><a href="#popup-rate-purchasemy" data-toggle="modal" class="b-link__dotted b-link__dotted--black">Убрать в архив</a></div>
                            </div>

                            <div class="b-my-orders__info">
                                <div class="b-my-orders__info__item b-my-orders__info-row--header">
                                    <div class="b-my-orders__info--item b-my-orders__info--name">Состав заказа</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--article">Артикул</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--price">Цена, руб.</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--number">Кол-во</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--sum">Сумма, руб.</div>
                                </div>
                                <div class="b-my-orders__info--product-list">
                                    <div class="b-my-orders--product-item">
                                        <div class="b-my-orders__info--item b-my-orders__info--name">Мяч баскетбольный Molten </div>
                                        <div class="b-my-orders__info--item b-my-orders__info--article">4354632</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--price">744</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--number">1</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--sum">744</div>
                                    </div>
                                    <div class="b-my-orders--product-item">
                                        <div class="b-my-orders__info--item b-my-orders__info--name">Мяч баскетбольный Molten </div>
                                        <div class="b-my-orders__info--item b-my-orders__info--article">4354632</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--price">744</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--number">1</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--sum">744</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="b-my-orders__row-item js-my-orders__sort--row s2">
                            <div class="b-my-orders__row">
                                <div class="b-my-orders__item b-my-orders__item--order"><span class="b-my-orders__item--open">23642152</span></div>
                                <div class="b-my-orders__item b-my-orders__item--date" data-name="date">15.02.2015 19:22</div>
                                <div class="b-my-orders__item b-my-orders__item--status b-my-orders__item--status-in-progress" data-name="status">В обработке</div>
                                <div class="b-my-orders__item b-my-orders__item--number" data-name="number">3</div>
                                <div class="b-my-orders__item b-my-orders__item--sum" data-name="sum">140</div>
                                <div class="b-my-orders__item b-my-orders__item--archives"><a href="#popup-rate-purchasemy" data-toggle="modal" class="b-link__dotted b-link__dotted--black">Убрать в архив</a></div>
                            </div>
                            <div class="b-my-orders__info">
                                <div class="b-my-orders__info__item b-my-orders__info-row--header">
                                    <div class="b-my-orders__info--item b-my-orders__info--name">Состав заказа</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--article">Артикул</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--price">Цена, руб.</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--number">Кол-во</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--sum">Сумма, руб.</div>
                                </div>
                                <div class="b-my-orders__info--product-list">
                                    <div class="b-my-orders--product-item">
                                        <div class="b-my-orders__info--item b-my-orders__info--name">Мяч баскетбольный Molten </div>
                                        <div class="b-my-orders__info--item b-my-orders__info--article">4354632</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--price">744</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--number">1</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--sum">744</div>
                                    </div>
                                    <div class="b-my-orders--product-item">
                                        <div class="b-my-orders__info--item b-my-orders__info--name">Мяч баскетбольный Molten </div>
                                        <div class="b-my-orders__info--item b-my-orders__info--article">4354632</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--price">744</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--number">1</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--sum">744</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="b-my-orders__row-item js-my-orders__sort--row s3">
                            <div class="b-my-orders__row">
                                <div class="b-my-orders__item b-my-orders__item--order"><span class="b-my-orders__item--open">23642153</span></div>
                                <div class="b-my-orders__item b-my-orders__item--date" data-name="date">16.02.2015 16:22</div>
                                <div class="b-my-orders__item b-my-orders__item--status b-my-orders__item--status-in-progress" data-name="status">В обработке</div>
                                <div class="b-my-orders__item b-my-orders__item--number" data-name="number">9</div>
                                <div class="b-my-orders__item b-my-orders__item--sum" data-name="sum">89</div>
                                <div class="b-my-orders__item b-my-orders__item--archives"><a href="#popup-rate-purchasemy" data-toggle="modal" class="b-link__dotted b-link__dotted--black">Убрать в архив</a></div>
                            </div>
                            <div class="b-my-orders__info">
                                <div class="b-my-orders__info__item b-my-orders__info-row--header">
                                    <div class="b-my-orders__info--item b-my-orders__info--name">Состав заказа</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--article">Артикул</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--price">Цена, руб.</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--number">Кол-во</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--sum">Сумма, руб.</div>
                                </div>
                                <div class="b-my-orders__info--product-list">
                                    <div class="b-my-orders--product-item">
                                        <div class="b-my-orders__info--item b-my-orders__info--name">Мяч баскетбольный Molten </div>
                                        <div class="b-my-orders__info--item b-my-orders__info--article">4354632</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--price">744</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--number">1</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--sum">744</div>
                                    </div>
                                    <div class="b-my-orders--product-item">
                                        <div class="b-my-orders__info--item b-my-orders__info--name">Мяч баскетбольный Molten </div>
                                        <div class="b-my-orders__info--item b-my-orders__info--article">4354632</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--price">744</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--number">1</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--sum">744</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="b-my-orders__row-item js-my-orders__sort--row s4">
                            <div class="b-my-orders__row">
                                <div class="b-my-orders__item b-my-orders__item--order"><span class="b-my-orders__item--open">23642154</span></div>
                                <div class="b-my-orders__item b-my-orders__item--date" data-name="date">17.02.2015 16:22</div>
                                <div class="b-my-orders__item b-my-orders__item--status b-my-orders__item--status-in-progress" data-name="status">В обработке</div>
                                <div class="b-my-orders__item b-my-orders__item--number" data-name="number">10</div>
                                <div class="b-my-orders__item b-my-orders__item--sum" data-name="sum">90</div>
                                <div class="b-my-orders__item b-my-orders__item--archives"><a href="#popup-rate-purchasemy" data-toggle="modal" class="b-link__dotted b-link__dotted--black">Убрать в архив</a></div>
                            </div>
                            <div class="b-my-orders__info">
                                <div class="b-my-orders__info__item b-my-orders__info-row--header">
                                    <div class="b-my-orders__info--item b-my-orders__info--name">Состав заказа</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--article">Артикул</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--price">Цена, руб.</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--number">Кол-во</div>
                                    <div class="b-my-orders__info--item b-my-orders__info--sum">Сумма, руб.</div>
                                </div>
                                <div class="b-my-orders__info--product-list">
                                    <div class="b-my-orders--product-item">
                                        <div class="b-my-orders__info--item b-my-orders__info--name">Мяч баскетбольный Molten </div>
                                        <div class="b-my-orders__info--item b-my-orders__info--article">4354632</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--price">744</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--number">1</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--sum">744</div>
                                    </div>
                                    <div class="b-my-orders--product-item">
                                        <div class="b-my-orders__info--item b-my-orders__info--name">Мяч баскетбольный Molten </div>
                                        <div class="b-my-orders__info--item b-my-orders__info--article">4354632</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--price">744</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--number">1</div>
                                        <div class="b-my-orders__info--item b-my-orders__info--sum">744</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>Всего заказов 2</div>
        </div>
    </div>
</div>