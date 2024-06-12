import React from "react";
import Link from "next/link";
import Image from "next/image";

const BlogCard: React.FC = () => {
  // Array containing blog post data
  const blogPosts = [
    {
      imageUrl: "/images/blog-image/blog-image1.jpeg",
      author: "Priya Patel",
      date: "July 10, 2023",
      title: "सोशल मीडिया एंगेजमेंट की शक्ति को अनलॉक करना",
      excerpt: "जीवन रक्षक फाउंडेशन के बारे में जो बात मुझे सबसे ज्यादा प्रभावित करती है, वह है इसके संस्थापकों का जुनून और प्रतिबद्धता, जो दान प्रक्रिया को आसान बनाने के लिए है। उन्हें समस्या की गहरी समझ है और उन्होंने इससे भी बेहतर समाधान तैयार किया है।",
    },
    {
      imageUrl: "/images/blog-image/blog-image2.jpg",
      author: "Rahul Sharma",
      date: "July 12, 2023",
      title: "स्वास्थ्य",
      excerpt: "भारत में सेवियर फाउंडेशन फॉर हेल्थकेयर निम्न-आय और वंचित समुदायों के कल्याण को बेहतर बनाने के लक्ष्य के साथ स्वास्थ्य सहायता कार्यक्रमों की एक विस्तृत श्रृंखला प्रदान करता है। ये कार्यक्रम मूल स्वास्थ्य सेवाओं की पहुंच के बिना रहने वालों को आवश्यक चिकित्सा सेवाएं प्रदान करने पर ध्यान केंद्रित करते हैं। फाउंडेशन विभिन्न पहलों को निधि प्रदान करता है, जिसमें रक्तदान अभियान, स्वास्थ्य जागरूकता शिविर, टीकाकरण कार्यक्रम और स्वास्थ्य केंद्र शामिल हैं।",


    },
    {
      imageUrl: "/images/blog-image/blog-image3.jpg",
      author: "Neha Gupta",
      date: "July 11, 2023",
      title: "बाल श्रम के खिलाफ कार्यक्रम",
      excerpt: "बाल श्रम कार्यक्रम व्यापक पहलें और क्रियाएँ हैं जो बाल श्रम के व्यापक मुद्दे से निपटने के लिए बनाई गई हैं। बाल श्रम, बच्चों के अधिकारों का गंभीर उल्लंघन है, जिसमें बच्चों को ऐसे कार्यों में संलग्न किया जाता है जो उनके शारीरिक और मानसिक विकास के लिए हानिकारक होते हैं और उनकी शिक्षा तक पहुँच को बाधित करते हैं।",
    },
    {
      imageUrl: "/images/blog-image/blog-image4.jpeg",
      author: "Priya Patel",
      date: "July 10, 2023",
      title: "शिक्षा ",
      excerpt: "शिक्षा कार्यक्रम, जैसा कि सेवियर फाउंडेशन द्वारा प्रोत्साहित किया गया है, शिक्षा और साक्षरता के महत्वपूर्ण मुद्दे का समाधान करने के लिए समर्पित प्रयास हैं। भारत में शिक्षा और साक्षरता की कमी के साथ, युवा और बच्चों के लिए एक किरण की तरह होने के बावजूद, साक्षरता के मुद्दे का सामना करता है। सेवियर फाउंडेशन, बच्चों की शिक्षा के लिए एक प्रमुख एनजीओ के रूप में मान्यता प्राप्त है, संघर्षरत है कि सार्वभौमिक शिक्षा के सपने को वास्तविकता बनाने का प्रयास करें।",
    },
    {
      imageUrl: "/images/blog-image/blog-image5.jpg",
      author: "Rahul Sharma",
      date: "July 12, 2023",
      title: "रोजगार",
      excerpt: "सेवियर फाउंडेशन को यह मान्यता है कि समस्या को जड़ से पकड़ा जाना चाहिए। ग्रामीण और शहरी कामकाजी जनसंख्या को रोजगार पहुंचाने के लिए एक प्रमुख प्रतिबद्धता है इस एनजीओ की। हम उन्हें समर्थन प्रदान करने के लिए प्रयासरत हैं जो बेरोजगारों के लिए आवास और महत्वपूर्ण नौकरियां हैं, और न केवल उनका आय समानता है, बल्कि उन्हें सामग्री निरपेक्षता भी प्राप्त हो।",},
    {
      imageUrl: "/images/blog-image/blog-image6.jpeg",
      author: "Neha Gupta",
      date: "July 11, 2023",
      title: "बेटी बचाओ, बेटी पढ़ाओ",
      excerpt: "'बेटी बचाओ, बेटी पढ़ाओ' भारत सरकार की प्रमुख पहल है जिसका उद्देश्य लड़कियों के लिए जागरूकता बढ़ाना और कल्याण सेवाओं की क्षमता को बढ़ाना है। इस कार्यक्रम का उद्देश्य लड़कियों को उच्च शिक्षा के लिए अवसर प्राप्त करने में आने वाली चुनौतियों का सामना करना है और विशेषकर सामाजिक प्रतिबंधों के मुख्य आगे बढ़ने के कारणों को समाधान करना है।",
    },
    // {
    //   imageUrl: "/images/blog-image/blog-image7.jpg",
    //   author: "Priya Patel",
    //   date: "July 10, 2023",
    //   title: "Building Brand Authority Through Thought Leadership",
    //   excerpt: "Discover strategies for establishing your brand as a trusted authority in your industry through thought leadership.",
    // },
    // {
    //   imageUrl: "/images/blog-image/blog-image8.jpg",
    //   author: "Rahul Sharma",
    //   date: "July 12, 2023",
    //   title: "The Future of E-Commerce: Trends to Watch",
    //   excerpt: "Explore emerging trends and innovations shaping the future of e-commerce and how businesses can adapt to stay ahead.",
    // },
    // {
    //   imageUrl: "/images/blog-image/blog-image9.jpg",
    //   author: "Neha Gupta",
    //   date: "July 11, 2023",
    //   title: "Personalization: Tailoring Experiences for Success",
    //   excerpt: "Learn how personalized marketing experiences can drive customer engagement, satisfaction, and loyalty.",
    // },
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
