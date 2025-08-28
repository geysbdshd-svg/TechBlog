import React from 'react';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      icon: Users,
      value: '50K+',
      label: 'Monthly Readers',
      description: 'Tech enthusiasts trust our content',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      value: '500+',
      label: 'Articles Published',
      description: 'In-depth tech articles and tutorials',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Industry Awards',
      description: 'Recognized for quality content',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: TrendingUp,
      value: '95%',
      label: 'Satisfaction Rate',
      description: 'Readers love our insights',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const Counter: React.FC<{ value: string; inView: boolean }> = ({ value, inView }) => {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="text-3xl md:text-4xl font-bold"
      >
        {value}
      </motion.span>
    );
  };

  return (
    <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join thousands of tech enthusiasts who trust TechBlog for their daily dose of technology insights
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-white/20 to-white/0 group-hover:animate-pulse" />
              </div>
              
              <div className="mb-2">
                <Counter value={stat.value} inView={inView} />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-100 mb-2">
                {stat.label}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">
            Ready to join our growing community of tech enthusiasts?
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Reading Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
