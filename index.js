
'use strict';
var mapObj = require('map-obj');
var camelCase = require('camelcase');

module.exports = function (obj) {
	var mapFunc = function (key, val) {
		return [camelCase(key), (Array.isArray(val) ? val.map(function(o){
            return mapObj(o, mapFunc);
        }) :  (val === Object(val) && !Array.isArray(val) && !(val instanceof Date)) ? mapObj(val,mapFunc) : val)];
	}    
    return mapObj(obj, mapFunc);
};