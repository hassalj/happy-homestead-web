import logo from "@/assets/logo-int-security.jpg";

const Footer = () => {
  return (
    <footer className="bg-footer-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="INT Security" className="h-10 w-auto mb-4" />
            <p className="text-footer-foreground text-sm">
              Din specialist inom kamera, tele &amp; nätverksinstallation.
            </p>
          </div>

          <div>
            <h4 className="text-section-dark-foreground font-semibold mb-4">Snabblänkar</h4>
            <ul className="space-y-2 text-sm">
              {["Hem", "Om Oss", "Tjänster", "Kontakt", "Offert"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-footer-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-section-dark-foreground font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-sm text-footer-foreground">
              <p>Södergatan 76</p>
              <p>252 19 Helsingborg</p>
            </div>
          </div>
        </div>

        <div className="border-t border-footer-foreground/20 mt-10 pt-6 text-center text-xs text-footer-foreground">
          © {new Date().getFullYear()} INT Security. Alla rättigheter förbehållna.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
