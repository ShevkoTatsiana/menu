import template from './cafeFilter.html';
import './cafeFilter.less';

const controller = function () {
    this.kitchenFilt = [
        {
            kitchenCheck: 'usa',
            kitchen: 'Американская'
        },
        {
            kitchenCheck: 'asia',
            kitchen: 'Азиатксая'
        },
        {
            kitchenCheck: 'arm',
            kitchen: 'Армянская'
        },
        {
            kitchenCheck: 'bel',
            kitchen: 'Белорусская'
        },
        {
            kitchenCheck: 'gr',
            kitchen: 'Грузинская'
        },
        {
            kitchenCheck: 'ind',
            kitchen: 'Индийская'
        },
        {
            kitchenCheck: 'uta',
            kitchen: 'Итальянская'
        },
        {
            kitchenCheck: 'kvz',
            kitchen: 'Кавказская'
        },
        {
            kitchenCheck: 'chi',
            kitchen: 'Китайская'
        },
        {
            kitchenCheck: 'usa',
            kitchen: 'Американская'
        },
        {
            kitchenCheck: 'rus',
            kitchen: 'Русская'
        },
        {
            kitchenCheck: 'ukr',
            kitchen: 'Украинская'
        },
        {
            kitchenCheck: 'fra',
            kitchen: 'Французская'
        },
        {
            kitchenCheck: 'jap',
            kitchen: 'Японская'
        },
        {
            kitchenCheck: 'eur',
            kitchen: 'Европейская'
        }
    ];
    this.dishFilt = [
        {
            dishCheck: 'pit',
            dish: 'Пицца'
        },
        {
            dishCheck: 'sush',
            dish: 'Суши'
        },
        {
            dishCheck: 'burg',
            dish: 'Бургеры'
        },
        {
            dishCheck: 'barb',
            dish: 'Шашлыки'
        },
        {
            dishCheck: 'chinFo',
            dish: 'Китайская еда'
        },
        {
            dishCheck: 'steik',
            dish: 'Стейки'
        },
        {
            dishCheck: 'pipe',
            dish: 'Пироги'
        },
        {
            dishCheck: 'veg',
            dish: 'Вегетарианское меню'
        },
        {
            dishCheck: '',
            dish: 'Десерты'
        },
        {
            dishCheck: 'sand',
            dish: 'Сэндвичи'
        },
        {
            dishCheck: 'sous',
            dish: 'Колбаски'
        }
    ];
    this.priceFilt = [
        {
            priceCheck: 'one',
            price: '$'
        },
        {
            priceCheck: 'two',
            price: '$$'
        },
        {
            priceCheck: 'three',
            price: '$$$'
        }
    ];
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

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};


