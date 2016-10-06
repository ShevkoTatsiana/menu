import template from './cafeResult.html';
import './cafeResult.less';

const controller = function () {
    this.logoImg = 'components/cafeResult/images/fotoCafe.jpg';
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


