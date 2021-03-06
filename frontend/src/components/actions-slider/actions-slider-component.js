import template from './actions-slider.html';
import './actions-slider.less';

const controller = function () {
    const that = this;

    const items = [];

    for (let i = 0; i < 16; i = i + 1) {
        items[i] = {
            title: `Акция № ${i + 1}`,
            img: 'components/actions-slider/img/home-coffee.jpg'
        };
    }
    that.blocks = items;
    const count = Math.ceil(this.blocks.length / 4);

    const btns = [];

    btns[0] = {
        class: 'slide-btn active-btn',
        data: 0
    };

    for (let i = 1; i < count; i = i + 1) {
        btns[i] = {
            class: 'slide-btn',
            data: i
        };
    }
    that.radio = btns;
    const carousel = document.getElementById('slider');
    const sliderList = carousel.querySelector('.slider-list');
    const oneStepWidth = 984;

    const removeClass = function () {
        for (let i = 0; i < count; i = i + 1) {
            btns[i] = {
                class: 'slide-btn',
                data: i
            };
        }
    };
    const changeClass = function () {
        removeClass();
        const index = -parseInt(sliderList.style.left, 10) / oneStepWidth;

        btns[index] = {
            class: 'slide-btn active-btn',
            data: index
        };

        that.radio = btns;
    };

    that.slide = function (ev) {
        sliderList.style.left = `${ev.target.getAttribute('data-info') * (-oneStepWidth)}px`;
        changeClass();
    };
    that.next = function () {
        const start = sliderList.offsetLeft;

        if (start !== -(count - 1) * oneStepWidth) {
            sliderList.style.left = `${start - oneStepWidth}px`;
        }
        changeClass();
    };
    that.prev = function () {
        const start = sliderList.offsetLeft;

        if (start !== 0) {
            sliderList.style.left = `${start + oneStepWidth}px`;
        }
        changeClass();
    };
};

export default {
    template,
    controller,
    controllerAs: 'vm'
};
