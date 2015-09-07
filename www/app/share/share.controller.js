(function(){
    'use strict';
    angular.module('main').controller('ShareCtrl', ShareCtrl);
    
    function ShareCtrl(){
        var share = this;
        share.users = ['Share to all Managers', 'Share to all Operators'];
        
    };
})();