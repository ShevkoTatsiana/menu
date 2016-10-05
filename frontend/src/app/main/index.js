export default angular.module('main', [
    require('components/headerPage'),
    require('components/search'),
    require('components/footerPage')
])
    .component('main', require('./main_component'))
    .name;
