import template from './dish-groups.html';
import './dish-groups.less';

const $inject = ['$state', 'States', '$stateParams'];

const controller = function ($state, States, $stateParams) {
    if (angular.isUndefined(this.cafe.categories)) {
        this.cafe.categories = ['Горячее', 'Суп', 'Роллы', 'Запеченные роллы', 'Готовые WOK', 'Драники', 'Салаты',
            'Суши', 'Сашими', 'Сеты', 'Десерты'];
    }
    this.group = $stateParams.group;
    this.setClass = function (param) {
        let newParam;

        if (this.group !== '') {
            newParam = angular.fromJson(this.group);
        } else {
            newParam = '';
        }
        return newParam === param;
    };
    this.searchGroup = checkedGroup => {
        const group = angular.toJson(checkedGroup);
        const cafe = parseFloat($stateParams.cafe, 10);

        $state.go(States.DISHES, {cafe, group});
    };
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        cafe: '<'
    }
};

