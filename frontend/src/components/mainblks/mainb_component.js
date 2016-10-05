import template from './mainblks.html';
import './mainblks.less';

const controller = function () {
    this.blocks = [
        {
            title:"Популярные блюда",
            img:'components/mainblks/img/home-popular.jpg',
            class:''
        },
        {
            title:"Суши",
            img:'components/mainblks/img/home-sushi.jpg',
            class:''
        },
        {
            title:"Пицца",
            img:'components/mainblks/img/home-piza.jpg',
            class:''
        },
        {
            title:"Акция",
            img:'components/mainblks/img/home-coffee.jpg',
            class:'ta-action'
        },
        {
            title:"Бургеры",
            img:'components/mainblks/img/home-burger.jpg',
            class:''
        },
        {
            title:"Стейки",
            img:'components/mainblks/img/home-meat.jpg',
            class:''
        }
    ];
};

export default {
    template,
    controller,
    controllerAs: 'vm'
};
