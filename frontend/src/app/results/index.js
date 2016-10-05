export default angular.module('results', [
    require('components/search')
])
    .component('results', require('./results_component'))
    .factory('ResultsFactory', require('./results_factory'))
    .name;
