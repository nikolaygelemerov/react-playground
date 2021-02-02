import { memo } from 'react';
import {
  BrowserRouter,
  // Redirect,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import App from '../App/App';

import {
  AsyncSetStateClassCmp,
  AwaitSetStateFuncCmp,
  DefaultObjectProps,
  DepArray,
  EffectsUpdateFlow,
  List,
  ListOptimization,
  Mount,
  Parent,
  Refs,
  RenderChildFromConstant,
  RenderChildren,
  ThisInClassCmp,
  Todo,
  Unmount,
  UseAsyncState,
  UseEffectVsUseLayoutEffect,
  UsePrevious,
  UseEffectDependency
} from '../../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <ul className="Navigation">
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/AsyncSetStateClassCmp"
        >
          AsyncSetStateClassCmp
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/AwaitSetStateFuncCmp"
        >
          AwaitSetStateFuncCmp
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/DefaultObjectProps"
        >
          DefaultObjectProps
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/DepArray"
        >
          DepArray
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/EffectsUpdateFlow"
        >
          EffectsUpdateFlow
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/List"
        >
          List
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/ListOptimization"
        >
          ListOptimization
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/Mount"
        >
          Mount
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/Parent"
        >
          Parent
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/Refs"
        >
          Refs
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/RenderChildFromConstant"
        >
          RenderChildFromConstant
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/RenderChildren"
        >
          RenderChildren
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/ThisInClassCmp"
        >
          ThisInClassCmp
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/Todo"
        >
          Todo
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/Unmount"
        >
          Unmount
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/UseAsyncState"
        >
          UseAsyncState
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/UseEffectVsUseLayoutEffect"
        >
          UseEffectVsUseLayoutEffect
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/UsePrevious"
        >
          UsePrevious
        </NavLink>
        <NavLink
          className="NavLink"
          activeClassName="NavLinkActive"
          exact
          to="/UseEffectDependency"
        >
          UseEffectDependency
        </NavLink>
      </ul>
      <App>
        <Switch>
          <Route
            path="/AsyncSetStateClassCmp"
            exact
            component={AsyncSetStateClassCmp}
          />
          <Route
            path="/AwaitSetStateFuncCmp"
            exact
            component={AwaitSetStateFuncCmp}
          />
          <Route
            path="/DefaultObjectProps"
            exact
            component={DefaultObjectProps}
          />
          <Route path="/DepArray" exact component={DepArray} />
          <Route
            path="/EffectsUpdateFlow"
            exact
            component={EffectsUpdateFlow}
          />
          <Route path="/List" exact component={List} />
          <Route path="/ListOptimization" exact component={ListOptimization} />
          <Route path="/Mount" exact component={Mount} />
          <Route path="/Parent" exact component={Parent} />
          <Route path="/Refs" exact component={Refs} />
          <Route
            path="/RenderChildFromConstant"
            exact
            component={RenderChildFromConstant}
          />
          <Route path="/RenderChildren" exact component={RenderChildren} />
          <Route path="/ThisInClassCmp" exact component={ThisInClassCmp} />
          <Route path="/Todo" exact component={Todo} />
          <Route path="/Unmount" exact component={Unmount} />
          <Route path="/UseAsyncState" exact component={UseAsyncState} />
          <Route
            path="/UseEffectVsUseLayoutEffect"
            exact
            component={UseEffectVsUseLayoutEffect}
          />
          <Route path="/UsePrevious" exact component={UsePrevious} />
          <Route
            path="/UseEffectDependency"
            exact
            component={UseEffectDependency}
          />
        </Switch>
      </App>
    </BrowserRouter>
  );
};

export default memo(Router);
