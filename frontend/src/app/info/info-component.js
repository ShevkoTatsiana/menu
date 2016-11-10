import template from './info.html';
import './info.less';

const $inject = ['$stateParams', 'InfoFactory'];
const controller = function ($stateParams, InfoFactory) {
    this.cafeIndex = $stateParams.cafe;

    InfoFactory.getInfo(this.cafeIndex)
        .then(response => {
            this.cafe = response.data;
            document.getElementById('preloaderContainer').classList.add('ng-hide');
        });
    document.getElementById('cafe-title').classList.add('hide-info');
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};

