
export default function Footer() {
  return (
    <>
      <div className="footer flex flex-col justify-center items-center py-8"> {/* Added py-8 for padding */}
        <div className="iconsDiv flex flex-wrap justify-center gap-6 mb-4"> 
      
          <i className="bi bi-facebook text-2xl cursor-pointer"></i>
          <i className="bi bi-envelope text-2xl cursor-pointer"></i>
          <i className="bi bi-linkedin text-2xl cursor-pointer"></i>
          <i className="bi bi-whatsapp text-2xl cursor-pointer"></i>
        </div>

        <p className="copywrite text-center">
          Copyright ©2020 All rights reserved
        </p>
      </div>
    </>
  );
}
