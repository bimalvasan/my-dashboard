(function () {
    'use strict';
    angular.module('dashboard.Service', []).factory('dashboardSvc', dashboardSvc);

    function dashboardSvc() {

        function getMoves(period) {
            var data = [
                {
                    "key": "DC 6084D",
                    "values": [['2013-03-12 02:09:04', 500], 
                               ['2013-03-12 03:59:06', 1350], 
                               ['2013-03-12 05:49:04', 1100], 
                               ['2013-03-12 08:23:04', 950], 
                               ['2013-03-12 10:12:04', 750], 
                               ['2013-03-12 11:43:04', 950], 
                               ['2013-03-12 14:39:04', 1350],
                               ['2013-03-12 15:49:04', 1000], 
                               ['2013-03-12 17:19:04', 850]]
                },
//                {
//                    "key": "DC 99SSD",
//                    "values": [[0, 0], [1, 350], [2, 700], [3, 250], [4, 950], [5, 570], [6, 950], [7, 750], [8, 950]]
//                }
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