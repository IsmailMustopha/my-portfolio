import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { ProjectsSection } from "@/components/Projects";
import Tape from "@/components/Tape";
import Testimonials from "@/components/Testimonials";
// import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
// import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="overflow-hidden bg-black-100">
      <div className="relative  justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <ProjectsSection />
          {/* <RecentProjects /> */}
        </div>
      </div>
        <Tape />
        <Testimonials />
        {/* <Approach /> */}
        <Footer />
    </main>
  );
}
