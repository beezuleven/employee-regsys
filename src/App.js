import "./App.css";
import AddEmployee from "./AddEmployee/AddEmployee";
import EmployeeTable from "./Table/EmployeeTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={EmployeeTable} />
          {/* <Route exact path="/table" component={EmployeeTable} /> */}
          {/* <Route exact path="/employee/add" component={EmployeeRegistration} /> */}
          {/* <Route exact path="/employee/edit/:id" component={EditEmployee} /> */}
          {/* <Route exact path="/employee/:id" component={ViewEmployee} />  */}
          <Route exact path="/addEmployee" component={AddEmployee} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
//  {
//    datas.map((data) => (
//      <ul>
//        <li>{data.name}</li>
//      </ul>
//    ));
//  }