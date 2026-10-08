import reactIcon from "../assets/icons/react.svg";
import tailwindIcon from "../assets/icons/tailwind.svg";
import jsIcon from "../assets/icons/javascript.svg";
import htmlIcon from "../assets/icons/html.svg";
import cssIcon from "../assets/icons/css.svg";
import sqlIcon from "../assets/icons/sql.svg";
import flutterIcon from "../assets/icons/flutter.svg";
import makeIcon from "../assets/icons/make-color.svg";
export default function Offers() {
  const offerings = [
    <img src={reactIcon} alt="React Icon" width={50} height={50} />,
    <img src={tailwindIcon} alt="Tailwind Icon" width={100} height={100} />,
    <img src={jsIcon} alt="JavaScript Icon" width={50} height={50} />,
    <img src={htmlIcon} alt="HTML Icon" width={50} height={50} />,
    <img src={cssIcon} alt="CSS Icon" width={50} height={50} />,
    <img src={sqlIcon} alt="SQL Icon" width={50} height={50} />,
    <img src={flutterIcon} alt="Flutter Icon" width={50} height={50} />,
    <img src={makeIcon} alt="Make Icon" width={50} height={50} />,
  ];

  return (
    <section className="w-full bg-pink-300 py-4 ">
      <div className="max-w-5xl mx-auto px-6">
        {/* Responsive Grid: 2 columns on mobile, 3 columns on desktop */}
        <div className="flex gap-y-2 gap-x-4 justify-items-center">
          {offerings.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 w-full max-w-50"
            >
              <span className="font-sans font-sm text-slate-400 text-sm md:text-base whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
