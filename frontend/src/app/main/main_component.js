import template from './main.html';
import './main.less';

const controller = function () {
    this.name = 'Katy';
};

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
