import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-yellow-500 py-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold">Ashish Alva</h3>
          <p className="text-gray-400 mt-2">Passionate UI/UX Designer.</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a
              href="https://www.linkedin.com/in/ashish-alva-93b2301a8/"
              className="p-2 border border-yellow-500 rounded-full"
            >
              <img src="/assets/icons/EntypoSocialLinkedinWithCircle.svg" alt="" />
            </a>
            <a
              href="https://github.com/Ashish-Alva"
              className="p-2 border border-yellow-500 rounded-full"
            >
              <img src="/assets/icons/IconoirGithubCircle.svg" alt="" />
            </a>
            <a
              href="https://www.instagram.com/ashish_alva_/?utm_source=ig_web_button_share_sheet"
              className="p-2 border border-yellow-500 rounded-full"
            >
              <img src="/assets/icons/MageInstagramCircle.svg" alt="" />
            </a>
            <a
              href="https://www.behance.net/ashishalva"
              className="p-2 border border-yellow-500 rounded-full"
            >
              <img src="/assets/icons/AntDesignBehanceCircleFilled.svg" alt="" />
            </a>
            <a
              href="https://in.pinterest.com/fusi0nframe/"
              className="p-2 border border-yellow-500 rounded-full"
            >
              <img src="/assets/icons/MdiPinterest.svg" alt="" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#Contact" className="hover:underline">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contact Information</h3>
          <ul className="text-gray-400 mt-2 space-y-2">
            <li>
              <strong>Email:</strong> ashishalva1234@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91-7892038215
            </li>
            <li>
              <strong>Address:</strong> Mangalore, India
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">
        © Ashish Alva 2025 - All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
