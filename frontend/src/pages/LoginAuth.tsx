import { useFrappeAuth } from "frappe-react-sdk";

function LoginAuth() {
  const { currentUser, isLoading, logout, login, updateCurrentUser } =
    useFrappeAuth();


  if (isLoading) return <div>loading...</div>;
  return (
    <div>
      {currentUser}
      <button
        onClick={() =>
          login({
            username: "administrator",
            password: "admin",
          })
        }
      >
        Login
      </button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default LoginAuth;
