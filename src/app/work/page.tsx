import React from "react";
import './work.css';
import Image from 'next/image';


const Work: React.FC = () => {
  return (
    <>
      {/* Work Hero Section */}
      <section className="bg-[#f4e2e2] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12">
            <div className="text-center max-w-3xl">
              <h1 className="text-4xl font-extrabold text-foreground">My Work</h1>
              <p className="text-lg font-normal text-foreground mt-4">
                Explore my work across design and development. I create digital experiences that blend aesthetics and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-foreground">Featured Projects</h3>
          </div>

          <div className="flex flex-wrap gap-8 justify-center">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg w-[245px] max-w-full transform hover:scale-105 transition-transform duration-300">
            <Image
  src="/resume.png"
  alt="Project 1"
  width={500}
  height={180} 
  layout="responsive"
  className="object-cover rounded-t-lg"
/>


              <div className="p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-2">Resume Builder</h2>
                <p className="text-base text-foreground">
                  Developed a customizable resume builder application using HTML, CSS, and TypeScript. The tool allows users to quickly create professional resumes with an intuitive and responsive design.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-lg w-[245px] max-w-full transform hover:scale-105 transition-transform duration-300">
            <Image
  src="/todo.png"
  alt="Project 2"
  width={500} 
  height={180} 
  layout="responsive" 
  className="object-cover rounded-t-lg"
/>

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-2">To-do List</h2>
                <p className="text-base text-foreground">
                  Created a CLI-based to-do list app using TypeScript, Inquirer, Node.js, and Chalk. It allows users to efficiently add tasks, prompts continuously until they finish, and displays a summary of all added tasks in an organized chart.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-lg w-[245px] max-w-full transform hover:scale-105 transition-transform duration-300">
            <Image
  src="/word-counter.png"
  alt="Project 3"
  width={500} 
  height={180}
  layout="responsive" 
  className="object-cover rounded-t-lg"
/>

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-foreground mb-2">Word Counter</h2>
                <p className="text-base text-foreground">
                  Developed a CLI-based word counter using TypeScript, Inquirer, Node.js, and Chalk. It accurately counts words while ignoring whitespace, providing a fast and reliable word count for any input.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Social Links Section */}
      <section className="bg-[#e6a8a8] py-10">
  <div className="container mx-auto px-4">
    <div className="text-center">
      <h3 className="text-3xl font-bold text-white mb-6">Connect with Me</h3>
      <div className="flex justify-center gap-8 text-2xl">
        <a href="mailto:your-email@example.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors duration-300">
          <i className="bi bi-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/sheikh-atiqa-48682a2b6/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors duration-300">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/Sheikhatiqaofficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors duration-300">
          <i className="bi bi-github"></i>
        </a>
      </div>
    </div>
  </div>
</section>


    </>
  );
}

export default Work;
