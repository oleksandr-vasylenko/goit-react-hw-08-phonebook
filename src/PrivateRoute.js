import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
