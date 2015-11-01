(function (directives) {
    'use strict';
    directives.directive('slider', function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                element.bind('mouseenter', function() {
                    console.log('enter');
                });

                element.bind('mouseleave', function() {
                    console.log('left');
                });

                element.bind('onclick', function() {
                    console.log('clock');
                });
            }
        };
    });
}(angular.module('slp.directives')));