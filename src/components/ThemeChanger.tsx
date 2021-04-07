import React, { useContext } from "react";
import { CgUserlane } from "react-icons/cg";
import ThemeContext from "~/context/themeProvider";

const ThemeChanger = () => {
  const { toggleDark } = useContext(ThemeContext);

  return (
    <button
      onClick={() => toggleDark()}
      className="fixed top-2 end-5 w-12 h-10 z-50 border-2 transition-colors text-skin-primary duration-200 border-skin-muted hover:bg-skin-muted cursor-pointer bg-skin-base rounded-md  flex items-center justify-center "
    >
      <CgUserlane size={28} className="m-px" />
    </button>
  );
};

export default ThemeChanger;
