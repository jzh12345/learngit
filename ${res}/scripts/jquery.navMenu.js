(function ($) {
	$.fn.navMenu = function (options) {
	     
	    var root = this;
		var subMenuOpen = false;
		var defaults = {
		    navItem: "li",
		    subMenu: ".sub-menu-warp",
			event:"mouseover"
		}
		var opts = $.extend(defaults, options);

		 
		//function open(target) {
		    
 
		//	var index=root.children().index($(this));
		//	var subMenu = $(opts.subMenu);
		//	if (subMenuOpen) {
		//	    subMenu.children().children().hide();
		//	    $(subMenu.children().children()[index]).show();
		//	}
		//	else
		//	{
		//	    $(subMenu.children().children()[index]).show();
		//	    subMenu.slideDown();
			   
		//	    subMenuOpen = true;

		//	    $(document).mousemove(function (e) { 
		//	        if ($(e.target).parents(".main-nav").length<1) {
		//	            close();
		//	        }
		//	    });
		//	}
		//}

		//function close() {
		   
		//    $(opts.subMenu).slideUp();
		//    subMenuOpen = false;
		//    $(document).unbind("mousemove")
	    //}
		function open(target) {
		    console.log(target)
		    console.log($(this).children("div"))
		    $(this).children("div").stop(true, false).fadeToggle(150);
		    target.preventDefault();
		}
		$(this.find(opts.navItem)).on(opts.event, open);
		
	};
})(jQuery);

 
///导航Fixed
$(function() {
    $(window).scroll(function() {
        var scrollHeight = $(document).scrollTop();
        if (scrollHeight > 60) {
            $('#header').addClass('fixedTop');
        } else {
            $('#header').removeClass('fixedTop');
    }
    });
})

