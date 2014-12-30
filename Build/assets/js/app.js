$(document).ready(function(){
  
  // if this doesn't have the class 'click', toggle 'hover' class and remove 'hover--clicked'
  // 'hover--clicked' is bringing you back to the default state once you've closed and still have the mouse over the icon
  $('.svg-wrap--ex-col').hover(function() {
    if (!$(this).hasClass('click')) {
      $(this).toggleClass('hover');
      $(this).removeClass('hover--clicked')
    };
  });

  // on click toggle 'click' class, if 'hover' class then remove 'hover' class
  $('.svg-wrap--ex-col').click(function() {
    $(this).toggleClass('click').toggleClass('hover');
    if ($(this).hasClass('hover')) {
      $(this).toggleClass('hover--clicked');
    };
  });

});
