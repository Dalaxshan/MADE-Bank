import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/i18n/LanguageContext";
import {
  FileText,
  CheckCircle2,
  Phone,
  MapPin,
  Clock,
  User,
  Landmark,
  FileCheck2,
  ArrowLeft,
} from "lucide-react";

const INK = "#1E2A38";
const PAPER = "var(--color-primary-100)";
const STEEL = "var(--color-light-green)";
const JADE = "var(--color-secondary)";

const inputStyle = {
  border: `1px solid ${INK}26`,
  color: INK,
  fontSize: "13.5px",
} as const;

const labelStyle = {
  color: `${INK}99`,
} as const;

function FieldGroupLabel({
  icon,
  children,
}: {
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] mb-4 pb-2"
      style={{ color: STEEL, borderBottom: `1px dotted ${INK}1F` }}
    >
      {icon} {children}
    </div>
  );
}

export default function LoanApplicationSection() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState<string | false>(false);
  const [loading, setLoading] = useState(false);
  const [referenceId, setReferenceId] = useState("");

  const requiredDocuments = [
    t.loanApplication.requirenments.title2,
    t.loanApplication.requirenments.title3,
    t.loanApplication.requirenments.title4,
    t.loanApplication.requirenments.title5,
    t.loanApplication.requirenments.title6,
    t.loanApplication.requirenments.title7,
  ];

  const loanTypes = [
    t.loanApplication.loanTypes.group,
    t.loanApplication.loanTypes.mortgage,
    t.loanApplication.loanTypes.land,
    t.loanApplication.loanTypes.vehicle,
    t.loanApplication.loanTypes.machinery,
    t.loanApplication.loanTypes.export,
  ];

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // eslint-disable-next-line -- ref is server-generated, not user input
    const ref = `MDC-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY ?? "");
    formData.append("subject", `MADECOOP Loan Application - ${ref}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);
    setSubmitted(data.success ? "Success!" : "Error");
  };

  if (submitted) {
    return (
      <section
        className="py-24 min-h-screen flex items-center"
        style={{ backgroundColor: PAPER }}
      >
        <div className="max-w-xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="p-10"
            style={{
              backgroundColor: "#FFFFFF",
              border: `1px solid ${INK}14`,
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 28px 100%, 0 calc(100% - 28px))",
            }}
          >
            <div className="flex justify-center mb-5">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${JADE}1A`, color: JADE }}
              >
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </div>
            </div>
            <h1 className="text-3xl font-black mb-3" style={{ color: INK }}>
              {t.loanApplication.received.title1}
            </h1>
            <p className="text-base mb-6" style={{ color: `${INK}99` }}>
              {t.loanApplication.received.title2}
            </p>
            <div
              className="inline-block px-5 py-3 mb-8"
              style={{ backgroundColor: `${STEEL}14` }}
            >
              <div
                className="text-[10px] uppercase tracking-widest mb-0.5"
                style={{ color: `${INK}66` }}
              >
                {t.loanApplication.received.title3}
              </div>
              <div className="text-xl font-bold" style={{ color: STEEL }}>
                {referenceId}
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 transition-colors"
                style={{
                  background: `linear-gradient(115deg, ${STEEL}, ${JADE})`,
                  color: PAPER,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 70%)",
                }}
              >
                <ArrowLeft size={14} /> {t.loanApplication.received.title4}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: PAPER }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span
            className="inline-flex items-center gap-2 border border-dashed px-4 py-1.5 mb-5 -rotate-1 text-xs uppercase tracking-[0.15em]"
            style={{ borderColor: `${JADE}80`, color: JADE }}
          >
            <FileText size={11} /> MADECOOP · {t.loanApplication.title1}
          </span>
          <h1
            className="text-4xl md:text-5xl font-black mb-3"
            style={{ color: INK }}
          >
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: `linear-gradient(90deg, ${STEEL}, ${JADE})`,
              }}
            >
              {t.loanApplication.title1}
            </span>
          </h1>
          <p className="text-lg max-w-xl" style={{ color: `${INK}99` }}>
            {t.loanApplication.title2}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 p-8"
            style={{ backgroundColor: "#FFFFFF", border: `1px solid ${INK}14` }}
          >
            <form onSubmit={onSubmit} className="space-y-8">
              {/* Personal details */}
              <div>
                <FieldGroupLabel icon={<User size={13} />}>
                  {t.loanApplication.title3}
                </FieldGroupLabel>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider mb-1.5"
                      style={labelStyle}
                    >
                      {t.loanApplication.fullName}
                    </label>
                    <input
                      required
                      type="text"
                      name="full_name"
                      placeholder={t.loanApplication.fullNamePlaceholder}
                      className="w-full px-3.5 py-2.5 focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider mb-1.5"
                        style={labelStyle}
                      >
                        {t.loanApplication.nicNumber}
                      </label>
                      <input
                        required
                        type="text"
                        name="nic_number"
                        placeholder="XXXXXXXXXV"
                        className="w-full px-3.5 py-2.5 focus:outline-none"
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider mb-1.5"
                        style={labelStyle}
                      >
                        {t.loanApplication.phoneNumber}
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="07X XXX XXXX"
                        className="w-full px-3.5 py-2.5 focus:outline-none"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider mb-1.5"
                      style={labelStyle}
                    >
                      {t.loanApplication.address}
                    </label>
                    <input
                      required
                      type="text"
                      name="address"
                      placeholder={t.loanApplication.addressPlaceholder}
                      className="w-full px-3.5 py-2.5 focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>

              {/* Loan details */}
              <div>
                <FieldGroupLabel icon={<Landmark size={13} />}>
                  {t.loanApplication.title4}
                </FieldGroupLabel>
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider mb-1.5"
                        style={labelStyle}
                      >
                        {t.loanApplication.loanType}
                      </label>
                      <select
                        required
                        name="loan_type"
                        defaultValue=""
                        className="w-full px-3.5 py-2.5 focus:outline-none"
                        style={inputStyle}
                      >
                        <option value="" disabled>
                          {t.loanApplication.LoanTypePlaceholder}
                        </option>
                        {loanTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        className="block text-xs uppercase tracking-wider mb-1.5"
                        style={labelStyle}
                      >
                        {t.loanApplication.loanAmount}(Rs)
                      </label>
                      <input
                        required
                        type="number"
                        name="loan_amount"
                        min={5000}
                        placeholder="e.g. 75,000"
                        className="w-full px-3.5 py-2.5 focus:outline-none"
                        style={inputStyle}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-xs uppercase tracking-wider mb-1.5"
                      style={labelStyle}
                    >
                      {t.loanApplication.landExtent}
                      <span
                        className="normal-case tracking-normal"
                        style={{ color: `${INK}4D` }}
                      >
                        {" "}
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      name="land_extent"
                      placeholder={t.loanApplication.landExtentPlaceholder}
                      className="w-full px-3.5 py-2.5 focus:outline-none"
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>

              {/* Additional details */}
              <div>
                <FieldGroupLabel icon={<FileCheck2 size={13} />}>
                  {t.loanApplication.title5}
                </FieldGroupLabel>
                <div>
                  <label
                    className="block text-xs uppercase tracking-wider mb-1.5"
                    style={labelStyle}
                  >
                    {t.loanApplication.purpose}
                    <span
                      className="normal-case tracking-normal"
                      style={{ color: `${INK}4D` }}
                    ></span>
                  </label>
                  <textarea
                    rows={4}
                    name="purpose"
                    placeholder={t.loanApplication.purposePlaceholder}
                    className="w-full px-3.5 py-2.5 focus:outline-none resize-none"
                    style={inputStyle}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 text-sm font-semibold transition-opacity disabled:opacity-60"
                style={{
                  background: "var(--color-primary)",
                  color: "#fff",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 70%)",
                }}
              >
                {loading
                  ? t.loanApplication.submitting
                  : t.loanApplication.submitButton}
              </button>
              <p
                className="text-[11px] text-center"
                style={{ color: `${INK}66` }}
              >
               {t.loanApplication.footer}
              </p>
            </form>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            {/* Required documents */}
            <div
              className="p-6"
              style={{
                backgroundColor: "#FFFFFF",
                border: `1px solid ${INK}14`,
              }}
            >
              <h3
                className="text-xs font-bold uppercase tracking-wider mb-4"
                style={{ color: INK }}
              >
                {t.loanApplication.requirenments.title1}
              </h3>
              <div className="space-y-2.5">
                {requiredDocuments.map((doc) => (
                  <div key={doc} className="flex items-start gap-2.5">
                    <CheckCircle2
                      size={14}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: JADE }}
                    />
                    <span className="text-sm" style={{ color: `${INK}99` }}>
                      {doc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact card */}
            <div
              className="relative overflow-hidden p-6 text-[#F3F7F5]"
              style={{
                background: `linear-gradient(115deg, ${STEEL} 0%, ${JADE} 100%)`,
                clipPath:
                  "polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 33px, #F3F7F5 34px)",
                }}
              />
              <div className="relative z-10">
                <h3 className="font-bold text-lg mb-4">{t.loanApplication.needHelp}</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2.5">
                    <Phone
                      size={14}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#5FCDAA" }}
                    />
                    <span>+94 66 222 2222</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <MapPin
                      size={14}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#5FCDAA" }}
                    />
                    <span>
                      {t.loanApplication.location}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock
                      size={14}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#5FCDAA" }}
                    />
                    <span>{t.loanApplication.time}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
