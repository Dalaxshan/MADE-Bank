import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaCheckCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  service: string;
  message: string;
};

const contactInfo = [
  {
    icon: <FaPhone className="text-xl" />,
    title: "Phone",
    lines: ["+94 66 222 2222", "+94 66 222 3333"],
    color: "bg-green-100 text-green-600",
    href: "tel:+94662222222",
  },
  {
    icon: <FaWhatsapp className="text-xl" />,
    title: "WhatsApp",
    lines: ["+94 77 123 4567"],
    color: "bg-emerald-100 text-emerald-600",
    href: "https://wa.me/94771234567",
  },
  {
    icon: <FaEnvelope className="text-xl" />,
    title: "Email",
    lines: ["info@madecoop.lk", "loans@madecoop.lk"],
    color: "bg-blue-100 text-blue-600",
    href: "mailto:info@madecoop.lk",
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
    setTimeout(() => setSubmitted(false), 5000);
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
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
            Get In Touch
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
                  href="https://www.facebook.com/madecoopsociety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
                >
                  <FaFacebook /> Facebook
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-700 transition-colors"
                >
                  <FaYoutube /> YouTube
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 h-48 flex flex-col items-center justify-center relative">
                <div className="text-4xl mb-3">🗺️</div>
                <div className="font-bold text-gray-900 text-sm">
                  Matale, Central Province
                </div>
                <div className="text-gray-500 text-xs">Sri Lanka</div>
                <a
                  href="https://maps.google.com/?q=Matale,+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 bg-white text-green-700 font-semibold text-xs px-4 py-2 rounded-full border border-green-200 hover:bg-green-50 transition-colors"
                >
                  View on Google Maps →
                </a>
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
          className="mt-10 bg-green-900 rounded-3xl p-6 text-white text-center"
        >
          <div className="text-sm text-green-300 mb-1 font-semibold">
            Legal Registration
          </div>
          <p className="text-white/80 text-sm max-w-3xl mx-auto">
            <strong className="text-white">
              Matale District Agriculture Development and Export Cooperative
              Society Ltd. (MADECOOP)
            </strong>{" "}
            is Registered under{" "}
            <strong className="text-green-300">
              Section 06 of the Cooperative Societies Act No. 10 of 1990
            </strong>{" "}
            of the Central Provincial Council, as amended by the{" "}
            <strong className="text-green-300">
              Cooperative Societies (Amendment) Act No. 04 of 1993.
            </strong>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
