const initialState = {
  user: null,
  tasks: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null, tasks: [] };
    case "ADD_TASK":
      const newTasks = [...state.tasks, action.payload];

      newTasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });

      return { ...state, tasks: newTasks };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((_, index) => index !== action.payload),
      };

    default:
      return state;
  }
}
