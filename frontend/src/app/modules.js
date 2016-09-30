const $inject = ['$q'];
const service = function ($q) {
    const get = resolve => {
        const defer = $q.defer();

        resolve(defer.resolve);
        return defer.promise;
    };

    this.notfound = module => {
        return get(resolve => {
            require.ensure([], () => resolve(module.register(require('./notfound'))));
        });
    };

    this.main = module => {
        return get(resolve => {
            require.ensure([], () => resolve(module.register(require('./main'))));
        });
    };

    this.results = module => {
        return get(resolve => {
            require.ensure([], () => resolve(module.register(require('./results'))));
        });
    };
};

service.$inject = $inject;

export default angular.module('menu.modules', [])
    .service('modules', service).name;
