(function () {
 'use strict';
angular.module('data')

.controller('MainMenuController',MainMenuController)


MainMenuController.$inject=['categories']
function MainMenuController (categories){
    var mainMenuCtrl=this;
    mainMenuCtrl.cats=categories;
    
}
})();
