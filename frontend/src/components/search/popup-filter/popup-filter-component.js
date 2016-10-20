import template from './popup-filter.html';
import './popup-filter.less';

const $inject = ['PopupFactory'];
const controller = function (PopupFactory) {
    PopupFactory.getFilters();

    this.filtersTitle = [{value: 'Кухни', name: 'Кухня'},
        {value: 'Блюдо', name: 'Блюда'},
        {value: 'Класс', name: 'Класс'}];
    this.Hide = function () {
        document.getElementById('popUpFilter').parentNode.classList.add('ng-hide');
    };
};

controller.$inject = $inject;


export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
