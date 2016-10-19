const $inject = ['$http'];

const PopupFactory = function ($http) {
    return {
        getFilters() {
            return require('./data.json');
            //return $http.get(Endpoints.restaurants, {params: {search, page, size, sort}})
        }
    };
};

PopupFactory.$inject = $inject;

export default PopupFactory;
