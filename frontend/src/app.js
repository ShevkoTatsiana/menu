// Common requires.
import './app.less';
require('babel-polyfill');

const menu = angular.module('menu', [
    require('angular-ui-router'),
    require('app/constants'),
    require('app/modules')
]);

menu.config(require('./app/app_router_config')(menu));

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
