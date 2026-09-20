import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowUpRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import portrait from "../assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aaditya Kamble — Portfolio" },
      {
        name: "description",
        content: "Learn about Aaditya Kamble, his background, technical work, and creative pursuits.",
      },
      { property: "og:title", content: "About Aaditya Kamble — Portfolio" },
      {
        property: "og:description",
        content: "Learn about Aaditya Kamble, his background, technical work, and creative pursuits.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});


function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <FloatingShapes />

      <main className="relative z-10">
        <section className="px-6 pb-20 pt-10 md:px-12 md:pb-28 md:pt-20 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-5 font-body text-sm font-semibold uppercase tracking-widest text-primary">
                AADITYA KAMBLE / ABOUT
              </p>
              <h1 className="max-w-4xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-foreground md:text-6xl lg:text-7xl">
                Knowing is
                <br />
                Not Enough
              </h1>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                I am building a living record of my technical work, creative explorations, and the
                experiences that continue to shape how I think and make.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="rounded-full">
                  <a href="#overview">Overview</a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="#philosophy">Journey</a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="#education">Education</a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="#experience">Experience</a>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <a href="#stats">Stats</a>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto">
              <div className="absolute -inset-4 -z-10 rounded-[42%_58%_65%_35%/45%_40%_60%_55%] bg-primary float-slow" />
              <img
                src={portrait}
                alt="Portrait of Aaditya Kamble"
                width={420}
                height={420}
                className="aspect-square w-full rounded-[32%_68%_58%_42%/48%_42%_58%_52%] object-cover"
              />
            </div>
          </div>
        </section>

        <section id="education" className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Background</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Education</h2>
            </div>
            <div className="space-y-10 text-base leading-relaxed text-muted-foreground md:text-lg">
              <Link
                to="/education/iit-jodhpur"
                className="group block transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Indian Institute of Technology, Jodhpur <ArrowUpRight className="inline h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" /></h3>
                    <p className="mt-1 text-primary">B.Tech in Materials Engineering</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground md:text-right">2022 - 2026</span>
                </div>
              </Link>

              <Link
                to="/education/nirala-college"
                className="group block transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Nirala Jr College, Nagpur <ArrowUpRight className="inline h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" /></h3>
                    <p className="mt-1 text-primary">XII Standard, Maharashtra State Board</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground md:text-right">2022</span>
                </div>
              </Link>

              <Link
                to="/education/sandipani-school"
                className="group block transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Sandipani High School, Nagpur <ArrowUpRight className="inline h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" /></h3>
                    <p className="mt-1 text-primary">X Standard, CBSE</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground md:text-right">2020</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section id="experience" className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Career</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Experience</h2>
            </div>
            <div className="space-y-8">
              {/* ScoAll Experience */}
              <Link to="/experience/scoall" className="group flex gap-4 md:gap-6 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background overflow-hidden border border-border">
                  <img src="https://media.licdn.com/dms/image/v2/D560BAQEs3AIVfE2wQA/company-logo_100_100/B56Zy4d_H.KcAU-/0/1772621394911/scoall_logo?e=1790812800&v=beta&t=2kIPddZ4U21SFWlB_kwOi-5HOmvuPkz0OxSsleKyPbg" alt="ScoAll Logo" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Product & UI Designer <ArrowUpRight className="inline h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" /></h3>
                    <p className="mt-1 text-primary font-medium">ScoAll </p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground md:text-right mt-1 md:mt-0">Jan 2026 - Apr 2026 · 4 mos</span>
                </div>
              </Link>

              {/* Boltheads Experience */}
              <Link to="/experience/boltheads" className="group flex gap-4 md:gap-6 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-background overflow-hidden">
                  <img src="https://media.licdn.com/dms/image/v2/D560BAQEsFRUFYkzDpg/company-logo_200_200/B56Za0Kv8XGgAI-/0/1746779439678/automobiles_iitj_logo?e=1790812800&v=beta&t=B4SeDQFeK5_mai2LOCJWyWO8Y1MuJexrPKl02Dd6BKw" alt="Boltheads Logo" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between w-full gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">Coordinator <ArrowUpRight className="inline h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" /></h3>
                    <p className="mt-1 text-primary font-medium">Boltheads</p>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground md:text-right mt-1 md:mt-0">Sep 2024 - Sep 2025 · 1 yr 1 mo</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section id="overview" className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Overview</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Academic Profile</h2>
            </div>
            <div className="space-y-7 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I am a materials engineering graduate with an innate passion for automobiles and a firm belief that the pursuit of knowledge should never end. This curiosity has driven me to explore multiple STEM fields, delivering hands-on projects across machine learning, IoT, embedded systems, EV systems, data structures, and decision sciences, as well as polymer processing, manufacturing techniques, fuel additives, and metal nano-additives. Alongside my technical work, working with a startup and managing collegiate initiatives allowed me to pick up product, web, and visual design on the go.
              </p>
              <p>
                My commitment to the automotive domain pushed me to establish an automobile club during college. While building it from the ground up was challenging, the experience gave me valuable leadership opportunities, enabling me to network and collaborate with peers from diverse backgrounds to execute competitions, workshops, and technical projects. I thrive on connecting with new people, exploring fresh ideas, and constantly expanding my skill set.
              </p>
              <p>
                To complement my core engineering foundation, I have actively broadened my worldview through diverse electives. Interdisciplinary coursework in design thinking, sociology, philosophy, psychology, and linear programming has shaped the way I think, training me to approach complex challenges and craft solutions through multidimensional perspectives.
              </p>
              <p>
                Looking forward, I aim to delve deeper into the domain I have studied, expanding my expertise so that I can translate theoretical understanding into tangible, high-impact innovations and create practical solutions that make a difference.
              </p>
            </div>
          </div>
        </section>

        <section id="philosophy" className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Profile</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">My Journey & Philosophy</h2>
            </div>
            <div className="space-y-7 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                &quot;Cultivation of mind should be the ultimate aim of human existence,&quot; wrote Dr. B.R. Ambedkar. He believed that our lives should not be defined merely by material gain, social status, or wealth. While these elements are necessary, our primary pursuit should be to cultivate a mind that is knowledgeable, rational, and humane—one capable of independent thought, discerning right from wrong, and contributing meaningfully to society. This philosophy has profoundly shaped my worldview and how I perceive my own journey.
              </p>
              <p>
                I am Aaditya Kamble, a Materials Engineering graduate from IIT Jodhpur. Throughout my time in college, peers often remarked that I was &quot;more of an engineer&quot; than those around me. At first, the comment puzzled me. Was it a compliment, or a critique? I didn&apos;t see myself doing anything extraordinary; I was simply someone who enjoyed taking things apart, cleaning components, and trying to fix what was broken.
              </p>
              <p>
                The true meaning behind their words became clear one evening before dinner. A friend showed me an earbud charging case that had stopped working, intending to throw it away and asking which replacement model he should buy. Instead of recommending a new purchase, I suggested we inspect it. Opening the casing revealed a detached USB port and a severed terminal pin.
              </p>
              <p>
                Neither of us had ever repaired an earbud case, and before touching a tool, I cautioned him that attempting a fix might break it completely. Still, we decided to try. We took it to the lab after dinner, and with a bit of patience and shared problem-solving, we managed to solder the parts back together within an hour. When he thanked me and repeated, &quot;You&apos;re a true engineer,&quot; I pushed back, pointing out that we hadn&apos;t even graduated yet and that anyone could have done what we did.
              </p>
              <p>
                His response changed my perspective: &quot;Engineering is not just a degree or a field; it’s a mindset.&quot; He explained that while he saw an unfixable object meant for the trash, I saw an opportunity to diagnose a problem, embrace the unknown, and build a solution.
              </p>
              <p>
                That conversation helped me realize what drives me. I thrive on confronting unfamiliar problems because they push me out of my comfort zone and force me to grasp how complex systems function.
              </p>
              <p>
                This urge to dissect and repair has its roots in my childhood. Watching my father fix household items and assisting him along the way gave me an early, practical education in how everyday mechanisms work. Around the same time, my passion for automobiles was born. Riding in my father&apos;s 2003 Maruti 800—an MPFI model upgraded to meet BS-II standards—watching him drive, and helping him wash the car on weekends left an indelible impression. Even before I could fully speak or walk, the sounds, mechanical vibrations, and tactile sensations of that vehicle fascinated me.
              </p>
              <p>
                Over the years, that simple childhood excitement matured into a deep technical fascination. Today, I am captivated by the century-long evolution of the automobile: the engineering behind internal combustion engines and modern transmissions, the physics of suspension geometry and aerodynamics, the integration of CAN bus protocols, and the precision required in modern manufacturing.
              </p>
              <p>
                Ultimately, my love for automobiles became the gateway to exploring diverse disciplines and choosing Materials Engineering. Immersing myself in the study of crystal grains, grain boundaries, fracture mechanics, and plastic deformation proved to be an exhilarating journey, further enriched by collaborative research projects alongside supportive peers and faculty.
              </p>
              <p>
                Yet, as much as I have learned, I recognize that the world holds far more knowledge than any single person could ever fully comprehend. Tackling isolated problems offers valuable insight, but making a genuine, lasting impact requires systematic mastery. That is why I am dedicated to deepening my expertise in Materials Science—to translate fundamental principles into tangible innovations. The pursuit of knowledge has no finish line, and real progress demands persistent, active effort. As Dr. Ambedkar wisely said, &quot;If you believe in living a respectable life, you believe in self-help, which is the best help.&quot;
              </p>
            </div>
          </div>
        </section>

        <section id="stats" className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">Metrics</p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">Stats</h2>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-foreground md:text-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-1">
                <span className="text-muted-foreground">Name</span>
                <span className="font-medium sm:text-right">Aaditya Kamble</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-1">
                <span className="text-muted-foreground">Hometown</span>
                <span className="font-medium sm:text-right">Nagpur, Maharashtra, India</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-1">
                <span className="text-muted-foreground">DOB</span>
                <span className="font-medium sm:text-right">18 Feb 2004</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-1">
                <span className="text-muted-foreground">Languages</span>
                <span className="font-medium sm:text-right">Marathi (Mother Tongue), English, Hindi</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-border pb-4 gap-1">
                <span className="text-muted-foreground">Age</span>
                <span className="font-medium sm:text-right">
                  <LiveAge dob="2004-02-18T22:05:43+05:30" />
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FloatingShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute left-[6%] top-[18%] h-14 w-14 rounded-[40%_60%_65%_35%/50%_45%_55%_50%] bg-primary/20 float-slow" />
      <div className="absolute right-[7%] top-[55%] h-20 w-20 rounded-[65%_35%_45%_55%/40%_55%_45%_60%] bg-red-muted/20 drift-x" />
      <div className="absolute bottom-[12%] left-[38%] h-9 w-9 rounded-full bg-primary/20 float-medium" />
    </div>
  );
}

function LiveAge({ dob }: { dob: string }) {
  const [age, setAge] = useState<string>("");

  useEffect(() => {
    const calculateAge = () => {
      const birthDate = new Date(dob);
      const now = new Date();

      let years = now.getFullYear() - birthDate.getFullYear();
      let months = now.getMonth() - birthDate.getMonth();
      let days = now.getDate() - birthDate.getDate();
      let hours = now.getHours() - birthDate.getHours();
      let minutes = now.getMinutes() - birthDate.getMinutes();
      let seconds = now.getSeconds() - birthDate.getSeconds();
      let milliseconds = now.getMilliseconds() - birthDate.getMilliseconds();

      if (milliseconds < 0) {
        milliseconds += 1000;
        seconds--;
      }
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }

      const pad = (n: number, width: number) => n.toString().padStart(width, '0');

      const formatted = `${years}.${pad(months, 2)}.${pad(days, 2)}.${pad(hours, 2)}.${pad(minutes, 2)}.${pad(seconds, 2)}.${pad(milliseconds, 3)}`;
      setAge(formatted);
    };

    calculateAge();
    const intervalId = setInterval(calculateAge, 50);

    return () => clearInterval(intervalId);
  }, [dob]);

  return <span className="font-mono tabular-nums tracking-tight">{age}</span>;
}