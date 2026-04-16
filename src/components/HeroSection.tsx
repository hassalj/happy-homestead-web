import heroImg from "@/assets/hero-security.jpg";
import logo from "@/assets/logo-int-security.png";

const HeroSection = () => {
  return (
    <section id="hem" className="relative h-screen min-h-[600px] flex items-center">
      {/* Background — will be replaced with video later */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Säkerhetsövervakning"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hero-foreground leading-tight mb-6">
            Din specialist inom kamera, tele &amp; nätverksinstallation
          </h1>


          <a href="#offert" className="btn-primary">
            Begär Offert
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
