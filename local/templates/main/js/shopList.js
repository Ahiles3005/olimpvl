BX.Sale.Input.Manager.ShopList = ShopList;
BX.Sale.Input.Utils.extend(ShopList, BX.Sale.Input.BaseInput);
BX.Sale.Input.Manager.register('ShopList', ShopList);

function ShopList(name, settings, value, publicO)
{
    this.multielement = settings.MULTIELEMENT === 'Y';
    ShopList.__super__.constructor.call(this, name, settings, value, publicO);

}

ShopList.prototype.getValueObject = function (value)
{
    value = BX.Sale.Input.Utils.asMultiple(value);

    var	object = {},
        i = 0, length = value.length, v;

    for (; i < length; i++)
    {
        v = value[i];

        if (v !== undefined)
            object[v] = true;
    }

    return object;
};

ShopList.prototype.createEditor = function (value)
{
    let	variants = [],
        name = this.name,
        settings = this.settings,
        options = [],
        Utils = BX.Sale.Input.Utils;

    if (BX.type.isPlainObject(settings.OPTIONS))
    {
        for (let sort in settings.OPTIONS_SORT)
        {
            var code = settings.OPTIONS_SORT[sort];
            if (BX.type.isNotEmptyString(settings.OPTIONS[code]))
                options.push(settings.OPTIONS[code]);
        }
    }
    else if (BX.type.isArray(settings.OPTIONS))
    {
        options = settings.OPTIONS
    }



    if (options === undefined || options === null || (options.constructor !== Object && options.constructor !== Array) || options.length === 0)
    {
        this.variants = [];
        this.items = [document.createTextNode(BX.message('INPUT_ENUM_OPTIONS_ERROR'))];
        return;
    }

    value = this.getValueObject(value);
    console.log('createEditor', this.multielement);
    if (this.multielement)
    {
        var	type = 'radio',
            currentObject = this,
            multitag = this.multitag,
            items = [];

        if (this.multiple)
        {
            type = 'checkbox';
            name += '[]';
        }

        this.createEditorOptions(null, options, value,
            function (group)
            {
                var	legend = document.createElement('legend');
                legend.appendChild(document.createTextNode(group));

                var container = document.createElement('fieldset');
                container.appendChild(legend);

                items.push(container);
                return container;
            },
            function (container, value, checked, text)
            {
                // Element

                var element = document.createElement('input');

                element.type     = type;
                element.name     = name;
                element.value    = value;
                element.checked  = checked;
                element.disabled = currentObject.disabled;

                if (currentObject.form)
                    element.setAttribute('form', currentObject.form);

                currentObject.applyEventAttributesTo(element, settings, Utils.globalEventAttributes);

                // Label

                var label = document.createElement('label');

                label.appendChild(element);
                label.appendChild(document.createTextNode(' '+text+' '));

                // Wrapper

                var wrapper;

                if (multitag)
                {
                    wrapper = document.createElement(multitag);
                    wrapper.appendChild(label);
                }
                else
                {
                    wrapper = label;
                }

                if (container)
                    container.appendChild(wrapper);
                else
                    items.push(wrapper);

                variants.push(element);
            }
        );

        this.items = items;
    }
    else
    {
        var select = document.createElement('select');

        if (this.multiple)
        {
            select.name = name+'[]';
            select.multiple = true;
        }
        else
        {
            select.name = name;
        }

        Utils.applyBooleanAttributesTo(select, settings, Utils.globalBooleanAttributes, {DISABLED:'', AUTOFOCUS:'', REQUIRED:''});
        Utils.applyValueAttributesTo(select, settings, Utils.globalValueAttributes, {FORM:1, SIZE:1});
        this.applyEventAttributesTo(select, settings, Utils.globalEventAttributes);

        this.createEditorOptions(select, options, value,
            function (group)
            {
                var container = document.createElement('optgroup');

                container.label = group;

                select.appendChild(container);
                return container;
            },
            function (container, value, selected, text)
            {
                var option = document.createElement('option');

                option.text     = text;
                option.value    = value;
                option.selected = selected;

                container.appendChild(option);
                variants.push(option);
            }
        );

        if (settings.REQUIRED == "N")
        {
            var option = document.createElement('option');
            option.text     = BX.message('INPUT_ENUM_EMPTY_OPTION');
            option.value    = "";

            if (Object.keys(value).length === 0)
                option.selected = "selected";

            select.insertBefore(option, select.firstChild);
            variants.push(option);
        }

        this.items = [select];
    }

    this.variants = variants;
};

ShopList.prototype.createEditorOptions = function (container, options, selected, group, option)
{
    var key, value, code;

    for (key in options)
    {
        
        console.error(key,"IS KEY");
        if (options.hasOwnProperty(key))
        {
            value = options[key];
           // code = this.settings.OPTIONS_SORT[key];
    console.error(this.settings.OPTIONS_SORT[key],"IS KEY this.settings.OPTIONS_SORT[key]");
            code = key;
            if (value.constructor === Object)
                this.createEditorOptions(group(code), value, selected, group, option);
            else
                option(container, code, selected.hasOwnProperty(code), value || code);
        }
    }
};

ShopList.prototype.setValue = function (value)
{
    value = this.getValueObject(value);

    var	variants = this.variants,
        multielement = this.multielement,
        i = 0, length = variants.length, variant;

    for (; i < length; i++)
    {
        variant = variants[i];
        variant[multielement ? 'checked' : 'selected'] = value.hasOwnProperty(variant.value);
    }
};

ShopList.prototype.getValue = function ()
{
    var	value = [],
        variants = this.variants,
        multielement = this.multielement,
        i = 0, length = variants.length, variant;

    for (; i < length; i++)
    {
        variant = variants[i];
        if (variant[multielement ? 'checked' : 'selected'])
            value.push(variant.value);
    }

    return this.multiple ? value : Utils.asSingle(value);
};

ShopList.prototype.setDisabled = function (disabled)
{
    if (this.multielement)
    {
        var	variants = this.variants,
            i = 0, length = variants.length;

        for (; i < length; i++)
            variants[i].disabled = disabled;
    }
    else
    {
        this.items[0].disabled = disabled;
    }
};

ShopList.prototype.addEvent = function (name, action)
{
    let Utils = BX.Sale.Input.Utils;
    console.log('add event');
    action = this.createEventHandler(action);

    if (this.multielement)
    {
        var	variants = this.variants,
            i = 0, length = variants.length;

        for (; i < length; i++)
            Utils.addEventTo(variants[i], name, action);
    }
    else
    {
        Utils.addEventTo(this.items[0], name, action);
    }
};


