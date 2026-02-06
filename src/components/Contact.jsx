import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("HhjCCxxcf5EuQ0nOo"); // your public key
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bjo1x73", // EmailJS service ID
        "template_ycewgmi", // EmailJS template ID
        e.target, // form reference
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to send the message. Please try again.");
        },
      );
  };

  return (
    <section id="Contact" className="py-12 px-10 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>

        {/*<div className="grid grid-cols-1 p-6 md:grid-cols-2 gap-6">
          <div className="content-center">
            <iframe
              className="h-full w-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30766383.57766797!2d60.983946918825104!3d19.72700683591119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1740826444416!5m2!1sen!2sin"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-2">Get In Touch</h3>
            <p className="text-gray-600 mb-4">
              Let's connect to share our knowledge.
            </p>

            <form id="contact-form" onSubmit={handleSubmit}>
              <input
                className="w-full p-3 mb-4 border rounded"
                type="text"
                name="name"
                placeholder="Name"
                required
              />

              <input
                className="w-full p-3 mb-4 border rounded"
                type="email"
                name="email"
                placeholder="Email"
                required
              />

              <textarea
                className="w-full p-3 mb-4 border rounded h-32"
                name="message"
                placeholder="Message"
                required
              ></textarea>

              <button
                className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-4 py-2 rounded w-full"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div> */}

        <div className="bg-white p-6 rounded-lg shadow-md w-lg mx-auto">
          <h3 className="text-2xl font-semibold mb-2 ">Get In Touch</h3>
          
          <p className="text-gray-600 mb-4">
            Let's connect to share our knowledge.
          </p>

          <form id="contact-form" onSubmit={handleSubmit}>
            <input
              className="w-full p-3 mb-4 border rounded"
              type="text"
              name="name"
              placeholder="Name"
              required
            />

            <input
              className="w-full p-3 mb-4 border rounded"
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            <textarea
              className="w-full p-3 mb-4 border rounded h-32"
              name="message"
              placeholder="Message"
              required
            ></textarea>

            <button
              className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-4 py-2 rounded w-full"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
