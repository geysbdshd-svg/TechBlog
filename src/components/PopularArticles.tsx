import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Eye, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

const PopularArticles: React.FC = () => {
  const popularArticles = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in 2025",
      views: "15.2k",
      readTime: "5 min",
      author: "John Doe",
      trend: "+125%",
      category: "AI",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/3b82f6/ffffff?text=AI+Future"
    },
    {
      id: 2,
      title: "Web Development Trends You Need to Know",
      views: "12.8k",
      readTime: "7 min",
      author: "Jane Smith",
      trend: "+89%",
      category: "Web Dev",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/10b981/ffffff?text=Web+Dev"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for 2025",
      views: "10.5k",
      readTime: "6 min",
      author: "Mike Johnson",
      trend: "+67%",
      category: "Security",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/f59e0b/ffffff?text=Security"
    },
    {
      id: 4,
      title: "Cloud Computing Revolution",
      views: "8.9k",
      readTime: "8 min",
      author: "Sarah Wilson",
      trend: "+45%",
      category: "Cloud",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/300x200/8b5cf6/ffffff?text=Cloud"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center mb-4">
            <TrendingUp className="text-orange-500 mr-2" size={28} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Trending Articles
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover the most popular and trending articles loved by our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularArticles.map((article, index) => (
            <motion.article
              key={article.id}
              className="bg-white dark:bg-gray-800/50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 dark:bg-gray-900/70 backdrop-blur-sm text-gray-800 dark:text-gray-200 text-xs font-semibold px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                    <TrendingUp size={12} className="mr-1" />
                    {article.trend}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent h-16"></div>
              </div>

              <div className="p-4">
                <Link to={`/article/${article.id}`}>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {article.title}
                  </h3>
                </Link>

                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center">
                    <User size={12} className="mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Clock size={12} className="mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <Eye size={14} className="mr-1" />
                    {article.views} views
                  </div>
                  <Link
                    to={`/article/${article.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Explore All Articles
            <TrendingUp className="ml-2" size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularArticles;
