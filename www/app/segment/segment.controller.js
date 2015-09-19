(function () {
    'use strict';
    angular.module('main').controller('SegmentCtrl', SegmentCtrl);

    function SegmentCtrl() {
        var sgmt = this;
        sgmt.segments = [{
            'key': 'Market',
            'value': 'tab.market'
        }, {
            'key': 'Performance',
            'value': 'tab.perf'
        }, {
            'key': 'Productivity',
            'value': 'tab.prod'
        }, {
            'key': 'Move Types',
            'value': 'tab.movetypes'
        }];
    };
})();