(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/restaurantmenu/templates/item-detail.template.html',
  bindings: {
    item: '<'
  }
});

})();
