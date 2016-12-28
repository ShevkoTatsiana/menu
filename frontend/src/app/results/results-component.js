import template from './results.html';
import './results.less';

const $inject = ['$stateParams', 'ResultsFactory', 'dishService'];

const controller = function ($stateParams, ResultsFactory, dishService) {
    this.search = $stateParams.search;
    this.filter = $stateParams.filter;

    if (this.filter === '') {
        ResultsFactory.restaurants(this.search, 0, 10, 'name')
            .then(response => {
                this.cafes = response.data;
                if (this.cafes.length === 0) {
                    document.getElementsByClassName('results-container__not-found')[0].classList.remove('ng-hide');
                }
                document.getElementById('preloaderContainer').classList.add('ng-hide');
            });
    } else {
        ResultsFactory.customRestaurantsFilter(this.filter)
            .then(response => {
                this.cafes = response.data;
                document.getElementById('preloaderContainer').classList.add('ng-hide');
            });
    }
    dishService.setOrder([]);
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
