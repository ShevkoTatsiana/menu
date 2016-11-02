import template from './results.html';
import './results.less';

const $inject = ['$stateParams', 'ResultsFactory'];

const controller = function ($stateParams, ResultsFactory) {
    this.search = $stateParams.search;
    this.filtr = $stateParams.filtr;

    ResultsFactory.restaurants(this.search, 0, 10, 'name')
        .then(response => {
            this.cafes = response.data;
            document.getElementById('preloaderContainer').classList.add('ng-hide');
        });

    ResultsFactory.customRestaurantsFilter(this.filtr)
        .then(response => {
            this.cafes = response.data;
            document.getElementById('preloaderContainer').classList.add('ng-hide');
        });
};
controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
