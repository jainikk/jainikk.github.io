(function () {
'use strict';

angular.module('NarrowItDownApp', [])


.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItems);
  
NarrowItDownController.$inject = ['MenuSearchService'];
MenuSearchService.$inject=['$http'];

function NarrowItDownController(MenuSearchService) {
  var narrowList=this;
  
  narrowList.removeItem=function (value){
	  narrowList.found.splice(value,1);
  }
  
  narrowList.foundNo=function (){
	  if(narrowList.found.length>0)
		  return false;
	  else
		  return true;
		  
  }
  
  narrowList.searchMenu=function(){
  var promise = MenuSearchService.getMatchedMenuItems(narrowList.searchTerm);
	
  promise.then(function (response) {
    narrowList.menu = response.data;
	console.log(narrowList.menu);
	narrowList.found=[];
	for(var i=0;i<narrowList.menu.menu_items.length;i++){
		
		if(narrowList.menu.menu_items[i].description.indexOf(narrowList.searchTerm)!==-1){
			narrowList.found.push(narrowList.menu.menu_items[i]);
		}
		else {}
	}
	console.log(narrowList.found);
  })
  .catch(function (error) {
    console.log("Something went terribly wrong.");
  });
  
 
  }
}
    
    
    function FoundItems() {
  var ddo = {
    templateUrl: 'loader/itemsloaderindicator.template.html',
	
	link:function(scope, element, attrs, controller){
		var ele=element.find("div");
		ele.css('display','block');
	}
  };

  return ddo;
}




    function MenuSearchService($http){
        var service=this;
		var ApiBasePath="https://davids-restaurant.herokuapp.com";
        service.found=[];
		
		service.getMatchedMenuItems=function (searchTerm){
			var response = $http({
				  method: "GET",
				  url: (ApiBasePath + "/menu_items.json")
				});
       
		
				return response;
		}
   
            
        }
    
})();
