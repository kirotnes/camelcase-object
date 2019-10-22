
'use strict';
var mapObj = require('map-obj');
var camelCase = require('camelcase');
const util = require('util')

module.exports = function (obj) {
	var mapFunc = function (key, val) {
        return [camelCase(key), (Array.isArray(val) ? 
            val.map(function(o){
                return (typeof(o) === 'object' || Array.isArray(o)) ?  mapObj(o, mapFunc) : o
            }) 
            :  
            (val === Object(val) && !Array.isArray(val)) ? mapObj(val,mapFunc) : val)];
	}    
    return mapObj(obj, mapFunc);
};