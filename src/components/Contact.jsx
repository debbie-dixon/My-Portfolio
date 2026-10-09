import DynamicIcons from "./DynamicIcons";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";
export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="w-full flex flex-col items-center border-t border-gray-300 justify-center mt-8 mb-10 gap-6"
      >
        {/* Row container: Stacked on mobile, side-by-side on desktop */}
        <div className="flex flex-col md:flex-row md:items-start items-center justify-center gap-8 md:gap-16 mt-6 w-full max-w-4xl px-4">
          <div className="flex flex-col items-center md:items-start  min-w-50">
            <h1 className="text-pink-600 font-semibold italic text-sm">
              Connect with Me!
            </h1>
            <a
              href="https://wa.me/+2347039240928"
              className="flex items-center gap-2 justify-center"
            >
              <FaWhatsapp color="green" /> - +2347039240928
            </a>
            <a
              href="https://www.linkedin.com/in/itgirldebbie"
              className="flex items-center gap-2 justify-center"
            >
              <FaLinkedin color="blue" /> - @itgirldebbie
            </a>
            <a
              href="https://www.instagram.com/itgirldebbie_"
              className="flex items-center gap-2 justify-center"
            >
              <FaInstagram color="red" /> - @itgirldebbie_
            </a>
            <a
              href="https://www.tiktok.com/@itgirldebbie_"
              className="flex items-center gap-2 justify-center"
            >
              <FaTiktok color="black" /> - @itgirldebbie_
            </a>
          </div>

          {/* Section 1: Phone & Email */}
          <section className="flex flex-col items-center md:items-start space-y-3 min-w-50">
            <DynamicIcons
              text="07039240928"
              iconName="phone"
              color="text-green-600"
            />
            <DynamicIcons
              text="gogoabitedeborah2@gmail.com"
              iconName="mail"
              link="mailto:gogoabitedeborah2@gmail.com"
              color="text-red-600"
            />
          </section>

          {/* Section 2: Location */}
          <section className="flex flex-col items-center space-y-2 min-w-50">
            <div className="flex items-center gap-2">
              <DynamicIcons iconName="map-pin" size={18} />
            </div>
            <h1 className="text-sm text-center leading-relaxed">
              Port-Harcourt, <br />
              Rivers State, Nigeria.
            </h1>
          </section>

          {/* Section 3: Socials */}
          {/* <section className="flex flex-col items-center space-y-3 min-w-50">
            <h1 className="text-tColor font-semibold italic text-sm">
              Connect with us
            </h1>
            <div className="flex gap-4">
              <DynamicIcons
                iconName={faWhatsapp}
                color="text-green-600"
                link="https://wa.me/message/WOE2QIJLGWLAK1"
              />
              <Icon
                size="text-2xl"
                iconName={faInstagram}
                color="text-pink-600"
                link="https://www.instagram.com/hemass_artistry"
              />
              <Icon
                size="text-2xl"
                iconName={faFacebook}
                color="text-blue-600"
                link="https://www.facebook.com/profile.php?id=61577907793515"
              />
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
}
