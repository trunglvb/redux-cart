export const initialState = {
    carts: [],
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART": {
            const ItemIndex = state.carts.findIndex(
                (item) => item.id === action.payload.id
            );
            console.log(ItemIndex);
            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1;
                return {
                    ...state,
                    carts: [...state.carts],
                };
            } else {
                const temp = { ...action.payload, qnty: 1 };
                return {
                    ...state,
                    carts: [...state.carts, temp],
                };
            }
        }
        case "DELETE_CART": {
            return {
                ...state,
                carts: state.carts.filter(
                    (iteam) => iteam.id !== action.payload
                ),
            };
        }
        case "DELETE_ONLY_ITEM": {
            const IteamIndex_dec = state.carts.findIndex(
                (iteam) => iteam.id === action.payload.id
            );

            if (state.carts[IteamIndex_dec].qnty >= 1) {
                const dltiteams = (state.carts[IteamIndex_dec].qnty -= 1);
                console.log([...state.carts, dltiteams]);

                return {
                    ...state,
                    carts: [...state.carts],
                };
            } else if (state.carts[IteamIndex_dec].qnty === 1) {
                const data = state.carts.filter(
                    (el) => el.id !== action.payload.id
                );

                return {
                    ...state,
                    carts: data,
                };
            }
        }
        // eslint-disable-next-line no-fallthrough
        default: {
            return state;
        }
    }
};
