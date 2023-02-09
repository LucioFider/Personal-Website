import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: " Improved User Experience",
    content:
      "A well-designed website with a clean and intuitive interface can provide a better user experience, making it easier for visitors to find the information they need, navigate the site, and engage with its content. This can lead to increased engagement, higher levels of customer satisfaction, and increased conversions.",
  },

  {
    id: "feature-2",
    icon: shield,
    title: "Enhanced Brand Image",
    content:
      "A well-designed website can help to establish a strong brand image and reinforce your company's values and message. It can also help to create a professional and trustworthy image, which can be essential in building credibility and attracting new customers.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Increased Online Visibility",
    content:
      "A well-optimized website with effective search engine optimization (SEO) strategies can increase your online visibility and help you rank higher in search engine results pages (SERPs). This can result in increased traffic to your site and more opportunities to engage with your target audience. In addition, having a responsive and mobile-friendly website can help to ensure that your site is accessible to a wider audience, including those who access the internet primarily via mobile devices.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Web Development",
    value: "I do",
  },
  {
    id: "stats-2",
    title: "App Development",
    value: "&",
  },
  {
    id: "stats-3",
    title: "E-Commerce Solutions",
    value: "+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const pricingPlans = [
  {
    title: "Personal sites",
    price: 500,
    currency: "PGK",
    frequency: "One-off payment",
    description: "Portfolio websites for Professionels",
    fetaures: [
      "Elegant Design",
      "1-3 pages",
      "Links to Networking sites",
      "12-months support",
    ],
    cta: "Get Started",
    mostPopular: false,
  },
  {
    title: "Business sites",
    price: 1500,
    currency: "PGK",
    frequency: "One-off payment",
    description: "Business website for Companies",
    fetaures: [
      "Elegant Design",
      "5-6 pages",
      "1-page-Shop",
      "12-months support",
      "Marketing Automations",
    ],
    cta: "Get Started",
    mostPopular: true,
  },
  {
    title: "E-Commerce sites",
    price: 2500,
    currency: "PGK",
    frequency: "One-off payment",
    description: "E-Commerce sites for business",
    fetaures: [
      "Elegant Design",
      "All-E-commerce features",
      "Advanced Analytics",
      "12-months support",
      "Marketing Automations",
    ],
    cta: "Get Started",
    mostPopular: false,
  },
];
