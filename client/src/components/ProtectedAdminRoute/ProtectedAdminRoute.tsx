import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAdminRoute = () => {
    const user = useSelector((state: RootState) => state.auth.user);

  return user?.role === 'admin' ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedAdminRoute