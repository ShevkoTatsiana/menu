import template from './info.html';
import './info.less';

const $inject = ['InfoFactory'];
const controller = function (InfoFactory) {
    this.cafe = InfoFactory.getInfo();
};

controller.$inject = $inject;


export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
