BX.Sale.Input.Manager.shopListInputType = shopListInputType;
BX.Sale.Input.Utils.extend(shopListInputType, BX.Sale.Input.BaseInput);
BX.Sale.Input.Manager.register('shopListInputType', shopListInputType);

function shopListInputType(name, settings, value, publicO)
{
    shopListInputType.__super__.constructor.call(this, name, settings, value, publicO);
}

shopListInputType.prototype.createEditorSingle = function (name, value)
{

};

shopListInputType.prototype.afterEditorSingleInsert = function (item)
{

};

shopListInputType.prototype.setValueSingle = function (item, value)
{

};

shopListInputType.prototype.getValueSingle = function (item)
{

};

shopListInputType.prototype.setDisabledSingle = function (item, disabled)
{

};

shopListInputType.prototype.addEventSingle = function (item, name, action)
{

};