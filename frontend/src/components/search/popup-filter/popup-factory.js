import Endpoints from './../../../app/constants/Endpoints';
const $inject = ['$http'];

const PopupFactory = function ($http) {
    return {
        getFilters() {
            return $http.get(Endpoints.getFilters);
        },
        getFiltersData() {
            return require('./data1.json');
        }
    };
};

PopupFactory.$inject = $inject;

export default PopupFactory;
