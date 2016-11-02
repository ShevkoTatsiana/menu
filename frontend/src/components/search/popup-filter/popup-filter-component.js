import template from './popup-filter.html';
import './popup-filter.less';

const $inject = ['PopupFactory', '$state', 'States'];

const controller = function (PopupFactory, $state, States) {
    PopupFactory.getFilters()
        .then(response => {
            this.filters = response.data;
        });
    this.searchFilter = filtr => {
        $state.go(States.RESULTS, {filtr});
    };

    this.setRating = function (number) {
        angular.forEach(this.filters[5].filtersList, function (oneStar) {
            oneStar.value = false;
        });
        this.filters[5].filtersList[number - 1].value = true;
    };
    this.Hide = function () {
        document.getElementById('popUpFilter').parentNode.classList.add('ng-hide');
    };
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
