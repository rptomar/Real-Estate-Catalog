import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Logout.css";

const Logout = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line
  const [cookies, setCookie] = useCookies([]);

  const handleLogout = () => {
    setCookie("jwt", "");
    navigate("/");
  };
  return (
    <>
      <button id="logoutBtn" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};
export default Logout;
