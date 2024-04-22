import { Link } from "react-router-dom"

const Modal = () => {
  return (
    <div className="modal">
        <div className="modal-cont">
        <ul className="modal-list">
            <Link to={""} className="accountLink">
                Account
            </Link>
            <button className="modeBtn">
                Day / Night
            </button>
            <button className="logoutBtn">
                Log out
            </button>
        </ul>
        </div>
    </div>
  )
}

export default Modal
