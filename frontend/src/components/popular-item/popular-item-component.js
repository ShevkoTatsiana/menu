import template from './popular-item.html';
import './popular-item.less';

const controller = function () {
    this.blocks = [
        {
            title: 'Суши',
            img: './img/home-sushi.jpg'
        },
        {
            title: 'Пицца',
            img: './img/home-piza.jpg'
        },
        {
            title: 'Бургеры',
            img: './img/home-burger.jpg'
        },
        {
            title: 'Стейки',
            img: './img/home-meat.jpg'
        }
    ];
};

export default {
    template,
    controller,
    controllerAs: 'vm'
};
