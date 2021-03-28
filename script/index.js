window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
       document.querySelector('#menu-burger').classList.toggle('is-active')
    })
    document.querySelector('#burger-close').addEventListener('click', function() {
        document.querySelector('#menu-burger').classList.toggle('is-active')
     })

     document.querySelector('#header-search').addEventListener('click', function() {
        document.querySelector('#menu-scan').classList.toggle('is-activ')
     })
     document.querySelector('#scan-close').addEventListener('click', function() {
        document.querySelector('#menu-scan').classList.toggle('is-activ')
     })
})

$( document ).ready(function(){
    
    
    // $('#header-search').on('click',function(){
    //     $('#menu-scan').toggle('.is-active');
    // });
    //  $('#scan-close').click(function(){
    //      $('#menu-scan').toggle('.is-active');
    //  });

    
     
    //  $('#scan-search').click(function(){
    //      $('#menu-scan').hide('.header-scan');
    //  });
});
 