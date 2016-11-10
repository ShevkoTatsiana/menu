import template from './results.html';
import './results.less';

const $inject = ['$stateParams', 'ResultsFactory'];

const controller = function ($stateParams, ResultsFactory) {
    this.search = $stateParams.search;
    this.filter = $stateParams.filter;

    if (this.filter === '') {
        ResultsFactory.restaurants(this.search, 0, 10, 'name')
            .then(response => {
                this.cafes = response.data;
                document.getElementById('preloaderContainer').classList.add('ng-hide');
            });
    } else {
        ResultsFactory.customRestaurantsFilter(this.filter)
            .then(response => {
                this.cafes = response.data;
                document.getElementById('preloaderContainer').classList.add('ng-hide');
            });
    }
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
