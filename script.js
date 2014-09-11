(function(){
	var minAng = -180;
	var maxAng = 0;
	var ang = minAng;
	var timings;

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