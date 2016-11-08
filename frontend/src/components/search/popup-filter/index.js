export default angular.module('popupFilter', [])
    .component('popupFilter', require('./popup-filter-component'))
    .factory('PopupFactory', require('./popup-factory'))
    .name;
