import { Link, useLocation } from "react-router-dom";

function Footer() {

  const location = useLocation().pathname

    return (
        <footer className={`py-10 bg-base-200 text-base-content border-t-2 mt-6 ${location === "/login" || location === "/register" ? "hidden":"block"}`}>
          <div className="container footer">
            <div>
              <p className=" font-semibold italic text-xl">BlitzBiz</p>
              <p>Startup Consultation Platform</p>
            </div> 
            <div>
              <span className="footer-title">Layanan</span> 
              <a className="link link-hover">Marketplace Bisnis</a> 
              <a className="link link-hover">Konsultasi</a> 
              <a className="link link-hover">Growth Marketing</a> 
            </div> 
            <div>
              <span className="footer-title">Perusahaan</span> 
              <a className="link link-hover">Tentang BlitzBiz</a> 
              <a className="link link-hover">Kontak</a> 
              <a className="link link-hover">Press Release</a>
            </div> 
            <div>
              <span className="footer-title">Legal</span> 
              <a className="link link-hover">Persyaratan Penggunaan</a> 
              <a className="link link-hover">Kebijakan Privasi</a> 
              <a className="link link-hover">Kebijakan Cookie</a>
            </div>
          </div>
        </footer>
      );
}

export default Footer;