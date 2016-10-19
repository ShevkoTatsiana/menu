const $inject = ['$http'];

const InfoFactory = function ($http) {
    return {
        getInfo() {
            return require('./data.json');
            //return $http.get(Endpoints.restaurants, {params: {search, page, size, sort}})
        }
    };
};

InfoFactory.$inject = $inject;

export default InfoFactory;
