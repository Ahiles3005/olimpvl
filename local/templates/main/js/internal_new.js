var openModal = function(){
    
    
     var popup = BX.PopupWindowManager.create("popup-message", null, {
            content: 'Товар успешно добавлен в корзину!',
            width: 400, // ширина окна
            height: 100, // высота окна
            zIndex: 100, // z-index
            closeIcon: {
                // объект со стилями для иконки закрытия, при null - иконки не будет
                opacity: 1
            },
            titleBar: 'Продолжить покупки?',
            closeByEsc: true, // закрытие окна по esc
            darkMode: false, // окно будет светлым или темным
            autoHide: false, // закрытие при клике вне окна
            draggable: true, // можно двигать или нет
            resizable: true, // можно ресайзить
            min_height: 100, // минимальная высота окна
            min_width: 100, // минимальная ширина окна
            lightShadow: true, // использовать светлую тень у окна
            angle: true, // появится уголок
            overlay: {
                // объект со стилями фона
                backgroundColor: 'black',
                opacity: 500
            }, 
            buttons: [
                new BX.PopupWindowButton({
                    text: 'Продолжить покупки', // текст кнопки
                    id: 'save-btn', // идентификатор
                    className: 'ui-btn ui-btn-success', // доп. классы
                    events: {
                      click: function() {
                          // Событие при клике на кнопку
                          popup.close();
                      }
                    }
                }),
                new BX.PopupWindowButton({
                    text: 'В корзину',
                    id: 'copy-btn',
                    className: 'ui-btn ui-btn-primary',
                    events: {
                      click: function() {
location.href = "/cart/";
                      }
                    }
                })
            ],
            events: {
               onPopupShow: function() {
                  // Событие при показе окна
               },
               onPopupClose: function() {
                  // Событие при закрытии окна                
               }
            }
        });
     
     
     popup.show();
    
}


var  openModal1 = function(el){
    
    console.log($("#"+ el).html());
    
  $.fancybox.open({
	src  :"#"+ el,
	type : 'inline',
	opts : {
		afterShow : function( instance, current ) {
			console.info( 'done!' );
		}
	}
});
    
    
}

var  openModal3 = function(){
    

    $("#mgc-cart-open").trigger("click");
    
}



var addBasket = function (el) {
    
     var count = parseInt(1);
     
                       
      var id = parseInt($(el).data("id"));
      
    $.ajax({
        url: '/ajax/add-basket.php',
        type: 'POST',
        data: {id: id, count: count},
        dataType: 'json',
        success: function(data) {

            if (!data.isSuccess) {
         
       
                        
                         if(typeof data.count !== "undefined"){
                    
                     $('.cart_counter').text(data.count);
                     // $('#popup-cart').modal("show");
                    // openModal();
                    
                }
                
                       
           
              
            }
            
            
            else {
                if (!data.isAlreadyAdd) {
                    var count = parseInt($('.cart_counter').text());
                    $('.cart_counter').text(++count);
                     $('.buscket__count').show();
                    // console.log(data.item);
                } else if(typeof data.count !== "undefined"){
                    
                     $('.cart_counter').text(data.count);
                     $('.buscket__count').show();
                }
                // console.log(data.price);
                $('#total-price-basket').text(data.price);
                    $('.total-price-basket').data('original-title',data.price);
                       $('.total-price-basket').attr('data-original-title',data.price);
                //$('.pop-up').show();
              // $('#popup-cart').modal("show");
                     //  openModal();
                console.log('add in basket');
            }
      
            openModal3();
            
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
};

/**
 * @requires module zverushki.buyone
 * @param trigger
 */
const oneBuy = function (trigger) {
  if(trigger.dataset.hasOwnProperty('id') && window.hasOwnProperty("ZverushkiBuyone")) {
    window.ZverushkiBuyone.setProductId(trigger.dataset.id)
  }
  let button = document.querySelector('.buyone-fixed .btn-open')
  if(button)
    button.dispatchEvent(new Event('click'))

  event.preventDefault()
  return false
}
BX.addCustomEvent("onBuyoneAfterCreatedOrder", function(params){
	if(document.location.pathname=="/cart/")
	{
		window.location.replace("/cart/order/?ORDER_ID="+params.order.ID);
	}
	else 
	{
		setTimeout("document.querySelector('.buyone-fixed .btn-close').dispatchEvent(new Event('click'))",3000);
	}
});

var formatPrice = function (price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}


