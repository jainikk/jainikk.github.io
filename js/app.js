(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])

.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);    
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy=this;
  toBuy.toBuyList=ShoppingListCheckOffService.toBuyList;
    
    toBuy.buyItem=function(itemIndex){
        ShoppingListCheckOffService.buyItem(itemIndex,toBuy.toBuyList);
    }
  
}
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
         var alreadyBought=this;
  
    alreadyBought.alreadyBoughtList=ShoppingListCheckOffService.alreadyBoughtList;
        
    };
    
    function ShoppingListCheckOffService(){
        var service=this;
        service.toBuyList=[{name: "cookies", quantity: 10}
                   ,{name: "onions", quantity: 6}
                  ,{name: "mushroom", quantity: 7}
                  ,{name: "apples", quantity: 5}
                  ,{name: "bananas", quantity: 3}];
        service.alreadyBoughtList=[];
        
        service.buyItem=function(itemIndex,toBuyList){
            var temp=toBuyList[itemIndex];
            var item = {
              name: temp.name,
              quantity: temp.quantity
            };
   
            
       toBuyList.splice(itemIndex, 1);
       service.alreadyBoughtList.push(item);
            
        }
    }
})();
