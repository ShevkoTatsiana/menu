import template from './footerPage.html';
import './footerPage.less';

const controller = function footerLink() {
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
            name1: 'components/footerPage/images/fbPict.jpg',
            alt: 'facebook'
        },
        {
            adress: '#',
            name1: 'components/footerPage/images/vkPict.jpg',
            alt: 'vk'
        },
        {
            adress: '#',
            name1: 'components/footerPage/images/pPict.jpg',
            alt: 'p'
        }
    ];
};

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};

