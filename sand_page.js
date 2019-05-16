jQuery(function(){
  createSticky(jQuery("#stickyheader"));
  // Added styles - 6 May
  adjustDisplay(jQuery("#stickyheader"));
  adjustDisplay(jQuery("#banner"));
  adjustDisplay(jQuery("#bannerwrap"));
  adjustDisplay(jQuery("#download_container"));
  adjustDisplay(jQuery("#fullreport"));
  adjustDisplay(jQuery("#summary"));
  adjustDisplay(jQuery("#content"));
  adjustDisplay(jQuery("#partnership"));
  adjustDisplay(jQuery("#logo_ch"));
  adjustDisplay(jQuery("#logo_unige"));
});

function createSticky(sticky) {
  var win = jQuery(window);

  win.on("scroll", function() {

    if(win.scrollTop() > 1 ) {
        sticky.addClass("sticky");
        $("#headimg").attr('src','logo_grid_black.png');
        /* Pleaes insert correct image server location above */
    } else {
        sticky.removeClass("sticky");
        $("#headimg").attr('src','logo_grid_white.png');
        /* Pleaes insert correct image server location above */
    }
  });
}

// Added styles - 6 May
function adjustDisplay(element) {
  var width = $(window).width();
  var height = $(window).height();

  if (width<=height*0.8) {
    element.addClass("narrow");
  } else {
    element.removeClass("narrow");
  }
}
