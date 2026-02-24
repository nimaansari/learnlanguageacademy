import { SUPPORTED_LANGUAGES } from "@/lib/languages";

const SupportedLanguages = () => {
  const regions = Object.entries(SUPPORTED_LANGUAGES);

  return (
    <section className="px-5 py-16 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            We Support <span className="text-primary">100+ Languages</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Not sure if we support your language? Type it anyway—we likely do! Our AI learns any language.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {regions.map(([region, languages]) => (
            <div key={region} className="rounded-xl border bg-card p-5">
              <h3 className="text-sm font-bold text-primary uppercase tracking-wide mb-3">
                {region}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {languages.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportedLanguages;
