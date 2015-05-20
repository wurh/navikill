'use strict';

var template = require('ejsUtil');
var bootTpl = __inline('boot.tpl');
var listHead = __inline('../listHead/ListHead.tpl');
var listContent = __inline('../listContent/listContent.tpl');
var config = require('config');
module.exports = function () {
    console.log(bootTpl);
    var headDom = template.render(listHead,{
        data:config.heads
    });
    config.users = rankPerson(config.users);
    var content = template.render(listContent,{
        data:config.users
    });
    //console.log(content);
    $('#ranking').append(headDom).append(content);
};

function rankPerson(arr){
    arr = arr.sort(function(x,y){
        //console.log('x:'+x+'y:'+y);
        if(parseInt(x.points) > parseInt(y.points)){
            return -1;
        }else if(parseInt(x.points) == parseInt(y.points)){
            if(parseInt(x.head) == parseInt(y.head)){
               return -1;
            }else{
                return 1;
            }
        }else{
            return 1;
        }

    });
    return arr;
}