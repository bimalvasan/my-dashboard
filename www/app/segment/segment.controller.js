(function(){
    'use strict';
    angular.module('main').controller('SegmentCtrl', SegmentCtrl);
    
    function SegmentCtrl(){
        var sgmt = this;
        sgmt.segments = ['Market','Performance','Productivity','Move Types'];
    };
})();