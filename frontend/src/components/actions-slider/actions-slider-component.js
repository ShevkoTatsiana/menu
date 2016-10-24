import template from './actions-slider.html';
import './actions-slider.less';

const controller = function () {
    var self = this;
    var items=[];
    for(var i = 0; i < 16 ; i++){
        items[i] = {
            title:'Акция №'+(i+1),
            img:'./img/home-coffee.jpg'
        };
    }
    this.blocks=items;

    var count = Math.ceil(this.blocks.length/4);
    var btns = [];
    btns[0] ={
        class:'slide-btn active-btn',
        data:0
    };
    for(var i = 1; i < count ; i++){
        btns[i] = {
            class:'slide-btn',
            data:i
        }
    }
    this.radio = btns;

    var carousel = document.getElementById("slider");
    var list = carousel.querySelector('.slider-list');

    var one_step_width = 984;
    var removeClass = function(){
        for(var i = 0; i < count ; i++){
            btns[i] = {
                class:'slide-btn',
                data:i
            }
        }
    };
    var changeClass = function(){
        removeClass();
        var index = -parseInt(list.style.left)/one_step_width;
        btns[index] = {
            class:'slide-btn active-btn',
            data:index
        };
        self.radio = btns;
    };
    this.slide = function(ev){
        list.style.left = ev.target.getAttribute('data-info')*(-one_step_width) + 'px';
        changeClass();
    };
    this.next = function(){
        var start = list.offsetLeft;
        if(start != -(count-1)*one_step_width){
            list.style.left = start - one_step_width + 'px';
        }
        changeClass();
    };
    this.prev = function(){
        var start = list.offsetLeft;
        if(start != 0){
            list.style.left = start + one_step_width + 'px';
        }
        changeClass();
    }
};

export default {
    template,
    controller,
    controllerAs: 'vm'
};
