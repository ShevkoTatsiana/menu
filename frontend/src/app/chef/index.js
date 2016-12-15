export default angular.module('chef', [])
    .component('chef', require('./chef-component'))
    .factory('ChefFactory', require('./chef-factory'))
    .name;
