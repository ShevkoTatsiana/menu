export default angular.module('results', [
    require('components/search')
])
    .component('results', require('./results_component'))
    .name;
