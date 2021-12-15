#!/bin/bash
echo "-----------------------------------"
resultImport=$(php -q /home/bitrix/ext_www/n.olimpvl.ru/local/php_interface/tradex/cron/import.php $1)
resultWork=$(php -q /home/bitrix/ext_www/n.olimpvl.ru/local/php_interface/tradex/cron/reciveAndSendMessage.php "$resultImport")
echo "Error:"
echo $resultImport
echo "Message:"
echo $resultWork
echo "-----------------------------------"
