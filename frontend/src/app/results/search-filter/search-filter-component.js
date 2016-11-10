import template from './search-filter.html';
import './search-filter.less';

const $inject = ['PopupFactory', '$state', 'States', '$stateParams'];
const controller = function (PopupFactory, $state, States, $stateParams) {
    this.filter = $stateParams.filter;

    if (this.filter === '') {
        PopupFactory.getFilters()
            .then(response => {
                this.filters = response.data;
            });
    } else {
        this.filters = angular.fromJson(this.filter);
    }
    this.searchFilter = filters => {
        const filter = angular.toJson(filters);

        $state.go(States.RESULTS, {filter});
    };
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
