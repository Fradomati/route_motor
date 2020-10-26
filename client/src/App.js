import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// INTERFACE
import { Layout } from "./interface/layout/index"

// PAGES
//Home
import { Home } from "./pages/home/index"
//Auth
import { Login } from "./pages/auth/Login/index"

// LIB
// import { withAuthentication } from "../lib/Authentication/withAuthentication"

// CONTEXTS


export const App =
    // withAuthentication(
    () => {
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                    </Switch>
                </Layout>
            </Router>
        )

    }
//)