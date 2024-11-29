// import Image from "next/image";
// import Card from "./components/recent-post-card";
import 'bootstrap/dist/css/bootstrap.min.css';

// export default function Home() {
//   return (
//     <>
// <section className="hero-section bg-[#CFA6A61C]">
//   <div className="container mx-auto px-4">
//     <div className="flex items-center justify-between h-[500px] flex-wrap">
//       <div className="text-container w-full md:w-1/2 flex flex-col gap-5">
//         <h1 className="main-text text-4xl font-extrabold">
//           Hi, I am Atiqa, Creative Technologist
//         </h1>
//         <p className="main-para text-base font-normal">
//           My portfolio reflects a blend of technical expertise and artistic vision. From design to development, I create seamless, impactful experiences. Explore my work and discover how I transform ideas into digital solutions.
//         </p>
//         <button className="resume-btn bg-[#F98585] text-white py-2 px-4 rounded-md text-lg font-medium cursor-pointer">
//           <a href="/resume.png" download>Download Resume</a>
//         </button>
//       </div>
//       <div className="flex justify-center md:justify-start mt-5 md:mt-0">
//         <Image src="/pic.png" width={300} height={300} alt="person" />
//       </div>
//     </div>
//   </div>
// </section>


// {/* <section className="recent-post bg-[#f4e2e2] py-20">
//   <div className="container mx-auto px-4">
//     <div className="main">
//       <div className="heading mb-5">
//         <h3 className="text-2xl font-bold">Recent Post</h3>
//       </div>

//       <div className="card-parent flex gap-10 flex-wrap justify-center">
//         <Card />
//       </div>
//     </div>
//   </div>
// </section> */}

// <section className="recent-post bg-[#f4e2e2] py-20">
//   <div className="container mx-auto px-4">
//     <div className="main">
//       <div className="heading mb-5 flex justify-between">
//         <h3 className="text-2xl font-bold">Recent Post</h3>
//       </div>

//       <div className="card-parent flex gap-10 justify-between">
//         {/* Card 1 - Larger and close to the left side */}
//         <div className="card bg-white h-[450px] w-[500px] p-10 flex flex-col justify-between border border-[#F98585]">
//           <div className="card-heading text-2xl font-bold text-[#171717] dark:text-[#ededed]">
//             Making a portfolio website
//           </div>
//           <div className="date-text text-lg font-normal text-gray-500">
//             09 Nov 2024 | Nextjs13
//           </div>
//           <p className="paragraph text-lg font-normal text-[#171717] dark:text-[#ededed]">
//             Building a portfolio website using Next.js 13, leveraging components and routing for a dynamic and seamless user experience.
//           </p>
        
//         </div>

//         {/* Card 2 - Larger and close to the right side */}
//         <div className="card bg-white h-[450px] w-[500px] p-10 flex flex-col justify-between border border-[#F98585]">
//           <div className="card-heading text-2xl font-bold text-[#171717] dark:text-[#ededed]">
//             Making a Resume Builder
//           </div>
//           <div className="date-text text-lg font-normal text-gray-500">
//             10 Nov 2024 | Nextjs13
//           </div>
//           <p className="paragraph text-lg font-normal text-[#171717] dark:text-[#ededed]">
//             Developing a resume builder using TypeScript, CSS, HTML. Which allows users to customize their resumes through an interactive CLI.
//           </p>
          
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

// <section className="featured-section bg-[#CFA6A61C] py-20">
//   <div className="container mx-auto px-4">
//     <div className="main flex flex-col justify-center gap-5">
//       <div className="main-heading text-center">
//         <h3 className="text-2xl font-semibold">Featured Works</h3>
//       </div>

//       <div className="card-parent flex flex-col gap-16">
//         <div className="card bg-white p-10 flex flex-col gap-5 justify-between">
//           <Image src="/resume.png" width={245} height={180} alt="image" />
//           <div className="card-content flex flex-col justify-between">
//             <h2 className="text-3xl font-bold">Resume builder</h2>
//             <div className="badge-parent flex gap-5 items-center">
//               <div className="badge bg-[#F98585] rounded-full px-7 py-1 text-white">
//                 <p>2024</p>
//               </div>
//               <p>Nextjs13</p>
//             </div>
//             <p className="text-lg text-gray-700">
//               Developed a customizable resume builder application using HTML, CSS, and TypeScript. The tool allows users to quickly create professional resumes with an intuitive and responsive design.
//             </p>
//           </div>
//         </div>

//         <div className="card bg-white p-10 flex flex-col gap-5 justify-between">
//           <Image src="/todo.png" width={245} height={180} alt="image" />
//           <div className="card-content flex flex-col justify-between">
//             <h2 className="text-3xl font-bold">To-do List</h2>
//             <div className="badge-parent flex gap-5 items-center">
//               <div className="badge bg-[#F98585] rounded-full px-7 py-1 text-white">
//                 <p>2024</p>
//               </div>
//               <p>CLI-based</p>
//             </div>
//             <p className="text-lg text-gray-700">
//               Created a CLI-based to-do list app using TypeScript, Inquirer, Node.js, and Chalk. It allows users to efficiently add tasks, prompts continuously until they finish, and displays a summary of all added tasks in an organized chart.
//             </p>
//           </div>
//         </div>

//         <div className="card bg-white p-10 flex flex-col gap-5 justify-between">
//           <Image src="/word-counter.png" width={245} height={180} alt="image" />
//           <div className="card-content flex flex-col justify-between">
//             <h2 className="text-3xl font-bold">Word Counter</h2>
//             <div className="badge-parent flex gap-5 items-center">
//               <div className="badge bg-[#F98585] rounded-full px-7 py-1 text-white">
//                 <p>2024</p>
//               </div>
//               <p>CLI-based</p>
//             </div>
//             <p className="text-lg text-gray-700">
//               Developed a CLI-based word counter using TypeScript, Inquirer, Node.js, and Chalk. It accurately counts words while ignoring whitespace, providing a fast and reliable word count for any input.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


//     </>
//   );
// }
// import Image from "next/image";
// import Card from "./components/recent-post-card";
// import 'bootstrap-icons/font/bootstrap-icons.css';



// export default function Home() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="bg-[#CFA6A61C]">
//         <div className="max-w-screen-xl mx-auto px-16 py-24">
//           <div className="flex items-center justify-between gap-10">
//             <div className="flex flex-col gap-8 w-1/2">
//               <h1 className="text-5xl font-extrabold text-foreground leading-tight">
//                 Hi, I am Atiqa, Creative Technologist
//               </h1>
//               <p className="text-base font-normal text-foreground">
//                 My portfolio reflects a blend of technical expertise and artistic vision. From design to development, I create seamless, impactful experiences. Explore my work and discover how I transform ideas into digital solutions.
//               </p>
//               <button className="bg-accent text-white text-lg font-medium py-2 px-4 rounded-sm hover:bg-opacity-90 max-w-max">
//   <a href="/resume.png" download className="no-underline text-white">
//     Download Resume
//   </a>
// </button>

//             </div>
//             <div>
//               <Image src="/pic.png" width={300} height={300} alt="person" />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Recent Post Section */}
//       <section className="recent-post bg-[#f4e2e2] py-16">
//   <div className="container mx-auto px-12">
//     <div className="main">
//       {/* Recent Post Heading */}
//       <div className="heading mb-6">
//         <h3 className="text-3xl font-semibold text-[#171717]">Recent Post</h3>
//       </div>

//       {/* Card Container */}
//       <div className="flex justify-center gap-8">
//         {/* Card 1 */}
//         <div className="card bg-white p-8 rounded-md w-[500px] h-[500px] border border-[#f4e2e2]">
//           <h2 className="card-heading text-2xl font-semibold text-[#171717]">
//             Making a portfolio website
//           </h2>
//           <p className="date-text text-lg font-normal text-[#171717] mt-4">09 Nov 2024 | Nextjs13</p>
//           <p className="paragraph text-base font-normal text-[#171717] mt-6">
//             Building a portfolio website using Next.js 13, leveraging components and routing for a dynamic and seamless user experience.
//           </p>
//         </div>

//         {/* Card 2 */}
//         <div className="card bg-white p-8 rounded-md w-[500px] h-[500px] border border-[#f4e2e2]">
//           <h2 className="card-heading text-2xl font-semibold text-[#171717]">
//             Making a Resume Builder
//           </h2>
//           <p className="date-text text-lg font-normal text-[#171717] mt-4">10 Nov 2024 | Nextjs13</p>
//           <p className="paragraph text-base font-normal text-[#171717] mt-6">
//             Developing a resume builder using TypeScript, CSS, and HTML. Which allows users to customize their resumes through an interactive CLI.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


// <section className="featured-section bg-[#CFA6A61C] py-16">
//       <div className="container mx-auto px-12">
//         {/* Featured Section Heading */}
//         <div className="main mb-8">
//           <div className="main-heading">
//             <h3 className="text-2xl text-[#171717]">Featured Works</h3>
//           </div>

//           {/* Featured Section Details (Vertical layout) */}
//           <div className="flex flex-col gap-12">
//             {/* First Featured Section */}
//             <div className="featured-item flex items-center gap-24"> 
//               <div className="image w-[250px] h-[155px] bg-gray-200">
//                 <Image
//                   src="/resume.png"
//                   alt="Resume Builder"
//                   layout="responsive"
//                   width={500}
//                   height={195}
//                   objectFit="cover"
//                   className="rounded-lg"
//                   priority={true}
//                 />
//               </div>

//               {/* Card Content */}
//               <div className="card-content flex flex-col gap-4">
//                 <h2 className="text-3xl font-semibold text-[#171717]">Resume Builder</h2>
//                 <div className="badge-parent flex items-center gap-4">
                 
//                   <div className="badge bg-[#F98585] flex items-center justify-center w-[100px] h-[40px]">
//                 <p className="text-white text-center text-sm font-semibold">2024</p>
//               </div>

//                   <p className="text-lg text-[#171717]">Next.js 13</p>
//                 </div>
//                 <p className="text-lg text-[#171717]">
//                   Developed a customizable resume builder application using HTML, CSS, and TypeScript. The tool allows users to quickly create professional resumes with an intuitive and responsive design.
//                 </p>
//               </div>
//             </div>

//             {/* Second Featured Section */}
//             <div className="featured-item flex items-center gap-12"> 
//               <div className="image w-[400px] h-[130px] bg-gray-200">
//                 <Image
//                   src="/todo.png"
//                   alt="To-Do List"
//                   layout="responsive"
//                   width={500}
//                   height={195}
//                   objectFit="cover"
//                   className="rounded-lg"
//                   priority={true}
//                 />
//               </div>
//               <div className="card-content flex flex-col gap-4">
//                 <h2 className="text-3xl font-semibold text-[#171717]">To-Do List</h2>
//                 <div className="badge-parent flex items-center gap-4">
                  
//                   <div className="badge bg-[#F98585] flex items-center justify-center w-[100px] h-[40px]">
//                 <p className="text-white text-center text-sm font-semibold">2024</p>
//               </div>
//                   <p className="text-lg text-[#171717]">CLI-based</p>
//                 </div>
//                 <p className="text-lg text-[#171717]">
//                   Created a CLI-based to-do list app using TypeScript, Inquirer, Node.js, and Chalk. It allows users to efficiently add tasks, prompts continuously until they finish, and displays a summary of all added tasks in an organized chart.
//                 </p>
//               </div>
//             </div>

//             {/* Third Featured Section */}
//             <div className="featured-item flex items-center gap-12"> 
//               <div className="image w-[350px] h-[130px] bg-gray-200">
//                 <Image
//                   src="/word-counter.png"
//                   alt="Word Counter"
//                   layout="responsive"
//                   width={500}
//                   height={195}
//                   objectFit="cover"
//                   className="rounded-lg"
//                   priority={true}
//                 />
//               </div>
//               <div className="card-content flex flex-col gap-4">
//                 <h2 className="text-3xl font-semibold text-[#171717]">Word Counter</h2>
//                 <div className="badge-parent flex items-center gap-4">
//                   {/* Horizontal Circle Badge */}
//                   <div className="badge bg-[#F98585] flex items-center justify-center w-[100px] h-[40px]">
//                 <p className="text-white text-center text-sm font-semibold">2024</p>
//               </div>
//                   <p className="text-lg text-[#171717]">CLI-based</p>
//                 </div>
//                 <p className="text-lg text-[#171717]">
//                   Developed a CLI-based word counter using TypeScript, Inquirer, Node.js, and Chalk. It accurately counts words while ignoring whitespace, providing a fast and reliable word count for any input.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
  

//     </>
//   );
// }
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
