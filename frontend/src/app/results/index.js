export default angular.module('results', [
    require('components/search'),
    require('components/cafeResult'),
    require('components/cafeFilter')
])
    .component('results', require('./results_component'))
    .name;
