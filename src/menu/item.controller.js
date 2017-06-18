(function () {
 'use strict';
angular.module('data')

.controller('MenuItemDetailsController',MenuItemDetailsController)



MenuItemDetailsController.$inject=['items']
function MenuItemDetailsController (items){
    var itemDetailsCtrl=this;
    itemDetailsCtrl.catItems=items;
      
}

})();