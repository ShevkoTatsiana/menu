import template from './cafe-gallery.html';
import './cafe-gallery.less';

const controller = function () {
  //  this.serverUrl = 'http://178.124.206.44';

    this.fotoGallery = ['app/info/cafe-gallery/img/cafe-1.png', 'app/info/cafe-gallery/img/cafe-2.png',
        'app/info/cafe-gallery/img/cafe-3.png', 'app/info/cafe-gallery/img/cafe-4.png',
        'app/info/cafe-gallery/img/cafe-5.png', 'app/info/cafe-gallery/img/cafe-6.png',
        'app/info/cafe-gallery/img/cafe-7.png', 'app/info/cafe-gallery/img/cafe-8.png',
        'app/info/cafe-gallery/img/cafe-9.png', 'app/info/cafe-gallery/img/cafe-10.png'];
    const widthArray = [180, 354];
    const countArray = [6, 1];
    const listArray = [document.getElementsByClassName('info-gallery__block')[0],
        document.getElementsByClassName('info-gallery__block-popup')[0]];
    const listElemsArray = [document.getElementsByClassName('info-gallery__block__slide'),
        document.getElementsByClassName('info-gallery__block-popup__slide')];

    this.nextSlide = [true, true];
    this.prevSlide = [true, true];
    this.positionGallery = [0, 0];
    this.openFoto = function (index) {
        const list = listArray[1];

        this. positionGallery[1] = -widthArray[1] * index;
        list.style.marginLeft = `${this.positionGallery[1]}px`;
    };
    this.previousFoto = function (indexArray) {
        const width = widthArray[indexArray];
        const count = countArray[indexArray];
        const listElems = listElemsArray[indexArray];
        const list = listArray[indexArray];

        if (this.prevSlide[indexArray] === true && this.positionGallery[indexArray] !== 0) {
            this.positionGallery[indexArray] = Math.min(this.positionGallery[indexArray] + width * count, 0);
            if (this.positionGallery[indexArray] === 0) {
                this.prevSlide[indexArray] = false;
            }
        } else {
            this.positionGallery[indexArray] = -width * (listElems.length - count);
            this.prevSlide[indexArray] = true;
        }
        list.style.marginLeft = `${this.positionGallery[indexArray]}px`;
    };

    this.nextFoto = function (indexArray) {
        const width = widthArray[indexArray];
        const count = countArray[indexArray];
        const listElems = listElemsArray[indexArray];
        const list = listArray[indexArray];

        if (this.nextSlide[indexArray] === true && this.positionGallery[indexArray] !==
            (-width * (listElems.length - count))) {
            this.positionGallery[indexArray] = Math.max(this.positionGallery[indexArray] - width * count,
                -width * (listElems.length - count));
            if ((-width * (listElems.length - count)) > (this.positionGallery[indexArray] - width * count)) {
                this.nextSlide[indexArray] = false;
            }
        } else {
            this.positionGallery[indexArray] = 0;
            this.nextSlide[indexArray] = true;
        }
        list.style.marginLeft = `${this.positionGallery[indexArray]}px`;
    };
};

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
