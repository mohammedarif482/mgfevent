// components/ServicesSection.jsx
import Image from "next/image";
import Link from "next/link";
import WeddingDecor from '../../public/12.avif';
import WeddingPhotography from '../../public/13.avif';
import VenueConsultation from '../../public/14.avif';
import MeragiXclusiv from '../../public/15.avif';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Plan Wedding",
      description: "From design consultation to flawless execution, we've got you covered!",
      image: WeddingDecor
    },
    {
      id: 2,
      title: "Hosts Events and private parties",
      description: "Turn your wedding day into a timeless masterpiece.",
      image: WeddingPhotography
    },
    {
      id: 3,
      title: "Product launches & Inaugrations",
      description: "Get expert help in finding the perfect venue for your wedding.",
      image: VenueConsultation
    },
    {
      id: 4,
      title: "Mini Conferences",
      description: "Our xclusiv offering for larger-than-life, luxury weddings.",
      image: MeragiXclusiv
    },
    {
      id: 5,
      title: "Anniversaries, birthday parties, baby showers and many more ",
      description: "Our xclusiv offering for larger-than-life, luxury weddings.",
      image: MeragiXclusiv
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Tagline */}
        <p className="text-center text-gray-600 mb-1 text-lg">
          Startingettable experiences.
        </p>
        
        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-5xl font-medium text-gray-900 mb-8">
          Who we are?
        </h2>
        {/* Tagline */}
        <p className="text-center text-gray-600 mb-16 text-lg">
          At MGF, we turn memories into precious moments. We not just capture your priceless moments but also turn them into special ones. We combine creativity and expertise to give you a customized experience.
        </p>
        {/* Tagline */}
        <p className="text-center text-gray-600 mb-1 text-lg">
          Startingettable experiences.
        </p>
        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-5xl font-medium text-gray-900 mb-16">
          Services we offer
        </h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6  mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-[#ffffff] shadow-lg rounded-2xl overflow-hidden
                  ${index % 3 === 0 ? 'row-span-2' : 'row-span-1'}
                  hover:scale-105 transition-transform duration-300">
              <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 text-black">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Tagline */}
        <p className="text-center text-gray-600 mb-5 text-lg">
          Starting from wedding photoshoot to baby showers, you name it we do it. We customize the events according to your idea and budget. In a world where moments fade, memories endure. At MGF, we don’t just plan events, we craft legacies. We are storytellers, architects of joy, and creators of unforgettable experiences.
        </p>
        
        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link 
            href="/contact" 
            className="inline-block py-3 px-8 bg-[#e35c26] hover:bg-[#d04a45] text-white font-medium rounded-full transition-colors duration-200"
          >
            Get free quote
          </Link>
        </div>
      </div>
    </section>
  );
}