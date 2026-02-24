import { useState } from "react";
import { getLanguageCode, BOT_USERNAME } from "@/lib/languages";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ExternalLink, Copy, Check, MessageCircle } from "lucide-react";

const LanguageForm = () => {
  const [native, setNative] = useState("");
  const [target, setTarget] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const nativeCode = getLanguageCode(native);
  const targetCode = getLanguageCode(target);
  const telegramLink = `https://t.me/${BOT_USERNAME}?start=${nativeCode}-${targetCode}`;

  const handleSubmit = () => {
    if (native.trim() && target.trim()) {
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
          <h3 className="text-xl font-bold text-foreground">Perfect! Click below to start learning on Telegram</h3>
          <p className="mt-1 text-muted-foreground">
            Learning <strong>{target}</strong> from <strong>{native}</strong>
          </p>
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
        <Input
          value={native}
          onChange={(e) => setNative(e.target.value)}
          placeholder="e.g., English, Spanish, Mandarin, Arabic..."
          className="h-12 text-base"
        />
        <p className="text-xs text-muted-foreground">Type any language name</p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground">
          What language do you want to learn?
        </label>
        <Input
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="e.g., Spanish, French, Swahili, Japanese..."
          className="h-12 text-base"
        />
        <p className="text-xs text-muted-foreground">Type any language name</p>
      </div>

      <Button
        size="lg"
        className="w-full gap-2 text-base font-semibold h-12"
        onClick={handleSubmit}
        disabled={!native.trim() || !target.trim()}
      >
        <ExternalLink className="h-5 w-5" />
        Get Telegram Link
      </Button>
    </div>
  );
};

export default LanguageForm;
