<?php
$arUrlRewrite=array (
  23 => 
  array (
    'CONDITION' => '#^/#',
    'ID' => '',
    'PATH' => '/index.php',
    'SORT' => 0,
  ),
  1 => 
  array (
    'CONDITION' => '#^/online/([\\.\\-0-9a-zA-Z]+)(/?)([^/]*)#',
    'RULE' => 'alias=$1',
    'ID' => '',
    'PATH' => '/desktop_app/router.php',
    'SORT' => 100,
  ),
  2 => 
  array (
    'CONDITION' => '#^/bitrix/services/ymarket/#',
    'RULE' => '',
    'ID' => '',
    'PATH' => '/bitrix/services/ymarket/index.php',
    'SORT' => 100,
  ),
  5 => 
  array (
    'CONDITION' => '#^/online/(/?)([^/]*)#',
    'RULE' => '',
    'ID' => '',
    'PATH' => '/desktop_app/router.php',
    'SORT' => 100,
  ),
  6 => 
  array (
    'CONDITION' => '#/brands/([\\w-_]+)/.*#',
    'RULE' => 'ELEMENT_CODE=$1',
    'ID' => '',
    'PATH' => '/brands/detail.php',
    'SORT' => 100,
  ),
  21 => 
  array (
    'CONDITION' => '#^/catalog_test/#',
    'RULE' => '',
    'ID' => 'bitrix:catalog',
    'PATH' => '/catalog_test/index.php',
    'SORT' => 100,
  ),
  22 => 
  array (
    'CONDITION' => '#^/catalog/#',
    'RULE' => '',
    'ID' => 'bitrix:catalog',
    'PATH' => '/catalog/index.php',
    'SORT' => 100,
  ),
  18 => 
  array (
    'CONDITION' => '#^/shares/#',
    'RULE' => '',
    'ID' => 'bitrix:news',
    'PATH' => '/shares/index.php',
    'SORT' => 100,
  ),
  17 => 
  array (
    'CONDITION' => '#^/forum/#',
    'RULE' => '',
    'ID' => 'bitrix:forum',
    'PATH' => '/forum/index.php',
    'SORT' => 100,
  ),
  14 => 
  array (
    'CONDITION' => '#^/rest/#',
    'RULE' => '',
    'ID' => '',
    'PATH' => '/bitrix/services/rest/index.php',
    'SORT' => 100,
  ),
  16 => 
  array (
    'CONDITION' => '#^/news/#',
    'RULE' => '',
    'ID' => 'bitrix:news',
    'PATH' => '/news/index.php',
    'SORT' => 100,
  ),
);
