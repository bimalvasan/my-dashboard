(function(){
    'use strict';
    angular.module('main').controller('MoveTypesCtrl', MoveTypesCtrl);
    
    function MoveTypesCtrl(){
        var move = this;
        move.types = ['Haul','',''];
        
        move.types = [{
            'key': 'Haul',
            'value': 'tab.haul'
        }, {
            'key': 'Putaway',
            'value': 'tab.putaway'
        }, {
            'key': 'Letdown',
            'value': 'tab.letdown'
        }];
        
        move.clearSearch = function() {
            move.moveType = '';
        }
    };
})();