import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaWhatsapp,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";
import { Shield } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
};

const INK = "#1E2A38";
const JADE = "var(--color-light-green)";

const contactInfo = [
  {
    icon: <FaPhone className="text-xl" />,
    title: "Phone",
    lines: ["+94 70 473 2926"],
    color: "bg-green-100 text-green-600",
    href: "tel:+94704732926",
  },
  {
    icon: <FaWhatsapp className="text-xl" />,
    title: "WhatsApp",
    lines: ["+94 70 473 2926"],
    color: "bg-emerald-100 text-emerald-600",
    href: "https://wa.me/94704732926",
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    title: "Email",
    lines: ["info@madecoopbank.com"],
    color: "bg-blue-100 text-blue-600",
    href: "mailto:info@madecoopbank.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-xl" />,
    title: "Address",
    lines: ["3/4, Yelakkare Junction, Dangan Place, Yatawatta, Matale."],
    color: "bg-red-100 text-red-600",
    href: "#",
  },
  {
    icon: <FaClock className="text-xl" />,
    title: "Office Hours",
    lines: ["Monday–Friday: 8:30 AM – 4:30 PM", "Saturday: 8:30 AM – 12:30 PM"],
    color: "bg-amber-100 text-amber-600",
    href: "#",
  },
];

const serviceOptions = [
  "Export Agriculture Loan",
  "Land Purchasing Loan",
  "Machinery Loan",
  "Vehicle Loan",
  "Group Loan",
  "Mortgage Loan",
  "Deposit Account",
  "General Inquiry",
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 500);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl font-semibold font-semibold md:text-5xl font-black text-gray-900 mb-5">
            {t.contact.title1}
            <br />
            <span className="gradient-text">We're Here to Help</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Our agricultural finance experts are ready to guide you through the
            process.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info) => (
              <a
                key={info.title}
                href={info.href}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-green-50 border border-gray-100 hover:border-green-200 transition-all group"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color}`}
                >
                  {info.icon}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm mb-1 group-hover:text-green-700 transition-colors">
                    {info.title}
                  </div>
                  {info.lines.map((line) => (
                    <div key={line} className="text-gray-600 text-sm">
                      {line}
                    </div>
                  ))}
                </div>
              </a>
            ))}

            {/* Social Media */}
            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="font-bold text-gray-900 text-sm mb-3">
                Follow Us
              </div>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/MADE Co-op Societysociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  <FaFacebook /> Facebook
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <div className="relative h-48">
                <iframe
                  title="3/4, Yelakkare Junction, Dangan Place, Yatawatta, Matale."
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0374012657467!2d80.59133567351302!3d7.570901510109455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae34fb3103c4903%3A0x1e974f0b48795acf!2sDangan%20place!5e0!3m2!1sen!2slk!4v1785903215550!5m2!1sen!2slk"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="flex items-center justify-between px-4 py-2 bg-white">
                <div>
                  <div className="font-bold text-gray-900 text-sm">
                    3/4, Yelakkare Junction, Dangan Place, Yatawatta, Matale.
                  </div>
                  <div className="text-gray-500 text-xs">Sri Lanka</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FaPaperPlane className="text-green-600" /> Send Us a Message
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-gray-600">
                    Our team will contact you within 1 business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className="input-field bg-white"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                        className="input-field bg-white"
                        placeholder="+94 XX XXX XXXX"
                      />
                      {errors.phone && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.phone.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="input-field bg-white"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      I'm Interested In *
                    </label>
                    <select
                      {...register("service", {
                        required: "Please select a service",
                      })}
                      className="input-field bg-white appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.service.message}
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Subject
                    </label>
                    <input
                      {...register("subject")}
                      className="input-field bg-white"
                      placeholder="Brief subject"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      rows={4}
                      className="input-field bg-white resize-none"
                      placeholder="Tell us about your farming needs, loan requirements, or any questions..."
                    />
                    {errors.message && (
                      <span className="text-red-500 text-xs mt-1">
                        {errors.message.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-4 text-base"
                  >
                    <FaPaperPlane /> Send Message
                  </button>

                  <p className="text-gray-500 text-xs text-center mt-3">
                    ✅ We respond within 1 business day. Your information is
                    kept confidential.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>

        {/* Registration Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 relative overflow-hidden p-8 text-center"
          style={{
            border: `1px dashed ${JADE}66`,
            backgroundColor: 'var(--color-primary-100)',
          }}
        >
          {/* corner stamp ticks - echoes the ledger/seal motif used elsewhere */}
          <span
            className="absolute top-3 left-3 w-2 h-2 border-t border-l"
            style={{ borderColor: `${JADE}80` }}
          />
          <span
            className="absolute top-3 right-3 w-2 h-2 border-t border-r"
            style={{ borderColor: `${JADE}80` }}
          />
          <span
            className="absolute bottom-3 left-3 w-2 h-2 border-b border-l"
            style={{ borderColor: `${JADE}80` }}
          />
          <span
            className="absolute bottom-3 right-3 w-2 h-2 border-b border-r"
            style={{ borderColor: `${JADE}80` }}
          />

          <div
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] mb-3"
            style={{ color: JADE }}
          >
            <Shield size={12} />
            Legal Registration
          </div>

          <p
            className="text-sm max-w-3xl mx-auto leading-relaxed"
            style={{ color: `${INK}CC` }}
          >
            <strong style={{ color: INK }}>
              Matale District Agriculture Development and Export Cooperative
              Society Ltd. (MADECOOP)
            </strong>{" "}
            is registered under{" "}
            <strong style={{ color: JADE }}>
              Section 06 of the Cooperative Societies Act No. 10 of 1990
            </strong>{" "}
            of the Central Provincial Council, as amended by the{" "}
            <strong style={{ color: JADE }}>
              Cooperative Societies (Amendment) Act No. 04 of 1993.
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
