import template from './popular-item.html';
import './popular-item.less';

const controller = function () {
    this.blocks = [
        {
            title:"Популярные блюда",
            img:'./img/home-popular.jpg',
            class:''
        },
        {
            title:"Суши",
            img:'./img/home-sushi.jpg',
            class:''
        },
        {
            title:"Пицца",
            img:'./img/home-piza.jpg',
            class:''
        },
        {
            title:"Акция",
            img:'./img/home-coffee.jpg',
            class:'ta-action'
        },
        {
            title:"Бургеры",
            img:'./img/home-burger.jpg',
            class:''
        },
        {
            title:"Стейки",
            img:'./img/home-meat.jpg',
            class:''
        }
    ];
};

export default {
    template,
    controller,
    controllerAs: 'vm'
};
