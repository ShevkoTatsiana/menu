import template from './search.html';
import './search.less';

const $inject = ['$state', 'States'];
const controller = function ($state, States) {
    this.search = search => {
        $state.go(States.RESULTS, {search});
        document.getElementById('preloaderContainer').classList.remove('ng-hide');
    };

    this.open = function () {
        document.getElementById('popupFilter').parentNode.classList.remove('ng-hide');
    };
    document.getElementById('preloaderContainer').classList.add('ng-hide');
    this.checkSearch = function (EO, value) {
        if (EO.keyCode === 13) {
            EO.preventDefault();
            this.search(value);
        }
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
