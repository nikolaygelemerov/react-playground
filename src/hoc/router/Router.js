import { memo } from 'react';
import {
  BrowserRouter,
  // Redirect,
  Route,
  Routes,
  NavLink
} from 'react-router-dom';

import App from '../App/App';

import {
  AsyncSetStateClassCmp,
  AwaitSetStateFuncCmp,
  ContextApi,
  DefaultObjectProps,
  DepArray,
  EffectsUpdateFlow,
  List,
  ListOptimization,
  MemoizationPerformance,
  Mount,
  NotFound,
  Parent,
  Refs,
  RenderChildFromConstant,
  RenderChildren,
  ScrollComponent,
  ThisInClassCmp,
  Todo,
  Unmount,
  UseAsyncState,
  UseCallback,
  UseEffectVsUseLayoutEffect,
  UsePrevious,
  UseEffectDependency
} from '../../pages';

const Router = () => {
  return (
    <BrowserRouter>
      <ul className="Navigation">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/AsyncSetStateClassCmp"
        >
          AsyncSetStateClassCmp
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/AwaitSetStateFuncCmp"
        >
          AwaitSetStateFuncCmp
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/ContextApi"
        >
          ContextApi
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/DefaultObjectProps"
        >
          DefaultObjectProps
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/DepArray"
        >
          DepArray
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/EffectsUpdateFlow"
        >
          EffectsUpdateFlow
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/List"
        >
          List
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/ListOptimization"
        >
          ListOptimization
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/MemoizationPerformance"
        >
          MemoizationPerformance
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/Mount"
        >
          Mount
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/Parent"
        >
          Parent
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/Refs"
        >
          Refs
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/RenderChildFromConstant"
        >
          RenderChildFromConstant
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/RenderChildren"
        >
          RenderChildren
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/ScrollComponent"
        >
          ScrollComponent
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/ThisInClassCmp"
        >
          ThisInClassCmp
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/Todo"
        >
          Todo
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/Unmount"
        >
          Unmount
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/UseAsyncState"
        >
          UseAsyncState
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/UseCallback"
        >
          UseCallback
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/UseEffectVsUseLayoutEffect"
        >
          UseEffectVsUseLayoutEffect
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/UsePrevious"
        >
          UsePrevious
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'NavLink NavLinkActive' : 'NavLink'
          }
          to="/UseEffectDependency"
        >
          UseEffectDependency
        </NavLink>
      </ul>
      <App>
        <Routes>
          <Route
            path="/AsyncSetStateClassCmp"
            element={<AsyncSetStateClassCmp />}
          />
          <Route
            path="/AwaitSetStateFuncCmp"
            element={<AwaitSetStateFuncCmp />}
          />
          <Route path="/ContextApi" element={<ContextApi />} />
          <Route path="/DefaultObjectProps" element={<DefaultObjectProps />} />
          <Route path="/DepArray" element={<DepArray />} />
          <Route path="/EffectsUpdateFlow" element={<EffectsUpdateFlow />} />
          <Route path="/List" element={<List />} />
          <Route path="/ListOptimization" element={<ListOptimization />} />
          <Route
            path="/MemoizationPerformance"
            element={<MemoizationPerformance />}
          />
          <Route path="/Mount" element={<Mount />} />
          <Route path="/Parent" element={<Parent />} />
          <Route path="/Refs" element={<Refs />} />
          <Route
            path="/RenderChildFromConstant"
            element={<RenderChildFromConstant />}
          />
          <Route path="/RenderChildren" element={<RenderChildren />} />
          <Route path="/ScrollComponent" element={<ScrollComponent />} />
          <Route path="/ThisInClassCmp" element={<ThisInClassCmp />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Unmount" element={<Unmount />} />
          <Route path="/UseAsyncState" element={<UseAsyncState />} />
          <Route path="/UseCallback" element={<UseCallback />} />
          <Route
            path="/UseEffectVsUseLayoutEffect"
            element={<UseEffectVsUseLayoutEffect />}
          />
          <Route path="/UsePrevious" element={<UsePrevious />} />
          <Route
            path="/UseEffectDependency"
            element={<UseEffectDependency />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default memo(Router);
