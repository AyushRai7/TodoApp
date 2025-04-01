import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import TodoApp from "./components/TodoApp";
import PrivateRoute from "./components/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<PrivateRoute><TodoApp /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
