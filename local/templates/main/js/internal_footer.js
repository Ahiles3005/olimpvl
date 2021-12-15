$(document).ready(function(){
    

$(".mgc-add-compare").click(function(e){
    
    
    e.preventDefault();
   
    if($(this).hasClass("in-compare")){
          $(this).removeClass("in-compare");
    }else{
          $(this).addClass("in-compare");
    }
    
    var el = $(this);
    var id = $(this).data("id");
        $.ajax({
        type: 'GET',
        url: '/compare/index.php',
        data: {id: id, action: 'ADD_TO_COMPARE_LIST'},
        success: function () {
            
                if(el.hasClass("in-compare")){
          el.text("В сравнении");
    }else{
          el.text("Добавить в сравнение");
    }
        
                $.ajax({
        type: 'GET',
        url: '/compare/get_compare.php',
        data: {id: id, action: 'ADD_TO_COMPARE_LIST'},
        success: function (data) {
            
            console.log(data.count,"count");
            $(".cnt_compare").html(data.count);
           
             $(".cnt_compare").show();
            
            
            
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
            
            
            
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(jqXHR);
            console.log(textStatus);
            console.log(errorThrown);
        }
    });
        
        
        
    
});
    
 
    
    
});