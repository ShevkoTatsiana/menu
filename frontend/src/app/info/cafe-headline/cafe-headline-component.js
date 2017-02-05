import template from './cafe-headline.html';
import './cafe-headline.less';

const $inject = ['$state', 'States'];
const controller = function ($state, States) {
    this.logoImg = '';
    //this.serverUrl = 'http://178.124.206.44';
    this.serverUrl = '';
    document.getElementById('preloaderContainer').classList.add('ng-hide');

    this.openStatus = function (time) {
        if (angular.isUndefined(time)) {
            return 'Неизвестно';
        }

        const start = time.start;
        const end = time.end;
        const start1 = parseFloat(start);
        const end1 = parseFloat(end);
        const justNow = new Date();
        const hours = justNow.getHours();
        const minutes = justNow.getMinutes();
        const client = `${hours.toString()}.${minutes.toString()}`;
        const clientTime = parseFloat(client);

        if (clientTime < start1 || clientTime > end1) {
            return ('Закрыто');
        } return (`Открыто до ${end}`);
    };
    this.cafeTitle = function (type, name) {
        return `${type} ${name}`;
    };
    this.cafeInfo = cafe => {
        $state.go(States.INFO, {cafe});
        document.getElementById('preloaderContainer').classList.remove('ng-hide');
    };
    this.starCheck = function (number, rating) {
        return rating === number;
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
