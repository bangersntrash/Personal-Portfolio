import "../App.css";

function Footer() {
  return (
    <footer className="footer">
      
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()} Juniper Farr
        </p>

        {/* Right Side Links */}
        <div className="flex items-center gap-8 text-sm">
          <a
            href="https://github.com/bangersntrash"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            GitHub  
          </a>

          <a
            href="https://linkedin.com/in/cameron-farr-b27597247"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            LinkedIn  
          </a>

          <a
            href="mailto:cameron.farr2004@gmail.com"
            className="text-gray-400 hover:text-white transition"
          >
            Email  
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;