import { useNavigate } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowLeft } from "react-icons/fa";
import { useLang } from "../i18n/LanguageContext";

const JADE = "var(--color-light-green)";
const INK = "var(--color-primary)";

const sections = (t: ReturnType<typeof useLang>["t"]) => [
  { title: t.privacy.s1Title, body: t.privacy.s1 },
  { title: t.privacy.s2Title, body: t.privacy.s2 },
  { title: t.privacy.s3Title, body: t.privacy.s3 },
  { title: t.privacy.s4Title, body: t.privacy.s4 },
  { title: t.privacy.s5Title, body: t.privacy.s5 },
];

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const { t } = useLang();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-14 px-4 text-white" style={{ backgroundColor: INK }}>
        <div className="max-w-3xl mx-auto">
          <span
            className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block"
            style={{ backgroundColor: `${JADE}22`}}
          >
            {t.privacy.badge}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{t.privacy.title}</h1>
          <p className="text-gray-400 text-sm">{t.privacy.lastUpdated}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">
        {/* Intro */}
        <p className="text-gray-600 leading-relaxed border-l-4 pl-4" style={{ borderColor: JADE }}>
          {t.privacy.intro}
        </p>

        {/* Sections */}
        {sections(t).map((s, i) => (
          <div key={i}>
            <h2 className="text-lg font-bold mb-2" style={{ color: INK }}>
              {i + 1}. {s.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">{s.body}</p>
          </div>
        ))}

        {/* Contact */}
        <div className="rounded-xl p-6 text-white" style={{ backgroundColor: INK }}>
          <h2 className="text-lg font-bold mb-4">{t.privacy.s6Title}</h2>
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <FaPhone style={{ color: JADE }} />
              <a href={`tel:+94 70 473 2926`} className="hover:text-white transition-colors">
                +94 70 473 2926
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope style={{ color: JADE }} />
              <a href={`mailto:info@MADE Co-opbank.com`} className="hover:text-white transition-colors">
               info@MADE Co-opbank.com
              </a>
            </div>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt style={{ color: JADE }} className="mt-0.5" />
              <span>{t.privacy.s6Address}</span>
            </div>
            <div className="flex items-center gap-2">
              <span style={{ color: JADE }}>⏰</span>
              <span>{t.privacy.s6Hours}</span>
            </div>
          </div>
        </div>

        {/* Back button */}
        <button
          onClick={() => { navigate("/"); window.scrollTo({ top: 0 }); }}
          className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-lg text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: INK }}
        >
          <FaArrowLeft size={12} />
          {t.privacy.backHome}
        </button>
      </div>
    </div>
  );
}
