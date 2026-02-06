import React, { useState } from "react";

const Certification = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="certifications" className="py-16 px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Certifications & Achievements
        </h2>

        <ul className="space-y-4 text-gray-700">
          <li className="flex justify-between items-center border-b pb-2">
            <span>
              <strong>Student Coordinator, IEEE Student Branch</strong> –
              Organized technical events & hackathons.
            </span>
            <span className="text-sm text-gray-500">2025</span>
          </li>

          <li className="flex justify-between items-center border-b pb-2">
            <span>
              <strong>
                Tech Kabaddi (Govt. of Karnataka – NAIN Incubation)
              </strong>{" "}
              – Designed referee-support system for zone detection.
            </span>
            <span className="text-sm text-gray-500">2024</span>
          </li>

          <li className="flex justify-between items-center border-b pb-2">
            <span>
              <strong>Bangalore Tech Summit</strong> – Learned emerging tech
              insights.
            </span>
            <span className="text-sm text-gray-500">2023</span>
          </li>

          {/* Show More Content */}
          {showMore && (
            <>
              <li className="flex justify-between items-center border-b pb-2">
                <span>
                  <strong>Oracle Cloud Infrastructure AI Foundations</strong>,
                  Oracle University.
                </span>
                <span className="text-sm text-gray-500">2023</span>
              </li>

              <li className="flex justify-between items-center border-b pb-2">
                <span>
                  <strong>Entrepreneurial Thinking</strong>, IUCEE.
                </span>
                <span className="text-sm text-gray-500">2022</span>
              </li>

              <li className="flex justify-between items-center border-b pb-2">
                <span>
                  <strong>The Fundamentals of Digital Marketing</strong>, Google
                  Digital Unlocked.
                </span>
                <span className="text-sm text-gray-500">2021</span>
              </li>
            </>
          )}
        </ul>

        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(!showMore)}
            className="px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition"
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certification;
