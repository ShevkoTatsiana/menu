import template from './info.html';
import './info.less';

const $inject = ['$stateParams', 'InfoFactory', 'ResultsFactory'];
const controller = function ($stateParams, InfoFactory, ResultsFactory) {
    this.cafeIndex = $stateParams.cafe;

    /*InfoFactory.getInfo(this.cafeIndex)
        .then(response => {
            this.cafe = response.data;
            document.getElementById('preloaderContainer').classList.add('ng-hide');
            console.log(angular.toJson(this.cafe));
        });*/
    const cafes = ResultsFactory.restaurantsData();
    this.cafe = cafes[this.cafeIndex - 1];
    document.getElementById('cafe-title').classList.add('hide-info');
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};

