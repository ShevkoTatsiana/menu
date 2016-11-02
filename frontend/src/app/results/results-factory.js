import Endpoints from './../constants/Endpoints';

const $inject = ['$http'];
const ResultsFactory = function ($http) {
    return {
        restaurants(search, page, size, sort) {
            return $http.get(Endpoints.restaurants, {params: {search, page, size, sort}});
        },
        customRestaurantsFilter(filtr) {
            return $http.get(Endpoints.filter, {params: {filtr}});
        }
    };
};

ResultsFactory.$inject = $inject;

export default ResultsFactory;
