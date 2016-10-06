import template from './results.html';
import './results.less';

const $inject = ['$stateParams', 'ResultsFactory'];
const controller = function ($stateParams, ResultsFactory) {
    this.search = $stateParams.search;

    console.log(ResultsFactory.restaurants(this.search, 0, 10, 'name'));
        //.then(response => {
        //    console.log(response.data)
        //}, error => {
        //
        //}).finally(() => {
        //
        //});
};

controller.$inject = $inject;

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {}
};
