(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout','$http']
function MenuDataService($q, $timeout,$http) {
  var service = this;

  // List of shopping categories


  // Simulates call to server
  // Returns a promise, NOT categories array directly
  service.getAllCategories = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning

      $timeout(function() {

      $http.get("https://davids-restaurant.herokuapp.com/categories.json")
            .success(function (data, status, headers, config) {
            deferred.resolve(data);
            })
            .error(function (data, status, header, config) {

                deferred.resolve(data);
            });
        } , 800);
        return deferred.promise;
        };


        service.getItemsForCategory = function (categoryName) {
          var deferred = $q.defer();

          // Wait 2 seconds before returning

            $timeout(function() {
                var link = "https://davids-restaurant.herokuapp.com/menu_items.json?category="+ categoryName  ;

            $http.get(link)
                  .success(function (data, status, headers, config) {
                  deferred.resolve(data);
                  })
                  .error(function (data, status, header, config) {

                      deferred.resolve(data);
                  });
              } , 800);
              return deferred.promise;
              };


}

})();
