import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLang } from "../i18n/LanguageContext";
import { Cookie } from "lucide-react";

const KEY = "made_cookie_consent";
const INK = "#1E2A38";
const JADE = "var(--color-light-green)";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { t } = useLang();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem(KEY)) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-3 md:max-w-md z-50 rounded-2xl shadow-2xl p-5"
          style={{ backgroundColor: INK }}
        >
          {/* Cookie icon + title */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl"><Cookie color="#ffffff" strokeWidth={1.75} /></span>
            <p className="text-white font-bold text-sm">{t.cookie.title}</p>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-xs leading-relaxed mb-4">
            {t.cookie.desc}{" "}
            <button
              onClick={() => { navigate("/privacy"); window.scrollTo({ top: 0 }); }}
              className="underline transition-colors hover:text-white"
              style={{ color: JADE }}
            >
              {t.cookie.privacyLink}
            </button>
            .
          </p>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={accept}
              className="flex-1 py-2 rounded-lg text-xs font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-light-green)" }}
            >
              {t.cookie.accept}
            </button>
            <button
              onClick={decline}
              className="flex-1 py-2 rounded-lg text-xs font-bold text-gray-400 border border-white/15 hover:text-white hover:border-white/40 transition-colors"
            >
              {t.cookie.decline}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
