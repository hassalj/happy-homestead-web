import logo from "@/assets/logo-int-security.png";

const Footer = () => {
  return (
    <footer className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="INT Security" className="h-14 w-auto mb-4" />
            <p className="text-gray-600 text-sm">
              Din specialist inom kamera, tele &amp; nätverksinstallation.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm">
              {["Hem", "Om Oss", "Tjänster", "Kontakt", "Offert"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Södergatan 76</p>
              <p>252 19 Helsingborg</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} INT Security. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
