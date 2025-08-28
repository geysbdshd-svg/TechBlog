import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="py-16 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: January 15, 2025
          </p>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-8">
            <p className="text-blue-800 dark:text-blue-200 mb-0">
              At TechBlog, we are committed to protecting your privacy and ensuring the security 
              of your personal information. This privacy policy explains how we collect, use, 
              and protect your data.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="mb-4">1. Information We Collect</h2>
            
            <h3 className="mb-3">Personal Information</h3>
            <p className="mb-4">
              We may collect the following personal information when you interact with our website:
            </p>
            <ul className="pl-6 mb-6">
              <li>Name and email address (when you contact us or subscribe to our newsletter)</li>
              <li>Comments and feedback you provide</li>
              <li>Any other information you voluntarily provide</li>
            </ul>

            <h3 className="mb-3">Automatically Collected Information</h3>
            <p className="mb-4">
              We automatically collect certain information when you visit our website:
            </p>
            <ul className="pl-6 mb-6">
              <li>IP address and browser information</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
              <li>Device and operating system information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the collected information for the following purposes:
            </p>
            <ul className="pl-6 mb-6">
              <li>To provide and improve our content and services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send newsletters and updates (with your consent)</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To prevent fraud and ensure website security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">3. Cookies and Tracking</h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to enhance your browsing experience:
            </p>
            <ul className="pl-6 mb-6">
              <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
              <li><strong>Advertising Cookies:</strong> Used to display relevant advertisements</li>
            </ul>
            <p className="mb-6">
              You can control cookie preferences through your browser settings. However, disabling 
              certain cookies may affect website functionality.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">4. Third-Party Services</h2>
            <p className="mb-4">
              We may use third-party services that collect information:
            </p>
            <ul className="pl-6 mb-6">
              <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
              <li><strong>Google AdSense:</strong> For displaying relevant advertisements</li>
              <li><strong>Email Service Providers:</strong> For sending newsletters and communications</li>
            </ul>
            <p className="mb-6">
              These services have their own privacy policies, and we encourage you to review them.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">5. Data Security</h2>
            <p className="mb-6">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">6. Your Rights</h2>
            <p className="mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="pl-6 mb-6">
              <li>Access: Request information about the data we hold about you</li>
              <li>Correction: Request correction of inaccurate or incomplete data</li>
              <li>Deletion: Request deletion of your personal information</li>
              <li>Objection: Object to processing of your personal information</li>
              <li>Portability: Request transfer of your data to another service</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">7. Children's Privacy</h2>
            <p className="mb-6">
              Our website is not intended for children under 13 years of age. We do not knowingly 
              collect personal information from children under 13. If you believe we have collected 
              information from a child under 13, please contact us immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">8. Changes to This Policy</h2>
            <p className="mb-6">
              We may update this privacy policy from time to time. We will notify you of any 
              significant changes by posting the new policy on this page and updating the 
              "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="mb-4">9. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our data practices, 
              please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 not-prose">
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Email:</strong> privacy@techblog.com</p>
              <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94102</p>
              <p className="text-gray-700 dark:text-gray-300"><strong>Phone:</strong> +1 (555) 123-4567</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
