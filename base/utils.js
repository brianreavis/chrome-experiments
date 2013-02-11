var utils = {};

utils.createCanvas = function() {
	var body    = document.getElementsByTagName('body')[0];
	var canvas  = document.createElement('canvas');
	var context = canvas.getContext('2d');
	var resize  = function() {
		canvas.setAttribute('width', window.innerWidth * window.devicePixelRatio);
		canvas.setAttribute('height', window.innerHeight * window.devicePixelRatio);
		canvas.style.width = window.innerWidth + 'px';
		canvas.style.height = window.innerHeight + 'px';
	};

	context.scale(window.devicePixelRatio);
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