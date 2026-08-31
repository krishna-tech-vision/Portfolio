import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="w-full mt-10 md:mt-15 flex tb:flex-col" id="contact">
      {/* Special info */}
      <div className="w-[50%] tb:w-full px-5 lg:px-10 flex items-center">
        <div>
          <span className="text-lg font-semibold text-green-400">
            LET'S CONNECT
          </span>
          <h2 className="text-2xl md:text-4xl mt-3 font-bold text-indigo-100">
            Start A Project
          </h2>
          <p className="text-gray-300 mt-2">
            I'm currently available for freelance projects and full-time
            opportunities. Reach out to discuss your technical needs.
          </p>

          {/* User rating */}
          <div className="bg-indigo-100 flex justify-end mt-8 rounded-xl pl-1 border-1 border-gray-700 shadow-[0px_0px_10px] shadow-gray-800 overflow-hidden">
            <div className="w-full p-5 bg-gray-900 rounded-lg">
              <div className="text-green-400">
                <span className="material-symbols-outlined">star_rate</span>
                <span className="material-symbols-outlined">star_rate</span>
                <span className="material-symbols-outlined">star_rate</span>
                <span className="material-symbols-outlined">star_rate</span>
                <span className="material-symbols-outlined">star_rate</span>
              </div>
              <p className="text-gray-300 mt-2">
                "Delivered a highly complex SaaS backend exactly to spec. The
                API architecture is rock solid, and the documentation was
                pristine. A true professional who understands enterprise needs."
              </p>
              <div className="flex gap-3 items-center mt-5">
                <div className="w-10 h-10 bg-green-500 rounded-4xl">logo</div>
                <div>
                  <h2 className="text-indigo-100 font-bold">Sarah Jenkins</h2>
                  <p className="text-sm text-gray-300">
                    CTO, TechFlow Innovations
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-8">
            <a
              href="#"
              className="link-button flex gap-1 p-2 rounded-md bg-gray-800 text-gray-300 border-1 border-gray-700"
            >
              <span className="material-symbols-outlined">link</span>LinkedIn
            </a>

            <a
              href="#"
              className="link-button flex gap-1 p-2 rounded-md bg-gray-800 text-gray-300 border-1 border-gray-700"
            >
              <span className="material-symbols-outlined">code</span>GitHup
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-[50%] tb:w-full flex justify-center items-center">
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
