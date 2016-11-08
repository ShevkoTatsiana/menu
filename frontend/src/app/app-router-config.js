export default menu => {
    const route = (entry, stateTitle, url) => ({
        url: `/${url}`,
        stateTitle,
        template: `<${entry}></${entry}>`,
        resolve: {
            async: ['modules', modules => modules[entry](menu)]
        }
    });

    const $inject = ['$urlRouterProvider', '$stateProvider', 'States'];
    const RouterConfig = function ($urlRouterProvider, $stateProvider, States) {
        $urlRouterProvider
            .when('', '/')
            .when('/', '/main')
            .when('/results', '/results')
            .when('/info', '/info')
            .otherwise('/notfound');

        $stateProvider
            .state(States.NOT_FOUND, route('notfound', 'Not Found', 'notfound'))
            .state(States.MAIN, route('main', 'Main', 'main'))
            .state(States.RESULTS, route('results', 'Results', 'results/:search'))
            .state(States.INFO, route('info', 'Info', 'info/:cafe'));
    };

    RouterConfig.$inject = $inject;
    return RouterConfig;
};