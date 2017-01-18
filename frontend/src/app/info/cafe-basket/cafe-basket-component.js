import template from './cafe-basket.html';
import './cafe-basket.less';

const $inject = ['$rootScope', 'dishService', '$stateParams'];
const controller = function ($rootScope, dishService, $stateParams) {
    const that = this;
    that.dishGroup = $stateParams.group;

    that.sum = 0;
    that.orderList = dishService.getOrder();
    if (that.orderList.length > 0) {
        for (let i = 0; i < that.orderList.length; i = i + 1) {
            const currientOrder = that.orderList[i];

            that.sum = that.sum + currientOrder.number * currientOrder.price;
        }
        if (document.getElementsByClassName('cafe-basket__button')[0].classList.contains('basket-active') === false) {
            document.getElementsByClassName('cafe-basket__button')[0].classList.add('basket-active');
        }
    }

    const destroyMyEvent = $rootScope.$on('myevent', function (event, data) {
        that.orderList.push(data);
        that.sum = that.sum + parseInt(data.number, 10) * parseFloat(data.price);
        dishService.setOrder(that.orderList);
        if (document.getElementsByClassName('cafe-basket__button')[0].classList.contains('basket-active') === false) {
            document.getElementsByClassName('cafe-basket__button')[0].classList.add('basket-active');
        }
    });

    $rootScope.$on('$locationChangeSuccess', function (event, newUrl, oldUrl) {
       if (/dishes/.test(newUrl) === true && /info/.test(oldUrl) === true) {
            destroyMyEvent();
       } else if (/dishes/.test(oldUrl) === true && /info/.test(newUrl) === true) {
            destroyMyEvent();
       } else if (/dishes\/\d\/\S+/.test(oldUrl) === true && /dishes\/\d\/$/.test(newUrl) === true) {
            destroyMyEvent();
       }
    });

    that.plusOne = function (index) {
        that.orderList[index].number = that.orderList[index].number + 1;
        that.sum = that.sum + that.orderList[index].price;
        dishService.setOrder(that.orderList);
    };
    that.minusOne = function (index) {
        const minusNumber = that.orderList[index].number;

        if (minusNumber > 1) {
            that.orderList[index].number = that.orderList[index].number - 1;
            that.sum = that.sum - that.orderList[index].price;
        } else {
            that.orderList[index].number = 1;
        }
        dishService.setOrder(that.orderList);
    };
    that.deleteOne = function (index) {
        that.sum = that.sum - that.orderList[index].number * that.orderList[index].price;
        that.orderList.splice(index, 1);
        dishService.setOrder(that.orderList);
        if (that.sum === 0) {
            document.getElementsByClassName('cafe-basket__button')[0].classList.remove('basket-active');
        }
    };
    that.getSum = function () {
        if (that.sum === 0) {
            return 0;
        }
        return (Math.round(that.sum / 0.01) * 0.01).toFixed(2);
    };
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
