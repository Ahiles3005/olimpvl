BX.Sale.Input.Manager.ShopListInputType = ShopListInputType;
BX.Sale.Input.Utils.extend(ShopListInputType, BX.Sale.Input.StringInput);
BX.Sale.Input.Manager.register('ShopListInputType', ShopListInputType);

function ShopListInputType(name, settings, value, publicO)
{
    ShopListInputType.__super__.constructor.call(this, name, settings, value, publicO);
}




BX.Sale.Input.Manager.ShopDateType = ShopDateType;
BX.Sale.Input.Utils.extend(ShopDateType, BX.Sale.Input.DateInput);
BX.Sale.Input.Manager.register('ShopDateType', ShopDateType);

function ShopDateType(name, settings, value, publicO)
{
    ShopDateType.__super__.constructor.call(this, name, settings, value, publicO);
}
//
// shopDateType.prototype.createEditorSingle = function (name, value)
// {
//     var settings = this.settings,
//         showTime = settings.TIME == 'Y';
//
//     var text = document.createElement('input');
//     text.type  = 'text';
//     text.name  = name;
//     text.value = value;
//
//     BX.Sale.Input.Utils.applyBooleanAttributesTo(text, settings, BX.Sale.Input.Utils.globalBooleanAttributes, {DISABLED:'', READONLY:'', AUTOFOCUS:'', REQUIRED:'', AUTOCOMPLETE:'on'});
//     BX.Sale.Input.Utils.applyValueAttributesTo(text, settings, BX.Sale.Input.Utils.globalValueAttributes, {FORM:1, LIST:1});
//     this.applyEventAttributesTo(text, settings, BX.Sale.Input.Utils.globalEventAttributes);
//
//     text.setAttribute('size', showTime ? '20' : '10');
//
//     // Button
//
//     var button = document.createElement('input');
//
//     button.type     = 'button';
//     button.value    = BX.message('INPUT_DATE_SELECT');
//     button.disabled = this.disabled;
//     button.style.margin = '0 10px';
//
//     BX.Sale.Input.Utils.addEventTo(button, 'click', function ()
//     {
//         BX.calendar({node:button, field:name, form:'', bTime:showTime, bHideTime:false}); // TODO form
//     });
//
//     return [text, button];
// };
//
// shopDateType.prototype.afterEditorSingleInsert = function (item)
// {
//     item[0].focus();
// };
//
// shopDateType.prototype.setValueSingle = function (item, value)
// {
//     item[0].value = value;
// };
//
// shopDateType.prototype.getValueSingle = function (item)
// {
//     var element = item[0];
//     return element.disabled ? null : element.value;
// };
//
// shopDateType.prototype.setDisabledSingle = function (item, disabled)
// {
//     item[0].disabled = disabled;
//     item[1].disabled = disabled;
// };
//
// shopDateType.prototype.addEventSingle = function (item, name, action)
// {
//     BX.Sale.Input.Utils.addEventTo(item[0], name, action);
// };