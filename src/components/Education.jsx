import React from 'react'

const Education = () => {
  return (
        <section id="Education" className="py-12 px-14 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Education & Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl text-center font-semibold mb-4">Education</h3>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p><strong>CGPA: 8.43</strong></p>
              <p>
                Bachelors of Engineering – Electronics & Communication
                Engineering
              </p>
              <p className="text-gray-600">
                Mangalore Institute of Technology & Engineering
              </p>
              <p className="text-yellow-500 font-semibold">2022-26</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-4">
              <p><strong>Percentage: 90.17</strong></p>
              <p>Senior Secondary (12th)</p>
              <p className="text-gray-600">
                Alvas Pre University College, Moodabidri
              </p>
              <p className="text-yellow-500 font-semibold">2020-22</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-4">
              <p><strong>Percentage: 85.6</strong></p>
              <p>Secondary School (SSLC)</p>
              <p className="text-gray-600">Our Lady of Pompei, Kaikamba</p>
              <p className="text-yellow-500 font-semibold">2019-20</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl text-center font-semibold mb-4">Experience</h3>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p><strong>Internship</strong></p>
              <p><strong>UI/UX Design Intern</strong> | Zetpeak</p>
              <p className="text-gray-600">
                Designed a project management system, creating
                wireframes, prototypes, and high-fidelity mockups
                using Figma. Collaborated with product managers to  
                ensure seamless implementation of designs.
              </p>
              <p className="text-yellow-500 font-semibold">FEB 2025 – MAY 2025
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-4">
              <p><strong>Internship</strong></p>
              <p><strong>Data Analyst</strong> | Shell-Edunet Skills4Future</p>
              <p className="text-gray-600">
                Gained experience in analyzing a dataset on energy consumption
                to extract key insights and trends by visualizing the dataset
                using Power BI.
              </p>
              <p className="text-yellow-500 font-semibold">DEC 2024 - JAN 25</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education