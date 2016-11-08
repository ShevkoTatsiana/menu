export default angular.module('searchFilter', [])
    .component('searchFilter', require('./search-filter-component'))
    .factory('PopupFactory', require('components/search/popup-filter/popup-factory'))
    .name;
