import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SigninView from "./SigninView";
import SubjectView from "../Subjects/SubjectsView";
import SubjectRegister from "../Subjects/SubjectRegister";
import QuestionView from "../Questionnaire/QuestionView";
import { isLogin } from "../../api/auth";

export default () => (
  <Switch>
    <ProtectedRoute
      exact
      path="/"
      component={() => <h1>Welcome to Aperture Science Enrichment Center</h1>}
    />
    <Route exact path="/signin" component={SigninView} />
    <ProtectedRoute exact path="/newTesting" component={QuestionView} />
    <ProtectedRoute exact path="/history" component={() => <h1>History</h1>} />
    <ProtectedRoute
      exact
      path="/edit"
      component={() => <h1>Edit Questionnaire</h1>}
    />
    <ProtectedRoute exact path="/subjects" component={SubjectView} />
    <ProtectedRoute exact path="/newSubject" component={SubjectRegister} />
  </Switch>
);

const ProtectedRoute = ({ component: ProtectedComponent, ...rest }) => {
  return (
    <Route
      {...rest}
      render={routeProps =>
        isLogin() ? (
          <ProtectedComponent {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: routeProps.location }
            }}
          />
        )
      }
    />
  );
};
