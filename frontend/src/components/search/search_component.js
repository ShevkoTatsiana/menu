import template from './search.html';
import './search.less';

const $inject = ['$state', 'States'];
const controller = function ($state, States) {
    this.search = search => {
        $state.go(States.RESULTS, {search});
    };
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        searchFunction: '<'
    }
};
