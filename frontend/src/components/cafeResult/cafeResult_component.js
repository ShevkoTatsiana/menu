import template from './cafeResult.html';
import './cafeResult.less';

const controller = function () {
    this.logoImg = 'components/cafeResult/images/fotoCafe.jpg';
    this.cafeLink = '#';
    this.name = 'Кафе-бар';
    this.reviewNumb = '291 отзыв';
    this.address = 'г. Минск, пр-т Независимости, 83';
    this.cafeDistance = '1,1 км';
    this.kitchen = 'Белорусская, Европейская, Итальянская, Японская';
    this.rating = '$';
    this.stars = ['star-5', 'star-4', 'star-3', 'star-2', 'star-1'];
    this.timeWork ='Закрыто';
};

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};


