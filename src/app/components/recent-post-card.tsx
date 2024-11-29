
export default function Card() {
  return (
    <>
      <div className="card bg-white p-8 rounded-md shadow-lg w-[450px] h-[500px] mx-auto mb-10">
        <h2 className="card-heading text-2xl font-bold text-[#171717]">Making a portfolio website</h2>
        <p className="date-text text-lg font-normal text-[#171717]">09 Nov 2024 | Nextjs13</p>
        <p className="paragraph text-base font-normal text-[#171717] mt-4">
          Building a portfolio website using Next.js 13, leveraging components and routing for a dynamic and seamless user experience.
        </p>
      </div>

      <div className="card bg-white p-8 rounded-md shadow-lg w-[450px] h-[500px] mx-auto mb-10">
        <h2 className="card-heading text-2xl font-bold text-[#171717]">Making a Resume Builder</h2>
        <p className="date-text text-lg font-normal text-[#171717]">10 Nov 2024 | Nextjs13</p>
        <p className="paragraph text-base font-normal text-[#171717] mt-4">
          Developing a resume builder using TypeScript, CSS, HTML. Which allows users to customize their resumes through an interactive CLI.
        </p>
      </div>
    </>
  );
}
