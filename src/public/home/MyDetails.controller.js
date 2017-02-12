(function () {
"use strict";

angular.module('public')

.controller('MyDetailsController', MyDetailsController);

MyDetailsController.$inject = ['SignUpService'];
function MyDetailsController(SignUpService) {
  var $ctrl = this;

  if(SignUpService.itemData && SignUpService.userData) {
      $ctrl.itemData = SignUpService.itemData ;
      $ctrl.userData = SignUpService.userData;
      $ctrl.view = "true" ;
      $ctrl.imageId = SignUpService.itemData.short_name.split('');
  }
  else {
     $ctrl.message = "Not Signed Up Yet, " ;
     $ctrl.viewme = "true" ;
  }
}


})();
