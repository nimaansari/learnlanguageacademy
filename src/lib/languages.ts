export const LANGUAGE_CODE_MAP: Record<string, string> = {
  // European
  english: "en", spanish: "es", french: "fr", german: "de", italian: "it",
  portuguese: "pt", dutch: "nl", polish: "pl", swedish: "sv", norwegian: "no",
  danish: "da", finnish: "fi", czech: "cs", hungarian: "hu", romanian: "ro",
  bulgarian: "bg", greek: "el", croatian: "hr", serbian: "sr", slovene: "sl",
  albanian: "sq", macedonian: "mk", lithuanian: "lt", latvian: "lv", estonian: "et",
  icelandic: "is", irish: "ga", welsh: "cy", basque: "eu", catalan: "ca",
  galician: "gl", luxembourgish: "lb", maltese: "mt", corsican: "co", sardinian: "sc",
  breton: "br", occitan: "oc", romansh: "rm", friulian: "fur", ladin: "lld",
  aromanian: "rup", kashubian: "csb", "upper sorbian": "hsb", "lower sorbian": "dsb",
  silesian: "szl", turkish: "tr",

  // Asian
  mandarin: "zh", "mandarin chinese": "zh", cantonese: "yue", japanese: "ja",
  korean: "ko", vietnamese: "vi", thai: "th", lao: "lo", khmer: "km",
  burmese: "my", indonesian: "id", malay: "ms", javanese: "jv", sundanese: "su",
  cebuano: "ceb", ilocano: "ilo", tagalog: "tl", punjabi: "pa", hindi: "hi",
  bengali: "bn", urdu: "ur", telugu: "te", tamil: "ta", kannada: "kn",
  malayalam: "ml", marathi: "mr", gujarati: "gu", nepali: "ne", sinhala: "si",
  hmong: "hmn", uyghur: "ug", tibetan: "bo", mongolian: "mn",
  assamese: "as", oriya: "or", konkani: "kok", manipuri: "mni",
  kashmiri: "ks",

  // Middle Eastern
  arabic: "ar", hebrew: "he", persian: "fa", farsi: "fa", kurdish: "ku",
  pashto: "ps", dari: "prs", azerbaijani: "az",

  // African
  amharic: "am", somali: "so", swahili: "sw", xhosa: "xh", zulu: "zu",
  yoruba: "yo", igbo: "ig", hausa: "ha", afrikaans: "af", malagasy: "mg",
  shona: "sn", lingala: "ln", oromo: "om", wolof: "wo", fula: "ff",
  bambara: "bm",

  // Turkic & Central Asian
  tatar: "tt", bashkir: "ba", chuvash: "cv", sakha: "sah", yakut: "sah",
  buryat: "bua", "karachay-balkar": "krc",

  // Caucasian
  georgian: "ka", circassian: "ady", ossetian: "os", abkhaz: "ab",
  balochi: "bal", brahui: "brh", santali: "sat",

  // Indigenous & Pacific
  quechua: "qu", aymara: "ay", guarani: "gn", navajo: "nv", cherokee: "chr",
  maori: "mi", hawaiian: "haw", samoan: "sm", tongan: "to", fijian: "fj",

  // Other
  russian: "ru", chinese: "zh",
};

export const SUPPORTED_LANGUAGES = {
  "African Languages": [
    "Amharic", "Somali", "Swahili", "Xhosa", "Zulu", "Yoruba", "Igbo",
    "Hausa", "Afrikaans", "Malagasy", "Shona", "Lingala", "Oromo",
    "Wolof", "Fula", "Bambara",
  ],
  "Asian Languages": [
    "Mandarin Chinese", "Cantonese", "Japanese", "Korean", "Vietnamese",
    "Thai", "Lao", "Khmer", "Burmese", "Tagalog", "Indonesian", "Malay",
    "Javanese", "Sundanese", "Cebuano", "Ilocano", "Punjabi", "Hindi",
    "Bengali", "Urdu", "Telugu", "Tamil", "Kannada", "Malayalam", "Marathi",
    "Gujarati", "Nepali", "Sinhala", "Hmong", "Uyghur",
  ],
  "European Languages": [
    "English", "Spanish", "French", "German", "Italian", "Portuguese",
    "Dutch", "Polish", "Turkish", "Swedish", "Norwegian", "Danish",
    "Finnish", "Czech", "Hungarian", "Romanian", "Bulgarian", "Greek",
    "Croatian", "Serbian", "Slovene", "Albanian", "Macedonian", "Lithuanian",
    "Latvian", "Estonian", "Irish", "Welsh", "Basque", "Catalan", "Galician",
  ],
  "Middle Eastern Languages": [
    "Arabic", "Hebrew", "Persian (Farsi)", "Turkish", "Kurdish", "Pashto",
    "Dari", "Azerbaijani",
  ],
  "Indigenous & Rare Languages": [
    "Quechua", "Aymara", "Guarani", "Navajo", "Cherokee", "Maori",
    "Hawaiian", "Samoan", "Tongan", "Fijian", "Icelandic", "Luxembourgish",
    "Maltese", "Corsican", "Breton", "Occitan", "Romansh", "Tibetan",
    "Mongolian", "Georgian", "Abkhaz",
  ],
};

export function getLanguageCode(name: string): string {
  const normalized = name.trim().toLowerCase();
  return LANGUAGE_CODE_MAP[normalized] || normalized;
}

export const BOT_USERNAME = "learnbot";
