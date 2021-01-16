import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Article from "./pages/article";
import GlobalFeed from "./pages/globalFeed";

export default ()=> {
    return (
        <Switch>
            <Route exact path={'/'} component={GlobalFeed}/>
            <Route path={'/articles/:slug'} component={Article}/>
        </Switch>
    )
}