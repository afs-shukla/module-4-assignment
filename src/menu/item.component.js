(function(){
    'use strict';
    angular.module('data').
    component('itemDetails',{
    templateUrl:'src/menu/templates/menudetail.template.html',
        bindings:{
            categoryDetails:'<'
        }
      // template:'<div> This is category items!!</div>'
    })
})();