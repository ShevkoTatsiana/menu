import Endpoints from './../../app/constants/Endpoints';
const $inject = ['$http'];

const InfoFactory = function ($http) {
    return {
        getInfo(search, page, size, sort) {
            return $http.get(Endpoints.restaurants, {params: {search, page, size, sort}});
        }
    };
};

InfoFactory.$inject = $inject;

export default InfoFactory;
