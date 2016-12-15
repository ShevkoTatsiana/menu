const $inject = ['$http'];

const ChefFactory = function ($http) {
    return {
        getOrder() {
            return require('./data.json');
        }
    };
};

ChefFactory.$inject = $inject;

export default ChefFactory;
