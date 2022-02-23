import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsLinkedin, BsGithub, BsMedium } from "react-icons/bs";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b6eit3q",
        "template_ui4bvat",
        e.target,
        "user_wZumX6G7sZDYuYzwjpDQr"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
    e.target.reset();
  };

  return (
    <div>
      <h2 id="contact" className="secondary-title">
        Contact Me
      </h2>
      <p className="section-paragraph">
        Feel free to get in touch with me! Either fill out and submit the form
        below, or you can reach me through any of the alternative methods
        provided.
      </p>

      <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-20">
        <form className="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
            <label className="text-white block mb-2 text-xl font-bold">
              Name
            </label>
            <input
              className="w-full border border-input-border bg-input px-4 rounded-sm cursor-pointer"
              name="name"
              required
            />
          </div>
          <div>
            <label className="text-white block mb-2 text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              className="w-full border border-input-border bg-input px-4 rounded-sm"
              name="user_email"
              required
            />
          </div>
          <div>
            <label className="text-white block mb-2 text-xl font-bold">
              Message
            </label>
            <textarea
              className="w-full border border-input-border bg-input px-4 rounded-sm"
              name="message"
              required
            />
          </div>
          <button class="relative inline-block text-lg group" type="submit">
            <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-white transition-colors duration-300 ease-out bg-theme rounded group-hover:text-black">
              <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-theme"></span>
              <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-white group-hover:-rotate-180 ease"></span>
              <span class="relative font-bold">Submit</span>
            </span>
            <span
              class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </button>
        </form>
      </div>

      <div className="mt-12">
        <div className="flex my-12 space-x-6">
          {/* GitHub */}
          <a
            href="https://github.com/jamestkelly"
            className="hover:text-selected-text transition-all duration-150 ease-linear"
          >
            <BsGithub size="30" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/jimkellyt/"
            className="hover:text-selected-text transition-all duration-150 ease-linear"
          >
            <BsLinkedin size="30" />
          </a>

          {/* Medium */}
          <a
            href="https://medium.com/@jimkelly-t"
            className="hover:text-selected-text transition-all duration-150 ease-linear"
          >
            <BsMedium size="30" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
