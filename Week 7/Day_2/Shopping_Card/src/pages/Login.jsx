import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

export default function Login() {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login({ name: "Jayesh" }));
  };

  return (
    <button onClick={handleLogin}>Login</button>
  );
}