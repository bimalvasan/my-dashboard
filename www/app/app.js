// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('main', ['ionic', 'main.controllers', 'dashboard.Service', 'nvd3'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleLightContent();
        }
    });
})

.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider'];

function config($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    $ionicConfigProvider.tabs.position('bottom');
    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
    // setup an abstract state for the tabs directive
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'app/layout/tabs.html'
        })
        // Each tab has its own nav history stack:
        .state('tab.dash', {
            url: '/dash',
            views: {
                'tab-dash': {
                    templateUrl: 'app/dashboard/dashboard.html',
                    controller: 'DashboardCtrl as dash'
                }
            }
        })
        .state('tab.segment', {
            url: '/segment',
            views: {
                'tab-segment': {
                    templateUrl: 'app/segment/segment.html',
                    controller: 'SegmentCtrl as sgmt'
                }
            }
        })
        .state('tab.segment.movetypes', {
            url: '/movetypes',
            views: {
                'tab-segment': {
                    templateUrl: 'app/segment/movetypes.html',
                    controller: 'MoveTypesCtrl as move'
                }
            }
        })
        .state('tab.share', {
            url: '/share',
            views: {
                'tab-share': {
                    templateUrl: 'app/share/share.html',
                    controller: 'ShareCtrl as share'
                }
            }
        })
      .state('tab.more', {
        url: '/more',
        views: {
            'tab-more': {
                templateUrl: 'app/more/more.html',
                controller: 'MoreCtrl'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

}