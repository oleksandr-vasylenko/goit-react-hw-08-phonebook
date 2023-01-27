import { UserMenu } from 'components/Navigation/UserMenu';
import { Outlet } from 'react-router-dom';
import { LogMenu } from './LogMenu';
import { getIsLoggedIn } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <header>{isLoggedIn ? <UserMenu /> : <LogMenu />}</header>
      <Outlet />
    </>
  );
};
