import template from './search-filter.html';
import './search-filter.less';

const $inject = ['PopupFactory', '$state', 'States'];
const controller = function (PopupFactory, $state, States) {
    PopupFactory.getFilters()
        .then(response => {
            this.filters = response.data;
        });
    this.searchFilter = filtr => {
        $state.go(States.RESULTS, {filtr});
    };
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};


