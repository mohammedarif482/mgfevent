// pages/index.js
import Head from "next/head";
import WeddingHero from "@/components/WeddingHero";
import ServicesSection from "@/components/ServicesSection";
import FAQSection from '@/components/FAQ';
import Footer from '@/components/Footer';
import Testimonial from '@/components/ Testimonial'; // Add this import
import Gallery from '@/components/Gallery'; // Make sure this is imported if used
import Form from '@/components/Form'; // Make sure this is imported if used

export default function Home() {
  return (
    <>
      <Head>
        <title>Meragi - Weddings Made Easy</title>
        <meta name="description" content="Plan your perfect wedding day with professional services. Get a free competitive quote today." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <WeddingHero />
      <ServicesSection />
      <Testimonial />
      <Gallery />
      <FAQSection />
      <Form/>
      <Footer />
    </>
  );
}