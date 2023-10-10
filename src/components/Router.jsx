import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./screens/Projects/Projects";
import Tasks from "./screens/Tasks/Tasks";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<Projects />}
          path="/"
        />
        <Route
          element={<Tasks/>}
          path="/project/:id"
        />

        {/* Route for not found page */}
        <Route
          element={
            <>
              <h2 style={{ textAlign: "center" }}>Page not found</h2>
            </>
          }
          path="*"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
