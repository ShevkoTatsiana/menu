import template from './dish-groups.html';
import './dish-groups.less';

const $inject = ['$state', 'States', '$stateParams'];

const controller = function ($state, States, $stateParams) {
    this.group = $stateParams.group;
    this.setClass = function (param) {
        return angular.fromJson(this.group) === param;
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
