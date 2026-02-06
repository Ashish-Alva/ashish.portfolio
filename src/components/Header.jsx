import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#232323] py-4">
      <nav className="flex items-center w-[92%] mx-auto">
        <div className="w-16 font-bold flex-1">
          <img
            className="rounded-full w-16 h-16"
            src="assets/images/logo/logolight.svg"
            alt="Logo"
          />
        </div>

        {/* NAV LINKS */}
        <div
          className={`nav-links duration-500 md:static absolute 
          md:min-h-fit min-h-[60vh] left-0 
          ${open ? "top-[70px]" : "-top-full"} 
          md:w-auto bg-[#232323] w-full flex 
          md:justify-end justify-center px-5`}
        >
          <ul className="flex md:flex-row flex-col justify-center text-center m-5 md:gap-[4vw] gap-8 text-[#E6A82D]">
            <li>
              <a
                onClick={() =>
                  document
                    .getElementById("Hero")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-gray-500"
                href="#Hero"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  document
                    .getElementById("Skills")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-gray-500"
                href="#Skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  document
                    .getElementById("Education")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-gray-500"
                href="#Education"
              >
                Education
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  document
                    .getElementById("Education")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-gray-500"
                href="#Education"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  document
                    .getElementById("Projects")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-gray-500"
                href="#Projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  document
                    .getElementById("Achievements")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-gray-500"
                href="#Achievements"
              >
                Certifications
              </a>
            </li>
            <li>
              <a
                onClick={() =>
                  document
                    .getElementById("Contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
                className="hover:text-gray-500"
                href="#Contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* MOBILE MENU ICON */}
        <div className="flex items-center gap-6 md:hidden">
          <ion-icon
            name={open ? "close" : "menu"}
            className="text-3xl cursor-pointer m-4 text-[#E6A82D]"
            onClick={() => setOpen(!open)}
          ></ion-icon>
        </div>
      </nav>
    </header>
  );
};

export default Header;
