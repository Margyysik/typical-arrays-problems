
exports.min = function min (array) {
	if (array) {
		return array.length? array.sort((a,b)=>a-b)[0]:0
	} else {
		return 0
	}
  
}

exports.max = function max (array) {
	if (array) {
		return array.length? array.sort((a,b)=>a-b)[array.length-1]:0
	} else{
		return 0
	}
}

exports.avg = function avg (array) {
	if (array) {
		return array.length? array.reduce((acc,num)=>acc+num)/array.length:0
	} else{
		return 0
	}
}
