(function () {
'use strict';

angular.module('data')
.component('itemCategories', {
 templateUrl: 'src/menu/templates/menu.categories.html',
  bindings: {
    itemCategories: '<'
  }

  //template: '<div> This is component!! </div>'
});



})();
