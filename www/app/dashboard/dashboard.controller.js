(function () {
    'use strict';
    angular.module('main').controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['dashboardSvc'];

    function DashboardCtrl(dashboardSvc) {
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

            var chart = {
                margin: {
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 10
                }
            };

            dash.moves = {
                options: {
                    chart: {
                        type: 'stackedAreaChart',
                        height: 170,
                        margin: chart.margin,
                        x: function (d) {
                            return d[0];
                        },
                        y: function (d) {
                            return d[1];
                        },
                        useVoronoi: false,
                        clipEdge: true,
                        transitionDuration: 500,
                        showControls: false,
                        useInteractiveGuideline: true,
                        xAxis: {
                            showMaxMin: false,
//                            tickFormat: function (d) {
//                                return d3.time.format('%H')(new Date(d))
//                            }
                        },
                        showYAxis: false
                    },
                    title: {
                        enable: true,
                        text: 'ALL MOVES',
                        css: {
                            'text-align': 'left',
                            'margin': '10px 13px 0px 7px'
                        }
                    }
                }
            };

            dash.stacks = {
                options: {
                    chart: {
                        type: 'lineChart',
                        height: 170,
                        margin: chart.margin,
                        x: function (d) {
                            return d.x;
                        },
                        y: function (d) {
                            return d.y;
                        },
                        useInteractiveGuideline: true,
                        dispatch: {
                            stateChange: function (e) {
                                console.log("stateChange");
                            },
                            changeState: function (e) {
                                console.log("changeState");
                            },
                            tooltipShow: function (e) {
                                console.log("tooltipShow");
                            },
                            tooltipHide: function (e) {
                                console.log("tooltipHide");
                            }
                        },
                        showYAxis: false,
                        xAxis: {
                            axisLabel: 'Time'
                        },
                        callback: function (chart) {
                            console.log("!!! lineChart callback !!!");
                        }
                    },
                    title: {
                        enable: true,
                        text: 'TOTAL STACKS',
                        css: {
                            'text-align': 'left',
                            'margin': '10px 13px 0px 7px'
                        }
                    }
                }
            };

            dash.freezers = {
                options: {
                    chart: {
                        type: 'discreteBarChart',
                        height: 170,
                        margin: chart.margin,
                        x: function (d) {
                            return d.label;
                        },
                        y: function (d) {
                            return d.value;
                        },
                        showYAxis: false,
                        showValues: false,
                        valueFormat: function (d) {
                            return d3.format(',.4f')(d);
                        },
                        transitionDuration: 500
                    },
                    title: {
                        enable: true,
                        text: 'ALL FREEZERS',
                        css: {
                            'text-align': 'left',
                            'margin': '10px 13px 0px 7px'
                        }
                    }
                }
            };

            onDayClick();
        }

        function onDayClick() {
            dash.activeButton = 1;
            dash.moves.data = dashboardSvc.getMoves('daily');
            dash.stacks.data = dashboardSvc.getStacks('daily');
            dash.freezers.data = dashboardSvc.getFreezers('daily');
        }

        function onWeekClick() {
            dash.activeButton = 2;
            dash.moves.data = dashboardSvc.getMoves('weekly');
            dash.stacks.data = dashboardSvc.getStacks('weekly');
            dash.freezers.data = dashboardSvc.getFreezers('weekly');
        }

        function onMonthClick() {
            dash.activeButton = 3;
            dash.moves.data = dashboardSvc.getMoves('monthly');
            dash.stacks.data = dashboardSvc.getStacks('monthly');
            dash.freezers.data = dashboardSvc.getFreezers('monthly');
        }

        function onYearClick() {
            dash.activeButton = 4;
            dash.moves.data = dashboardSvc.getMoves('yearly');
            dash.stacks.data = dashboardSvc.getStacks('yearly');
            dash.freezers.data = dashboardSvc.getFreezers('yearly');
        }
    };
})();