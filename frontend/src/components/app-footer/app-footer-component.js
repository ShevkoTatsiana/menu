import template from './app-footer.html';
import './app-footer.less';

const $inject = ['$state', 'States'];
const controller = function footerLink($state, States) {
    this.footerLinkServis = [
        {
            adress: '#',
            servis: 'Как сделать заказ'
        },
        {
            adress: '#',
            servis: 'Способы оплаты'
        },
        {
            adress: '#',
            servis: 'Возврат денежных средств'
        },
        {
            adress: '#',
            servis: 'Доставка'
        },
        {
            adress: '#',
            servis: 'Вопросы и ответы'
        }
    ];
    this.footerLinkAbout = [
        {
            adress: '#',
            infoAbout: 'О нас'
        },
        {
            adress: '#',
            infoAbout: 'Контакты'
        },
        {
            adress: '#',
            infoAbout: 'Партнерам'
        }
    ];
    this.footerLinkImage = [
        {
            adress: '#',
            alt: 'facebook'
        },
        {
            adress: '#',
            alt: 'vk'
        },
        {
            adress: '#',
            alt: 'pa'
        }
    ];
    this.goToChef = () => {
        $state.go(States.CHEF);
    };
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
