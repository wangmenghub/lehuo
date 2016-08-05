/**
 * Created by Administrator on 2016/6/27 0027.
 */
angular.module('app', [])
    .directive('harder', function () {
        return {
            restrict: 'E',
            scope: {
                title: '@'
            },
            templateUrl: '../directive/harder.html',
            replace: true
        }
    })
    .directive('navbar', function () {
        return {
            restrict: 'E',
            scope: {
                title: '@'
            },
            templateUrl: '../html/nav.html',
            replace: true
        }
    });