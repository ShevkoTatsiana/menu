import template from './notfound.html';

const $inject = ['$stateParams'];
const controller = function ($stateParams) {
    this.search = $stateParams.search;
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
