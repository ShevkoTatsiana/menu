import template from './dishes.html';
import './dishes.less';

const $inject = ['$stateParams', 'InfoFactory'];
const controller = function ($stateParams, InfoFactory) {
    this.cafeIndex = $stateParams.cafe;

    InfoFactory.getInfo(this.cafeIndex)
        .then(response => {
            this.cafe = response.data;
            document.getElementById('preloaderContainer').classList.add('ng-hide');
        });

    /* this.cafe = InfoFactory.getInfo();
     document.getElementById('preloaderContainer').classList.add('ng-hide');*/
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
