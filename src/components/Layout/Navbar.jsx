import IconKeyboard from "../../assets/icons/IconKeyboard";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex px-2 mx-2 items-center">
          <IconKeyboard className="inline pr-2" />
          <Link to="/" className="text-lg font-bold align-middle mx-2 text-xl">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
            <Link to="/play" className="btn btn-ghost btn-sm rounded-btn">
              Play
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Keyboard Warrior",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
