
import Layout from './layout';
import Accounting from './screens/Accounting';
import { Routes, Route } from "react-router";
import Dashboard from './screens/Dashboard';



function App() {


  return (

    <Routes>
      <Route element={<Layout />} >
        <Route
          path="/"
          element={<Accounting />
          }
        />
        <Route
          path="Dashboard"
          element={<Dashboard />
          }
        />
      </Route>
    </Routes>

  );
}

export default App;