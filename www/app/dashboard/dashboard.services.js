(function () {
    'use strict';
    angular.module('dashboard.Service', []).factory('dashboardSvc', dashboardSvc);

    function dashboardSvc() {

        function getMoves(period) {
            var data = [
                {
                    "key": "DC 6084D",
                    "values": [[0, 500], [1, 1350], [2, 1100], [3, 950], [4, 750], [5, 950], [6, 1350], [7, 1000], [8, 850]]
                },
                {
                    "key": "DC 99SSD",
                    "values": [[0, 0], [1, 350], [2, 700], [3, 250], [4, 950], [5, 570], [6, 950], [7, 750], [8, 950]]
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