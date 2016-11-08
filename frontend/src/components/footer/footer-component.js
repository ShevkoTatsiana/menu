import template from './footer.html';
import './footer.less';

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
};

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
