// components
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/AboutPage/About";
import Plan from "./components/PlanPage/Plan";
import Container from "./components/Container";

function App() {
  return (
    <>
      {/* Wrapper */}
      <div className="grid grid-cols-12 bg-lightCream">
        <div className="col-span-12 mt-12 px-8 max-w-[1460px] md:px-16 lg:px-20 mx-auto">
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Container />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="plan" element={<Plan />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
