import template from './dish-preview.html';
import './dish-preview.less';

const controller = function () {
    this.serverUrl = 'http://178.124.206.44';
    this.number = 1;

    this.plus = function () {
        this.number = parseInt(this.number, 10) + 1;
    };
    this.minus = function () {
        if (this.number > 0) {
            this.number = parseInt(this.number, 10) - 1;
        } else {
            this.number = 0;
        }
    };
    this.dishPopup = function (index) {
        document.getElementsByClassName('dish-popup__container')[0].classList.remove('ng-hide');
        document.getElementsByClassName('dish-popup__container')[0].classList.add(index);
    };
};

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        dish: '<'
    }
};
