import Endpoints from './../constants/Endpoints';

const $inject = ['$http'];
const ResultsFactory = function ($http) {
    return {
        restaurants(search, page, size, sort) {
            return require('./data.json');
            //return $http.get(Endpoints.restaurants, {params: {search, page, size, sort}})
        }
    };
};
ResultsFactory.$inject = $inject;

export default ResultsFactory;
