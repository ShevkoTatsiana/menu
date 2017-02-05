import template from './popup-filter.html';
import './popup-filter.less';

const $inject = ['PopupFactory', '$state', 'States'];

const controller = function (PopupFactory, $state, States) {
    PopupFactory.getFilters()
        .then(response => {
            this.filters = response.data;
        });

    if (angular.isUndefined(this.filters)) {
        this.filters = PopupFactory.getFiltersData();
    }
    this.searchFilter = filters => {
        const filter = angular.toJson(filters);

        $state.go(States.RESULTS, {filter});
    };

    this.setRating = function (number) {
        angular.forEach(this.filters[5].filtersList, function (oneStar) {
            oneStar.value = false;
        });
        this.filters[5].filtersList[number - 1].value = true;
    };
    this.Hide = function () {
        document.getElementById('popupFilter').parentNode.classList.add('ng-hide');
    };
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
