(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(function(){
      var navStatesInPixelHeight = [44,64];
        
      var changeNavState = function(nav, newStateIndex) {
        nav.data('state', newStateIndex).stop().animate({
          height : navStatesInPixelHeight[newStateIndex] + 'px'
        }, 600);    
      };
        
      var boolToStateIndex = function(bool) {
        return bool * 1;    
      };
        
      var maybeChangeNavState = function(nav, condState) {
        var navState = nav.data('state');
        if (navState === condState) {
          changeNavState(nav, boolToStateIndex(!navState));
        }
      };
        
      $('#header_nav').data('state', 1);
        
      $(window).scroll(function(){
        var $nav = $('#header_nav');
            
        if ($(document).scrollTop() > 0) {
          maybeChangeNavState($nav, 1);
        } else {
          maybeChangeNavState($nav, 0); 
        }
      });
    });
