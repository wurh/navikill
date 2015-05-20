'use strict';

var template = require('ejsUtil');
var bootTpl = __inline('boot.tpl');
var listHead = __inline('../listHead/ListHead.tpl');
var config = require('config');
module.exports = function () {
    console.log(bootTpl);
    var headDom = template.render(listHead,{
        data:config.heads
    });
    console.log(headDom);
    //document.body.innerHTML = '<h1>Hello world!</h1>';
};

function rankPerson(){

}