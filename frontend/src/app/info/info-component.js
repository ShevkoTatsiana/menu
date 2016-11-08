import template from './info.html';
import './info.less';

const $inject = ['InfoFactory'];
const controller = function (InfoFactory) {
    const queries = window.location.hash;
    const index = parseInt(queries.lastIndexOf('/')) + 1;

    this.id = queries.slice(index);

    InfoFactory.getInfo(this.id)
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
