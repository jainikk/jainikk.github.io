(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$q', '$timeout','$http'];
function SignUpService($q, $timeout,$http,SignUpController) {
  var service = this;

  service.setUserData = function (itemData , userData){
      service.itemData = itemData;
      service.userData = userData;
  }

    service.setSignUpData = function (controllerData) {


      var deferred = $q.defer();

      // Wait 2 seconds before returning

        $timeout(function() {
            var link = "https://blooming-river-68121.herokuapp.com" + '/menu_items/'+ controllerData.short_name + '.json' ;

        $http.get(link)
              .success(function (data, status, headers, config) {
                service.data = data;
              })
              .error(function (data, status, header, config) {
                  service.data = data;
              });

          } , 800);

          };

}

})();
