import React from 'react'
const testimonials = [
    {
      id: 1,
      name: "Alice Smith",
      title: "Chemist at ABC Labs",
      feedback: "Using these products has significantly improved the efficiency of our experiments. Highly recommended!",
      image: "https://jmindustry.in/wp-content/uploads/2022/09/RAVEENA-e1664271260399.jpg"
    },
    {
      id: 2,
      name: "Bob Johnson",
      title: "Researcher at XYZ Corp",
      feedback: "The chemical quality is top-notch, leading to consistent results in our tests.",
      image: "https://img.freepik.com/free-photo/smiley-man-posing-indoors-front-view_23-2149883560.jpg?ga=GA1.1.672306854.1705143941&semt=ais_hybrid"
    },
    {
      id: 3,
      name: "Carol White",
      title: "Lab Technician at 123 Inc",
      feedback: "Excellent customer service and reliable products. We are very satisfied.",
      image: "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393647.jpg?ga=GA1.1.672306854.1705143941&semt=ais_hybrid"
    },
    {
      id: 4,
      name: "David Brown",
      title: "Professor at University",
      feedback: "Our students have benefited greatly from using these chemicals in their experiments.",
      image: "https://img.freepik.com/premium-photo/business-woman-103_1173594-1783.jpg?ga=GA1.1.672306854.1705143941&semt=ais_hybrid"
    },
  ];

function Testinomial() {
  return (
    <div className='bg-gray-100'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
      <h2 className="text-xl md:text-3xl font-extrabold text-gray-900 mb-8 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="bg-white shadow-md rounded-lg p-6">
            <div className="flex items-center mb-4">
              <img className="w-16 h-16 rounded-full border-2 border-blue-500" src={testimonial.image} alt={testimonial.name} />
              <div className="ml-4">
                <p className="text-xl font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
            <p className="text-gray-600">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Testinomial
