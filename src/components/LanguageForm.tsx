import { useState } from "react";
import { LANGUAGES, BOT_USERNAME } from "@/lib/languages";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check, MessageCircle } from "lucide-react";

const LanguageForm = () => {
  const [native, setNative] = useState("");
  const [target, setTarget] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const telegramLink = `https://t.me/${BOT_USERNAME}?start=${native}-${target}`;

  const handleSubmit = () => {
    if (native && target) {
      setSubmitted(true);
    }
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(telegramLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setSubmitted(false);
    setNative("");
    setTarget("");
  };

  if (submitted) {
    return (
      <div className="animate-fade-up space-y-6 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Great! Click below to start learning</h3>
          <p className="mt-1 text-muted-foreground">Your personalized AI tutor is ready on Telegram</p>
        </div>
        <div className="rounded-lg border bg-muted/50 p-4">
          <p className="break-all text-sm text-muted-foreground">{telegramLink}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="gap-2 text-base font-semibold">
            <a href={telegramLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Open in Telegram
            </a>
          </Button>
          <Button variant="outline" size="lg" className="gap-2" onClick={handleCopy}>
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "Copied!" : "Copy Link"}
          </Button>
        </div>
        <button onClick={handleReset} className="text-sm text-muted-foreground underline hover:text-foreground transition-colors">
          Choose different languages
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-up space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground">
          What language do you speak? <span className="text-muted-foreground font-normal">(Your native language)</span>
        </label>
        <Select value={native} onValueChange={setNative}>
          <SelectTrigger className="h-12 text-base">
            <SelectValue placeholder="Select your native language" />
          </SelectTrigger>
          <SelectContent>
            {LANGUAGES.map((lang) => (
              <SelectItem key={lang.code} value={lang.code} disabled={lang.code === target}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground">
          What language do you want to learn?
        </label>
        <Select value={target} onValueChange={setTarget}>
          <SelectTrigger className="h-12 text-base">
            <SelectValue placeholder="Select the language to learn" />
          </SelectTrigger>
          <SelectContent>
            {LANGUAGES.map((lang) => (
              <SelectItem key={lang.code} value={lang.code} disabled={lang.code === native}>
                {lang.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        size="lg"
        className="w-full gap-2 text-base font-semibold h-12"
        onClick={handleSubmit}
        disabled={!native || !target}
      >
        <ExternalLink className="h-5 w-5" />
        Get Telegram Link
      </Button>
    </div>
  );
};

export default LanguageForm;
