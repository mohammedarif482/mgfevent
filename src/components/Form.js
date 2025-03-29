import React, { useState, useEffect } from 'react';

const EnquiryForm = () => {
  const [formData, setState] = useState({
    name: '',
    contact: '',
    location: '',
    event: '',
    eventDate: '',
    budget: '',
    connectOnWhatsapp: false
  });
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 0, background: "#1dace4" },

    { id: 1, background: "#e65e28" },
    { id: 2, background: "#5aae97" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setState({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };
  
  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <div className="m-auto w-full max-w-6xl">
       
        
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden">
          {/* Left side with image */}
          <div className="w-full md:w-2/5 relative overflow-hidden" style={{minHeight: "350px"}}>
            {slides.map((slide, index) => (
              <div 
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
              style={{ backgroundColor: slide.background }}
              >
                {index === 0 && (
                  <img 
                    src="https://i.pinimg.com/736x/d2/c3/53/d2c3533e65fb4a5c53b6b4efbceacf74.jpg" 
                    alt="Desert landscape" 
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                  />
                )}
                {index === 1 && (
                  <img 
                    src="https://i.pinimg.com/736x/70/97/1f/70971f1bdfaee4a5a7f218093f9083f6.jpg" 
                    alt="Wedding scene" 
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                  />
                )}
                {index === 2 && (
                  <img 
                    src="https://i.pinimg.com/736x/7c/4b/0b/7c4b0b8d4bbd1a9f843f16a43169eb96.jpg" 
                    alt="Event setup" 
                    className="absolute inset-0 w-full h-full object-cover opacity-35"
                  />
                )}
              </div>
            ))}
            
            <div className="absolute top-6 left-6 z-10">
              <h2 className="text-white text-2xl font-bold">MGF</h2>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <h2 className="text-white text-4xl font-bold text-center whitespace-nowrap">
                Capturing Moments,<br />
                Creating Memories
              </h2>
            </div>
            
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
              {slides.map((slide, index) => (
                <div 
                  key={index}
                  className={`w-6 h-1 rounded cursor-pointer ${currentSlide === index ? 'bg-white' : 'bg-gray-400'}`}
                  onClick={() => setCurrentSlide(index)}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Right side with form */}
          <div className="w-full md:w-3/5 bg-gray-100 p-8">
            <h1 className="text-black text-3xl font-bold mb-2">Enquire No</h1>
            <p className="text-gray-400 mb-6">Tell us about your event and we'll get back to you</p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full p-3 rounded bg-white text-gray-700 border border-gray-300 focus:outline-none focus:border-[#e35c26]"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact"
                  className="w-full p-3 rounded  bg-white text-gray-700 border border-gray-300 focus:outline-none focus:border-[#e35c26]"
                  value={formData.contact}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="w-full p-3 rounded  bg-white text-gray-700 border border-gray-300 focus:outline-none focus:border-[#e35c26]"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <select
                  name="event"
                  className="w-full p-3 rounded  bg-white text-gray-700 border border-gray-300 focus:outline-none focus:border-[#e35c26] appearance-none"
                  value={formData.event}
                  onChange={handleChange}
                >
                  <option value="" disabled selected>Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="corporate">Corporate</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <input
                  type="date"
                  name="eventDate"
                  placeholder="Event date"
                  className="w-full p-3 rounded  bg-white text-gray-700 border border-gray-300 focus:outline-none focus:border-[#e35c26]"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <input
                  type="text"
                  name="budget"
                  placeholder="Budget"
                  className="w-full p-3 rounded  bg-white text-gray-700 border border-gray-300 focus:outline-none focus:border-[#e35c26]"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
              
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="connectOnWhatsapp"
                  name="connectOnWhatsapp"
                  className="w-4 h-4 mr-2"
                  checked={formData.connectOnWhatsapp}
                  onChange={handleChange}
                />
                <label htmlFor="connectOnWhatsapp" className="text-gray-300">Connect on WhatsApp</label>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#e35c26] text-white font-bold py-3 px-4 rounded-2xl focus:outline-none focus:shadow-outline transition duration-150"
              >
                Submit Enquiry
              </button>
              
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;