import { Navigate, useLocation } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";


export function RequireAuth({ children }: { children: JSX.Element }) {
  const location = useLocation()
  const { acces } = useTypeSelector(state => state.user)

  if (!acces) {
    return <Navigate to="/auth/login" state={location} />;
  }

  return children;
}