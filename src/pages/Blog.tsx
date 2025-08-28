import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in 2025",
      excerpt: "Explore the latest developments in AI technology and how they will shape our future. From machine learning breakthroughs to ethical considerations.",
      author: "John Doe",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Artificial Intelligence",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x300/3b82f6/ffffff?text=AI+Future"
    },
    {
      id: 2,
      title: "Web Development Trends You Need to Know",
      excerpt: "Stay ahead of the curve with these emerging web development trends and technologies that are reshaping the industry.",
      author: "Jane Smith",
      date: "January 12, 2025",
      readTime: "7 min read",
      category: "Web Development",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x300/10b981/ffffff?text=Web+Dev"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Small Businesses",
      excerpt: "Protect your business with these essential cybersecurity measures and tools. A comprehensive guide to staying secure online.",
      author: "Mike Johnson",
      date: "January 10, 2025",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x300/f59e0b/ffffff?text=Security"
    },
    {
      id: 4,
      title: "Cloud Computing: A Beginner's Guide",
      excerpt: "Understanding cloud computing fundamentals and how it can benefit your business. Everything you need to know to get started.",
      author: "Sarah Wilson",
      date: "January 8, 2025",
      readTime: "8 min read",
      category: "Cloud Computing",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x300/8b5cf6/ffffff?text=Cloud"
    },
    {
      id: 5,
      title: "Mobile App Development in 2025",
      excerpt: "The latest trends and technologies in mobile app development. From React Native to Flutter and beyond.",
      author: "David Chen",
      date: "January 5, 2025",
      readTime: "9 min read",
      category: "Mobile Development",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x300/ef4444/ffffff?text=Mobile"
    },
    {
      id: 6,
      title: "The Rise of Quantum Computing",
      excerpt: "Quantum computing is no longer science fiction. Learn about recent breakthroughs and what they mean for the future.",
      author: "Dr. Emily Brown",
      date: "January 3, 2025",
      readTime: "10 min read",
      category: "Quantum Computing",
      image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x300/06b6d4/ffffff?text=Quantum"
    }
  ];

  const categories = [
    "All",
    "Artificial Intelligence",
    "Web Development",
    "Cybersecurity",
    "Cloud Computing",
    "Mobile Development",
    "Quantum Computing"
  ];

  return (
    <div className="py-16 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Tech Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the latest insights, tutorials, and news from the world of technology. 
            Stay informed and ahead of the curve.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <Link to={`/article/${article.id}`}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                />
              </Link>
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-semibold px-2.5 py-0.5 rounded">
                    {article.category}
                  </span>
                </div>
                <Link to={`/article/${article.id}`}>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <User size={16} className="mr-1" />
                    {article.author}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">{article.date}</span>
                  <Link
                    to={`/article/${article.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
