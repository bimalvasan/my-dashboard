(function () {
    'use strict';
    angular.module('main').controller('MarketCtrl', MarketCtrl);

    function MarketCtrl() {
        var vm = this;
        
        vm.markets = [{
            'key': 'US',
            'icon': '../img/Flag_US.png'
        }, {
            'key': 'UK',
            'icon': '../img/Flag_UK.png'
        }, {
            'key': 'Canada',
            'icon': '../img/Flag_Canada.png'
        }];
    };
})();