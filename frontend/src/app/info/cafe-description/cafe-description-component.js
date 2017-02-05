import template from './cafe-description.html';
import './cafe-description.less';

const controller = function () {
    this.getDescription = function (info) {
        if (angular.isUndefined(info)) {
            info = '<div class="info-about"><p>Оригинальное, атмосферное и не пафосное заведение другого формата для тех, кому наскучили классические кафе.</p><p>Здесь уютный и нетривиальный интерьер в лофт-стиле, темные тона и приглушенный свет. Атмосферное место для приятного и качественного отдыха.</p><div class="list">Заведение вмещает от 100 человек и разделен на функциональные зоны:<ul class="zones"><li>Кафе</li><li>Основной зал с барной стойкой</li><li>Lounge-room.</li><li>Терраса (теплая и отапливаемая)</li></ul></div><p>У нас комфортно разместится любая компания: есть столики на двоих, четверых и шестерых человек, окруженные мягкими стульями или диванами, и уединенная Lounge-комната до 15 человек,<span class="uppercase">светлая и уютная терасса</span>.</p><p>Мы всегда рады вам, в чем можно убедиться, пообщавшись с командой: барменами и персоналом бара, владеющим английским языком.</p></div>';
        }
        document.getElementsByClassName('description-block__main')[0].innerHTML = info;
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
