import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message) errors.message = "Message is required";
    return errors;
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);

      // First email (e.g., to yourself)
      emailjs
        .send(
          "service_wj7orrx",
         "template_6jp807l",
          formData,
          "7EzxERrCWdQDhHCGR"
        )
        
        .then(() => {
          toast.success("Message  sent!");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.error("Email sending failed:", error);
          toast.error("Something went wrong!");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <div className="px-4 py-10 w-full max-w-4xl mx-auto" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter">
        Let's Connect
      </h2>

      <form onSubmit={handleSumbit} className="space-y-6">
        {/* Name & Email */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="w-full">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="w-full rounded-lg border border-stone-400 bg-transparent px-4 py-3 text-sm focus:border-black focus:outline-none"
            />
            {errors.name && (
              <p className="text-sm text-rose-800 mt-1">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="w-full rounded-lg border border-stone-400 bg-transparent px-4 py-3 text-sm focus:border-black focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-rose-800 mt-1">{errors.email}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
            className="w-full rounded-lg border border-stone-400 bg-transparent px-4 py-3 text-sm focus:border-black focus:outline-none"
            rows="6"
          />
          {errors.message && (
            <p className="text-sm text-rose-800 mt-1">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 
          ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Sending..." : "Send"}
            <FiSend />
          </div>
        </button>
      </form>
      
    </div>
    
  );
};

export default ContactForm;
