(function () {
    'use strict';
    angular.module('dashboard.Service', []).factory('dashboardSvc', dashboardSvc);

    dashboardSvc.$inject = ['CacheFactory']
    function dashboardSvc(CacheFactory) {

        function getMoves(period) {
            var data = [
                {
                    "key": "DC 6084D",
                    "values": [['1', 500], 
                               ['3', 1350], 
                               ['5', 1100], 
                               ['7', 950], 
                               ['9', 750], 
                               ['10', 950], 
                               ['11', 1350],
                               ['12', 1000], 
                               ['13', 850]]
                }
            ];
            return data;
        }

        function getStacks(period) {
            var stacks = [
                {
                    values: [{
                        x: 0,
                        y: 2
                    }, {
                        x: 1,
                        y: 4
                    }, {
                        x: 2,
                        y: 2
                    }, {
                        x: 3,
                        y: 3.5
                    }, {
                        x: 4,
                        y: 4
                    }, {
                        x: 5,
                        y: 6
                    }, {
                        x: 6,
                        y: 2
                    }, {
                        x: 7,
                        y: 3
                    }],
                    key: 'Stacks',
                    color: '#2ca02c'
                }
            ];
            return stacks;
        }

        function getFreezers(period) {
            var freezers = [
            {
                key: "Cumulative Return",
                values: [
                    {
                        "label" : "A" ,
                        "value" : 30
                    } ,
                    {
                        "label" : "B" ,
                        "value" : 0
                    } ,
                    {
                        "label" : "C" ,
                        "value" : 32
                    } ,
                    {
                        "label" : "D" ,
                        "value" : 196
                    } ,
                    {
                        "label" : "E" ,
                        "value" : 12
                    } ,
                    {
                        "label" : "F" ,
                        "value" : 98
                    } ,
                    {
                        "label" : "G" ,
                        "value" : 13
                    } ,
                    {
                        "label" : "H" ,
                        "value" : 5
                    }
                ]
            }
        ]
            return freezers;
        }

        return {
            getMoves: getMoves,
            getStacks: getStacks,
            getFreezers: getFreezers
        };
    }

})();