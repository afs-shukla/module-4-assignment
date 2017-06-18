(function () {
 'use strict';
angular.module('MenuApp')
.config(RoutesConfig)
/*.controller('MainMenuController',MainMenuController)
.controller('MenuItemDetailsController',MenuItemDetailsController);

MainMenuController.$inject=['categories']
function MainMenuController (categories){
    var mainMenuCtrl=this;
    mainMenuCtrl.cats=categories;
    
}
MenuItemDetailsController.$inject=['items']
function MenuItemDetailsController (items){
    var itemDetailsCtrl=this;
    itemDetailsCtrl.catItems=items;
      
}*/

RoutesConfig.$inject=['$stateProvider','$urlRouterProvider']
function RoutesConfig($stateProvider,$urlRouterProvider){
   
    $urlRouterProvider.otherwise('/');

   $stateProvider
    .state('home',{
        url:'/',
        templateUrl: 'src/menu/templates/home.template.html',

    })
       
    .state('categories',{
        url: '/categories',
        templateUrl: 'src/menu/templates/categories.template.html',
        controller: 'MainMenuController as mainMenuCtrl',
        resolve: {
            categories:['MenuDataService',function(MenuDataService){
                return  MenuDataService.getAllCategories();
               
            }]
        }
    })
    .state('categoryDetails',{
        url: '/categoryDetails/{shortName}',
        templateUrl: 'src/menu/templates/itemdetails.template.html',
        controller: 'MenuItemDetailsController as itemDetailsCtrl',
        resolve: {
            items:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
                return  MenuDataService.getItems($stateParams.shortName);
               
            }]
        }
    });

}

})();
