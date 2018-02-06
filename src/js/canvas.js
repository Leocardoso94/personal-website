var Canvas = {
	pattern: Trianglify({
	}),
	getPattern: function () {
		var pattern = Trianglify({
			width: window.innerWidth,
			height: document.body.offsetHeight,
			x_colors: this.pattern.opts.x_colors,
			y_colors: this.pattern.opts.y_colors
		});

		return pattern;
	},
	changeBackground: function () {
		this.removeBackground();
		var newPattern = this.getPattern();

		document.body.appendChild(newPattern.canvas());
	},
	resize: function () {
		var newPattern = this.getPattern();
		this.removeBackground();
		document.body.appendChild(newPattern.canvas());
	},
	removeBackground: function () {
		var canvas = document.querySelector('canvas');

		if (canvas) {
			document.body.removeChild(canvas);
		}
	}
};

Canvas.changeBackground();

window.onresize = function (event) {
	Canvas.resize();
};
