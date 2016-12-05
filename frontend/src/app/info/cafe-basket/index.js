export default angular.module('cafeBasket', [])
    .component('cafeBasket', require('./cafe-basket-component'))
    .service('dishService', require('../../dishes/dish-service'))
    .name;
