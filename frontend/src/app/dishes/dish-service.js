const dishService = function () {
    let orderObject = [];
    let orderEvent = true;

    return {
        getOrder() {
            return orderObject;
        },
        setOrder(order) {
            orderObject = order;
        },
        getOrderEvent() {
            return orderEvent;
        },
        setOrderEvent() {
            orderEvent = false;
        },
        clearOrderEvent() {
            orderEvent = true;
        }
    };
};

export default dishService;

