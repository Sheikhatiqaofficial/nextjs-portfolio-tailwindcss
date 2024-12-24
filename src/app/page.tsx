import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";

import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#CFA6A61C]">
        <div className="max-w-screen-xl mx-auto px-8 py-24 sm:px-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-10">
            <div className="flex flex-col gap-8 w-full sm:w-1/2">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-foreground leading-tight">
                Hi, I am Atiqa, Creative Technologist
              </h1>
              <p className="text-base sm:text-lg font-normal text-foreground">
                My portfolio reflects a blend of technical expertise and artistic vision. From design to development, I create seamless, impactful experiences. Explore my work and discover how I transform ideas into digital solutions.
              </p>
              <button className="bg-accent text-white text-lg font-medium py-2 px-4 rounded-sm hover:bg-opacity-90 max-w-max">
                <a href="/resume.png" download className="no-underline text-white">
                  Download Resume
                </a>
              </button>
            </div>
            <div className="mt-8 sm:mt-0">
              <Image src="/pic.png" width={300} height={300} alt="person" />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Post Section */}
      <section className="recent-post bg-[#f4e2e2] py-16">
        <div className="container mx-auto px-8 sm:px-12">
          <div className="main">
            {/* Recent Post Heading */}
            <div className="heading mb-6">
              <h3 className="text-3xl font-semibold text-[#171717]">Recent Post</h3>
            </div>

            {/* Card Container */}
            <div className="flex flex-col sm:flex-row justify-center gap-8">
              {/* Card 1 */}
              <div className="card bg-white p-8 rounded-md w-full sm:w-[500px] h-[500px] border border-[#f4e2e2]">
                <h2 className="card-heading text-2xl font-semibold text-[#171717]">
                  Making a portfolio website
                </h2>
                <p className="date-text text-lg font-normal text-[#171717] mt-4">09 Nov 2024 | Nextjs13</p>
                <p className="paragraph text-base font-normal text-[#171717] mt-6">
                  Building a portfolio website using Next.js 13, leveraging components and routing for a dynamic and seamless user experience.
                </p>
              </div>

              {/* Card 2 */}
              <div className="card bg-white p-8 rounded-md w-full sm:w-[500px] h-[500px] border border-[#f4e2e2]">
                <h2 className="card-heading text-2xl font-semibold text-[#171717]">
                  Making a Resume Builder
                </h2>
                <p className="date-text text-lg font-normal text-[#171717] mt-4">10 Nov 2024 | Nextjs13</p>
                <p className="paragraph text-base font-normal text-[#171717] mt-6">
                  Developing a resume builder using TypeScript, CSS, and HTML. Which allows users to customize their resumes through an interactive CLI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-section bg-[#CFA6A61C] py-16">
  <div className="container mx-auto px-8 sm:px-12">
    {/* Featured Section Heading */}
    <div className="main mb-8">
      <div className="main-heading">
        <h3 className="text-xl sm:text-2xl text-[#171717]">Featured Works</h3>
      </div>
    </div>

    {/* Featured Section Details */}
    <div className="flex flex-col gap-8 sm:gap-12">
      {/* First Featured Section */}
      <div className="featured-item flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
        <div className="image w-full sm:w-[250px] h-auto bg-gray-200">
          <Image
            src="/resume.png"
            alt="Resume Builder"
            layout="responsive"
            width={500}
            height={195}
            objectFit="cover"
            className="rounded-lg"
            priority={true}
          />
        </div>

        {/* Card Content */}
        <div className="card-content flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#171717]">Resume Builder</h2>
          <div className="badge-parent flex items-center gap-4">
            
            <div className="badge bg-[#F98585] flex items-center justify-center w-[100px] h-[40px]">
              <p className="text-white text-center text-sm font-semibold">2024</p>
            </div>
            <p className="text-lg text-[#171717]">Next.js 13</p>
          </div>
          <p className="text-lg text-[#171717]">
            Developed a customizable resume builder application using HTML, CSS, and TypeScript. The tool allows users to quickly create professional resumes with an intuitive and responsive design.
          </p>
        </div>
      </div>

      {/* Second Featured Section */}
      <div className="featured-item flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
        <div className="image w-full sm:w-[400px] h-auto bg-gray-200">
          <Image
            src="/todo.png"
            alt="To-Do List"
            layout="responsive"
            width={500}
            height={195}
            objectFit="cover"
            className="rounded-lg"
            priority={true}
          />
        </div>
        <div className="card-content flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#171717]">To-Do List</h2>
          <div className="badge-parent flex items-center gap-4">
            <div className="badge bg-[#F98585] flex items-center justify-center w-[100px] h-[40px]">
              <p className="text-white text-center text-sm font-semibold">2024</p>
            </div>
            <p className="text-lg text-[#171717]">CLI-based</p>
          </div>
          <p className="text-lg text-[#171717]">
            Created a CLI-based to-do list app using TypeScript, Inquirer, Node.js, and Chalk. It allows users to efficiently add tasks, prompts continuously until they finish, and displays a summary of all added tasks in an organized chart.
          </p>
        </div>
      </div>

      {/* Third Featured Section */}
      <div className="featured-item flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
        <div className="image w-full sm:w-[350px] h-auto bg-gray-200">
          <Image
            src="/word-counter.png"
            alt="Word Counter"
            layout="responsive"
            width={500}
            height={195}
            objectFit="cover"
            className="rounded-lg"
            priority={true}
          />
        </div>
        <div className="card-content flex flex-col gap-4">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#171717]">Word Counter</h2>
          <div className="badge-parent flex items-center gap-4">
            <div className="badge bg-[#F98585] flex items-center justify-center w-[100px] h-[40px]">
              <p className="text-white text-center text-sm font-semibold">2024</p>
            </div>
            <p className="text-lg text-[#171717]">CLI-based</p>
          </div>
          <p className="text-lg text-[#171717]">
            Developed a CLI-based word counter using TypeScript, Inquirer, Node.js, and Chalk. It accurately counts words while ignoring whitespace, providing a fast and reliable word count for any input.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
}
