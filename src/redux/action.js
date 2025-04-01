export const login = (user) => ({ type: "LOGIN", payload: user });
export const logout = () => ({ type: "LOGOUT" });
export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,  
});

export const deleteTask = (id) => ({
  type: "DELETE_TASK",
  payload: id,
});
  
