import React, { useContext } from "react";
import { BiSun } from "react-icons/bi";
import { TiWeatherNight } from "react-icons/ti";
import ThemeContext from "~/context/themeProvider";

const ThemeChanger = () => {
  const { toggleDark, dark } = useContext(ThemeContext);

  return (
    <button
      onClick={() => toggleDark()}
      className="fixed top-2 end-5 w-12 h-10 z-50 border-2 transition-colors text-skin-primary duration-200 border-skin-muted hover:bg-skin-muted cursor-pointer bg-skin-base rounded-md  flex items-center justify-center "
    >
      {dark ? (
        <TiWeatherNight size={28} className="m-px" />
      ) : (
        <BiSun size={28} className="m-px" />
      )}
    </button>
  );
};

export default ThemeChanger;
