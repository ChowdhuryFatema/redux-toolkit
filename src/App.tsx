import { Outlet } from "react-router-dom";
import Navbar from "./components/layout/Navbar";


const App = () => {

  return (
    <div className="max-w-7xl mx-auto px-5">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default App;