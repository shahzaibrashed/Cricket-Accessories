
const ConatctFaq = () => {
  return (
     <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: 'Do you offer international shipping?',
                answer: 'Yes, we ship to over 40 countries worldwide. Shipping costs and delivery times vary by location.'
              },
              {
                question: 'What is your return policy?',
                answer: 'We offer a 30-day return policy for all unused items in original packaging. Custom orders may have different terms.'
              },
              {
                question: 'Do you offer bulk discounts for teams?',
                answer: 'Yes, we provide special pricing for team orders. Contact us for a custom quote based on your requirements.'
              },
              {
                question: 'How do I choose the right bat size?',
                answer: 'Bat selection depends on your height, playing style, and personal preference. Our experts can help you choose the perfect bat.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default ConatctFaq