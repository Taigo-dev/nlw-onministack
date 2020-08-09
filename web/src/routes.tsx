import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import TeachersList from "./pages/TeachersList";
import TeachersForm from "./pages/TeachersForm";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/study" component={TeachersList} />
        <Route path="/give-classes" component={TeachersForm} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
