$.fn.tabs = function() {
  var selector = this;

  this.each(function() {
    var obj = $(this); 
    $(obj.attr('href')).hide();
    obj.click(function() {
      var $el = $(this);
      $(selector).removeClass('selected');
      $el.addClass('selected');
      $($el.attr('href')).fadeIn();
      $(selector).not(this).each(function(i, element) {
        $($(element).attr('href')).hide();
      });
      productListAutoSet();
      return false;
    });
  });

  $(this).show();
  
  $(this).first().click();
};