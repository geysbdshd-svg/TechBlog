import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About TechBlog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are passionate about technology and committed to bringing you the latest insights, 
            news, and tutorials from the ever-evolving world of tech.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At TechBlog, our mission is to democratize technology knowledge by making complex 
              concepts accessible to everyone. We believe that technology should empower people, 
              and we strive to be the bridge between cutting-edge innovations and practical applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Whether you're a seasoned developer, a tech enthusiast, or someone just starting 
              their journey in the digital world, we have content tailored for you.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
            <img
              src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/500x400/3b82f6/ffffff?text=Our+Mission"
              alt="Our Mission"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600 dark:text-blue-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Community First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in building a strong community of tech enthusiasts who learn 
                and grow together.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-green-600 dark:text-green-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quality Content</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Every article is thoroughly researched and fact-checked to ensure 
                accuracy and reliability.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 dark:bg-yellow-900/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-yellow-600 dark:text-yellow-400" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We stay ahead of trends and emerging technologies to bring you 
                the latest insights.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/150x150/3b82f6/ffffff?text=JD"
                alt="John Doe"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">John Doe</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Editor-in-Chief</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                With 10+ years in tech journalism, John leads our editorial team 
                and ensures content quality.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/150x150/10b981/ffffff?text=JS"
                alt="Jane Smith"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Jane Smith</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Senior Writer</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Jane specializes in web development and emerging technologies, 
                bringing complex topics to life.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/150x150/f59e0b/ffffff?text=MJ"
                alt="Mike Johnson"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Mike Johnson</h3>
              <p className="text-blue-600 dark:text-blue-400 mb-2">Security Expert</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Mike covers cybersecurity trends and provides insights on 
                protecting digital assets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
