
export type Project = {
  id: number;
  title: string;
  category: 'ui' | 'social' | 'logo' | 'wordpress' | 'product';
  image: string;
  description: string;
  link?: string;
  detailedDescription?: string;
  gallery?: string[];
  tools?: string[];
  duration?: string;
  client?: string;
};

export const projectsData: Project[] = [
  // UI Design - The Dopple
  {
    id: 1,
    title: "The Dopple Registry Desktop",
    category: "ui",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742333643/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/qz9vq7xhsel5e193fvp6.png",
    description: "Desktop UI design for The Dopple registry platform with intuitive navigation and modern aesthetics.",
    link: "https://thedopple.com",
    detailedDescription: "Designed and developed the desktop interface for The Dopple registry platform, focusing on creating an intuitive, user-friendly experience. The design incorporates modern aesthetics with a clean layout, making it easy for users to navigate and manage their registry items. Special attention was given to accessibility and responsive design principles.",
    gallery: [
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333644/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/xzntquhxwy10kb1mvlcw.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333643/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/dafbz7shwxqt6etc6vat.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333644/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/aadztrjl7svh55cgsjob.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333644/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/dzqr85zgnalkzgmn3gdt.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333643/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/qz9vq7xhsel5e193fvp6.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333643/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/ektgfwzn9kg6syxbss3k.png"
    ],
    tools: ["Figma", "Adobe XD", "Illustrator"],
    duration: "3 months",
    client: "The Dopple"
  },
  {
    id: 2,
    title: "The Dopple Style Guide",
    category: "ui",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742333490/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/sbc6t0lfnnar1xqjw2hg.png",
    description: "Comprehensive style guide defining visual elements and interaction patterns for The Dopple brand.",
    link: "https://thedopple.com",
    detailedDescription: "Developed a comprehensive style guide for The Dopple brand that defines all visual elements and interaction patterns. This guide ensures consistency across all digital touchpoints and provides a foundation for future design work. It includes typography, color palette, spacing systems, component libraries, and usage guidelines.",
    gallery: [
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333490/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/sbc6t0lfnnar1xqjw2hg.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333490/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/ijxi9dmpwa95x2r7g8hn.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333490/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/ayy45iuqgfkwhsvyebl8.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333490/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/quxznolna8q4mwss5hyy.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333489/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/tsvqcytrvbds5put6uwn.png"
    ],
    tools: ["Figma", "Sketch", "InDesign"],
    duration: "2 months",
    client: "The Dopple"
  },
  {
    id: 3,
    title: "The Dopple Dashboard",
    category: "ui",
    image: "https://res.cloudinary.com/diedxghax/image/upload/v1742333076/The%20Dopple%20Dashboard/cvz49dssanewj8inxf6m.png",
    description: "User-friendly dashboard design for The Dopple platform with data visualization and management tools.",
    link: "https://thedopple.com",
    detailedDescription: "Created a user-friendly dashboard for The Dopple platform featuring intuitive data visualization and management tools. The design prioritizes clear information hierarchy and easy access to key metrics, enabling users to efficiently monitor and manage their registry data. The dashboard incorporates responsive design principles to ensure a seamless experience across all device sizes.",
    gallery: [
      "https://res.cloudinary.com/diedxghax/image/upload/v1742333076/The%20Dopple%20Dashboard/cvz49dssanewj8inxf6m.png",
      "https://res.cloudinary.com/diedxghax/image/upload/v1742333075/The%20Dopple%20Dashboard/xpa8kbianfz0vmfqdjv1.png",
      "https://res.cloudinary.com/diedxghax/image/upload/v1742333075/The%20Dopple%20Dashboard/ulrmamwggrwvgxznsueh.png",
      "https://res.cloudinary.com/diedxghax/image/upload/v1742333075/The%20Dopple%20Dashboard/fczy70xsdcbm2iam7i2m.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333349/The%20Dopple%20Dashboard/Desktop/a7wl8ptvccapex1qb77o.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333349/The%20Dopple%20Dashboard/Desktop/tkps0lj1cmvsmoay6zxb.png"
    ],
    tools: ["Figma", "Framer", "Illustrator"],
    duration: "2.5 months",
    client: "The Dopple"
  },
  
  // UI Design - Mamas Uncut
  {
    id: 4,
    title: "Mamas Uncut UI",
    category: "ui",
    image: "https://raisingchildren.net.au/__data/assets/image/0024/47742/baby-behaviour-and-awareness.jpg",
    description: "Core UI design and improvements for the Mamas Uncut platform focusing on user experience.",
    link: "https://mamasuncut.com",
    detailedDescription: "Redesigned and improved the core UI for the Mamas Uncut platform with a focus on enhancing user experience. The design updates included a more intuitive navigation system, improved content layout, and optimized mobile responsiveness. These changes resulted in increased user engagement and time spent on the platform.",
    gallery: [
      "https://raisingchildren.net.au/__data/assets/image/0024/47742/baby-behaviour-and-awareness.jpg"
    ],
    tools: ["Figma", "Adobe XD", "Photoshop"],
    duration: "3 months",
    client: "Mamas Uncut LLC"
  },
  {
    id: 5,
    title: "Baby Name Generator",
    category: "ui",
    image: "https://raisingchildren.net.au/__data/assets/image/0024/47742/baby-behaviour-and-awareness.jpg",
    description: "Interactive baby name generator tool designed for the Mamas Uncut platform.",
    link: "https://mamasuncut.com",
    detailedDescription: "Designed and developed an interactive baby name generator tool for the Mamas Uncut platform. This feature allows users to discover and save baby names based on various filters such as origin, meaning, and popularity. The intuitive interface makes the name discovery process enjoyable and engaging for expectant parents.",
    gallery: [
      "https://raisingchildren.net.au/__data/assets/image/0024/47742/baby-behaviour-and-awareness.jpg"
    ],
    tools: ["Figma", "JavaScript", "React"],
    duration: "1.5 months",
    client: "Mamas Uncut LLC"
  },
  
  // Social Media
  {
    id: 6,
    title: "ESN CZU Prague Instagram",
    category: "social",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334616/Social%20Media/i0bbtwprdr16haewhnri.png",
    description: "Instagram post designs for ESN CZU Prague, featuring engaging visuals and event promotions.",
    link: "https://www.instagram.com/esnczu/",
    detailedDescription: "Created a series of engaging Instagram post designs for ESN CZU Prague that effectively promoted campus events and activities. The designs maintained consistent branding while incorporating creative visual elements to capture attention and drive engagement. Each post was optimized for Instagram's format and audience preferences.",
    gallery: [
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334616/Social%20Media/i0bbtwprdr16haewhnri.png"
    ],
    tools: ["Photoshop", "Illustrator", "Canva"],
    duration: "Ongoing",
    client: "ESN CZU Prague"
  },
  {
    id: 7,
    title: "Mamas Uncut Pinterest Pins",
    category: "social",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334036/Social%20Media/anhnaoo1gh94eqtpzdgj.png",
    description: "Pinterest pin designs for Mamas Uncut spanning a 2-year period, optimized for engagement and clicks.",
    link: "https://pinterest.com/mamasuncut",
    detailedDescription: "Designed over 1,000 Pinterest pins for Mamas Uncut over a two-year period. Each pin was strategically crafted to maximize engagement, click-through rates, and saves. The designs consistently adhered to brand guidelines while incorporating trending Pinterest aesthetic elements to ensure optimal platform performance.",
    gallery: [
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334036/Social%20Media/anhnaoo1gh94eqtpzdgj.png"
    ],
    tools: ["Photoshop", "Canva", "Illustrator"],
    duration: "2 years",
    client: "Mamas Uncut LLC"
  },
  {
    id: 8,
    title: "Freelance Pinterest Designs",
    category: "social",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334035/Social%20Media/obq8rxevxejvbolvysmh.png",
    description: "Collection of over 500 Pinterest pin designs created for various freelance clients.",
    detailedDescription: "Created a diverse collection of over 500 Pinterest pin designs for various freelance clients across multiple industries. Each design was customized to meet the specific brand identity and marketing objectives of the client while optimizing for Pinterest's algorithm and user engagement patterns.",
    gallery: [
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334036/Social%20Media/oeg6wu4zea4as6ye78in.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334036/Social%20Media/dstuui2xseyhqg267tz2.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334035/Social%20Media/fuxdmmxxmfg4qnxixclc.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334036/Social%20Media/cptb5pvps4xgunypqhrd.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334035/Social%20Media/obq8rxevxejvbolvysmh.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334034/Social%20Media/gbmqqoasr7aztx5zjrpm.png"
    ],
    tools: ["Photoshop", "Canva", "Illustrator"],
    duration: "Ongoing",
    client: "Various"
  },
  
  // Product Design
  {
    id: 9,
    title: "GBOrganics Shilajit Resin",
    category: "product",
    image: "https://cdn.britannica.com/74/114874-050-6E04C88C/North-Face-Mount-Everest-Tibet-Autonomous-Region.jpg",
    description: "Product design and packaging for GBOrganics.pk Shilajit resin product line.",
    link: "https://gborganics.pk",
    detailedDescription: "Designed product packaging and branding for GBOrganics.pk's Shilajit resin product line. The design emphasizes the natural origin and premium quality of the product through sophisticated typography and earthy color palettes. The packaging was optimized for both online presentation and physical shelf appeal.",
    gallery: [
      "https://cdn.britannica.com/74/114874-050-6E04C88C/North-Face-Mount-Everest-Tibet-Autonomous-Region.jpg"
    ],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    duration: "2 months",
    client: "GBOrganics.pk"
  },
  {
    id: 10,
    title: "Buckwheat Product Design",
    category: "product",
    image: "https://drhyman.com/cdn/shop/articles/AdobeStock_299261032-scaled.jpg?v=1714795523&width=1500",
    description: "Packaging and brand identity design for Buckwheat.pk products.",
    link: "https://buckwheat.pk",
    detailedDescription: "Created distinctive packaging and brand identity for Buckwheat.pk's product line. The design concept centered around communicating the health benefits and organic nature of the products through clean, modern aesthetics. The packaging design incorporates sustainable elements that align with the brand's eco-friendly values.",
    gallery: [
      "https://drhyman.com/cdn/shop/articles/AdobeStock_299261032-scaled.jpg?v=1714795523&width=1500"
    ],
    tools: ["Illustrator", "Photoshop", "Dimension"],
    duration: "1.5 months",
    client: "Buckwheat.pk"
  },
  {
    id: 11,
    title: "Hofo.pk Product Line",
    category: "product",
    image: "https://cdn.britannica.com/10/94510-050-D0B814DA/Machhapuchhare-Great-Himalaya-Range-Nepal.jpg",
    description: "Design for Hofo.pk product line including Shilajit, buckwheat, and other health products.",
    link: "https://hofo.pk",
    detailedDescription: "Developed cohesive design for Hofo.pk's complete product line, including Shilajit, buckwheat, and various health products. The design approach unified the diverse product range under a consistent visual identity while allowing for product-specific differentiation. Special attention was given to packaging hierarchy and information presentation to educate consumers about the unique benefits of each product.",
    gallery: [
      "https://cdn.britannica.com/10/94510-050-D0B814DA/Machhapuchhare-Great-Himalaya-Range-Nepal.jpg"
    ],
    tools: ["Illustrator", "Photoshop", "AfterEffects"],
    duration: "3 months",
    client: "Hofo.pk"
  },
  
  // Logos
  {
    id: 12,
    title: "Logo Design Collection 1",
    category: "logo",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/ivcaj8zhwsezdwxutyia.jpg",
    description: "Custom logo design focusing on brand identity and visual communication.",
    detailedDescription: "Created a collection of custom logo designs that effectively communicate each brand's unique identity and values. Each logo was developed through a comprehensive design process that included research, conceptualization, iteration, and refinement. The designs prioritize versatility, scalability, and distinctive brand recognition.",
    gallery: [
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/ivcaj8zhwsezdwxutyia.jpg"
    ],
    tools: ["Illustrator", "Photoshop", "Sketch"],
    duration: "Various",
    client: "Multiple Clients"
  },
  {
    id: 13,
    title: "Logo Design Collection 2",
    category: "logo",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/at4a8ev6g7ht6ycmy4i4.jpg",
    description: "Minimalist logo design with modern typography and symbolic elements.",
    detailedDescription: "Designed a series of minimalist logos that combine modern typography with meaningful symbolic elements. Each design emphasizes simplicity and clarity while conveying the brand's essential characteristics. These logos were created with a focus on versatility across various applications from digital platforms to physical merchandise.",
    gallery: [
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/at4a8ev6g7ht6ycmy4i4.jpg"
    ],
    tools: ["Illustrator", "Figma", "InDesign"],
    duration: "Various",
    client: "Multiple Clients"
  },
  {
    id: 14,
    title: "Logo Design Collection 3",
    category: "logo",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/ueukaeollcstood5efbu.jpg",
    description: "Brand identity and logo design for corporate clients with emphasis on scalability.",
    detailedDescription: "Developed comprehensive brand identity and logo designs for corporate clients with a focus on scalability and professional presentation. These designs incorporate appropriate color psychology and typography to reflect each company's industry positioning and values. Each logo was delivered with brand guidelines to ensure consistent implementation.",
    gallery: [
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/ueukaeollcstood5efbu.jpg"
    ],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    duration: "Various",
    client: "Corporate Clients"
  },
  {
    id: 15,
    title: "Logo Design Collection 4",
    category: "logo",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/uatrnfsvu9rebtqkwsky.jpg",
    description: "Creative logo concepts focusing on versatility and brand recognition.",
    detailedDescription: "Created a diverse collection of creative logo concepts that prioritize versatility and instant brand recognition. Each design balances artistic expression with practical application considerations to ensure the logos function effectively across all brand touchpoints. The designs incorporate innovative approaches to color, form, and typography.",
    gallery: [
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/uatrnfsvu9rebtqkwsky.jpg"
    ],
    tools: ["Illustrator", "Photoshop", "Procreate"],
    duration: "Various",
    client: "Multiple Clients"
  },
  
  // WordPress
  {
    id: 16,
    title: "Cnolesbags.com",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "WordPress e-commerce website design and development for Cnoles Bags.",
    link: "https://cnolesbags.com",
    detailedDescription: "Designed and developed a WordPress e-commerce website for Cnoles Bags that showcases their product line while providing a seamless shopping experience. The site features custom product categorization, professional product photography display, and an optimized checkout process. The design balances aesthetic appeal with functional usability to drive conversions.",
    gallery: [
      "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg"
    ],
    tools: ["WordPress", "WooCommerce", "Elementor"],
    duration: "2 months",
    client: "Cnoles Bags"
  },
  {
    id: 17,
    title: "Clotharlo.com",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "Custom WordPress theme and site design for Clotharlo fashion brand.",
    link: "https://clotharlo.com",
    detailedDescription: "Created a custom WordPress theme and complete site design for the Clotharlo fashion brand. The website features an elegant, minimalist design that puts the focus on the brand's products while conveying their premium positioning. The site includes custom product galleries, lookbook features, and integrated social media elements to enhance brand engagement.",
    gallery: [
      "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg"
    ],
    tools: ["WordPress", "Elementor Pro", "Custom CSS"],
    duration: "2.5 months",
    client: "Clotharlo"
  },
  {
    id: 18,
    title: "La-festin.com",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "WordPress development for La Festin with custom e-commerce functionality.",
    link: "https://la-festin.com",
    detailedDescription: "Developed a WordPress website for La Festin with custom e-commerce functionality tailored to their specific business requirements. The site includes unique product display features, customized checkout experience, and integrated marketing tools. The design emphasizes visual storytelling to enhance the appeal of their product offerings.",
    gallery: [
      "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg"
    ],
    tools: ["WordPress", "WooCommerce", "Divi"],
    duration: "3 months",
    client: "La Festin"
  },
  {
    id: 19,
    title: "Buckwheat.pk",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "WordPress website design and development for Buckwheat.pk.",
    link: "https://buckwheat.pk",
    detailedDescription: "Designed and developed a WordPress website for Buckwheat.pk that effectively communicates the health benefits of their products while providing a user-friendly shopping experience. The site features educational content about buckwheat products, customer testimonials, and streamlined purchasing options. The design incorporates natural elements and colors that reinforce the brand's organic positioning.",
    gallery: [
      "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg"
    ],
    tools: ["WordPress", "WooCommerce", "Elementor"],
    duration: "2 months",
    client: "Buckwheat.pk"
  },
  {
    id: 20,
    title: "GBOrganics.pk",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "Custom WordPress site with e-commerce functionality for GBOrganics.pk.",
    link: "https://gborganics.pk",
    detailedDescription: "Created a custom WordPress site with comprehensive e-commerce functionality for GBOrganics.pk. The website showcases their range of organic health products with detailed product information, health benefit explanations, and usage instructions. The design conveys trust and authenticity through earthy colors and clean layouts.",
    gallery: [
      "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg"
    ],
    tools: ["WordPress", "WooCommerce", "Astra"],
    duration: "2.5 months",
    client: "GBOrganics.pk"
  },
  {
    id: 21,
    title: "Giantteddy.com",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "E-commerce WordPress site for Giantteddy.com with custom product showcases.",
    link: "https://giantteddy.com",
    detailedDescription: "Developed an e-commerce WordPress site for Giantteddy.com featuring custom product showcases that highlight their unique teddy bear offerings. The site includes interactive product galleries, size comparison tools, and gifting options. The playful yet elegant design appeals to both gift-givers and collectors while maintaining a professional shopping experience.",
    gallery: [
      "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg"
    ],
    tools: ["WordPress", "WooCommerce", "Elementor Pro"],
    duration: "2 months",
    client: "Giantteddy.com"
  },
];
