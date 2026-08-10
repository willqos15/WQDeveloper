import { useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoIosMoon } from "react-icons/io";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: "#inicio", label: "Inicio" },
    { href: "#projetos", label: "Projetos" },
    { href: "#tecnologias", label: "Tecnologias" },
    { href: "#sobre", label: "Sobre" },
    
  ];

  return (
    <header className="sticky top-0 z-50">
      <nav
        aria-label="Navegação principal"
        className="
          flex flex-col
          bg-(--background)
          px-10 
          py-4
          text-2xl text-(--foreground)
          

          sm:flex-row sm:items-center sm:justify-between
        "
      >
        <div className="flex items-center justify-between">
          <h1 className="font-medium">
            WQdeveloper
          </h1>

          <button
            type="button"
            className="
              flex h-10 w-10
              flex-col items-center justify-center
              gap-1
              rounded-md
              transition-colors
              sm:hidden
            "
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={
              isMenuOpen
                ? "Fechar menu"
                : "Abrir menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <span aria-hidden="true">
                ✕
              </span>
            ) : (
              <>
                <span className="h-0.5 w-5 bg-(--foreground)" />
                <span className="h-0.5 w-5 bg-(--foreground)" />
                <span className="h-0.5 w-5 bg-(--foreground)" />
              </>
            )}
          </button>
        </div>


        {/* Menu Desktop */}
        <ul className="hidden gap-6 sm:flex">
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="
                  transition-colors
                  hover:text-(--primary)
                  duration-300
                "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>


       
        <ul
          id="mobile-menu"
          className={`
            flex flex-col gap-4
            overflow-hidden
            sm:hidden

            transition-all
            duration-300
            ease-in-out

            ${
              isMenuOpen
                ? "mt-5 max-h-96 opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
          aria-hidden={!isMenuOpen}
        >
          {links.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="
                  block
                  transition-colors
                  hover:text-(--primary)
                  duration-300
                "
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}

          <button 
          onClick={toggleTheme}
          className="cursor-pointer sm:hidden flex items-center gap-2 hover:text-(--primary) transition-all duration-300">
            Tema
            {theme === "light" ? 
            <> Noturno <IoIosMoon/> </> : 
            <> Claro <IoSunny /></> }

          </button>
        </ul>

          <button 
          onClick={toggleTheme}
          className="cursor-pointer hidden sm:flex hover:text-(--primary) transition-all duration-300">
            {theme === "light" ? <IoIosMoon/> : <IoSunny /> }

          </button>
        

      </nav>
    </header>
  );
}