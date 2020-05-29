//convert time to format
function time_convert(num) {
    num = Math.round(num);
    var hours = Math.floor(num / 60);
    var minutes = num % 60;
    if (num > 60) {
        return hours + " 小時 " + minutes + " 分鐘";
    } else {
        return num + " 分鐘";
    }
}


//function for checking a num is even or not
function isOdd(n) {
    return n && (n % 2 !== 0);
}


/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = pair[1];
	}
	return params;
};