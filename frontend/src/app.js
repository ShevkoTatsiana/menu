// Common requires
import './styles/reset.less';
import './styles/fonts.less';
import './styles/app.less';
import './styles/variables.less';

require('babel-polyfill');

const menu = angular.module('menu', [
    require('angular-ui-router'),
    require('app/constants'),
    require('app/modules'),
    require('components/app-header'),
    require('components/app-footer'),
    require('components/preloader')
]);

menu.config(require('./app/app-router-config')(menu));

const $inject = ['$injector', '$rootScope'];
const run = ($injector, $rootScope) => {
    menu.register = $injector.loadModule.bind($injector);

    $rootScope.$on('$stateChangeError', function () {
        // TODO: go to login
    });
};

run.$inject = $inject;
menu.run(run);

export default menu;
