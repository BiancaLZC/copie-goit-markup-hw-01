document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('[data-active]');
    function markActive() {
      setTimeout((function(){
        var currentUrl = window.location.href;
    
        navLinks.forEach(function(link) {
          if(currentUrl.endsWith(link.getAttribute('data-active')) ){
           link.classList.add('active')
      
          }
          else{
          link.classList.remove('active')
          }
        })
      }))
     
    }
   markActive()
   navLinks.forEach(function(link)
  {
    link.addEventListener("click",markActive)
  })
  });