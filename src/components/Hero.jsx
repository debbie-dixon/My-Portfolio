import image from "../assets/Debbie3.png";
import Button from "./Button";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <div>
      <section
        id="home"
        className="w-full flex flex-col md:flex-row bg-pink-100  items-center gap-6 sm:gap-8 pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6"
      >
        <img
          src={image}
          alt="Nail Art Design"
          className="order-1 w-full max-w-xs sm:max-w-md h-auto object-cover md:order-2 md:max-w-md"
        />

        <div className="order-2 flex flex-col items-center justify-center w-full max-w-xl sm:items-start md:order-1">
          <div className="font-serif text-5xl sm:text-7xl text-pink-600 text-center sm:text-start leading-none break-words">
            ITGirlDebbie
            <p className="text-[10px] sm:text-[11px] mt-4 md:text-base font-sans font-bold text-slate-500 uppercase tracking-widest py-2">
              Web/App Developer & AI Automation Specialist
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
            <Button
              text="My Works"
              hover="hover:translate-y-1  hover:text-blue"
              rounded="rounded-full"
              bgColor="bg-pink-300"
              // border="border-2 border-pink-600"
              textColor="text-white"
              font="font-semibold"
              link="#services"
            />
            <Button
              text="Book Me"
              hover=" hover:translate-y-1 hover:text-blue"
              rounded="rounded-full"
              bgColor="transparent border border-pink-600"
              textColor="text-black"
              font="font-semibold"
              link="#book"
            />
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://www.linkedin.com/in/itgirldebbie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-blue transition-colors duration-300"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://twitter.com/itgirldebbie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-blue transition-colors duration-300"
            >
              <FaXTwitter className="text-2xl" />
            </a>
            <a
              href="https://github.com/debbie-dixon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-blue transition-colors duration-300"
            >
              <FaGithub className="text-2xl" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
