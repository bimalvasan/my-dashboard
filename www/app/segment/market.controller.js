(function(){
    'use strict';
    angular.module('main').controller('MarketCtrl', MarketCtrl);
    
    function MarketCtrl(){
        var mkt = this;
        mkt.markets = ['USA','UK','Mexico','Canada'];
    };
})();