export type Project = {
  id: number;
  title: string;
  category: 'ui' | 'social' | 'logo' | 'wordpress' | 'product' | 'ai';
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
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333643/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/ektgfwzn9kg6syxbss3k.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333643/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/omfzyybjxoxt3sdvsiyh.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333643/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/x77girnhgkjvcsorzvmt.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333643/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/sxu6dyrgixuzkkdyhxlo.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333642/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/ciqxfxemrxzzjgcc4wbe.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333642/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/qwisrugqbycu6xxfsyqy.png"
    ],
    tools: ["Canva", "Figma"],
    duration: "3 weeks",
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
    tools: ["Figma"],
    duration: "2 Hours",
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
      "https://res.cloudinary.com/diedxghax/image/upload/v1742333075/The%20Dopple%20Dashboard/ssdl93vcmbpkfw8ni6eh.png",
      "https://res.cloudinary.com/diedxghax/image/upload/v1742333075/The%20Dopple%20Dashboard/ye1qa5vifuqfeomtzza7.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333350/The%20Dopple%20Dashboard/Desktop/j4e22koghulq3frs55lh.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333349/The%20Dopple%20Dashboard/Desktop/a7wl8ptvccapex1qb77o.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333349/The%20Dopple%20Dashboard/Desktop/tkps0lj1cmvsmoay6zxb.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333349/The%20Dopple%20Dashboard/Desktop/n7drwxxenpal4iagge0o.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333349/The%20Dopple%20Dashboard/Desktop/gctr5r8km9iwnox7vwhg.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333349/The%20Dopple%20Dashboard/Desktop/ckgszoszpfkfk6xmzse3.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742333349/The%20Dopple%20Dashboard/Desktop/bznmgqikslcnkiz7ydbq.png"
    ],
    tools: ["Canva"],
    duration: "2 Weeks",
    client: "The Dopple"
  },
  
  // UI Design - Mamas Uncut
  {
    id: 4,
    title: "Mamas Uncut UI",
    category: "ui",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1742380840/ntnqpflzctepjd8nioxu.png",
    description: "Core UI design and improvements for the Mamas Uncut platform focusing on user experience.",
    link: "https://mamasuncut.com",
    detailedDescription: "Redesigned and improved the core UI for the Mamas Uncut platform with a focus on enhancing user experience. The design updates included a more intuitive navigation system, improved content layout, and optimized mobile responsiveness. These changes resulted in increased user engagement and time spent on the platform.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380840/ntnqpflzctepjd8nioxu.png",
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380941/efikfqik1hjobn6tkudh.png"
    ],
    tools: ["Canva"],
    duration: "1 Month",
    client: "Mamas Uncut LLC"
  },
  {
    id: 5,
    title: "Baby Name Generator",
    category: "ui",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1742380953/qrmvqhhocymayloswodv.png",
    description: "Interactive baby name generator tool designed for the Mamas Uncut platform.",
    link: "https://mamasuncut.com",
    detailedDescription: "Designed and developed an interactive baby name generator tool for the Mamas Uncut platform. This feature allows users to discover and save baby names based on various filters such as origin, meaning, and popularity. The intuitive interface makes the name discovery process enjoyable and engaging for expectant parents.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380953/qrmvqhhocymayloswodv.png",
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380953/jmvdosj6dibs967mkrot.png",
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380947/x4io9p0mshgoz1neuoqc.png",
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380947/u5jqpel3gnvxyrsk4jzh.png"
    ],
    tools: ["Canva"],
    duration: "1 Month",
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
    tools: ["Canva"],
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
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334035/Social%20Media/cxougc5pvzesr0ccvszp.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334035/Social%20Media/guibzgbzz7e08jjecyzo.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334035/Social%20Media/b2ovugueufcxppglv3ne.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334035/Social%20Media/vrvvxa8jcdqnw1bgmpbx.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334035/Social%20Media/wbt4jdli30ujoeblzebk.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334035/Social%20Media/obq8rxevxejvbolvysmh.png",
      "http://res.cloudinary.com/diedxghax/image/upload/v1742334034/Social%20Media/gbmqqoasr7aztx5zjrpm.png"
    ],
    tools: ["Canva", "Photoshop"],
    duration: "Ongoing",
    client: "Various"
  },
  
  // Product Design
  {
    id: 9,
    title: "GBOrganics Shilajit Resin",
    category: "product",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1742380406/ubxpy7zeoy3sjs3kawgx.png",
    description: "Product design and packaging for GBOrganics.pk Shilajit resin product line.",
    link: "https://gborganics.pk",
    detailedDescription: "Designed product packaging and branding for GBOrganics.pk's Shilajit resin product line. The design emphasizes the natural origin and premium quality of the product through sophisticated typography and earthy color palettes. The packaging was optimized for both online presentation and physical shelf appeal.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380406/ubxpy7zeoy3sjs3kawgx.png"
    ],
    tools: ["Illustrator", "Photoshop"],
    duration: "2 months",
    client: "GBOrganics.pk"
  },
  {
    id: 10,
    title: "Buckwheat Product Design",
    category: "product",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1742380399/bqygjdgvjplfmotwyzqy.png",
    description: "Packaging and brand identity design for Buckwheat.pk products.",
    link: "https://buckwheat.pk",
    detailedDescription: "Created distinctive packaging and brand identity for Buckwheat.pk's product line. The design concept centered around communicating the health benefits and organic nature of the products through clean, modern aesthetics. The packaging design incorporates sustainable elements that align with the brand's eco-friendly values.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380399/bqygjdgvjplfmotwyzqy.png"
    ],
    tools: ["Illustrator", "Photoshop"],
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
    tools: ["Illustrator", "Photoshop"],
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
    tools: ["Illustrator", "Photoshop"],
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
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1742380399/bie3dsmshfyum6qhgcy2.png",
    description: "WordPress e-commerce website design and development for Cnoles Bags.",
    link: "https://cnolesbags.com",
    detailedDescription: "Designed and developed a WordPress e-commerce website for Cnoles Bags that showcases their product line while providing a seamless shopping experience. The site features custom product categorization, professional product photography display, and an optimized checkout process. The design balances aesthetic appeal with functional usability to drive conversions.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380399/bie3dsmshfyum6qhgcy2.png"
    ],
    tools: ["WordPress", "WooCommerce", "Elementor"],
    duration: "2 months",
    client: "Cnoles Bags"
  },
  {
    id: 17,
    title: "Clotharlo.com",
    category: "wordpress",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1742380398/fsmcdav4yqef4zfrz13z.png",
    description: "Custom WordPress theme and site design for Clotharlo fashion brand.",
    link: "https://clotharlo.com",
    detailedDescription: "Created a custom WordPress theme and complete site design for the Clotharlo fashion brand. The website features an elegant, minimalist design that puts the focus on the brand's products while conveying their premium positioning. The site includes custom product galleries, lookbook features, and integrated social media elements to enhance brand engagement.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380398/fsmcdav4yqef4zfrz13z.png"
    ],
    tools: ["WordPress", "Elementor Pro", "Custom CSS"],
    duration: "2.5 months",
    client: "Clotharlo"
  },
  {
    id: 18,
    title: "La-festin.com",
    category: "wordpress",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1742380399/sg4kzkhmefsqpsxfnjnk.png",
    description: "WordPress development for La Festin with custom e-commerce functionality.",
    link: "https://la-festin.com",
    detailedDescription: "Developed a WordPress website for La Festin with custom e-commerce functionality tailored to their specific business requirements. The site includes unique product display features, customized checkout experience, and integrated marketing tools. The design emphasizes visual storytelling to enhance the appeal of their product offerings.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380399/sg4kzkhmefsqpsxfnjnk.png"
    ],
    tools: ["WordPress", "WooCommerce", "Divi"],
    duration: "3 months",
    client: "La Festin"
  },
  {
    id: 19,
    title: "Buckwheat.pk",
    category: "wordpress",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1742380399/bqygjdgvjplfmotwyzqy.png",
    description: "WordPress website design and development for Buckwheat.pk.",
    link: "https://buckwheat.pk",
    detailedDescription: "Designed and developed a WordPress website for Buckwheat.pk that effectively communicates the health benefits of their products while providing a user-friendly shopping experience. The site features educational content about buckwheat products, customer testimonials, and streamlined purchasing options. The design incorporates natural elements and colors that reinforce the brand's organic positioning.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380399/bqygjdgvjplfmotwyzqy.png"
    ],
    tools: ["WordPress", "WooCommerce", "Elementor"],
    duration: "2 months",
    client: "Buckwheat.pk"
  },
  {
    id: 20,
    title: "GBOrganics.pk",
    category: "wordpress",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1742380398/lbwfqccioljl33ib0yan.png",
    description: "Custom WordPress site with e-commerce functionality for GBOrganics.pk.",
    link: "https://gborganics.pk",
    detailedDescription: "Created a custom WordPress site with comprehensive e-commerce functionality for GBOrganics.pk. The website showcases their range of organic health products with detailed product information, health benefit explanations, and usage instructions. The design conveys trust and authenticity through earthy colors and clean layouts.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1742380398/lbwfqccioljl33ib0yan.png"
    ],
    tools: ["WordPress", "WooCommerce", "Astra"],
    duration: "2.5 months",
    client: "GBOrganics.pk"
  },
  
  // AI Prompt Projects
  {
    id: 21,
    title: "Urban Fantasy Scene",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/pasitkrzsidepuws6doo.webp",
    description: "Cinematic urban fantasy scene with mystical elements created using Sora AI.",
    detailedDescription: "This stunning urban fantasy scene was generated using carefully crafted prompts in Sora AI. The image features a perfect blend of realistic urban elements with fantastical touches, demonstrating advanced prompt engineering to achieve the right lighting, composition, and atmosphere.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/pasitkrzsidepuws6doo.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Project"
  },
  {
    id: 22,
    title: "Ethereal Forest Portrait",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/k7e8i7qyqcj4qzwx6phe.webp",
    description: "Ethereal portrait set in a magical forest with glowing elements created with Sora AI.",
    detailedDescription: "This enchanting portrait set in a magical forest showcases my ability to craft detailed prompts that generate cohesive scenes with specific moods and lighting effects. The image demonstrates perfect harmony between the subject and the environment, with ethereal glowing elements that bring a touch of magic.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/k7e8i7qyqcj4qzwx6phe.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Portfolio"
  },
  {
    id: 23,
    title: "Futuristic Cityscape",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/ozfmy64s3zjdwvjtkrcw.webp",
    description: "Detailed futuristic cityscape with advanced architectural elements generated using Sora AI.",
    detailedDescription: "This intricate futuristic cityscape was created through precise prompt engineering in Sora AI. The image features complex architectural structures, futuristic transportation, and atmospheric lighting that creates a believable sci-fi environment. The prompt was carefully crafted to balance technological elements with human scale.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/ozfmy64s3zjdwvjtkrcw.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Project"
  },
  {
    id: 24,
    title: "Nature-Inspired Fantasy",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/mtcxnednc31rm2zsaqfh.webp",
    description: "Nature-inspired fantasy landscape with surreal elements crafted with Sora AI prompt expertise.",
    detailedDescription: "This breathtaking nature-inspired fantasy landscape demonstrates my skill in creating complex, layered prompts that generate cohesive yet imaginative scenes. The image blends realistic natural elements with fantastical features, showcasing my ability to direct AI to create specific moods and visual themes.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/mtcxnednc31rm2zsaqfh.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Portfolio"
  },
  {
    id: 25,
    title: "Mystical Character Design",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/ccsgulwxfnoce1k8ozdh.webp",
    description: "Character concept with mystical elements and detailed costume design generated with Sora AI.",
    detailedDescription: "This mystical character design showcases my ability to craft prompts that generate detailed character concepts with consistent visual styling. The image features intricate costume design, appropriate lighting, and atmospheric elements that enhance the character's presence and story.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/ccsgulwxfnoce1k8ozdh.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Portfolio"
  },
  {
    id: 26,
    title: "Dreamlike Landscape",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/mamtllmmr1iehs9udkki.webp",
    description: "Surreal dreamlike landscape with ethereal lighting effects created using Sora AI.",
    detailedDescription: "This surreal dreamlike landscape demonstrates advanced prompt engineering to achieve specific lighting effects and atmospheric conditions. The image features a perfect balance between realism and fantasy, with precise color palette control and emotional resonance achieved through carefully structured prompts.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229501/PORRT/mamtllmmr1iehs9udkki.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Project"
  },
  {
    id: 27,
    title: "Cinematic Urban Scene",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/dj39ljqkihln7qgoemcx.webp",
    description: "Cinematic urban scene with dramatic lighting and atmosphere generated with Sora AI.",
    detailedDescription: "This cinematic urban scene showcases my expertise in creating prompts that generate images with film-like quality. The composition, lighting, and atmosphere were all carefully directed through prompt engineering to achieve a specific mood and visual style reminiscent of modern film cinematography.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/dj39ljqkihln7qgoemcx.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Portfolio"
  },
  {
    id: 28,
    title: "Fantasy Architectural Concept",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/taifxtv7lys6atboymkv.webp",
    description: "Fantasy architectural concept with intricate details and magical elements created with Sora AI.",
    detailedDescription: "This fantasy architectural concept demonstrates my ability to direct AI through detailed prompts to generate complex structural designs with coherent stylistic elements. The image features intricate architectural details balanced with magical elements that create a believable yet fantastical environment.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/taifxtv7lys6atboymkv.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Project"
  },
  {
    id: 29,
    title: "Epic Fantasy Landscape",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/rbkbstta1yyqyy24x5mv.webp",
    description: "Epic fantasy landscape with dramatic scale and lighting created using Sora AI prompts.",
    detailedDescription: "This epic fantasy landscape showcases my skill in crafting prompts that generate images with dramatic scale and atmosphere. The image features a carefully balanced composition with attention to lighting, depth, and environmental storytelling that creates a sense of wonder and adventure.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/rbkbstta1yyqyy24x5mv.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Portfolio"
  },
  {
    id: 30,
    title: "Atmospheric Scene",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/ekfmultvxuehqtd3urm0.webp",
    description: "Atmospheric scene with mood-driven lighting and composition created with Sora AI.",
    detailedDescription: "This atmospheric scene demonstrates my expertise in creating prompts that generate images with specific emotional tones through lighting and composition. The image features a carefully crafted ambiance that evokes particular feelings, showcasing how precise prompt engineering can direct AI to create targeted emotional responses.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/ekfmultvxuehqtd3urm0.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Project"
  },
  {
    id: 31,
    title: "Mystical Scene Composition",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/gxcxzd4fexhgffulaj2g.webp",
    description: "Mystical scene with balanced composition and cohesive storytelling elements created using Sora AI.",
    detailedDescription: "This mystical scene composition showcases my ability to craft prompts that generate images with narrative coherence and visual harmony. The image features carefully balanced elements that work together to tell a story, with attention to detail in lighting, character poses, and environmental interaction.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/gxcxzd4fexhgffulaj2g.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Portfolio"
  },
  {
    id: 32,
    title: "Enchanted Environment",
    category: "ai",
    image: "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/j2nkt301v0jtwgiykzsu.webp",
    description: "Enchanted environment with magical elements and atmospheric effects generated with Sora AI.",
    detailedDescription: "This enchanted environment demonstrates my expertise in creating detailed prompts that generate cohesive fantasy scenes with consistent stylistic elements. The image features a careful balance of realistic textures with magical effects, showcasing how well-crafted prompts can direct AI to blend different visual elements seamlessly.",
    gallery: [
      "http://res.cloudinary.com/doabonfpj/image/upload/v1744229500/PORRT/j2nkt301v0jtwgiykzsu.webp"
    ],
    tools: ["Sora AI", "Prompt Engineering"],
    duration: "2023",
    client: "Personal Project"
  }
];
