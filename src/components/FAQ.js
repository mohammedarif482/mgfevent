// components/FAQSection.js
import React, { useState } from 'react';

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqItems = [
    { 
        question: 'Can I get copies of photos and videos from my event?',
        answer: 'We can coordinate with your chosen photographer and videographer to ensure that you receive copies of all your event photos and videos.'
    },
    { 
        question: 'Do you provide on-site event coordination?',
        answer: 'Yes, we provide on-site event coordination to ensure that your event runs seamlessly. Our team will be present to manage logistics, handle vendor coordination, and address any guest concerns.'
    },
    { 
        question: 'Do you specialize in a particular type of event (weddings, corporate, etc.)?',
        answer: 'While we have extensive experience in various event types, we have particular expertise in wedding planning, corporate events, and private events. However, we are adaptable and can handle a wide range of events.'
    },
    { 
        question: 'Do you handle event setup and teardown?',
        answer: 'Yes, we handle all aspects of event setup and teardown, ensuring that everything is executed according to your specifications.'
    },
    { 
        question: 'What happens if there\'s an emergency or unexpected issue during my event?',
        answer: 'We have contingency plans in place to address any unforeseen issues. Our team will be on-site to handle any emergencies and ensure that your event proceeds smoothly.'
    },
    { 
        question: 'Do you work with specific vendors, or can I choose my own?',
        answer: 'We have established relationships with a network of trusted vendors, but we are also open to working with vendors of your choice. We prioritize quality and reliability when selecting vendors.'
    },
    { 
        question: 'How far in advance should I start planning my event?',
        answer: 'The ideal timeline varies depending on the event\'s size and complexity. For weddings, we recommend starting 12-18 months in advance. Corporate events often require 6-12 months, while smaller parties can be planned in 3-6 months. However, we can accommodate shorter timelines if necessary.'
    },
    { 
        question: 'What information do you need from me to start planning my event?',
        answer: 'We\'ll need details such as your event date, guest count, budget, preferred venue style, theme (if any), and any specific requirements you may have. The more information you provide, the better we can tailor our services to your needs.'
    },
    { 
        question: 'Do you handle all aspects of event planning, or can I choose specific services?',
        answer: 'We offer comprehensive event planning services, but we also provide à la carte options. You can choose to delegate specific tasks, such as venue selection, catering, or décor, while handling others yourself.'
    },
    { 
        question: 'Can you help me find a venue that fits my budget and style?',
        answer: 'Absolutely! We have extensive knowledge of local venues and can help you find the perfect space that aligns with your vision and budget. We\'ll consider factors like capacity, location, ambiance, and amenities.'
    },
    { 
        question: 'How does your pricing work?',
        answer: 'Our pricing is tailored to each event and depends on the scope of services required. We offer various packages and can also create custom proposals based on your specific needs. We strive for transparency and will provide a detailed breakdown of all costs.'
    },
    { 
        question: 'Do you require a deposit?',
        answer: 'Yes, we typically require a deposit to secure our services and reserve your event date. The deposit amount will be outlined in our contract.'
    },
    { 
        question: 'Can you help me create a realistic event budget?',
        answer: 'Yes, we can! We\'ll work with you to develop a budget that reflects your priorities and ensures that your event stays within your financial parameters. We can also provide cost-saving tips and suggestions.'
    },
    { 
        question: 'Are there any hidden fees or unexpected costs I should be aware of?',
        answer: 'We believe in complete transparency. We\'ll provide a detailed contract outlining all costs and ensure that you are aware of any potential additional expenses.'
    },
    { 
        question: 'Do you handle guest accommodations and transportation?',
        answer: 'Yes, we can handle guest accommodations and transportation. We can arrange hotel bookings, shuttle services, and other transportation options to ensure that your guests have a comfortable and convenient experience.'
    },
    { 
        question: 'Can you arrange for a tasting before finalizing the catering menu?',
        answer: 'Yes, we can arrange a tasting with the caterer to ensure that you are happy with the menu and the quality of the food.'
    }
];


  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-[#edfcf9] min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
        {/* <p className="text-xl text-[#7A7A7A]">Some of the commonly asked questions</p>
          <h1 className="text-4xl font-bold text-[#4A4A4A] mb-4">Frequently Asked Questions</h1> */}
 <p className="text-center text-gray-600 mb-1 text-lg">
 Some of the commonly asked questions</p>
        {/* Section Title */}
        <h2 className="text-center text-4xl md:text-5xl font-medium text-gray-900 mb-16">Frequently Asked Questions</h2>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`border-b border-gray-200 last:border-b-0 ${
                openQuestion === index ? 'bg-[#F5F5F5]' : 'bg-white'
              } transition-colors duration-300`}
            >
              <button 
                onClick={() => toggleQuestion(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-semibold ${
                  openQuestion === index ? 'text-[#e35c26]' : 'text-[#4A4A4A]'
                } transition-colors duration-300`}>
                  {item.question}
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    openQuestion === index ? 'rotate-180 text-[#e35c26]' : 'text-gray-500'
                  }`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openQuestion === index && (
                <div className="px-6 pb-6 text-[#7A7A7A] animate-fade-in">
                  <p className="border-l-4 border-[#e35c26] pl-4">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;