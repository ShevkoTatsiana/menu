import template from './dishes.html';
import './dishes.less';

const $inject = ['$stateParams', 'InfoFactory', 'ResultsFactory'];
const controller = function ($stateParams, InfoFactory, ResultsFactory) {
    this.cafeIndex = $stateParams.cafe;
    this.dishGroup = $stateParams.group;
    if (this.dishGroup !== '') {
        this.dishFilter = angular.fromJson(this.dishGroup);
    }
    const cafes = ResultsFactory.restaurantsData();
    this.cafe = cafes[this.cafeIndex - 1];
    this.menu = InfoFactory.getDish();
  /*  if (this.dishGroup === '') {
        InfoFactory.getInfo(this.cafeIndex)
            .then(response => {
                this.cafe = response.data;
                document.getElementById('preloaderContainer').classList.add('ng-hide');
            });*/
       /* InfoFactory.getMenu(this.cafeIndex)
            .then(response => {
                this.menu = response.data;
            });
    } else {
        const dishFilter = angular.fromJson(this.dishGroup);

        InfoFactory.getInfo(this.cafeIndex)
            .then(response => {
                this.cafe = response.data;
                document.getElementById('preloaderContainer').classList.add('ng-hide');
            });
        InfoFactory.getMenu(this.cafeIndex, dishFilter)
            .then(response => {
                this.menu = response.data;
            });
    }*/

    const width = 625;
    const count = 1;
    const list = document.getElementsByClassName('dish-gallery')[0];
    const listElems = document.getElementsByClassName('dish-popup__inner');

    this.indexDish = 0;
    this.checkClassPopup = function () {
        const classListPopup = document.getElementsByClassName('dish-popup__container')[0].classList;
        const checkClass = classListPopup[classListPopup.length - 1];

        if (checkClass === 'ng-hide') {
            this.indexDish = 0;
        } else {
            this.indexDish = parseInt(checkClass, 10);
        }
        this. position = -width * (this.indexDish - 1);
        list.style.marginLeft = `${this.position}px`;
    };

    this.nextSlide = true;
    this.prevSlide = true;

    this.previous = function () {
        if (this.prevSlide === true && this.position !== 0) {
            this.position = Math.min(this.position + width * count, 0);
            if (this.position === 0) {
                this.prevSlide = false;
            }
        } else {
            this.position = -width * (listElems.length - count);
            this.prevSlide = true;
        }
        list.style.marginLeft = `${this.position}px`;
    };

    this.next = function () {
        if (this.nextSlide === true && this.position !== (-width * (listElems.length - count))) {
            this.position = Math.max(this.position - width * count, -width * (listElems.length - count));
            if ((-width * (listElems.length - count)) > (this.position - width * count)) {
                this.nextSlide = false;
            }
        } else {
            this.position = 0;
            this.nextSlide = true;
        }
        list.style.marginLeft = `${this.position}px`;
    };
    this.hideDish = function () {
        document.getElementsByClassName('dish-popup__container')[0].classList.remove(this.indexDish);
        document.getElementsByClassName('dish-popup__container')[0].classList.add('ng-hide');
    };
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
