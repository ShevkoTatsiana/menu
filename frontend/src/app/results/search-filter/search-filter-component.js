import template from './search-filter.html';
import './search-filter.less';

const $inject = ['PopupFactory'];
const controller = function (PopupFactory) {
 /*   PopupFactory.getFilters()
        .then(response => {
            this.filters = response.data;
        });
*/
    this.filters = PopupFactory.getFilters();
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};


