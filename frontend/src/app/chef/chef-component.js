import template from './chef.html';
import './chef.less';

const $inject = ['ChefFactory'];

const controller = function (ChefFactory) {
    this.orderTable = ChefFactory.getOrder();
    document.getElementById('preloaderContainer').classList.add('ng-hide');
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
