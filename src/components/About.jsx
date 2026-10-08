import image from "../assets/Debbie.jpg";
export default function About() {
  return (
    <>
      <section
        id="about"
        className="w-full flex flex-col md:flex-row justify-between items-center gap-8 px-6 mt-8"
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
          <p className="font-sans text-sm tracking-wide p-6 text-white text-start block max-w-3xl rounded-4xl shadow-md bg-pink-300 ">
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
            <ul className="list-disc">
              <li>
                <span className="font-bold">Core Tech:</span> React, Jetpack
                Compose, Flutter, Tailwind CSS, Supabase, Make{" "}
              </li>
              <li>
                <span className="font-bold">Design Tools:</span> Figma, Canva
              </li>
              <li>
                <span className="font-bold">Focus:</span> Frontend Web & Mobile
                Development, UI/UX Implementation, Ai Automated Workflows
              </li>
              <li>
                <span className="font-bold">Location:</span> Based in Port
                Harcourt, Nigeria{" "}
                <span className="font-bold">(Open to Remote)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
