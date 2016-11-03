import template from './pagination.html';
import './pagination.less';

const controller = function () {
    var pages = [];
    pages[0] = {
        number:1,
        class:'page active'
    };
    for(var i = 1; i < 3; i++){
        pages[i]={
            number:i+1,
            class:'page'
        };
    }
    this.pages = pages;
};

export default {
    template,
    controller,
    controllerAs: 'vm'
};


