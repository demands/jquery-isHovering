// jQuery plugin for whether or not mouse is hovering over your element
(function ( $, undefined ) {
	// scoped variables to keep track of mouse position
	var mouseX = 0, mouseY = 0;
	
	$(function() {
		$(document).mousemove(function ( e ) {
			mouseX = e.pageX;
			mouseY = e.pageY;
		});
	});
	
	// returns true if the mouse is above this element
	$.fn.isHovering = function ( padding ) {
		var coords = this.offset();
		if(padding === undefined) {
			padding = 0;
		}
		return (mouseX > (coords.left - padding) && mouseX < (coords.left + this.innerWidth() + padding) &&
						mouseY > (coords.top - padding) && mouseY < (coords.top + this.innerHeight() + padding))
	}
})(jQuery);