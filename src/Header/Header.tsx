import { useState } from "react";
import NavBar from "../components/NavBar";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 relative">
      <div>
        <img src="/images/logo.svg" alt="imagen logo" />
      </div>

      <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
        <img
          src={isOpen ? "/images/icon-menu-close.svg" : "/images/icon-menu.svg"}
          alt="icono menu"
        />
      </button>

      {isOpen && (
        <>
          <div className="fixed top-10 right-0 w-56 h-full bg-OffWhite shadow-lg z-40">
            <div className="mt-20">
              <NavBar />
            </div>
          </div>

          <div
            className="fixed top-0 left-0 w-2/5  h-full bg-black opacity-50 z-30"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </header>
  );
}

export default Header;
