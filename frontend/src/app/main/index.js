export default angular.module('main', [
    require('components/search'),
    require('components/mainblks'),
    require('components/headerPage'),
    require('components/footerPage')
])
    .component('main', require('./main_component'))
    .name;
