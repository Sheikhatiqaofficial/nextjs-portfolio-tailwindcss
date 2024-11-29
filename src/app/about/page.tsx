// import Image from "next/image";
// import './about.css'
// export default function About() {
//   return (
//     <>
//       <section className="hero-section">
//         <div className="container">
//           <div className="main">
//             <div className="text-container">
//               <h1 className="main-text-a">About Me</h1>
//               <p className="main-para">
//                 A creative technologist with a passion for combining design and technology. I specialize in building meaningful digital experiences.
//                 I believe in making the complex simple, and always strive for excellence in everything I do.
//               </p>
//               <button className="resume-btn">
//                 <a href="/resume.png" download>Download Resume</a>
//               </button>
//             </div>
//             <div>
//               <Image src="/pic.png" width={300} height={300} alt="person" />
//             </div>
//           </div>
//         </div>
//       </section>

    
//       <section id="certification" className="info-section">
//         <h3>Certification</h3>
//         <ul>
//         <li><p><b>HTML, CSS:</b> From Adamjee Coaching Centre</p></li>
//         <li><p><b>Artificial Intelligence, Web 3.0 & Metaverse:</b> From Governor House Karachi (ongoing)</p></li>
//         </ul>
//       </section>

      
//       <section id="education" className="info-section">
//         <h3>Education</h3>
//         <ul>
//          <li> <p><b>Intermediate:</b> From Government Degree College</p></li>
//          <li><p><b>Matriculation:</b> From The Islamic School</p></li>
//         </ul>
//       </section>

     
//       <section id="skills" className="info-section">
//         <h3>Skills</h3>
//         <ul>
//           <li>Computation of Information</li>
//           <li>MS Office</li>
//           <li>HTML5</li>
//           <li>CSS</li>
//           <li>JavaScript</li>
//           <li>TypeScript</li>
//           <li>Communication Skills</li>
//         </ul>
//       </section>
//     </>
//   );
// }

import Image from "next/image";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f4e2e2] py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-12">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-extrabold text-[#171717] mb-4">About Me</h1>
              <p className="text-lg font-normal text-[#171717] mb-6">
                A creative technologist with a passion for combining design and technology. I specialize in building meaningful digital experiences. I believe in making the complex simple, and always strive for excellence in everything I do.
              </p>
              <button className="bg-[#F98585] text-white py-2 px-6 rounded-full hover:bg-[#e37a7a] transition-colors duration-300">
  <a href="/resume.png" download className="no-underline text-white">Download Resume</a>
</button>

            </div>
            <div className="w-3/4 sm:w-48">
              <Image src="/pic.png" width={300} height={300} alt="person" className="rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="bg-white py-10 px-4 mb-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-[#171717] mb-4">Certification</h3>
        <ul className="list-none space-y-3">
          <li><p className="text-[#333]"><b>HTML, CSS:</b> From Adamjee Coaching Centre</p></li>
          <li><p className="text-[#333]"><b>Artificial Intelligence, Web 3.0 & Metaverse:</b> From Governor House Karachi (ongoing)</p></li>
        </ul>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-white py-10 px-4 mb-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-[#171717] mb-4">Education</h3>
        <ul className="list-none space-y-3">
          <li><p className="text-[#333]"><b>Intermediate:</b> From Government Degree College</p></li>
          <li><p className="text-[#333]"><b>Matriculation:</b> From The Islamic School</p></li>
        </ul>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white py-10 px-4 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-[#171717] mb-4">Skills</h3>
        <ul className="list-none space-y-3">
          <li className="text-[#333]">Computation of Information</li>
          <li className="text-[#333]">MS Office</li>
          <li className="text-[#333]">HTML5</li>
          <li className="text-[#333]">CSS</li>
          <li className="text-[#333]">JavaScript</li>
          <li className="text-[#333]">TypeScript</li>
          <li className="text-[#333]">Communication Skills</li>
        </ul>
      </section>
    </>
  );
}
