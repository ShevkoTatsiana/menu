export default angular.module('main', [
    require('components/search')
])
    .component('main', require('./main_component'))
    .name;
