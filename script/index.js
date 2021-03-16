$( document ).ready(function(){
    $('#header-search').on('click',function(){
        $('#menu-scan').toggle('.is-active');
    });
    $('#scan-close').click(function(){
        $('#menu-scan').toggle('.is-active');
    });

    $('#burger').on('click',function(){
        $('#menu-burger').toggle('.is-active');
    });
    $('#burger-close').click(function(){
        $('#menu-burger').toggle('.is-active');
    });
});