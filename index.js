
'use strict';
var mapObj = require('map-obj');
var camelCase = require('camelcase');

const mapFunc = function (key, val) {
    return [camelCase(key), (Array.isArray(val) ? 
        mapArray(val)
        :  
        (val === Object(val) && !Array.isArray(val)) ? mapObj(val,mapFunc) : val)];
}    

const mapArray = (val) => {
    return val.map(function(o){
        return Array.isArray(o) ? mapArray(o)
        : (typeof(o) === 'object') ? mapObj(o, mapFunc)
        : o
    }) 
}

module.exports = function (obj) {
    return mapObj(obj, mapFunc);
};