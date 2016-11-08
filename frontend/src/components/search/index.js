export default angular.module('search', [
    require('components/search/popup-filter')
])
    .component('search',
        require('./search_component')
    ).name;
