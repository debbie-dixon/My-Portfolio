import image from "../assets/Debbie2.jpg";
import Button from "./Button";

export default function Hero() {
  return (
    <div>
      <section
        id="home"
        className=" w-full flex flex-col md:flex-row justify-evenly items-center gap-8 pt-24 pb-16"
      >
        <div className="flex flex-col items-center sm:items-start">
          <div className="font-serif text-6xl text-pink-900 text-center sm:text-start leading-none">
            ITGirlDebbie
            <p className=" text-[11px] mt-4 md:text-base font-sans font-semibold text-slate-500 uppercase tracking-widest py-2">
              Web/App Developer & AI Automation Specialist
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              text="My Works"
              hover="hover:translate-y-1  hover:text-blue"
              rounded="rounded-full"
              bgColor="transparent border-2 border-pink-300"
              textColor="text-black"
              font="font-semibold"
              link="#services"
            />
            <Button
              text="Book Me"
              hover=" hover:translate-y-1 hover:text-blue"
              rounded="rounded-full"
              bgColor="transparent border-2 border-blue-300"
              textColor="text-black"
              font="font-semibold"
              link="#book"
            />
          </div>
        </div>

        <img
          src={image}
          alt="Nail Art Design"
          className=" max-w-md w-full h-auto object-cover rounded-4xl  sm:w-lg"
        />
      </section>
    </div>
  );
}
