export default angular.module('info', [
    require('./cafe-headline'),
    require('./cafe-basket')
])
    .component('info', require('./info-component'))
    .factory('InfoFactory', require('./info-factory'))
    .name;
