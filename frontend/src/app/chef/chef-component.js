import template from './chef.html';
import './chef.less';

const $inject = ['ChefFactory'];

const controller = function (ChefFactory) {
    ChefFactory.getOrder()
        .then(response => {
            this.orderTable = response.data;
        });

    if (angular.isUndefined(this.orderTable)) {
        this.orderTable = ChefFactory.getOrderData();
    }
    document.getElementById('preloaderContainer').classList.add('ng-hide');
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
