//routes.js
(function () {
'use strict';

angular.module('data')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurantmenu/templates/home.template.html'
  })

  // Premade list page
  .state('category', {
    url: '/category',
    templateUrl: 'src/restaurantmenu/templates/categories.template.html',
    controller: 'MainRestaurantMenuController as mainList',
    resolve: {
      category: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{categoryShortName}',
    templateUrl: 'src/restaurantmenu/templates/items.template.html' ,
    controller: 'ItemDetailController as itemDetail',
    resolve: {
     item: ['$stateParams', 'MenuDataService',
           function ($stateParams, MenuDataService) {
             return MenuDataService.getItemsForCategory($stateParams.categoryShortName);

            }]
    }
});
}

})();
