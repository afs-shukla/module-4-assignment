(function (){
    'use strict';
    angular.module('data')
    .service('MenuDataService' ,MenuDataService )


    MenuDataService.$inject = ['$http']


    function MenuDataService ($http){
        var menuService=this;
         menuService.categories=[];
        menuService.getAllCategories= function(){
           
        return getCategoriesPromise().then(
        function(response){
            console.log("Raw Response:",response)
            return response.data;
         }
        ,function(error){
            console.log(error);
        }
        )
            
    };
    
     menuService.getItems = function(shortName){
       console.log("Inside the getItems method service")

      return getItemsHelper(shortName).then(
       function(response){
            console.log("Raw Response:",response)
            return response.data.menu_items;

      },function(error){
        console.log(error);
      })

    };

    function getCategoriesPromise (){
            console.log("Inside the getAllCategories service")

          return $http({
          method: 'GET',
          url: 'https://davids-restaurant.herokuapp.com/categories.json' 
        })};
     
  

    function getItemsHelper(shortName){
        console.log("Inside the getItems method service")

          return $http({
          method: 'GET',
          url: ('https://davids-restaurant.herokuapp.com/menu_items.json'),
          params: {
              category: shortName
            } 
        })};
    }

   
})();




