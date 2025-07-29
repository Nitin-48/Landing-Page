import React from 'react'
import AppStore from '../assets/AppStore.jpeg'
import playStore from '../assets/playStore.jpg'
const LandingSections = () => {
  return (
    <div>
        <div className="space-y-24">

    

      2. Download / CTA
      <section id="download" className="px-4 py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Get the App</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-4">
          <a href="#" className="block">
            <img src={AppStore} alt="Download on the App Store" className="h-12 sm:h-14" />
          </a>
          <a href="#" className="block">
            <img src={playStore} alt="Get it on Google Play" className="h-12 sm:h-14" />
          </a>
        </div>
        <a
          href="#how-it-works"
          className="inline-block mt-4 text-indigo-600 font-medium hover:underline"
        >
          Learn More
        </a>
      </section>

      {/* 3. Blog / Resources
      <section id="blog" className="px-4 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Blog &amp; Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-semibold mb-2">Maximize Your Rewards</h3>
              <p className="text-gray-600 mb-4">Advanced strategies for stacking cashback, points &amp; bonuses.</p>
              <a href="#" className="text-indigo-600 hover:underline">Read More →</a>
            </article>
            <article className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-semibold mb-2">Spendiz Team Tips</h3>
              <p className="text-gray-600 mb-4">Insider hacks on rotating category offers &amp; minimum-spend tricks.</p>
              <a href="#" className="text-indigo-600 hover:underline">Read More →</a>
            </article>
            <article className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-semibold mb-2">Beginner’s Guide to Cards</h3>
              <p className="text-gray-600 mb-4">Everything you need to choose the right card for your lifestyle.</p>
              <a href="#" className="text-indigo-600 hover:underline">Read More →</a>
            </article>
          </div>
        </div>
      </section> */}

      {/* 4. About Us / Company
      <section id="about-company" className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Spendiz</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Founded by fintech veterans and data scientists, Spendiz exists to make credit-card rewards simple and transparent. Our mission is empowering you with clear, actionable insights so that every spend works harder for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="#team" className="text-indigo-600 hover:underline">Meet the Team</a>
            <a href="#press" className="text-indigo-600 hover:underline">Press &amp; Media Kit</a>
          </div>
        </div>
      </section> */}

      {/* 5. Contact / Support
      <section id="contact" className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contact &amp; Support</h2>
          <p className="text-gray-700 mb-4">Have questions or feedback? We’re here to help.</p>
          <p className="text-gray-700">
            Email: <a href="mailto:support@spendiz.com" className="text-indigo-600 hover:underline">support@spendiz.com</a>
          </p>
          <p className="text-gray-700 mt-2">
            Help Center: <a href="https://support.spendiz.com" className="text-indigo-600 hover:underline">support.spendiz.com</a>
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">LinkedIn</a>
            <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
          </div>
        </div>
      </section> */}

     
    </div>
  );
    </div>
  )
}

export default LandingSections

