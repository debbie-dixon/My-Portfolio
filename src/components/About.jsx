import image from "../assets/Debbie.jpg";
export default function About() {
  return (
    <>
      <section
        id="about"
        className="w-full flex flex-col md:flex-row border-b pb-8 border-gray-300 justify-between items-center md:items-start gap-8 px-4 sm:px-6 mt-8"
      >
        <img
          src={image}
          alt="About Image"
          className="w-full max-w-sm md:w-[42%] md:max-w-none h-auto object-cover p-4 rounded-4xl border-2 border-pink-300 shadow-md"
        />
        <div className="w-full md:w-[58%] max-w-3xl">
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
          <div className="font-sans text-sm tracking-wide px-3 sm:px-8 text-start block max-w-3xl mt-4">
            <h2 className="font-bold text-2xl text-center mb-4 font-serif">
              Key Specs
            </h2>
            <ul className="space-y-4">
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-bold min-w-25 text-gray-900">
                  Core Tech:
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                    React
                  </span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                    Flutter
                  </span>
                  <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                    Tailwind CSS
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                    Supabase
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                    Make
                  </span>
                </div>
              </li>

              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-bold min-w-25 text-gray-900">
                  Design Tools:
                </span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                    Figma
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                    Canva
                  </span>
                </div>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-bold min-w-25 text-gray-900">Focus:</span>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                    Frontend Web
                  </span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                    Mobile Dev
                  </span>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                    UI/UX
                  </span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center">
                    AI Automation
                  </span>
                </div>
              </li>
              <li className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-start gap-2">
                  <p className="font-bold text-zinc-900 min-w-27.5">
                    Location:
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-medium w-fit max-w-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                    <span>Port Harcourt, Nigeria (Open to Remote)</span>
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
