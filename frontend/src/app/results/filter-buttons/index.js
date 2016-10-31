export default angular.module('filterButtons', [])
    .component('filterButtons', require('./filter-buttons-component'))
    .factory('PopupFactory', require('components/search/popup-filter/popup-factory'))
    .name;
