import template from './info.html';
import './info.less';

const $inject = ['InfoFactory'];
const controller = function (InfoFactory) {
    this.cafe = InfoFactory.getInfo();
    document.getElementById('preloaderContainer').classList.add('ng-hide');
};

controller.$inject = $inject;


export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
