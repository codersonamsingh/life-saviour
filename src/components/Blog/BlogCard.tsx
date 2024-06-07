import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard: React.FC = () => {
  // Array containing blog post data
  const blogPosts = [
    {
      imageUrl: "/images/blog-image/blog-image1.jpg",
      author: "Priya Patel",
      date: "July 10, 2023",
      title: "Unlocking the Power of Social Media Engagement",
      excerpt: "Discover effective strategies for enhancing social media engagement and building a loyal community around your brand.",
    },
    {
      imageUrl: "/images/blog-image/blog-image2.jpg",
      author: "Rahul Sharma",
      date: "July 12, 2023",
      title: "The Art of Persuasive Copywriting",
      excerpt: "Learn the secrets behind crafting compelling copy that resonates with your audience and drives conversions.",
    },
    {
      imageUrl: "/images/blog-image/blog-image3.jpg",
      author: "Neha Gupta",
      date: "July 11, 2023",
      title: "Harnessing the Power of Video Marketing",
      excerpt: "Explore the impact of video marketing on brand visibility and engagement, along with practical tips for implementation.",
    },
    {
      imageUrl: "/images/blog-image/blog-image4.jpg",
      author: "Priya Patel",
      date: "July 10, 2023",
      title: "Innovative Solutions for Business Growth",
      excerpt: "Discover innovative approaches and creative solutions to propel your business to new heights of success.",
    },
    {
      imageUrl: "/images/blog-image/blog-image5.jpg",
      author: "Rahul Sharma",
      date: "July 12, 2023",
      title: "Human-Centric Design in the Digital Age",
      excerpt: "Explore the importance of human-centric design principles in creating meaningful digital experiences for users.",
    },
    {
      imageUrl: "/images/blog-image/blog-image6.jpg",
      author: "Neha Gupta",
      date: "July 11, 2023",
      title: "The Power of Storytelling in Marketing",
      excerpt: "Learn how storytelling can captivate audiences, evoke emotions, and drive brand affinity and loyalty.",
    },
    {
      imageUrl: "/images/blog-image/blog-image7.jpg",
      author: "Priya Patel",
      date: "July 10, 2023",
      title: "Building Brand Authority Through Thought Leadership",
      excerpt: "Discover strategies for establishing your brand as a trusted authority in your industry through thought leadership.",
    },
    {
      imageUrl: "/images/blog-image/blog-image8.jpg",
      author: "Rahul Sharma",
      date: "July 12, 2023",
      title: "The Future of E-Commerce: Trends to Watch",
      excerpt: "Explore emerging trends and innovations shaping the future of e-commerce and how businesses can adapt to stay ahead.",
    },
    {
      imageUrl: "/images/blog-image/blog-image9.jpg",
      author: "Neha Gupta",
      date: "July 11, 2023",
      title: "Personalization: Tailoring Experiences for Success",
      excerpt: "Learn how personalized marketing experiences can drive customer engagement, satisfaction, and loyalty.",
    },
  ];


  return (
    <>
      <div className="blog-area blog-ptb-100">
        <div className="container">
          <div className="row">
            {/* Map through blogPosts array to render blog cards */}
            {blogPosts.map((post, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="single-blog-post">
                  <div className="post-image">
                    <Link href="/blog/details">
                      <Image
                        src={post.imageUrl}
                        alt="image"
                        width={860}
                        height={700}
                      />
                    </Link>
                  </div>
                  <div className="post-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          By: <Link href="/blog">{post.author}</Link>
                        </li>
                        <li>{post.date}</li>
                      </ul>
                    </div>
                    <h3>
                      <Link href="/blog/details">{post.title}</Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <Link href="/blog/details" className="read-more-btn">
                      Read More <i className="flaticon-right-arrow"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            {/* End of mapped blog posts */}
            {/* Pagination  */}
            <div className="col-lg-12 col-md-12">
              <div className="pagination-area">
                <Link href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </Link>
                <Link href="#" className="page-numbers">
                  1
                </Link>
                <span className="page-numbers current" aria-current="page">
                  2
                </span>
                <Link href="#" className="page-numbers">
                  3
                </Link>
                <Link href="#" className="page-numbers">
                  4
                </Link>
                <Link href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </Link>
              </div>
            </div>
            {/* End Pagination  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
