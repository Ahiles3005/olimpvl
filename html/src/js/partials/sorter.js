var orderdirection = new Array();
function is_num( text, flag )
{
    if( flag == 0 )
    {
        return text;
    }else
    {
        return parseFloat( text );
    }
}
function oi_div_order( selector, container, block, flag )
{
    block = container + ' ' + block;
    var ordered_dives = $( block ).sort(function (a, b)
    {
        a = $(a).find( '[data-name=' + selector + ']' ).text();
        b = $(b).find( '[data-name=' + selector + ']' ).text();
        if( orderdirection[ selector ] == undefined || orderdirection[ selector ] == 0 )
        {
            return ( is_num( a, flag ) > is_num( b, flag ) ) ? 1 : ( is_num( a, flag ) < is_num( b, flag ) ) ? -1 : 0;
        }else{
            return ( is_num( a, flag ) < is_num( b, flag ) ) ? 1 : ( is_num( a, flag ) > is_num( b, flag ) ) ? -1 : 0;
        }
    });
    $( container ).html( ordered_dives );
    
    if( orderdirection[ selector ] == undefined || orderdirection[ selector ] == 0 )
    {
        orderdirection[ selector ] = 1;
        $( '[data-orderby=' + selector + ']' ).addClass( 'up' );
    }else{
        orderdirection[ selector ] = 0;
        $( '[data-orderby=' + selector + ']' ).removeClass( 'up' );
    }
}
$('[data-orderby]').on('click', function () {
    var orderby = $(this).data( 'orderby' );
    switch ( orderby )
    {
      case 'number': flag = 1; break;
      default: flag = 0;
    }
    oi_div_order( orderby, '.b-my-orders__list', '.js-my-orders__sort--row', flag );
});