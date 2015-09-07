(function(){
    'use strict';
    angular.module('main').controller('MoveTypesCtrl', MoveTypesCtrl);
    
    function MoveTypesCtrl(){
        var moves = this;
        moves.types = ['Haul','Putaway','Letdown'];
    };
})();