import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

const MyLoadingComponent = ({isLoading, error}) => {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }
  // Handle the error state
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>;
  }
  else {
    return null;
  }
};

import AsyncHome = Loadable({
    loader: () => import('./containers/Home'),
    loading: MyLoadingComponent,
});

import AsyncSignup = Loadable({
    loader: () => import('./containers/Signup'),
    loading: MyLoadingComponent,
});

import AsyncNewNote = Loadable({
    loader: () => import('./containers/NewNote'),
    loading: MyLoadingComponent,
});

import AsyncNotes = Loadable({
    loader: () => import('./containers/Notes'),
    loading: MyLoadingComponent,
});

import AsyncNotFound = Loadable({
    loader: () => import('./containers/NotFound'),
    loading: MyLoadingComponent,
});

export default ({ childProps }) => (
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps}/>
        <UnauthenticatedRoute path="/login" exact component={AsyncLogin} props={childProps}/>
        <UnauthenticatedRoute path="/signup" exact component={AsyncSignup} props={childProps} />
        <AuthenticatedRoute path="/notes/new" exact component={AsyncNewNote} props={childProps} />
        <AuthenticatedRoute path="/notes/:id" exact component={AsyncNotes} props={childProps} />
        <Route component={AsyncNotFound} />
    </Switch>
);