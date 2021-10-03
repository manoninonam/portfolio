function openNav() {
    document.getElementById("myNav").style.width = "100%";
    disableScroll();
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    enableScroll();
  }

  function disableScroll() {
   
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
 
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
function enableScroll() {
    window.onscroll = function() {};
}