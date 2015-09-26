(function () {
    'use strict';
    angular.module('main').controller('ProductivityCtrl', ProductivityCtrl);

    function ProductivityCtrl() {
        var vm = this;

        var margin = {
            top: 20,
            right: 20,
            bottom: 20,
            left: 10
        };

        var chart = {
            opt: {
                type: 'pieChart',
                height: 170,
                margin: margin,
                donut: true,
                x: function (d) {
                    return d.key;
                },
                y: function (d) {
                    return d.y;
                },
                showLabels: false,
                transitionDuration: 500,
                showLegend: false,
                color: ['#C620D2', '#528BE8', '#45B29D']
            },
        };

        vm.options = {
            us: {
                chart: chart.opt,
                title: {
                    enable: true,
                    text: 'US',
                    css: {
                        'text-align': 'center',
                        'margin': '10px 13px 0px 7px'
                    }
                }
            },
            uk: {
                chart: chart.opt,
                title: {
                    enable: true,
                    text: 'UK',
                    css: {
                        'text-align': 'center',
                        'margin': '10px 13px 0px 7px'
                    }
                }
            },
            ca: {
                chart: chart.opt,
                title: {
                    enable: true,
                    text: 'MX',
                    css: {
                        'text-align': 'center',
                        'margin': '10px 13px 0px 7px'
                    }
                }
            }
        }

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
        
        vm.selectedGraphChange = function(){
            vm.settingsList.forEach(function(item){
                if(item.checked){
                    vm.selectedGraph = item.text.split(' ')[0].toLowerCase();
                }
            });
        };

        vm.settingsList = [
            {
                text: "Area Chart",
                checked: false
            },
            {
                text: "Line Chart",
                checked: false
            },
            {
                text: "Bar Chart",
                checked: false
            },
            {
                text: "Pie Chart",
                checked: true
            }
        ];
    };
})();