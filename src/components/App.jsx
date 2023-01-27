import { Route, Routes, Navigate } from 'react-router-dom';
import { Contacts } from 'pages/Contacts';
import { Register } from 'pages/Register';
import { NotFound } from 'pages/NotFound';
import { Login } from 'pages/Login';
import { Navigation } from './Navigation/Navigation';
import { GlobalStyle } from 'components/GlobalStyles';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/authApi';
import { PrivateRoute } from 'PrivateRoute';
import { RestrictedRoute } from 'RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Thumb } from './App.Styled';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Thumb>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Navigate to="/login" />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <GlobalStyle />
      <ToastContainer />
    </Thumb>
  );
};
