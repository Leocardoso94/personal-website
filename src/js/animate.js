var animation = true;
window.onscroll = function (event) {
	if (animation) {
		var topOfTheWindow = window.pageYOffset;
		var bottomOfTheWindow = window.innerHeight + window.pageYOffset;
		var topOfSkills = document.getElementById('skills-container').offsetTop;
		var bottomOfSkills = document.getElementById('skills-container').offsetTop + document.getElementById('skills-container').offsetHeight;

		if (bottomOfTheWindow >= topOfSkills && topOfTheWindow <= bottomOfSkills) {
			var objs = document.getElementsByClassName('skill-bar');

			for (var i = 0; i < objs.length; i++) {
				var obj = objs[i];
				var to = obj.dataset.width;
				var from = 0;

				animateWidth(obj, from, to);
			}
			animation = false;
		}
	}
}

function animateWidth(obj, from, to) {
	if (from >= to) {
		return;
	} else {
		var box = obj;
		box.style.width = from + "%";
		setTimeout(function () {
			animateWidth(obj, from + 1, to);
		}, 10)
	}
}