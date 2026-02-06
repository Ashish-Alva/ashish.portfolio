import React from "react";

const Hero = () => {
  return (
    <section id="Hero" className="hero flex items-center justify-center">
      <div className="bg-white rounded-lg px-20 pt-12 pb-6 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src="/assets/images/profile_img.jpeg"
            alt="Profile"
            className="rounded-lg w-64 h-64 object-cover"
          />
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mt-2">I'm Ashish Alva</h1>
          <p className="text-gray-500 mt-2">
            B.E. graduate passionate about building web applications and smart
            automation solutions. Skilled in Java, Python, SQL, React, and
            Node.js with a focus on creating intuitive, user-friendly
            experiences. Eager to apply technical and design skills to develop
            impactful real-world solutions.
          </p>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/ashish-alva-93b2301a8/"
              className="bg-[#232323] m-2 rounded-full"
            >
              <img src="icons/EntypoSocialLinkedinWithCircle.svg" alt="" />
            </a>
            <a
              href="https://github.com/Ashish-Alva"
              className="bg-[#232323] m-2 rounded-full"
            >
              <img src="icons/IconoirGithubCircle.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/ashish_alva_/?utm_source=ig_web_button_share_sheet"
              className="bg-[#232323] m-2 rounded-full"
            >
              <img src="icons/MageInstagramCircle.svg" alt="" />
            </a>
            <a
              href="https://www.behance.net/ashishalva"
              className="bg-[#232323] m-2 rounded-full"
            >
              <img src="icons/AntDesignBehanceCircleFilled.svg" alt="" />
            </a>
            <a
              href="https://in.pinterest.com/fusi0nframe/"
              className="bg-[#232323] m-2 rounded-full"
            >
              <img src="icons/MdiPinterest.svg" alt="" />
            </a>
          </div>

          <div className="mt-4 flex space-x-4">
            <button className="bg-yellow-500 hover:bg-[#232323] text-white px-4 py-2 rounded-lg">
              <a
                href="assets/Ashish_Alva_Resume.pdf"
                download="Ashish_Alva_Resume.pdf"
              >
                Resume
              </a>
            </button>
            <button className="border border-yellow-500 hover:bg-[#232323] text-yellow-500 px-4 py-2 rounded-lg">
              <a href="#Contact">Contact Me</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
