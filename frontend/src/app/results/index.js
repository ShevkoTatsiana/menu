export default angular.module('results', [
    require('./search-filter'),
    require('./cafe-preview'),
    require('components/search')

])
    .component('results', require('./results-component'))
    .factory('ResultsFactory', require('./results-factory'))
    .name;
