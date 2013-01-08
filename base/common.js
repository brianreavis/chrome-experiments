var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var init = function(options, draw) {
	var canvas = utils.createCanvas();
	var context = canvas.getContext('2d');
	var frame = 0;

	var redraw = function() {
		var offset_x = Math.round(canvas.width / 2);
		var offset_y = Math.round(canvas.height / 2);
		if (options.clear) {
			context.fillStyle = options.background;
			context.clearRect(0, 0, canvas.width, canvas.height);
			if (options.background) context.fillRect(0, 0, canvas.width, canvas.height);
		}
		return draw({
			canvas  : canvas,
			context : context,
			width   : canvas.width,
			height  : canvas.height,
			frame   : frame++
		});
	};

	// initial background
	context.fillStyle = options.background || 'rgb(0,0,0)';
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = 'rgb(255,255,255)';

	// animation loop
	utils.addEvent(window, 'resize', redraw);
	var loop = function() {
		redraw();
		requestAnimationFrame(loop);
	};
	loop();
};