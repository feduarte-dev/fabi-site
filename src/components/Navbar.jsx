import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const leftButtons = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Serviços", href: "#services" },
    { name: "Contato", href: "#contact" },
  ];
  const rightButtons = [
    {
      href: "http://api.whatsapp.com/send?phone=5547988031135",
      icon: "logo-whatsapp",
    },
    {
      href: "https://www.instagram.com/fabiduarte_nutri/",
      icon: "logo-instagram",
    },
    {
      href: "mailto:nutrifabi@gmail.com",
      icon: "mail-outline",
    },
  ];

  return (
    <nav className="bg-earth-warm shadow-xl w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-xl:px-8">
        <div className="flex justify-between h-28 items-center">
          <div className="flex items-center space-x-4">
            {/* Mobile burger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
            {/* Desktop left buttons */}
            <div className="hidden md:flex space-x-4">
              {leftButtons.map((button) => (
                <a
                  key={button.name}
                  href={button.href}
                  className="text-earth-mid hover:text-earth-deep px-3 py-2 rounded-md text-xl font-medium transition duration-500 ease-linear transform hover:scale-110 font-text"
                >
                  {button.name}
                </a>
              ))}
            </div>
          </div>
          {/* Logo */}
          <div className="flex-shrink-0">
            <img className="h-16 w-auto" src={logo} alt="Logo" />
          </div>
          {/* Desktop right buttons */}
          <div className="hidden md:flex items-center space-x-4 text-xl">
            {rightButtons.map((button) => (
              <a
                key={button.icon}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-600 ease-in-out transform hover:scale-110"
              >
                <ion-icon
                  name={button.icon}
                  class="text-earth-mid hover:text-earth-deep w-8 h-8"
                ></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile top buttons */}
      {isOpen && (
        <div className="md:hidden bg-green-light px-2 pt-2 pb-3 space-y-1 shadow-inner">
          {leftButtons.map((button) => (
            <a
              key={button.name}
              href={button.href}
              className="block text-earth-mid hover:text-earth-deep px-3 py-2 rounded-md text-xl font-medium transition duration-500 ease-linear transform hover:scale-110 font-text"
              onClick={() => setIsOpen(false)}
            >
              {button.name}
            </a>
          ))}
          {/* Mobile bottom buttons */}
          <div className="flex justify-center space-x-6 mt-4">
            {rightButtons.map((button) => (
              <a
                key={button.icon}
                href={button.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-600 ease-in-out transform hover:scale-110"
                onClick={() => setIsOpen(false)}
              >
                <ion-icon
                  name={button.icon}
                  class="text-earth-mid hover:text-earth-deep w-8 h-8"
                ></ion-icon>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
