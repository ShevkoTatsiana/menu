import Endpoints from './../constants/Endpoints';

const $inject = ['$http'];
const ResultsFactory = function ($http) {
    return {
        restaurants(search, page, size, sort) {
            return $http.get(Endpoints.restaurants, {params: {search, page, size, sort}});
        },
        customRestaurantsFilter(params) {
            const kitchen = params.kitchen;
            const category = params.dishes;
            const clazz = params.clazz;
            const type = params.type;
            const others = params.others;
            const rating = params.rating;

            return $http.get(Endpoints.filter, {params: {kitchen, category, clazz, type, others, rating}});
        }
    };
};

ResultsFactory.$inject = $inject;

export default ResultsFactory;
