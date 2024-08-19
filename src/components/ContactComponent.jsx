import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import TitleTextComponents from "../atom/TitleText";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactComponent = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controls = useAnimation();

  // Use effect to start animation when in view
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0.8 });
    }
  }, [inView, controls]);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const email = formData.get("email");
    const name = formData.get("name");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Validasi input kosong
    if (!email || !name || !subject || !message) {
      showAlert(
        "All fields are required!",
        "bg-red-500",
        "M6 18L18 6M6 6l12 12"
      );
      return;
    }

    setLoading(true); // Set loading state

    emailjs
      .sendForm(
        "service_zephvfl",
        "template_jqsf49d",
        form.current,
        "7H_CHZCQEbL-hXCk5"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          showAlert(
            "Message sent successfully!",
            "bg-pink-primer",
            "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          );
          setLoading(false); // Reset loading state
          e.target.reset(); // Reset form after submission
        },
        (error) => {
          console.log("Failed to send email.", error.text);
          showAlert(
            "Failed to send the message, please try again.",
            "bg-red-500",
            "M6 18L18 6M6 6l12 12"
          );
          setLoading(false); // Reset loading state
        }
      );
  };

  // Fungsi untuk menampilkan alert
  const showAlert = (message, bgColor, iconPath) => {
    const alertBox = document.createElement("div");
    alertBox.className = `flex items-center ${bgColor} text-white text-sm font-thin px-4 py-3 rounded-lg fixed top-4 right-1/2 translate-x-1/2 z-50 shadow-lg`;
    alertBox.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${iconPath}" />
      </svg>
      <span>${message}</span>
    `;

    document.body.appendChild(alertBox);

    // Menghapus alert setelah beberapa detik
    setTimeout(() => {
      alertBox.remove();
    }, 3000);
  };

  return (
    <div
      ref={ref}
      className="max-w-[1300px] md:px-28 sm:px-10 px-2 mx-auto mt-24"
      id="contact"
    >
      <TitleTextComponents textTitle="Contact" />
      <motion.div
        animate={controls}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="hero text-white rounded-[30px] bg-[#44234E] bg-opacity-55 mt-8 glow-effect"
      >
        <div className="hero-content flex-col lg:flex-row lg:items-start items-center">
          <div className="text-center lg:text-left lg:w-1/2 pt-16 sm:px-10 px-3">
            <h1 className="text-2xl font-bold">Feel free to reach out!</h1>
            <p className="pb-6 pt-2 text-sm px-14 lg:px-0">
              Want to discuss an opportunity to create something great? I’m
              ready when you are.
            </p>
            <div className="w-full flex lg:justify-start justify-center">
              <div className="flex flex-col gap-3">
                <a href="linkedin.com/in/talithaaldazd">
                  <div className="flex flex-row items-center gap-2">
                    <div className="p-3 flex items-start rounded-full bg-[#540D6B] hover:bg-pink-primer">
                      <img
                        className="w-4"
                        src="/images/logo-linkedin.png"
                        alt="linkedin"
                      />
                    </div>
                    <div className="hover:text-pink-primer">
                      linkedin.com/in/talithaaldazd
                    </div>
                  </div>
                </a>
                <a href="https://github.com/talithaalda">
                  <div className="flex flex-row items-center gap-2">
                    <div className="p-3 flex items-start rounded-full bg-[#540D6B] hover:bg-pink-primer">
                      <img
                        className="w-4"
                        src="/images/logo-github.png"
                        alt="github"
                      />
                    </div>
                    <div className="hover:text-pink-primer">
                      github.com/talithaalda
                    </div>
                  </div>
                </a>
                <a href="mailto:talithaalda@gmail.com">
                  <div className="flex flex-row  items-center gap-2">
                    <div className="p-3 flex items-start rounded-full bg-[#540D6B] hover:bg-pink-primer">
                      <img
                        className="w-4"
                        src="/images/logo-email.png"
                        alt="email"
                      />
                    </div>
                    <div className="hover:text-pink-primer">
                      talithaalda@gmail.com
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="card w-full max-w-lg shrink-0 lg:w-1/2">
            <form ref={form} onSubmit={sendEmail} className="card-body gap-5">
              <div className="form-control">
                <label className="label ps-0">
                  <span className="label-text text-white">
                    Email <span className="text-red-400">*</span>
                  </span>
                </label>
                <input
                  type="email"
                  className="w-full border-0 border-b-2 border-pink-pale focus:ring-0 focus:border-pink-primer bg-transparent text-white placeholder:text-pink-pale focus:shadow-[0_0_8px_2px] focus:shadow-pink-primer focus:rounded-md outline-none p-2"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label ps-0">
                  <span className="label-text text-white">
                    Name <span className="text-red-400">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  className="w-full border-0 border-b-2 border-pink-pale focus:ring-0 focus:border-pink-primer bg-transparent text-white placeholder:text-pink-pale focus:shadow-[0_0_8px_2px] focus:shadow-pink-primer focus:rounded-md outline-none p-2"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label ps-0">
                  <span className="label-text text-white">
                    Subject <span className="text-red-400">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  className="w-full border-0 border-b-2 border-pink-pale focus:ring-0 focus:border-pink-primer bg-transparent text-white placeholder:text-pink-pale focus:shadow-[0_0_8px_2px] focus:shadow-pink-primer focus:rounded-md outline-none p-2"
                  name="subject"
                />
              </div>
              <div className="form-control">
                <label className="label ps-0">
                  <span className="label-text text-white">
                    Message <span className="text-red-400">*</span>
                  </span>
                </label>
                <textarea
                  className="w-full border-0 border-b-2 border-pink-pale focus:ring-0 focus:border-pink-primer bg-transparent text-white placeholder:text-pink-pale focus:shadow-[0_0_8px_2px] focus:shadow-pink-primer focus:rounded-md outline-none px-2"
                  name="message"
                  rows="4"
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="button-1 rounded-[30px] p-4 border-none flex items-center sm:gap-2 gap-0 justify-center w-[60%] m-auto"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading-spinner"></span>
                  ) : (
                    <>
                      Send Message
                      <span>
                        <img
                          src="/images/logo-direct.png"
                          alt="arrow"
                          width={20}
                        />
                      </span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactComponent;
