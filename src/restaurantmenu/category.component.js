(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/restaurantmenu/templates/categoryList.template.html',
  bindings: {
    category: '<'
}
});


})();
