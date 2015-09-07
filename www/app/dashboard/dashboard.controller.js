(function () {
    'use strict';
    angular.module('main').controller('DashboardCtrl', DashboardCtrl);

    function DashboardCtrl() {
        var dash = this;
        dash.activeButton = 1;
        dash.onDayClick = onDayClick;
        dash.onWeekClick = onWeekClick;
        dash.onMonthClick = onMonthClick;
        dash.onYearClick = onYearClick;
        
        init();

        function init() {
            dash.activeButton = 1;
            console.log('Day');

            dash.moves = {
                config: {
                    title: 'All Moves',
                    tooltips: true,
                    labels: false,
                    mouseover: function () {},
                    mouseout: function () {},
                    click: function () {},
                    legend: {
                        //display: true,
                        //could be 'left, right'
                        position: 'left'
                    }
                }
            };

            dash.stacks = {
                config: {
                    title: 'All Stacks',
                    tooltips: true,
                    labels: false,
                    mouseover: function () {},
                    mouseout: function () {},
                    click: function () {},
                    legend: {
                        //display: true,
                        //could be 'left, right'
                        position: 'left'
                    }
                }
            };

            dash.freezers = {
                config: {
                    title: 'All Freezers',
                    tooltips: true,
                    labels: false,
                    mouseover: function () {},
                    mouseout: function () {},
                    click: function () {},
                    legend: {
                        //display: true,
                        //could be 'left, right'
                        position: 'left'
                    }
                }
            };
        
            onDayClick();
        }

        function onDayClick() {
            dash.data = {
                series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
                data: [{
                    x: "12:00 AM",
                    y: [100, 500, 0],
                    tooltip: "this is tooltip"
                }, {
                    x: "12:00 PM",
                    y: [300, 100, 100]
                }, {
                    x: "12:00 AM",
                    y: [351]
                }]
            };
        }

        function onWeekClick() {
            dash.activeButton = 2;
            dash.data = {
                series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
                data: [{
                    x: "12:00 AM",
                    y: [50, 400, 0],
                    tooltip: "this is tooltip"
                }, {
                    x: "12:00 PM",
                    y: [200, 150, 100]
                }, {
                    x: "12:00 AM",
                    y: [451]
                }]
            };
        }

        function onMonthClick() {
            dash.activeButton = 3;
            dash.data = {
                series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
                data: [{
                    x: "12:00 AM",
                    y: [150, 450, 0],
                    tooltip: "this is tooltip"
                }, {
                    x: "12:00 PM",
                    y: [200, 50, 100]
                }, {
                    x: "12:00 AM",
                    y: [251]
                }]
            };
        }

        function onYearClick() {
            dash.activeButton = 4;
            dash.data = {
                series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
                data: [{
                    x: "12:00 AM",
                    y: [250, 100, 50],
                    tooltip: "this is tooltip"
                }, {
                    x: "12:00 PM",
                    y: [500, 100, 200]
                }, {
                    x: "12:00 AM",
                    y: [251]
                }]
            };
        }
    };
})();