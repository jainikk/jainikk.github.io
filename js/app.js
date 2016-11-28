(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message="";  

  $scope.onCheck = function () {
	var lunchMenu=$scope.lunchMenu;
	var count=0;
	if(lunchMenu==null){
			$scope.message="Please Enter Data First"; }
    else{
			var lunchMenuArray=lunchMenu.split(",");
			count=lunchMenuArray.length;
			for(var i in lunchMenuArray){
				if(lunchMenuArray[i]=='' || lunchMenuArray[i]==' ')
					 count--;
			}
			if(count<=3 && count>0)
				$scope.message="Enjoy!";
			else if(count<1)
				$scope.message="We do NOT consider an empty item, i.e., , , as an item towards to the count.";
			else
				$scope.message="Too much!";
	}
	
	};
}

})();