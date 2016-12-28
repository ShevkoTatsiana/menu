import template from './cafe-description.html';
import './cafe-description.less';

const controller = function () {
    this.getDescription = function (info) {
        document.getElementsByClassName('description-block__main')[0].innerHTML = info;
    };
};

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        cafe: '<'
    }
};
