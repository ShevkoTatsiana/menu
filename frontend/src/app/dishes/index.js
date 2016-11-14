export default angular.module('dishes', [
    require('app/info/cafe-headline'),
    require('app/info/cafe-basket')
])
    .component('dishes', require('./dishes-component'))
    .factory('InfoFactory', require('app/info/info-factory'))
    .name;
