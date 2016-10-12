import template from './cafe-preview.html';
import './cafe-preview.less';

const controller = function () {
    this.logoImg = '';
    this.stars = ['star-5', 'star-4', 'star-3', 'star-2', 'star-1'];
    this.openStatus ='Закрыто';
    this.reviewNumb ='291 отзыв';
    this.cafeDistance ='1,1 км';
};

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        cafe: "<"
    }
};


