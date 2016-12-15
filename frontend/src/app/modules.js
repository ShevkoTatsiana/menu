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

    this.dishes = module => {
        return get(resolve => {
            require.ensure([], () => resolve(module.register(require('./dishes'))));
        });
    };

    this.info = module => {
        return get(resolve => {
            require.ensure([], () => resolve(module.register(require('./info'))));
        });
    };

    this.chef = module => {
        return get(resolve => {
            require.ensure([], () => resolve(module.register(require('./chef'))));
        });
    };
};

service.$inject = $inject;

export default angular.module('menu.modules', [])
    .service('modules', service).name;
