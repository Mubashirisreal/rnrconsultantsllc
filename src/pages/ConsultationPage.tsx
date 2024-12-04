import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Phone, Clock } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import { sendEmail } from '../utils/emailjs';

function ConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', project: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center text-secondary hover:text-secondary/80 transition-colors mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          <span className="font-regular">Back to Home</span>
        </Link>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <h1 className="text-3xl font-medium text-gray-900 mb-6">Drop us a line today and let's get talking</h1>
            <p className="text-gray-600 mb-8 font-regular">
              We're a 100% digital company with a permanently distributed team. We deliver to clients globally with a focus on innovative solutions.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Company Email*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">Project Summary*</label>
                <textarea
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-white py-3 rounded-lg font-regular hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Let\'s Talk'}
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Frequently asked questions</h2>
              
              <div className="space-y-4">
                <details className="bg-white p-6 rounded-lg shadow-lg">
                  <summary className="font-medium text-gray-900 cursor-pointer">What is your turnaround time?</summary>
                  <p className="mt-4 text-gray-600 font-regular">
                    Our standard turnaround time is 2-4 business days. However, this may vary depending on the complexity of the requirements.
                  </p>
                </details>
                
                <details className="bg-white p-6 rounded-lg shadow-lg">
                  <summary className="font-medium text-gray-900 cursor-pointer">Where are you located?</summary>
                  <p className="mt-4 text-gray-600 font-regular">
                    We are a USA-based consultancy with consultants strategically located in the USA, the Middle East, India, and the United Kingdom to cater to our global clientele.
                  </p>
                </details>
                
                <details className="bg-white p-6 rounded-lg shadow-lg">
                  <summary className="font-medium text-gray-900 cursor-pointer">Do you provide country-specific contract advisory?</summary>
                  <p className="mt-4 text-gray-600 font-regular">
                    Yes, we specialize in providing jurisdiction-specific contract advisory services. Our team includes experts from various jurisdictions to ensure you receive precise and relevant advice tailored to your location.
                  </p>
                </details>

                <details className="bg-white p-6 rounded-lg shadow-lg">
                  <summary className="font-medium text-gray-900 cursor-pointer">What are your charges?</summary>
                  <p className="mt-4 text-gray-600 font-regular">
                    Our charges are tailored to the specific requirements of each project. Please feel free to share your details at info@rnrconsultantsllc.com, and we will provide a customized quote.
                  </p>
                </details>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary mr-3" />
                  <span className="font-regular">info@rnrconsultantsllc.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary mr-3" />
                  <span className="font-regular">+966 54 201 1222</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-secondary mr-3" />
                  <span className="font-regular">Monday – Friday, 9:00 AM – 6:00 PM (Local Time)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ConsultationPage;