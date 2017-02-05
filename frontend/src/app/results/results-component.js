import template from './results.html';
import './results.less';

const $inject = ['$stateParams', 'ResultsFactory', 'dishService'];

const controller = function ($stateParams, ResultsFactory, dishService) {
    this.search = $stateParams.search;
    this.filter = $stateParams.filter;
    this.filterParams = [];
    if (this.filter === '') {
        if (this.search !== '') {
            this.restName = this.search;
        }

    /*    ResultsFactory.restaurants(this.search, 0, 10, 'name')
            .then(response => {
                this.cafes = response.data;
                document.getElementById('preloaderContainer').classList.add('ng-hide');
            });
        if (angular.isUndefined(this.cafes)) {*/
            this.cafes = ResultsFactory.restaurantsData();
            document.getElementById('preloaderContainer').classList.add('ng-hide');

     //   };
    } else {
        const filterArray = angular.fromJson(this.filter).parametrses;
        const paramsObject = {};

        for (let i = 0; i < filterArray.length; i = i + 1) {
            const params = filterArray[i].filtersList;
            const requestType = ['kitchen', 'dishes', 'clazz', 'type', 'others', 'rating'];
            const group = [];

            for (let j = 0; j < params.length; j = j + 1) {
                if (params[j].value === true) {
                    group.push(params[j].filterName);
                }
            }
            if (group.length !== 0) {
                paramsObject[requestType[i]] = group.join(',');
            }
        }
     /*   ResultsFactory.customRestaurantsFilter(paramsObject)
            .then(response => {
                this.cafes = response.data;
                document.getElementById('preloaderContainer').classList.add('ng-hide');
            });*/
        this.restKitchen = paramsObject.kitchen;
        this.restCategory = paramsObject.dishes;
        this.restClass = paramsObject.clazz;
        this.restType = paramsObject.type;
        this.containsComparator = function (expected, actual) {
            return actual.indexOf(expected) > -1;
        };
        this.cafes = ResultsFactory.restaurantsData();
        document.getElementById('preloaderContainer').classList.add('ng-hide');
    }
    dishService.setOrder([]);
    dishService.clearOrderEvent();
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
