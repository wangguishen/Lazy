/**
* 全局过滤器
* vN001 --> v 过滤器前缀   N 数字过滤   S 字符串过滤   A 数组过滤
*/
const vFilter = {
	vN001: (number, places, symbol, thousand, decimal) => {
    number = number || 0;
    places = !isNaN(places = Math.abs(places)) ? places : 2;
    symbol = symbol !== undefined ? symbol : "";
    thousand = thousand || ",";
    decimal = decimal || ".";
    var negative = number < 0 ? "-" : "";
    var i = parseInt(number = Math.abs(+number || 0).toFixed(places), 10) + "";
    var j = (j = i.length) > 3 ? j % 3 : 0;
    return symbol + negative + (j ? i.substr(0, j) + thousand : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousand) + (places ? decimal + Math.abs(number - i).toFixed(places).slice(2) : "");
  }
}

export default vFilter
