<?
//Инфоблок "Каталог"
define('IBLOCK_ID_CATALOG', 1);

//Инфоблок "Бренды"
define('IBLOCK_ID_BRAND', 2);

//Инфоблок "Новости"
define('IBLOCK_ID_NEWS', 3);

//Инфоблок "Акции"
define('IBLOCK_ID_SHARES', 4);

//Инфоблок "Торговые предложения"
define('IBLOCK_ID_OFFERS', 7);

//Инфоблок "Города присутствия"
define('IBLOCK_ID_GEO_CITY', 8);

//Инфоблок "Магазины"
define('IBLOCK_ID_SHOPS', 11);

//Инфоблок "Отзывы к товарам"
define('IBLOCK_ID_RESPONSE', 10);

//Highload-block AdvantageReference справочник для карточки товаров
define('HIGHLOAD_ID_ADVANTAGE', 1);

//Highload-block ColorReference справочник цветов товара
define('HIGHLOAD_ID_COLOR', 2);

//Highload-block RecomendedReference справочник для карточки товаров
define('HIGHLOAD_ID_RESPONSE', 3);

//Свойтво Бренд Каталога товаров
define('BRAND_PROP_ID', 6);

//Форма заполнения "Сотрудничество"
define('FORM_ID_COOPERATION', 1);

//Форма заполнения "Контакты"
define('FORM_ID_CONTACTS', 2);

//Свойство "Размер" у ТП
define('PROPERTY_SIZE_ID', 12);

//id свойства тип список в магазинах под названием "склады"
define('REF_STORE_ENUM_ID', 147);

//id свойства тип список в магазинах под названием "склады"
define('CATALOG_SECTION_FILTR_SIZE_PROPERTY', 12);

//Путь к папке для загрузки
define("UPLOAD_LINK", $SERVER["DOCUMENT_ROOT"]."/local/templates/main/");

//Путь к папке для импорта картинок товара через файл XLS относительно папки upload
define('TRADEX_XLS_GOOD_IMG', "/tradex/images/goods/");

//Путь к папке для импорта картинок торговых марок(брендов) через файл XLS относительно папки upload
define('TRADEX_XLS_BRAND_IMG', "/tradex/images/brands/");

//Путь к папке для импорта картинок групп товаров(разделов) через файл XLS относительно папки upload
define('TRADEX_XLS_GROUP_IMG', "/tradex/images/group/");

//Путь к папке для импорта файлов свойств товаров через файл XLS относительно папки upload
define('TRADEX_XLS_GOOD_PROP', "/tradex/files/");

//Заглушка для списка товаров
define('DEF_PIC_LIST', "/catalog/images/400x400.png");

//Заглушка для брендов на главной
define('DEF_PIC_BRAND_MAIN', "/catalog/images/170x170.png");

//Заглушка для брендов странице брендов
define('DEF_PIC_BRAND_LIST', "/catalog/images/120x120.png");

//Заглушка для карточки товара
define('DEF_PIC_DETAIL', "/catalog/images/400x400.png");

//Заглушка для недавно просмотренных товаров
define('DEF_PIC_VIEWED', "/catalog/images/170x170.png");

//Заглушка для рекомендованных товаров
define('DEF_PIC_REC', "/catalog/images/170x170.png");

//Заглушка для похожих товаров
define('DEF_PIC_SIM', "/catalog/images/170x170.png");

//Заглушка для карусели брендов
define('DEF_PIC_BRAND_LINE', "/catalog/images/50x50.png");

//Заглушка для новостей на главной
define('DEF_PIC_NEWS', "/news/images/news.jpg");
