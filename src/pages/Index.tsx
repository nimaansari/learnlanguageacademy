import heroImage from "@/assets/hero-illustration.png";
import LanguageForm from "@/components/LanguageForm";
import HowItWorks from "@/components/HowItWorks";
import { GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-5 py-4 md:px-10">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-7 w-7 text-primary" />
          <span className="text-lg font-bold text-foreground">learnlanguage.academy</span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-5 pb-8 pt-10 md:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Learn Any Language
            <br />
            <span className="text-primary">from an AI Tutor</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground md:text-xl">
            Conversation-first, affordable, available 24/7.
            <br className="hidden sm:block" /> No credit card required.
          </p>
          <a
            href="#get-started"
            className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-105"
          >
            Start Learning
          </a>
          <div className="mx-auto mt-12 max-w-sm">
            <img src={heroImage} alt="Person learning languages with AI tutor on phone" className="w-full" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Form Section */}
      <section id="get-started" className="scroll-mt-8 px-5 py-16">
        <div className="mx-auto max-w-md">
          <div className="rounded-2xl border bg-card p-6 shadow-xl shadow-primary/5 md:p-8">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-foreground">Get Started in 2 Steps</h2>
              <p className="mt-1 text-sm text-muted-foreground">Choose your native language and what you want to learn</p>
            </div>
            <LanguageForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-5 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm text-muted-foreground">
            No credit card required. Start free.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Join thousands learning languages with us. Available on Telegram, Discord, and Web.
          </p>
          <a href="#" className="mt-3 inline-block text-xs text-muted-foreground underline hover:text-foreground transition-colors">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
