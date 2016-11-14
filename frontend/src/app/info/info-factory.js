import Endpoints from './../../app/constants/Endpoints';
const $inject = ['$http'];

const InfoFactory = function ($http) {
    return {
        getInfo(id) {
            const info = Endpoints.information;
            const adress = `${info}${id}`;

            return $http.get(adress);
        }
    };
};

InfoFactory.$inject = $inject;

export default InfoFactory;
