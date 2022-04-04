import { memo } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import pages from '../../pages';

import App from '../App/App';

const Router = () => {
  return (
    <BrowserRouter>
      <ul className="Navigation">
        {pages.map(({ name, route }) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? 'NavLinkActive' : 'NavLink'
            }
            key={route}
            to={route}
          >
            {name}
          </NavLink>
        ))}
      </ul>
      <App>
        <Routes>
          {pages.map(({ Cmp, route }) => (
            <Route element={<Cmp />} key={route} path={route} />
          ))}
        </Routes>
      </App>
    </BrowserRouter>
  );
};

export default memo(Router);
