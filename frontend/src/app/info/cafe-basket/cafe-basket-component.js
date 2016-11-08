import template from './cafe-basket.html';
import './cafe-basket.less';

const controller = function () {
    this.sum = 0;
};

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
