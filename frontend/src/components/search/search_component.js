import template from './search.html';
import './search.less';

const $inject = ['$state', 'States'];
const controller = function ($state, States) {
    this.search = search => {
        $state.go(States.RESULTS, {search});
    };

    this.open = function () {
       // document.getElementById('popUpFilter').style.top = document.getElementById('search-form').scrollTop;
        document.getElementById('popUpFilter').parentNode.classList.remove('ng-hide');
    }
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
