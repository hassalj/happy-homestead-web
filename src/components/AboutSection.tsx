import heroImg from "@/assets/hero-security.jpg";

const AboutSection = () => {
  return (
    <section id="om-oss" className="py-20 md:py-28 bg-section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading text-section-dark-foreground">
              Säkerhet för ditt hem eller företag
            </h2>
            <p className="mt-6 text-section-dark-foreground/70 text-lg leading-relaxed">
              INT Security erbjuder helhetslösningar inom kameraövervakning, elinstallation och
              nätverkskonfiguration. Vi arbetar med de senaste teknologierna för att ge dig maximal
              trygghet dygnet runt.
            </p>
            <p className="mt-4 text-section-dark-foreground/70 text-lg leading-relaxed">
              Med vår expertis och erfarenhet ser vi till att varje installation blir professionellt
              utförd och kvalitetssäkrad.
            </p>
            <div className="mt-8">
              <a href="#tjanster" className="btn-outline-light">
                Tjänster
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
            <img
              src={heroImg}
              alt="Säkerhetsövervakning kontrollrum"
              className="w-full h-full object-cover"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
