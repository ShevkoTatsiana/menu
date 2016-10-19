import template from './search-filter.html';
import './search-filter.less';

const $inject = ['PopupFactory'];
const controller = function (PopupFactory) {
    this.filters = PopupFactory.getFilters();

    this.filtersTitle = [{value: 'Кухни', name: 'Кухня'},
        {value: 'Блюдо', name: 'Блюда'},
        {value: 'Класс', name: 'Класс'}];

    this.typeFilt = [
        {
            typeCheck: 'cafe',
            typePlace: 'Кафе'
        },
        {
            typeCheck: 'bar',
            typePlace: 'Бар'
        },
        {
            typeCheck: 'pab',
            typePlace: 'Паб'
        },
        {
            typeCheck: 'rest',
            typePlace: 'Ресторан'
        },
        {
            typeCheck: 'pit',
            typePlace: 'Пиццерия'
        },
        {
            typeCheck: 'sushiB',
            typePlace: 'Суши-бар'
        }
    ];
    this.otherFilt = [
        {
            otherCheck: 'lanch',
            other: 'Обеденное меню'
        },
        {
            otherCheck: 'book',
            other: 'Бронироавние столика'
        },
        {
            otherCheck: 'away',
            other: 'Заказ на вынос'
        },
        {
            otherCheck: 'act',
            other: 'Акции'
        }
    ];
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};


