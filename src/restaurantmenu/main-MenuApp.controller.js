(function () {
'use strict';

angular.module('data')
.controller('MainRestaurantMenuController', MainRestaurantMenuController);


MainRestaurantMenuController.$inject = ['category'];
function MainRestaurantMenuController(category) {
  var mainList = this;

  mainList.category = category;
}

})();
