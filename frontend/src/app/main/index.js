export default angular.module('main', [
    require('components/search'),
    require('components/popular-item')
])
.component('main', require('./main-component'))
    .name;
