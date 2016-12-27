import template from './popular-item.html';
import './popular-item.less';

const controller = function () {
    this.blocks = [
        {
            title: 'Суши',
            img: 'components/popular-item/img/home-sushi.jpg'
        },
        {
            title: 'Пицца',
            img: 'components/popular-item/img/home-piza.jpg'
        },
        {
            title: 'Бургеры',
            img: 'components/popular-item/img/home-burger.jpg'
        },
        {
            title: 'Стейки',
            img: 'components/popular-item/img/home-meat.jpg'
        }
    ];
};

export default {
    template,
    controller,
    controllerAs: 'vm'
};
