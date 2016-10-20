import template from './cafe-headline.html';
import './cafe-headline.less';

const controller = function () {
    this.logoImg = '';

    this.openStatus = function (time) {
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
};

export default {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        cafe: '<'
    }
};
