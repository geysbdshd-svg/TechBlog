import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, User, Star, Zap, Users, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';
import PopularArticles from '../components/PopularArticles';
import StatsSection from '../components/StatsSection';
import NewsletterModal from '../components/NewsletterModal';

const Home: React.FC = () => {
  const featuredArticles = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in 2025",
      excerpt: "Explore the latest developments in AI technology and how they will shape our future in unprecedented ways.",
      author: "John Doe",
      date: "January 15, 2025",
      readTime: "5 min read",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/3b82f6/ffffff?text=AI+Future",
      featured: true,
      rating: 4.9
    },
    {
      id: 2,
      title: "Web Development Trends You Need to Know",
      excerpt: "Stay ahead of the curve with these emerging web development trends and technologies.",
      author: "Jane Smith",
      date: "January 12, 2025",
      readTime: "7 min read",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/10b981/ffffff?text=Web+Dev",
      rating: 4.8
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Protect your business with these essential cybersecurity measures and cutting-edge tools.",
      author: "Mike Johnson",
      date: "January 10, 2025",
      readTime: "6 min read",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/f59e0b/ffffff?text=Security",
      rating: 4.7
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Latest Tech News",
      description: "Stay updated with breaking news from the tech industry",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: BookOpen,
      title: "In-depth Tutorials",
      description: "Learn with comprehensive guides and step-by-step tutorials",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Users,
      title: "Expert Insights",
      description: "Get perspectives from industry leaders and experts",
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <div className="pt-16">
      <NewsletterModal />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-20 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Star className="text-yellow-400 mr-2" size={16} />
                <span className="text-sm">Trusted by 50,000+ Tech Enthusiasts</span>
              </motion.div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block">Welcome to</span>
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  TechBlog
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Your ultimate source for the latest technology news, in-depth tutorials, and expert insights. 
                Join our community of forward-thinking tech enthusiasts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/blog"
                    className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
                  >
                    Explore Articles
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/about"
                    className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-blue-200">
                <div className="flex items-center">
                  <Star className="text-yellow-400 mr-1" size={16} />
                  <span className="text-sm">4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users className="mr-1" size={16} />
                  <span className="text-sm">50k+ Readers</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="mr-1" size={16} />
                  <span className="text-sm">500+ Articles</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose TechBlog?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive coverage of the technology industry with unmatched quality and depth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover our most popular and trending technology articles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Main Featured Article */}
            <motion.article
              className="lg:row-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative">
                  <img
                    src={featuredArticles[0].image}
                    alt={featuredArticles[0].title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                    <Star className="text-yellow-400 mr-1" size={14} />
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{featuredArticles[0].rating}</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                    {featuredArticles[0].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                    {featuredArticles[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-6">
                    <div className="flex items-center">
                      <User size={16} className="mr-1" />
                      {featuredArticles[0].author}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-1" />
                      {featuredArticles[0].readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{featuredArticles[0].date}</span>
                    <Link
                      to={`/article/${featuredArticles[0].id}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Side Articles */}
            <div className="space-y-6">
              {featuredArticles.slice(1).map((article, index) => (
                <motion.article
                  key={article.id}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-32 h-32 object-cover"
                    />
                    <div className="p-6 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Star className="text-yellow-400 mr-1" size={14} />
                          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{article.rating}</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{article.readTime}</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 dark:text-gray-400">{article.author}</span>
                        <Link
                          to={`/article/${article.id}`}
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Popular Articles Component */}
      <PopularArticles />

      {/* Stats Section Component */}
      <StatsSection />

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Dive Deeper?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join our community of tech enthusiasts and get access to exclusive content, early article access, and expert insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/blog"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg"
                >
                  Start Reading
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
                >
                  Learn About Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
