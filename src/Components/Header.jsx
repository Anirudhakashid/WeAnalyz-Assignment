import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header className="h-[90px] bg-[#55D6C2] flex justify-between items-center px-4">
        <h1 className="text-white font-semibold italic text-4xl">Helpdesk</h1>
        <div className="flex items-center gap-4">
          <div className="bg-black text-white px-2 py-1 text-sm rounded">
            BM
          </div>
          <div className="bg-white px-2 py-1 text-xs rounded border">BI</div>
          <FontAwesomeIcon icon={faBell} className="text-lg cursor-pointer" />
          <FontAwesomeIcon
            onClick={() => navigate("/profile")}
            icon={faUser}
            className="text-lg cursor-pointer"
          />
          <FontAwesomeIcon
            onClick={() => navigate("/")}
            icon={faSignOutAlt}
            className="text-lg cursor-pointer"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
