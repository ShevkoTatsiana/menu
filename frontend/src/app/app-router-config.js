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
        // Default settings for router
        // DO NOT ADD OTHER STATES
        $urlRouterProvider
            .when('', '/')
            .when('/', '/main')
            .otherwise('/notfound');

        // END OF - Default settings for router

        $stateProvider
            .state(States.NOT_FOUND, route('notfound', 'Not Found', 'notfound'))
            .state(States.MAIN, route('main', 'Main', 'main'))
            .state(States.RESULTS, route('results', 'Results', 'results/:search/:filter'))
            .state(States.DISHES, route('dishes', 'Dishes', 'dishes/:cafe/:group'))
            .state(States.INFO, route('info', 'Info', 'info/:cafe'))
            .state(States.CHEF, route('chef', 'Chef', 'chef'));
    };

    RouterConfig.$inject = $inject;
    return RouterConfig;
};
