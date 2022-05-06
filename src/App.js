import HomePage from "./component/HomePage/HomePage";
import { Scrollbars } from 'react-custom-scrollbars';
import {path} from './route/routes'
import { BrowserRouter as Router, Route,  Routes } from "react-router-dom";
import DetailPage from "./component/DetailPage/DetailPage";
import Login from "./component/Login/Login";



function App() {
  return (
    <div className="App">

  <Scrollbars style={{ width: "100%", height:"100vh" }}>
            <Router>
          
                <Routes>
                      <Route path={path.HOME}  element={<HomePage />} />
                      <Route path={path.DETAIL}  element={<DetailPage />} />
                      <Route path={path.LOGIN}  element={<Login />} />
                </Routes>
          </Router>
  </Scrollbars>
    </div>
  );
}

export default App;
