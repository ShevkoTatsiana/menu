import Endpoints from './../constants/Endpoints';

const $inject = ['$http'];

const ChefFactory = function ($http) {
    return {
        getOrder() {
            return $http.get(Endpoints.order);
        },
        getOrderData() {
            return require('./data.json');
        }
    };
};

ChefFactory.$inject = $inject;

export default ChefFactory;
