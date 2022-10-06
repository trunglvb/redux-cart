//action creator
export const ADD = (item) => {
    return {
        type: "ADD_CART",
        payload: item,
    };
};

export const DELETE = (id) => {
    return {
        type: "DELETE_CART",
        payload: id,
    };
};

//delete only item
export const DELETE_ONLY = (item) => {
    return {
        type: "DELETE_ONLY_ITEM",
        payload: item,
    };
};
