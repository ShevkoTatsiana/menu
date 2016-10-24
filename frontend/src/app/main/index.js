export default angular.module('main', [
    require('components/search'),
    require('components/popular-item'),
    require('components/actions-slider')
])
    .component('main', require('./main-component'))
    .name;
