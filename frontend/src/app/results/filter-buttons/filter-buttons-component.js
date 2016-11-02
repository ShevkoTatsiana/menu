import template from './filter-buttons.html';
import './filter-buttons.less';

const $inject = ['PopupFactory'];
const controller = function (PopupFactory) {
    PopupFactory.getFilters()
        .then(response => {
            this.filters = response.data;
        });

   /* this.filters = PopupFactory.getFilters();*/
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
