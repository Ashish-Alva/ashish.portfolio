import React from 'react'

const Skills = () => {
  return (
        <section id="Skills" className="skills px-8 bg-white py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-4">Languages</h3>
            <div className="flex justify-center space-x-12">
              <img src="/assets/images/python.png" alt="Python" className="w-12 h-12" />
              <img src="/assets/images/c++.png" alt="C++" className="w-12 h-12" />
              <img src="/assets/images/js.png" alt="JavaScript" className="w-12 h-12" />
            </div>
            <div className="flex justify-center space-x-12 mt-8">
              <img src="/assets/images/html.png" alt="HTML" className="w-12 h-12" />
              <img src="/assets/images/css.png" alt="CSS" className="w-12 h-12" />
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-4">Database</h3>
            <div className="flex justify-center">
              <img src="/assets/images/mysql.png" alt="MongoDB" className="w-12 h-12" />
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg font-semibold mb-4">Others</h3>
            <div className="flex justify-center space-x-12">
              <img src="/assets/images/git.png" alt="Git" className="w-12 h-12" />
              <img src="/assets/images/github.png" alt="GitHub" className="w-12 h-12" />
              <img src="/assets/images/flutter.png" alt="Flutter" className="w-12 h-12" />
            </div>
            <div className="flex justify-center mt-8">
              <img src="/assets/images/figma.png" alt="Figma" className="w-12 h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills