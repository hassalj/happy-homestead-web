import serviceCamera from "@/assets/service-camera.jpg";
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceNetwork from "@/assets/service-network.jpg";

const services = [
  {
    title: "Kameraövervakning",
    description:
      "Avancerade kameraövervakningstjänster för att skydda ditt hem eller företag. Våra skräddarsydda lösningar inkluderar installation av högkvalitativa kameror, vilket ger dig möjlighet att hålla ett öga på dina lokaler dygnet runt.",
    image: serviceCamera,
  },
  {
    title: "Elinstallation",
    description:
      "Vi erbjuder professionella elinstallationstjänster dygnet runt för att möta dina elektriska behov. Våra erfarna elektriker är tillgängliga för att utföra installationer av belysning, uttag, elcentraler och mycket mer.",
    image: serviceElectrical,
  },
  {
    title: "Nätverksinställningar",
    description:
      "Professionella nätverksinställningar för att säkerställa att ditt hem eller företag har en stabil internetuppkoppling. Vi hjälper till med installation och konfiguration av routrar och nätverkskomponenter.",
    image: serviceNetwork,
  },
];

const ServicesSection = () => {
  return (
    <section id="tjanster" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading text-foreground">Försäljning &amp; Installation</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hos oss kan du köpa kameror, men även välja till installation där våra auktoriserade experter
            kommer till er och installerar utrustningen för att kvalitetssäkra allt.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="service-card rounded-lg">
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={640}
                />
                <div className="service-overlay rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-hero-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-hero-foreground/80 line-clamp-3">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#tjanster" className="btn-primary">
            Tjänster
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
