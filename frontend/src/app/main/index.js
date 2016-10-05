export default angular.module('main', [
    require('components/search'),
    require('components/mainblks')
])
    .component('main', require('./main_component'))
    .name;
