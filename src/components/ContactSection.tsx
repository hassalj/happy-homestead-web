import { useState, type FormEvent } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="kontakt" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="section-heading text-foreground">Kontakt</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Frågor eller funderingar?
            </p>
            <p className="text-lg text-muted-foreground">
              Vi återkommer inom 24 timmar!
            </p>

          </div>

          <div>
            {submitted ? (
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-8 text-center">
                <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg font-medium text-foreground">Tack för ditt meddelande!</p>
                <p className="text-muted-foreground mt-2">Vi återkommer inom 24 timmar.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" id="offert">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Förnamn *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1">Efternamn *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">E-post *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Telefon *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Meddelande</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-card border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Skicka
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
