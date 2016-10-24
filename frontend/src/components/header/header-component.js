import template from './header.html';
import './header.less';

const controller = function headerLink() {
    this.logoAdress = '#';
    this.headerLink = [
        {
            linkAdress: '#',
            linkId: 'nearPict',
            linkText: 'Найти ближайшее'
        },
        {
            linkAdress: '#',
            linkId: 'androidPict',
            linkText: 'Android приложение'
        },
        {
            linkAdress: '#',
            linkId: 'enterPict',
            linkText: 'Войти / Регистрация'
        }
    ];
};

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};

