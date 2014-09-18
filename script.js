(function(){
	var minAng = -180;
	var maxAng = 0;
	var ang = minAng;
	var timings;

	//many times people use jQuery just because they dont wanna write this lil function
	//ToDo: Will try doing it with querySelector / querySelectorAll
	var el = function(ele){
		return document.getElementById(ele);
	}

	function rotateNeedle(){
		if ( ang < maxAng){
			el('a1').style.webkitTransform = 'rotate('+ang+'deg)';
			ang++;
		}else {
			ang = minAng;	
		}
		el('ang').innerHTML = ang;
	}
		
	window.onload = function(){
		timings = setInterval(rotateNeedle,30);
	};
})();
