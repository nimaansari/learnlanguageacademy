import { MessageCircle, Zap, Clock } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Choose Your Languages",
    description: "Tell us what you speak and what you want to learn.",
  },
  {
    icon: Zap,
    title: "Connect on Telegram",
    description: "Get your personalized link and open your AI tutor.",
  },
  {
    icon: Clock,
    title: "Start Practicing",
    description: "Have real conversations 24/7 at your own pace.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-5">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
        <p className="mt-2 text-muted-foreground">Three simple steps to fluency</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-4 opacity-0 animate-fade-up" style={{ animationDelay: `${i * 150}ms` }}>
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
