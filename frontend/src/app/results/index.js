export default angular.module('results', [
    require('./search-filter'),
    require('./cafe-preview'),
    require('components/search'),
    require('./filter-buttons'),
    require('./pagination')
])
    .component('results', require('./results-component'))
    .service('dishService', require('../dishes/dish-service'))
    .factory('ResultsFactory', require('./results-factory'))
    .name;
