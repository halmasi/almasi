import Titles from "@/components/Titles";
import { MdOutlineMail, MdKeyboardArrowRight } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <header>
        <Titles>Contact me</Titles>
      </header>
      <main className="w-full flex flex-col md:flex-row flex-wrap">
        <section className="md:w-1/2">
          <ul className="md:text-xl space-y-5">
            <li className="grid grid-cols-1  hover:text-red-900">
              <div className="flex flex-row items-center space-x-3">
                <MdOutlineMail />
                <p>Email Address:</p>
              </div>
              <div className="flex flex-row items-center">
                <MdKeyboardArrowRight />
                <div className="flex flex-row w-fit">
                  <a
                    className="border-b-4 w-0 border-red-800 transition-all duration-200 hover:w-full"
                    target="_blank"
                    href="mailto:contact@almasi.info"
                  >
                    Contact@Almasi.info
                  </a>
                </div>
              </div>
            </li>
            <li className="grid grid-cols-1 hover:text-red-900">
              <div className="flex flex-row items-center space-x-3">
                <BiLogoTelegram />
                <p>Telegram Account:</p>
              </div>

              <div className="flex flex-row items-center">
                <MdKeyboardArrowRight />
                <div className="flex flex-row w-fit">
                  <a
                    className="border-b-4 w-0 border-red-800 transition-all duration-200 hover:w-full"
                    target="_blank"
                    href="https://t.me/h2almasi"
                  >
                    @H2almasi
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <section className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold text-center">
            or send a Message through this form
          </h2>
          <ContactForm />
        </section>
      </main>
    </>
  );
}
