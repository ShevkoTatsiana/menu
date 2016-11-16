export default angular.module('dishes', [
    require('app/info/cafe-headline'),
    require('app/info/cafe-basket'),
    require('./dish-preview')
])
    .component('dishes', require('./dishes-component'))
    .factory('InfoFactory', require('../info/info-factory'))
    .name;
