$( document ).ready(function(){
    $('#header-search').on('click',function(){
        $('#menu-scan').toggle('.is-active');
    });
    $('#scan-close').click(function(){
        $('#menu-scan').toggle('.is-active');
    });
});