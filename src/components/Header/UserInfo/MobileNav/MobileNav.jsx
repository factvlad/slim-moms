import { FiCornerDownLeft } from "react-icons/fi";
import Burger from "../Burger/Burger";
import s from "./MobileNav.module.scss"

const MobileNav = () => {
  return (
    <div className={ s.mobileNav }>
      <button className={ s.btnBack }><FiCornerDownLeft size="25px" /></button>
      <div className={ s.mobileNavInfo }>
        <h2 className={ s.mobileNavName }>Name</h2>
        <button className={ s.btnLogout }>Exit</button>
        <Burger />
      </div>
    </div>
  );
}

export default MobileNav;
