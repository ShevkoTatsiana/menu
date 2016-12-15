import template from './filter-buttons.html';
import './filter-buttons.less';

const $inject = ['PopupFactory', '$stateParams', '$state', 'States'];
const controller = function (PopupFactory, $stateParams, $state, States) {
  /*  PopupFactory.getFilters()
        .then(response => {
            this.filters = response.data;
        });*/
    this.filter = $stateParams.filter;
    if (this.filter !== '') {
        this.filters = angular.fromJson(this.filter);
    }
    this.close = filters => {
        const filter = angular.toJson(filters);

        $state.go(States.RESULTS, {filter});
    };
    this.cancelFilters = function () {
        $stateParams.filter = '';
        $state.go(States.RESULTS);
    };
    this.hideCancel = function () {
        const buttonsDiv = document.getElementsByClassName('filter-button__list')[0];

        return getComputedStyle(buttonsDiv).width !== '0px';
    };
};


controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
