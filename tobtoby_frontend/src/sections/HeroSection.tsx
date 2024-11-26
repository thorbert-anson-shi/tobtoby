export default function HeroSection(props: any) {
  const data = {
    displayName: "Thorbert",
    role: "web developer",
    socials: {
      email: "tobyas2005139@gmail.com",
      linkedin: "https://www.linkedin.com/in/thorbertansonshi/",
      github: "https://github.com/thorbert-anson-shi",
    },
  };

  return (
    <section
      ref={props.ref}
      class="flex h-full w-full flex-col items-center justify-center text-xl md:text-3xl"
    >
      <div id="personal-info" class="flex flex-col leading-relaxed">
        <h1>
          Hey! It's <span class="font-[600]">{data.displayName}</span>
        </h1>
        <h2>
          I would call myself a{" "}
          <span class="bg-black px-1 text-white">{data.role}</span>
        </h2>
        <h2>But I can do other stuff too!</h2>
        <div id="socials" class="mt-3 flex flex-row space-x-5">
          <a href={data.socials.github} target="_blank">
            <i class="fa-brands fa-github duration-200 hover:text-neutral-400"></i>
          </a>
          <a href={data.socials.linkedin} target="_blank">
            <i class="fa-brands fa-linkedin duration-200 hover:text-neutral-400"></i>
          </a>
          <a href={`mailto:${data.socials.email}`} target="_blank">
            <i class="fa-solid fa-envelope duration-200 hover:text-neutral-400"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
