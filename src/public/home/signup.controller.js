(function () {
"use strict";

angular.module('public')

.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService','$scope'];
function SignUpController(SignUpService,$scope) {
  var $ctrl = this;

  $ctrl.error="";

  $ctrl.submit = function (formdata) {

      SignUpService.setSignUpData(formdata);

    setTimeout(function() {
      if (SignUpService.data.error) {
          $scope.$apply( function() {
          $ctrl.error = "Invalid Menu Number" ;
            });
      }

    else {
      SignUpService.setUserData(SignUpService.data,formdata);
      $scope.$apply( function() {
          $ctrl.success = "your information has been saved." ;
      });
    }
  },2500);


  }

}

})();
