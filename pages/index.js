import Hero from "../components/hero/Hero";
import Layout from "../components/layout/Layout";
import Card from "../components/card/Card";
import Sectionbreak from "../components/sectionbreak/Sectionbreak";
import ContactForm from "../components/contactForm/ContactForm";
function Home() {
  return (
    <Layout>
      <Hero
        heading="hullo"
        subHeading="rq3wuadgtusjbchbjquhskj"
        buttonText="learn more"
        bgImage="/bgGif.gif"
      />
      <Sectionbreak />
      <h2>Projects</h2>
      <div className="flex justify-space-evenly flex-wrap">
        <Card
          image="/project.jpeg"
          alt="random project"
          title="thingy"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
          buttonText="learn more"
          buttonLink=""
        />
        <Card
          image="/project.jpeg"
          alt="random project"
          title="thingy"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
          buttonText="learn more"
          buttonLink=""
        />
        <Card
          image="/project.jpeg"
          alt="random project"
          title="thingy"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sequi consequatur rem expedita ex voluptate id unde ea quibusdam quidem."
          buttonText="learn more"
          buttonLink=""
        />
      </div>
      <ContactForm />
    </Layout>
  );
}
export default Home;
