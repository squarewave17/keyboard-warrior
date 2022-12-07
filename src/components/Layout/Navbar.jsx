import { useContext } from "react";
import {
  GiKeyboard,
  GiSettingsKnobs,
  GiPlayButton,
  GiSoundOff,
  GiSoundOn,
} from "react-icons/gi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import GlobalContext from "../../context/GlobalContext";

function Navbar({ title }) {
  // Sound Button
  const { sound, setSound } = useContext(GlobalContext);

  const handleSound = () => {
    setSound(!sound);
  };

  const soundIcon = sound ? (
    <GiSoundOn className="text-2xl" />
  ) : (
    <GiSoundOff className="text-2xl" />
  );
  // END Sound Button
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex px-2 mx-2 items-center">
          <GiKeyboard className="inline pr-2 text-4xl" />
          <Link to="/" className="text-lg font-bold align-middle mx-2 text-xl">
            {title}
          </Link>
        </div>
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/play" className="btn btn-ghost btn-sm rounded-btn">
              <GiPlayButton className="text-2xl" />
            </Link>
            <Link to="/settings" className="btn btn-ghost btn-sm rounded-btn">
              <GiSettingsKnobs className="text-2xl" />
            </Link>
            <button
              className="btn btn-ghost btn-sm rounded-btn"
              onClick={handleSound}
            >
              {soundIcon}
            </button>
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
