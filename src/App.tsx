
import Layout from './layout';
import Accounting from './screens/Accounting';
import { Routes, Route } from "react-router";



function App() {


  return (

    <Routes>
      <Route element={<Layout />} >
        <Route
          path="/"
          element={<Accounting />

          }
        />
      </Route>
    </Routes>

  );
}

export default App;