jQuery(function(){
  createSticky(jQuery("#stickyheader"));
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
