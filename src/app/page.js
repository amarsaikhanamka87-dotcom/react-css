import { Hero } from "./_components";
import { Header } from "./_components/";
import { Logo } from "./_components/";
import { Card } from "./_components/";
import { CTA } from "./_components/";
import { Case } from "./_components/";
import { CaseBlock } from "./_components/";
import { OurWork } from "./_components/";
import { Team } from "./_components/";
import { Testimonials } from "./_components/";
import { Contacts } from "./_components/";
import { Footer } from "./_components/";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col  gap-20 bg-gray-50  ps-25 pr-25 w-[1440] ">
        <Header />
        <Hero />
        <Logo />
        <Card />
        <CTA />
        <Case />
        <CaseBlock />
        <OurWork />
        <Team />
        <Testimonials />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}
