const dishService = function () {
    let orderObject = [];

    return {
        getOrder() {
            return orderObject;
        },
        setOrder(order) {
            orderObject = order;
        }
    };
};

export default dishService;

