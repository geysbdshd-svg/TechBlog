import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, Calendar, ArrowLeft, Share2, Bookmark, ThumbsUp, Eye, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollProgressBar from '../components/ScrollProgressBar';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(127);
  const [isLiked, setIsLiked] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(progress);
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Sample article data
  const article = {
    id: 1,
    title: "The Future of Artificial Intelligence in 2025",
    excerpt: "Explore the latest developments in AI technology and how they will shape our future.",
    content: `
      <p>Artificial Intelligence continues to evolve at an unprecedented pace, and 2025 promises to be a landmark year for AI development. From revolutionary breakthroughs in machine learning to practical applications that will transform industries, we're witnessing a technological renaissance that will reshape our world.</p>

      <h2>Key Developments to Watch</h2>
      
      <p>The landscape of AI is rapidly changing, with several key areas showing remarkable progress. Machine learning algorithms are becoming more sophisticated, natural language processing is reaching new heights of accuracy, and computer vision systems are achieving human-level performance in many tasks.</p>

      <h3>Generative AI Revolution</h3>
      
      <p>Generative AI has captured global attention with its ability to create human-like text, images, and even code. This technology is not just a novelty; it's becoming an essential tool for businesses across various sectors. From content creation to software development, generative AI is automating tasks that were previously thought to require human creativity and intelligence.</p>

      <p>The implications are far-reaching. Creative industries are seeing new forms of collaboration between humans and AI, while businesses are finding innovative ways to leverage these tools for competitive advantage. However, this rapid advancement also raises important questions about authenticity, intellectual property, and the future of creative work.</p>

      <h3>AI in Healthcare</h3>
      
      <p>Perhaps nowhere is AI's potential more promising than in healthcare. Machine learning algorithms are now capable of diagnosing diseases with accuracy that matches or exceeds human specialists. From analyzing medical images to predicting patient outcomes, AI is becoming an invaluable partner in medical practice.</p>

      <p>Drug discovery, traditionally a process that takes decades and billions of dollars, is being accelerated through AI-powered research. Companies are using machine learning to identify potential drug compounds, predict their effectiveness, and optimize clinical trials. This could lead to faster development of life-saving treatments.</p>

      <h2>Challenges and Considerations</h2>
      
      <p>While the potential of AI is enormous, we must also address the challenges it presents. Ethical considerations around bias, privacy, and transparency are becoming increasingly important as AI systems become more prevalent in decision-making processes that affect people's lives.</p>

      <h3>The Need for Responsible AI</h3>
      
      <p>As AI systems become more powerful and widespread, the need for responsible development and deployment becomes critical. This includes ensuring fairness and avoiding bias in AI algorithms, protecting user privacy, and maintaining transparency in how AI systems make decisions.</p>

      <p>Organizations worldwide are developing frameworks and guidelines for ethical AI development. These efforts aim to harness the benefits of AI while minimizing potential risks and ensuring that the technology serves humanity's best interests.</p>

      <h2>Looking Ahead</h2>
      
      <p>The future of AI in 2025 and beyond looks incredibly promising. We can expect to see more sophisticated AI systems that can reason, learn, and adapt in ways that are increasingly similar to human intelligence. However, this progress will require continued collaboration between technologists, ethicists, policymakers, and society as a whole.</p>

      <p>As we stand on the brink of this AI revolution, it's clear that the decisions we make today about how we develop and deploy these technologies will shape the world of tomorrow. By embracing the potential of AI while remaining mindful of its challenges, we can work toward a future where artificial intelligence truly serves to enhance human capabilities and improve lives worldwide.</p>
    `,
    author: "John Doe",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Artificial Intelligence",
    image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/800x400/3b82f6/ffffff?text=AI+Future",
    tags: ["AI", "Machine Learning", "Technology", "Future", "Innovation"],
    views: "15.2k",
    commentsCount: 42
  };

  const relatedArticles = [
    {
      id: 2,
      title: "Web Development Trends You Need to Know",
      excerpt: "Stay ahead of the curve with these emerging web development trends...",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x200/10b981/ffffff?text=Web+Dev",
      readTime: "7 min read",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Protect your business with these essential cybersecurity measures...",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x200/f59e0b/ffffff?text=Security",
      readTime: "6 min read",
      category: "Cybersecurity"
    },
    {
      id: 4,
      title: "The Rise of Quantum Computing",
      excerpt: "Quantum computing is revolutionizing how we process information...",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x200/8b5cf6/ffffff?text=Quantum",
      readTime: "8 min read",
      category: "Quantum Computing"
    }
  ];

  return (
    <div className="pt-16 dark:bg-gray-900">
      <ScrollProgressBar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-16">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-semibold px-3 py-1 rounded-full">
              {article.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center">
              <User size={20} className="mr-2" />
              <span>By {article.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={20} className="mr-2" />
              <span>{article.date}</span>
            </div>
            <div className="flex items-center">
              <Clock size={20} className="mr-2" />
              <span>{article.readTime}</span>
            </div>
            <div className="flex items-center">
              <Eye size={20} className="mr-2" />
              <span>{article.views} views</span>
            </div>
          </div>

          {/* Tags and Actions */}
          <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center gap-3">
              <motion.button
                onClick={handleLike}
                className={`flex items-center px-4 py-2 rounded-full transition-colors duration-200 ${
                  isLiked 
                    ? 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ThumbsUp size={18} className="mr-2" />
                {likes}
              </motion.button>
              
              <motion.button
                onClick={handleBookmark}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isBookmarked 
                    ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400' 
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bookmark size={18} />
              </motion.button>
              
              <motion.button
                onClick={handleShare}
                className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 size={18} />
              </motion.button>
            </div>
          </div>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Article Content */}
        <motion.div
          className="prose prose-lg dark:prose-invert max-w-none mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </motion.div>

        {/* Article Footer */}
        <motion.footer
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800/50 rounded-xl p-6">
            <div className="flex items-start">
              <img
                src="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/80x80/3b82f6/ffffff?text=JD"
                alt={article.author}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  About {article.author}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  John is a senior technology writer with over 10 years of experience covering 
                  artificial intelligence, machine learning, and emerging technologies. He holds 
                  a PhD in Computer Science and has worked with leading tech companies.
                </p>
                <div className="flex items-center gap-4">
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200">
                    Follow on Twitter
                  </button>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200">
                    Connect on LinkedIn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.footer>

        {/* Comments Section Placeholder */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Comments ({article.commentsCount})
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Comments are coming soon! For now, share your thoughts on social media.
            </p>
            <button
              onClick={handleShare}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Share This Article
            </button>
          </div>
        </motion.section>

        {/* Related Articles */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle, index) => (
              <motion.article
                key={relatedArticle.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={relatedArticle.image}
                  alt={relatedArticle.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded">
                      {relatedArticle.category}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                    {relatedArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">{relatedArticle.readTime}</span>
                    <Link
                      to={`/article/${relatedArticle.id}`}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-200 z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Article;
