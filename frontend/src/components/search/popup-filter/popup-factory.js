import Endpoints from './../../../app/constants/Endpoints';
const $inject = ['$http'];

const PopupFactory = function ($http) {
    return {
        getFilters() {
            return $http.get(Endpoints.getFilters);
        }
    };
};

PopupFactory.$inject = $inject;

export default PopupFactory;
