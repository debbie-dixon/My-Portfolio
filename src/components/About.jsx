import image from "../assets/Debbie.jpg";
export default function About() {
  return (
    <>
      <section
        id="about"
        className="w-full flex flex-col md:flex-row border-b pb-8 border-gray-300 justify-between items-center gap-8 px-6 mt-8"
      >
        <img
          src={image}
          alt="About Image"
          className="max-w-sm w-lg h-auto object-cover p-4 sm:w-100 sm:h-100 rounded-4xl border-2 border-pink-300 shadow-md"
        />
        <div>
          <h1 className="font-black text-3xl font-serif text-center pb-4">
            About Me
          </h1>
          <p className="font-sans text-sm tracking-wide p-6 text-pink-900 text-start block max-w-3xl rounded-4xl shadow-md bg-pink-100 ">
            I build software at the intersection of design, code, and smart
            workflows. With a strong foundation in modern web and mobile
            frameworks—from React and Tailwind to Kotlin and Flutter—I focus on
            delivering responsive, scalable, and beautifully designed products.
            Beyond frontend and mobile interfaces, I design seamless backends
            with Supabase and leverage AI automation via Make.com to streamline
            user processes and scale digital operations. When I’m not coding or
            building automated workflows, I’m usually learning new tools or
            creating tech content.
          </p>
          <div className="font-sans text-sm tracking-wide px-8 text-start block max-w-3xl mt-4">
            <h2 className="font-bold text-2xl text-center mb-4 font-serif">
              Key Specs
            </h2>
            <ul className="list-disc space-y-3 gap-2">
              <li>
                <span className="font-bold">Core Tech:</span>{" "}
                <span className="bg-blue-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  React
                </span>{" "}
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Flutter
                </span>{" "}
                <span className="bg-yellow-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Tailwind CSS
                </span>{" "}
                <span className="bg-cyan-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Supabase
                </span>{" "}
                <span className="bg-orange-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Make
                </span>
              </li>
              <li>
                <span className="font-bold">Design Tools:</span>{" "}
                <span className="bg-teal-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Figma
                </span>{" "}
                <span className="bg-blue-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Canva
                </span>
              </li>
              <li>
                <span className="font-bold">Focus:</span>{" "}
                <span className="bg-purple-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Frontend Web
                </span>{" "}
                <span className="bg-green-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  Mobile Dev
                </span>{" "}
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  UI/UX
                </span>{" "}
                <span className="bg-yellow-100 text-pink-700 px-3 py-1 rounded-full text-xs font-semibold">
                  AI Automation
                </span>
              </li>
              <li>
                <div className="flex items-start">
                  <p className="font-bold text-zinc-900 min-w-27.5">
                    Location:
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-medium">
                    <p className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></p>
                    Port Harcourt, Nigeria (Open to Remote)
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
