import { Link } from "react-router-dom"
import menuDark from "../../public/menu-dark.svg";
import backDark from "../../public/back-dark.png";
import menuLight from "../../public/menu-light.svg";
import backLight from "../../public/back-light.png";
import logo from "../../public/logo.png"
import bell from "../../public/bell.png"
import like from "../../public/like.png"
import basket from "../../public/basket.png"
import { useMyContext } from "../Context"



const Navbar = () => {

    const {modal,setModal} = useMyContext()

  return (
    <div className="navbar">
        <Link to={""} className="navLogo">
            <img src={logo} alt="navLogo"  />
        </Link>
        <ul className="nav-list">
            <Link to={""}>
                <img src={like} alt="Liked" />
            </Link>
            <Link to={""}>
                <img src={basket} alt="Deleted" />
            </Link>
            <Link to={""}>
                <img src={bell} alt="Notifications" />
            </Link>
        </ul>
        <button className="menuBtn" onClick={()=>setModal(!modal)}>
            {
                !modal?<img src={menuDark} alt="Menu" className="menuImg"/>
                :<img src={backDark} alt="Menu" className="menuImg"/>
            }
        </button>
    </div>
  )
}

export default Navbar
