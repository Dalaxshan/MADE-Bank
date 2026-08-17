import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  X, Send, Bot, BotMessageSquare } from "lucide-react";
import { useLang } from "../i18n/LanguageContext";

interface Message {
  from: "bot" | "user";
  text: string;
}

const qaData = {
  en: [
    {
      q: [
        "how to apply for a loan",
        "apply loan",
        "loan application",
        "get a loan",
      ],
      a: "Visit our office in Matale with your NIC, land documents, and income proof. Fill the loan application form and our officer will guide you. Group loan applicants must come with all 5 members.",
    },
    {
      q: [
        "documents required",
        "what documents",
        "required documents",
        "documents needed",
      ],
      a: "Individual loans: NIC, land/property docs, income proof, guarantor details. Group loans: All 5 members' NICs, group savings account, group agreement. Mortgage loans: Title deed, property valuation, NIC.",
    },
    {
      q: [
        "loan approval time",
        "how long approval",
        "approval process",
        "how many days",
      ],
      a: "Group loans: 3–5 working days. Individual agricultural loans: 5–7 working days. Mortgage loans: 10–15 working days (property verification required).",
    },
    {
      q: ["buy back", "buyback guarantee", "buy-back", "harvest purchase"],
      a: "When you take an Export Agriculture Loan, MADECOOP guarantees to purchase your entire harvest at pre-agreed market prices — no middlemen, no unsold produce risk.",
    },
    {
      q: ["what crops", "which crops", "crops covered", "buy back crops"],
      a: "Our Buy-Back program covers: Cinnamon, Black Pepper, Cardamom, Vanilla, Fresh Vegetables (export-quality), and certified Organic Produce.",
    },
    {
      q: ["minimum deposit", "deposit amount", "how much deposit"],
      a: "Minimum deposit is Rs. 5,000. No maximum limit. Deposits can be made in cash or cheque at our office.",
    },
    {
      q: ["withdraw deposit", "early withdrawal", "before maturity"],
      a: "Premature withdrawal is possible. Within 3 months: no interest. After 3 months but before maturity: interest paid at 2% below contracted rate.",
    },
    {
      q: ["loan against deposit", "deposit loan", "borrow against deposit"],
      a: "Yes! MADECOOP offers loans up to 90% of your deposit value, with the deposit as collateral.",
    },
    {
      q: ["who can join", "eligibility", "who is eligible", "membership"],
      a: "All farmers, agricultural workers, and rural community members in Matale District. Must be a Sri Lankan citizen, 18+ years, with a verifiable connection to agriculture.",
    },
    {
      q: ["collateral", "what collateral", "security required"],
      a: "Group Loans: No collateral (group guarantee). Export Loan up to Rs.200,000: No collateral if buy-back agreement in place. Land/Machinery/Vehicle Loans: Asset financed serves as security. Mortgage: Registered property.",
    },
    {
      q: ["interest rate", "loan interest", "rate of interest"],
      a: "Group Loan: 21% per annum. Mortgage Loan: 17% per annum. Export Agriculture Loan: Competitive rates. Deposits earn up to 12.2% per annum.",
    },
    {
      q: ["group loan", "group lending", "5 member loan"],
      a: "Group loans are for 5-member farmer groups. Loan amount: Rs. 25,000–100,000 per member. Term: 6–12 months. Interest: 21% p.a. No individual collateral needed.",
    },
    {
      q: ["mortgage loan", "property loan", "large loan"],
      a: "Mortgage loans are for amounts above Rs. 200,000. Term: 1–5 years. Interest: 17% p.a. Requires freehold property as collateral and two guarantors.",
    },
    {
      q: ["export loan", "export agriculture", "cinnamon loan", "vanilla loan"],
      a: "Export Agriculture Loans are up to Rs. 500,000 for cinnamon, vanilla, pepper, cardamom, and organic vegetable farmers. Comes with a buy-back guarantee.",
    },
    {
      q: ["machinery loan", "tractor loan", "equipment loan"],
      a: "Agricultural Machinery Loans cover tractors, harvesters, irrigation equipment, water pumps, and processing equipment to modernize your farm.",
    },
    {
      q: ["vehicle loan", "transport loan", "lorry loan"],
      a: "Agricultural Vehicle Loans cover lorries, mini-trucks, and specialized farming vehicles to transport your harvest efficiently.",
    },
    {
      q: ["land loan", "land purchase", "buy land"],
      a: "Agriculture Land Purchasing Loans help farmers secure agricultural land with affordable financing and flexible repayment aligned to farming income cycles.",
    },
    {
      q: ["deposit interest", "savings interest", "deposit rate"],
      a: "Deposit rates: 6 months – up to 9%, 1 year – up to 10%, 2 years – up to 11%, 3–5 years – up to 12.2% per annum. Monthly or maturity payout options available.",
    },
    {
      q: ["office hours", "working hours", "when open", "office time"],
      a: "Office Hours: Monday–Friday: 8:30 AM – 4:30 PM. Saturday: 8:30 AM – 12:30 PM.",
    },
    {
      q: ["address", "location", "where is office", "office location"],
      a: "3/4, Yelakkare Junction, Dangan Place, Yatawatta, Matale.",
    },
    {
      q: ["phone", "contact number", "call", "telephone"],
      a: "You can reach us by phone or WhatsApp. Visit our Contact page for the latest numbers.",
    },
    {
      q: ["about madecoop", "what is madecoop", "who are you"],
      a: "MADECOOP (Matale District Agriculture Development and Export Cooperative Society Ltd.) is a registered cooperative under CPC Act No. 10 of 1990. We provide loans, buy-back guarantees, and export partnerships to Sri Lankan farmers.",
    },
    {
      q: ["hello", "hi", "hey", "good morning", "good afternoon"],
      a: "Hello! Welcome to MADECOOP. How can I help you today? You can ask about loans, deposits, buy-back programs, or eligibility.",
    },
  ],
  si: [
    {
      q: ["ණය ලබා ගන්නේ කෙසේද", "ණය අයදුම්", "ණය ලබා ගැනීම", "ණය"],
      a: "ඔබගේ NIC, ඉඩම් ලේඛන සහ ආදායම් සාක්ෂි සමඟ මාතලේ කාර්යාලයට පැමිණෙන්න. ණය අයදුම්පත සම්පූර්ණ කරන්න. කණ්ඩායම් ණය සඳහා සාමාජිකයින් 5 දෙනාම සමඟ පැමිණිය යුතුය.",
    },
    {
      q: ["ලේඛන", "අවශ්ය ලේඛන", "ලේඛන මොනවාද"],
      a: "තනි ණය: NIC, ඉඩම් ලේඛන, ආදායම් සාක්ෂි. කණ්ඩායම් ණය: සාමාජිකයින් 5 දෙනාගේ NIC, කණ්ඩායම් ගිණුම. උකස් ණය: හිමිකම් ඔප්පුව, දේපල තක්සේරු වාර්තාව.",
    },
    {
      q: ["ණය අනුමත කාලය", "කොපමණ කාලයක්", "අනුමත"],
      a: "කණ්ඩායම් ණය: 3–5 වැඩ කරන දින. තනි ණය: 5–7 දින. උකස් ණය: 10–15 දින.",
    },
    {
      q: ["නැවත මිලදී ගැනීම", "buy back", "අස්වැන්න"],
      a: "MADECOOP ඔබේ සම්පූර්ණ අස්වැන්න කලින් එකඟ වූ මිලට මිලදී ගැනීමට සහතික වේ. අතරමැදියන් නැත.",
    },
    {
      q: ["අවම තැන්පතු", "තැන්පතු මුදල", "කීයද"],
      a: "අවම තැන්පතු මුදල රු. 5,000 කි. උපරිම සීමාවක් නැත.",
    },
    {
      q: ["කල්පිරීමට පෙර", "ඉක්මනින් ආපසු", "මුදා ගැනීම"],
      a: "මාස 3ක් ඇතුළත: පොලී නැත. මාස 3කට පසු: ගිවිසුම්ගත අනුපාතයට වඩා 2% අඩු.",
    },
    {
      q: ["තැන්පතු ණය", "ඇපකරය", "90%"],
      a: "ඔව්! MADECOOP ඔබේ තැන්පතු වටිනාකමෙන් 90% දක්වා ණය ලබා දේ.",
    },
    {
      q: ["සාමාජිකත්වය", "සුදුසුකම්", "කවුරුන්"],
      a: "මාතලේ දිස්ත්රික්කයේ ගොවීන්, කෘෂිකාර්මික කම්කරුවන් සහ ග්රාමීය ප්රජා සාමාජිකයින්. ශ්රී ලාංකික පුරවැසියෙකු, 18+ වයස.",
    },
    {
      q: ["පොලී අනුපාතය", "ණය පොලිය", "interest"],
      a: "කණ්ඩායම් ණය: 21% ප.ව. උකස් ණය: 17% ප.ව. තැන්පතු: 12.2% දක්වා ප.ව.",
    },
    {
      q: ["කාර්යාල වේලාව", "කාලය", "විවෘත"],
      a: "සඳුදා–සිකුරාදා: 8:30 – 4:30. සෙනසුරාදා: 8:30 – 12:30.",
    },
    {
      q: ["ලිපිනය", "කාර්යාලය", "කොහේද"],
      a: "3/4, යෙලක්කරේ හන්දිය, දංගන් පෙදෙස, යටවත්ත, මාතලේ.",
    },
    {
      q: ["හෙලෝ", "ආයුබෝවන්", "ආයුබෝ"],
      a: "ආයුබෝවන්! MADECOOP වෙත සාදරයෙන් පිළිගනිමු. ණය, තැන්පතු, නැවත මිලදී ගැනීම හෝ සුදුසුකම් ගැන ඔබට ප්රශ්න ඇසිය හැකිය.",
    },
  ],
  tm: [
    {
      q: ["கடன்", "கடன் எப்படி", "கடன் விண்ணப்பம்", "கடன் பெற"],
      a: "உங்கள் NIC, நில ஆவணங்கள் மற்றும் வருமான சான்றுடன் மாத்தளை அலுவலகத்திற்கு வரவும். குழு கடனுக்கு 5 உறுப்பினர்களும் வர வேண்டும்.",
    },
    {
      q: ["ஆவணங்கள்", "தேவையான ஆவணங்கள்", "என்ன ஆவணங்கள்"],
      a: "தனிப்பட்ட கடன்: NIC, நில ஆவணங்கள், வருமான சான்று. குழு கடன்: 5 உறுப்பினர் NIC, குழு கணக்கு. அடமான கடன்: உரிமைப் பத்திரம், சொத்து மதிப்பீடு.",
    },
    {
      q: ["கடன் அனுமதி", "எத்தனை நாட்கள்", "அனுமதி நேரம்"],
      a: "குழு கடன்: 3–5 நாட்கள். தனிப்பட்ட கடன்: 5–7 நாட்கள். அடமான கடன்: 10–15 நாட்கள்.",
    },
    {
      q: ["மீள்கொள்முதல்", "buy back", "அறுவடை கொள்முதல்"],
      a: "MADECOOP உங்கள் முழு அறுவடையையும் முன் ஒப்புக்கொள்ளப்பட்ட விலையில் வாங்க உத்தரவாதம் அளிக்கிறது.",
    },
    {
      q: ["குறைந்தபட்ச வைப்பு", "வைப்பு தொகை", "எவ்வளவு"],
      a: "குறைந்தபட்ச வைப்புத்தொகை ரூ. 5,000. அதிகபட்ச வரம்பு இல்லை.",
    },
    {
      q: ["முன்கூட்டியே எடுப்பு", "முதிர்வுக்கு முன்", "வைப்பு திரும்ப"],
      a: "3 மாதங்களுக்குள்: வட்டி இல்லை. 3 மாதங்களுக்கு பிறகு: ஒப்பந்த விகிதத்தை விட 2% குறைவாக வட்டி.",
    },
    {
      q: ["வைப்பு கடன்", "90%", "பிணையம்"],
      a: "ஆம்! MADECOOP உங்கள் வைப்புத்தொகையில் 90% வரை கடன் வழங்குகிறது.",
    },
    {
      q: ["தகுதி", "யார் சேரலாம்", "உறுப்பினர்"],
      a: "மாத்தளை மாவட்டத்தில் உள்ள விவசாயிகள், விவசாய தொழிலாளர்கள். இலங்கை குடிமகன், 18+ வயது.",
    },
    {
      q: ["வட்டி விகிதம்", "கடன் வட்டி", "interest"],
      a: "குழு கடன்: 21% ஆண்டுக்கு. அடமான கடன்: 17% ஆண்டுக்கு. வைப்புத்தொகை: 12.2% வரை ஆண்டுக்கு.",
    },
    {
      q: ["அலுவலக நேரம்", "திறந்திருக்கும் நேரம்", "நேரம்"],
      a: "திங்கள்–வெள்ளி: காலை 8:30 – மாலை 4:30. சனி: காலை 8:30 – பகல் 12:30.",
    },
    {
      q: ["முகவரி", "அலுவலகம் எங்கே", "இடம்"],
      a: "3/4, ஏலக்கரே சந்தி, தங்கன் பிளேஸ், யடவத்த, மாத்தளை.",
    },
    {
      q: ["வணக்கம்", "hello", "hi"],
      a: "வணக்கம்! MADECOOP-க்கு வரவேற்கிறோம். கடன்கள், வைப்புத்தொகைகள், மீள்கொள்முதல் திட்டம் பற்றி கேட்கலாம்.",
    },
  ],
};

const fallback = {
  en: (
    <>
      I'm not sure about that. Please{" "}
      <a href="/contact" className="underline font-semibold text-green-700">
        contact our team
      </a>{" "}
      for more help.
    </>
  ),
  si: (
    <>
      මට ඒ ගැන විශ්වාස නැත. වැඩිදුර සහාය සඳහා{" "}
      <a href="/contact" className="underline font-semibold text-green-700">
        අපගේ කණ්ඩායම අමතන්න
      </a>
      .
    </>
  ),
  tm: (
    <>
      அதைப் பற்றி எனக்கு தெரியவில்லை. மேலும் உதவிக்கு{" "}
      <a href="/contact" className="underline font-semibold text-green-700">
        எங்கள் குழுவை தொடர்பு கொள்ளுங்கள்
      </a>
      .
    </>
  ),
};

const placeholder = {
  en: "Type your question...",
  si: "ඔබේ ප්‍රශ්නය ටයිප් කරන්න...",
  tm: "உங்கள் கேள்வியை தட்டச்சு செய்யுங்கள்...",
};

const title = {
  en: "MADECOOP Assistant",
  si: "MADECOOP සහායක",
  tm: "MADECOOP உதவியாளர்",
};

const greeting = {
  en: "Hi! I'm the MADECOOP assistant. Ask me about loans, deposits, buy-back programs, or eligibility.",
  si: "ආයුබෝවන්! මම MADECOOP සහායකයා. ණය, තැන්පතු, නැවත මිලදී ගැනීම හෝ සුදුසුකම් ගැන අසන්න.",
  tm: "வணக்கம்! நான் MADECOOP உதவியாளர். கடன்கள், வைப்புத்தொகைகள், மீள்கொள்முதல் திட்டம் பற்றி கேட்கலாம்.",
};

function findAnswer(input: string, lang: "en" | "si" | "tm") {
  const lower = input.toLowerCase().trim();
  // Search in active language first
  for (const item of qaData[lang]) {
    if (item.q.some((kw) => lower.includes(kw))) return item.a;
  }
  // Fallback: search English keywords, return answer in active language
  if (lang !== "en") {
    const enIndex = qaData.en.findIndex((item) =>
      item.q.some((kw) => lower.includes(kw)),
    );
    if (enIndex !== -1 && enIndex < qaData[lang].length) {
      return qaData[lang][enIndex].a;
    }
  }
  return null;
}

export default function Chatbot() {
  const { lang } = useLang();
  const activeLang = (lang === "tm" ? "tm" : lang) as "en" | "si" | "tm";
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: greeting[activeLang] },
  ]);
  const [input, setInput] = useState("");
  const [isFallback, setIsFallback] = useState<boolean[]>([false]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Reset greeting when language changes
  useEffect(() => {
    setMessages([{ from: "bot", text: greeting[activeLang] }]);
    setIsFallback([false]);
  }, [activeLang]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const answer = findAnswer(trimmed, activeLang);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: trimmed },
      { from: "bot", text: answer ?? "" },
    ]);
    setIsFallback((prev) => [...prev, false, answer === null]);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-10 right-6 z-50 w-14 h-14 rounded-full bg-green-700 text-white shadow-lg flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={open ? {} : { y: [0, -6, 0] }}
        transition={
          open ? {} : { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }
        aria-label="Open chatbot"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <BotMessageSquare strokeWidth={1.25} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-green-100"
            style={{ maxHeight: "70vh" }}
          >
            {/* Header */}
            <div className="bg-green-700 px-4 py-3 flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="bg-white/20 rounded-full p-1.5"
              >
                <Bot size={20} className="text-white" />
              </motion.div>
              <div>
                <p className="text-white font-semibold text-sm">
                  {title[activeLang]}
                </p>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
                  <span className="text-green-200 text-xs">Online</span>
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-3 space-y-2 bg-gray-50">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.from === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-green-700 flex items-center justify-center mr-1.5 mt-0.5 shrink-0">
                      <Bot size={12} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-green-700 text-white rounded-br-sm"
                        : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm"
                    }`}
                  >
                    {msg.from === "bot" && isFallback[i]
                      ? fallback[activeLang]
                      : msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="px-3 py-2 border-t border-gray-100 bg-white flex gap-2">
              <input
                className="flex-1 text-sm border border-gray-200 rounded-full px-3 py-2 outline-none focus:border-green-500 transition"
                placeholder={placeholder[activeLang]}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
              />
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={send}
                className="w-9 h-9 rounded-full bg-green-700 text-white flex items-center justify-center shrink-0 hover:bg-green-800 transition"
              >
                <Send size={15} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
