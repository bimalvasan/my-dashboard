(function () {
    'use strict';
    angular.module('main').controller('ProductivityCtrl', ProductivityCtrl);

    function ProductivityCtrl() {
        var vm = this;
        vm.options = {
            chart: {
                type: 'pieChart',
                height: 150,
                donut: true,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: false,
                transitionDuration: 500,
                showLegend: false
            }
        };

        vm.data = {
            us: [
                {
                    key: "One",
                    y: 5
            },
                {
                    key: "Two",
                    y: 2
            }
        ],
            uk: [
                {
                    key: "One",
                    y: 7
            },
                {
                    key: "Two",
                    y: 1
            }
        ],
            ca: [
                {
                    key: "One",
                    y: 2
            },
                {
                    key: "Two",
                    y: 2
            }
        ]
        };
    };
})();