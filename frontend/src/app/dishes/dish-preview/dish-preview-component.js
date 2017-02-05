import template from './dish-preview.html';
import './dish-preview.less';

const $inject = ['$rootScope'];
const controller = function ($rootScope) {
    //this.serverUrl = 'http://178.124.206.44';
    this.serverUrl = '';
    this.number = 1;

    this.plus = function () {
        this.number = parseInt(this.number, 10) + 1;
    };
    this.minus = function () {
        if (this.number > 1) {
            this.number = parseInt(this.number, 10) - 1;
        } else {
            this.number = 1;
        }
    };
    this.dishPopup = function (index) {
        document.getElementsByClassName('dish-popup__container')[0].classList.remove('ng-hide');
        document.getElementsByClassName('dish-popup__container')[0].classList.add(index);
    };
    this.emitEvent = function () {
        const data = {title: this.dish.name, number: this.number, price: this.dish.price};

        $rootScope.$emit('myevent', data);
    };
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        dish: '<'
    }
};

