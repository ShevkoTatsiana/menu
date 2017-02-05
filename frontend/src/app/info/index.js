export default angular.module('info', [
    require('./cafe-headline'),
    require('./cafe-basket'),
    require('./cafe-gallery'),
    require('./cafe-description')
])
    .component('info', require('./info-component'))
    .factory('InfoFactory', require('./info-factory'))
    .factory('ResultsFactory', require('../results/results-factory'))
    .name;
