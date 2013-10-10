var utils = {};

utils.createCanvas = function(width, height) {
	var body    = document.getElementsByTagName('body')[0];
	var canvas  = document.createElement('canvas');
	var context = canvas.getContext('2d');
	var resize  = function() {
		var w = width || window.innerWidth;
		var h = height || window.innerHeight;
		canvas.setAttribute('width', w * window.devicePixelRatio);
		canvas.setAttribute('height', h * window.devicePixelRatio);
		canvas.style.width = w + 'px';
		canvas.style.height = h + 'px';
	};

	context.scale(window.devicePixelRatio, window.devicePixelRatio);
	document.body.appendChild(canvas);
	utils.addEvent(window, 'resize', resize);
	resize();

	utils.addEvent(document.body, 'keydown', function(e) {
		if (e.keyCode === 32) {
			document.write('<img src="' + canvas.toDataURL('image/png') + '" style="width:100%">');
		}
	});

	return canvas;
};

utils.addEvent = function(el, type, eventHandle) {
    if (el == null || el == undefined) return;
    if (el.addEventListener) {
        el.addEventListener(type, eventHandle, false);
    } else if (el.attachEvent) {
        el.attachEvent('on' + type, eventHandle);
    } else {
        el["on"+type] = eventHandle;
    }
};
