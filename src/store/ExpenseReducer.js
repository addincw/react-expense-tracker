import { ADD_TRANSACTION, DELETE_TRANSACTION } from "./ActionTypes";

export default (state, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [
          ...state.transactions,
          {
            id: Math.floor(Math.random() * 10) + 5,
            ...action.payload,
          },
        ],
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((transaction) => {
          return transaction.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};
