(function() {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyItemAdder = this;

        toBuyItemAdder.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyItemAdder.buyItem = function(index) {
            ShoppingListCheckOffService.addItemToBoughtItems(index);
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtItemAdder = this;

        boughtItemAdder.items = ShoppingListCheckOffService.getBoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of "to buy items"
        var toBuyItems = [{
                name: "cookies",
                quantity: 10
            },
            {
                name: "milk",
                quantity: 1
            },
            {
                name: "chips",
                quantity: 5
            },
            {
                name: "pop corn",
                quantity: 10
            },
            {
                name: "Coca Cola",
                quantity: 4
            }
        ];

        // List of "bought" items
        var boughtItems = [];

        service.addItemToBoughtItems = function(itemIndex) {
            // DEBUG
            //console.log("goes here man");

            var item = toBuyItems[itemIndex];
            // push the item to the boughtItems array
            boughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItems;
        };

        service.getBoughtItems = function() {
            return boughtItems;
        };
    }
})();
