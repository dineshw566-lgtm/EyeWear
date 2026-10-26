/**
 * MegaMenu Navigation Data
 * Complete structured configuration for the desktop hover mega menu system.
 */

export const navItems = [
  {
    key: "new-arrivals",
    label: "New Arrivals",
    to: "/new-arrivals",
    hasMenu: true,
    menuKey: "newArrivals",
    iconName: "sparkles",
  },
  {
    key: "brands",
    label: "Brands",
    to: "/brands",
    hasMenu: true,
    menuKey: "brands",
    iconName: "award",
  },
  {
    key: "eyeglasses",
    label: "Eyeglasses",
    to: "/eyeglasses",
    hasMenu: true,
    menuKey: "eyeglasses",
    iconName: "glasses",
  },
  {
    key: "sunglasses",
    label: "Sunglasses",
    to: "/sunglasses",
    hasMenu: true,
    menuKey: "sunglasses",
    iconName: "sunglasses",
  },
  {
    key: "kids",
    label: "Kids",
    to: "/kids",
    hasMenu: true,
    menuKey: "kids",
    iconName: "kids",
  },
  {
    key: "scan-face",
    label: "Scan Your Face",
    to: "/virtual-try-on",
    hasMenu: false,
    iconName: "scan-face",
    badge: "AI",
  },
  {
    key: "eye-care",
    label: "Eye Care",
    to: "/eye-care",
    hasMenu: true,
    menuKey: "eyeCare",
    iconName: "eye",
  },
  {
    key: "our-story",
    label: "Our Story",
    to: "/our-story",
    hasMenu: true,
    menuKey: "ourStory",
    iconName: "users",
  },
]

export const megaMenuData = {
  eyeglasses: {
    type: "sidebar-tabs",
    defaultTab: "collection",
    sidebar: [
      {
        id: "collection",
        label: "Collection",
        items: [
          {
            title: "Switchers",
            image: "/images/collections/switchers.png",
            href: "/eyeglasses?collection=switchers",
          },
          {
            title: "Glam",
            image: "/images/collections/glam.png",
            href: "/eyeglasses?collection=glam",
          },
          {
            title: "Emily In Paris",
            image: "/images/collections/emily.png",
            href: "/eyeglasses?collection=emily",
          },
          {
            title: "Retro",
            image: "/images/collections/retro.png",
            href: "/eyeglasses?collection=retro",
          },
        ],
      },
      {
        id: "men",
        label: "Men",
        items: [
          {
            title: "Executive Titanium",
            image: "/images/collections/men-executive.jpg",
            href: "/eyeglasses?gender=men&material=titanium",
          },
          {
            title: "Urban Acetate",
            image: "/images/collections/men-urban.jpg",
            href: "/eyeglasses?gender=men&material=acetate",
          },
          {
            title: "Minimalist Rimless",
            image: "/images/collections/men-portrait-1.jpg",
            href: "/eyeglasses?gender=men&style=rimless",
          },
          {
            title: "Classic Rectangle",
            image: "/images/collections/men-portrait-2.jpg",
            href: "/eyeglasses?gender=men&shape=rectangle",
          },
        ],
      },
      {
        id: "women",
        label: "Women",
        items: [
          {
            title: "Cat-Eye Glam",
            image: "/images/collections/women-cateye.jpg",
            href: "/eyeglasses?gender=women&shape=cat-eye",
          },
          {
            title: "Pastel Crystal",
            image: "/images/collections/women-crystal.jpg",
            href: "/eyeglasses?gender=women&color=crystal",
          },
          {
            title: "Round Intellectual",
            image: "/images/collections/women-portrait-13707877.jpg",
            href: "/eyeglasses?gender=women&shape=round",
          },
          {
            title: "Editorial Chic",
            image: "/images/collections/women-portrait-11747831.jpg",
            href: "/eyeglasses?gender=women&style=oversized",
          },
        ],
      },
      {
        id: "kids",
        label: "Kids",
        items: [
          {
            title: "Flexible Silicone",
            image: "/images/collections/kids-age-2to5.jpg",
            href: "/kids?feature=flexible",
          },
          {
            title: "Anti-Blue Light",
            image: "/images/collections/kids-teen.jpg",
            href: "/kids?category=computer",
          },
          {
            title: "Boys Active",
            image: "/images/collections/kids-boy.jpg",
            href: "/kids?gender=boys",
          },
          {
            title: "Girls Sparkle",
            image: "/images/collections/kids-girl.jpg",
            href: "/kids?gender=girls",
          },
        ],
      },
      {
        id: "shape",
        label: "Shape",
        items: [
          {
            title: "Round",
            image: "/images/collections/shape-round.jpg",
            href: "/eyeglasses?shape=round",
          },
          {
            title: "Aviator",
            image: "/images/collections/shape-aviator.jpg",
            href: "/eyeglasses?shape=aviator",
          },
          {
            title: "Cat-Eye",
            image: "/images/collections/shape-cateye.jpg",
            href: "/eyeglasses?shape=cat-eye",
          },
          {
            title: "Rectangle",
            image: "/images/collections/shape-rectangle.jpg",
            href: "/eyeglasses?shape=rectangle",
          },
        ],
      },
      {
        id: "style",
        label: "Style",
        items: [
          {
            title: "Rimless",
            image: "/images/collections/shape-wayfarer.jpg",
            href: "/eyeglasses?style=rimless",
          },
          {
            title: "Half-Rim",
            image: "/images/collections/frame-flatlay-design.jpg",
            href: "/eyeglasses?style=half-rim",
          },
          {
            title: "Full-Rim",
            image: "/images/collections/frame-vintage-round.jpg",
            href: "/eyeglasses?style=full-rim",
          },
          {
            title: "Classic Retro",
            image: "/images/collections/retro.png",
            href: "/eyeglasses?style=classic",
          },
        ],
      },
      {
        id: "top-brands",
        label: "Top Brands",
        items: [
          {
            title: "Ray-Ban",
            logo: "/logos/processed/ray-ban.png",
            href: "/eyeglasses?brand=Ray-Ban",
          },
          {
            title: "Oakley",
            logo: "/logos/processed/oakley.png",
            href: "/eyeglasses?brand=Oakley",
          },
          {
            title: "Carrera",
            logo: "/logos/processed/carrera.png",
            href: "/eyeglasses?brand=Carrera",
          },
          {
            title: "Titan",
            logo: "/logos/processed/titan-eyewear.png",
            href: "/eyeglasses?brand=Titan",
          },
        ],
      },
      {
        id: "featured-brands",
        label: "Featured Brands",
        items: [
          {
            title: "Tom Ford",
            logo: "/logos/processed/tom-ford.png",
            href: "/eyeglasses?brand=Tom+Ford",
          },
          {
            title: "Versace",
            logo: "/logos/processed/versace.png",
            href: "/eyeglasses?brand=Versace",
          },
          {
            title: "Dolce & Gabbana",
            logo: "/logos/processed/dolce-gabbana.png",
            href: "/eyeglasses?brand=Dolce+%26+Gabbana",
          },
          {
            title: "Silhouette",
            logo: "/logos/processed/silhouette.png",
            href: "/eyeglasses?brand=Silhouette",
          },
        ],
      },
    ],
  },
  sunglasses: {
    type: "sidebar-tabs",
    defaultTab: "collection",
    sidebar: [
      {
        id: "collection",
        label: "Collection",
        items: [
          {
            title: "Polarized Series",
            image: "/images/collections/sun-polarized.jpg",
            href: "/sunglasses?lens=polarized",
          },
          {
            title: "Powered Sun",
            image: "/images/collections/sun-product-classic.jpg",
            href: "/powered-sunglasses",
          },
          {
            title: "Aviator Heritage",
            image: "/images/collections/sun-gold-hippie.jpg",
            href: "/sunglasses?shape=aviator",
          },
          {
            title: "Retro Havana",
            image: "/images/collections/frame-wood-texture.jpg",
            href: "/sunglasses?style=havana",
          },
        ],
      },
      {
        id: "men",
        label: "Men",
        items: [
          {
            title: "Sports Wrap Pro",
            image: "/images/collections/sun-aviator.jpg",
            href: "/sunglasses?gender=men&style=sports",
          },
          {
            title: "Wayfarer Classic",
            image: "/images/collections/sun-men-fashion.jpg",
            href: "/sunglasses?gender=men&shape=wayfarer",
          },
          {
            title: "Driving Gradient",
            image: "/images/collections/sun-men-aviator-silver.jpg",
            href: "/sunglasses?gender=men&lens=gradient",
          },
          {
            title: "Metal Aviator",
            image: "/images/collections/switchers.png",
            href: "/sunglasses?gender=men&shape=aviator",
          },
        ],
      },
      {
        id: "women",
        label: "Women",
        items: [
          {
            title: "Cat-Eye Diva",
            image: "/images/collections/sun-women-diva.jpg",
            href: "/sunglasses?gender=women&shape=cat-eye",
          },
          {
            title: "Oversized Glam",
            image: "/images/collections/sun-glam.jpg",
            href: "/sunglasses?gender=women&style=oversized",
          },
          {
            title: "Round Bohemian",
            image: "/images/collections/glam.png",
            href: "/sunglasses?gender=women&shape=round",
          },
          {
            title: "Mirrored Gradient",
            image: "/images/collections/emily.png",
            href: "/sunglasses?gender=women&lens=mirrored",
          },
        ],
      },
      {
        id: "kids",
        label: "Kids",
        items: [
          {
            title: "100% UV Protection",
            image: "/images/collections/sun-kids-boy-sun.jpg",
            href: "/kids?category=sunglasses",
          },
          {
            title: "Bendable Sun Flex",
            image: "/images/collections/kids-toddler-darkglasses.jpg",
            href: "/kids?feature=flexible",
          },
          {
            title: "Junior Aviator",
            image: "/images/collections/kids-unsplash-portrait.jpg",
            href: "/kids?shape=aviator",
          },
          {
            title: "Rainbow Mirrored",
            image: "/images/collections/kids-girl-cool-sun.jpg",
            href: "/kids?lens=mirrored",
          },
        ],
      },
      {
        id: "shape",
        label: "Shape",
        items: [
          {
            title: "Aviator",
            image: "/images/collections/shape-aviator.jpg",
            href: "/sunglasses?shape=aviator",
          },
          {
            title: "Wayfarer",
            image: "/images/collections/shape-round.jpg",
            href: "/sunglasses?shape=wayfarer",
          },
          {
            title: "Round",
            image: "/images/collections/sun-gold-hippie.jpg",
            href: "/sunglasses?shape=round",
          },
          {
            title: "Square",
            image: "/images/collections/shape-rectangle.jpg",
            href: "/sunglasses?shape=square",
          },
        ],
      },
      {
        id: "top-brands",
        label: "Top Brands",
        items: [
          {
            title: "Ray-Ban",
            logo: "/logos/processed/ray-ban.png",
            href: "/sunglasses?brand=Ray-Ban",
          },
          {
            title: "Oakley",
            logo: "/logos/processed/oakley.png",
            href: "/sunglasses?brand=Oakley",
          },
          {
            title: "Persol",
            logo: "/logos/processed/persol.png",
            href: "/sunglasses?brand=Persol",
          },
          {
            title: "Polaroid",
            logo: "/logos/processed/polaroid.png",
            href: "/sunglasses?brand=Polaroid",
          },
        ],
      },
    ],
  },
  kids: {
    type: "sidebar-tabs",
    defaultTab: "age-group",
    sidebar: [
      {
        id: "age-group",
        label: "Age Group",
        items: [
          {
            title: "2 – 5 Years",
            image: "/images/collections/kids-age-2to5.jpg",
            href: "/kids?age=2-5",
          },
          {
            title: "5 – 8 Years",
            image: "/images/collections/kids-boy.jpg",
            href: "/kids?age=5-8",
          },
          {
            title: "8 – 12 Years",
            image: "/images/collections/kids-girl.jpg",
            href: "/kids?age=8-12",
          },
          {
            title: "Teens 12+",
            image: "/images/collections/kids-teen.jpg",
            href: "/kids?age=teens",
          },
        ],
      },
      {
        id: "boys",
        label: "Boys",
        items: [
          {
            title: "Active TR90",
            image: "/images/collections/kids-boy-writing.jpg",
            href: "/kids?gender=boys&feature=flexible",
          },
          {
            title: "Sports Rectangular",
            image: "/images/collections/kids-unsplash-portrait.jpg",
            href: "/kids?gender=boys&shape=rectangle",
          },
          {
            title: "Blue Light Screen",
            image: "/images/collections/kids-toddler.jpg",
            href: "/kids?gender=boys&category=computer",
          },
          {
            title: "Junior Sunglasses",
            image: "/images/collections/sun-kids-boy-sun.jpg",
            href: "/kids?gender=boys&category=sunglasses",
          },
        ],
      },
      {
        id: "girls",
        label: "Girls",
        items: [
          {
            title: "Pastel Round",
            image: "/images/collections/kids-girl-redhair.jpg",
            href: "/kids?gender=girls&shape=round",
          },
          {
            title: "Pink Sparkle Cat-Eye",
            image: "/images/collections/women-portrait-13707877.jpg",
            href: "/kids?gender=girls&shape=cat-eye",
          },
          {
            title: "Zero Power Screen",
            image: "/images/collections/kids-girl-laptop.jpg",
            href: "/kids?gender=girls&category=computer",
          },
          {
            title: "Glitter Sunglasses",
            image: "/images/collections/kids-girl-cool-sun.jpg",
            href: "/kids?gender=girls&category=sunglasses",
          },
        ],
      },
      {
        id: "category",
        label: "Category",
        items: [
          {
            title: "Sight Eyeglasses",
            image: "/images/collections/kids-store-fit.jpg",
            href: "/kids?category=eyeglasses",
          },
          {
            title: "Polarized Sunglasses",
            image: "/images/collections/kids-store-try.jpg",
            href: "/kids?category=sunglasses",
          },
          {
            title: "Zero Power Computer",
            image: "/images/collections/frame-flatlay-design.jpg",
            href: "/kids?category=computer",
          },
          {
            title: "Unbreakable Silicone",
            image: "/images/collections/kids-toddler-darkglasses.jpg",
            href: "/kids?feature=flexible",
          },
        ],
      },
      {
        id: "top-brands",
        label: "Top Brands",
        items: [
          {
            title: "Ray-Ban Junior",
            logo: "/logos/processed/ray-ban.png",
            href: "/kids?brand=Ray-Ban+Junior",
          },
          {
            title: "Polaroid Kids",
            logo: "/logos/processed/polaroid.png",
            href: "/kids?brand=Polaroid+Kids",
          },
          {
            title: "Titan Kids",
            logo: "/logos/processed/titan-eyewear.png",
            href: "/kids?brand=Titan+Kids",
          },
          {
            title: "Benetton Kids",
            logo: "/logos/processed/united-colors-benetton.png",
            href: "/kids?brand=Benetton+Kids",
          },
        ],
      },
    ],
  },
  newArrivals: {
    type: "sidebar-tabs",
    defaultTab: "collection",
    sidebar: [
      {
        id: "collection",
        label: "Collection",
        items: [
          {
            title: "Switchers Drop",
            image: "/images/collections/switchers.png",
            href: "/new-arrivals?drop=switchers",
          },
          {
            title: "Glam Studio",
            image: "/images/collections/glam.png",
            href: "/new-arrivals?drop=glam",
          },
          {
            title: "Emily In Paris",
            image: "/images/collections/emily.png",
            href: "/new-arrivals?drop=emily",
          },
          {
            title: "Retro Heritage",
            image: "/images/collections/retro.png",
            href: "/new-arrivals?drop=retro",
          },
        ],
      },
      {
        id: "men",
        label: "Men",
        items: [
          {
            title: "Titanium Tech",
            image: "/images/collections/men-executive.jpg",
            href: "/new-arrivals?gender=men&material=titanium",
          },
          {
            title: "Architectural Square",
            image: "/images/collections/men-urban.jpg",
            href: "/new-arrivals?gender=men&shape=square",
          },
          {
            title: "Matte Black Series",
            image: "/images/collections/men-portrait-3.jpg",
            href: "/new-arrivals?gender=men&color=black",
          },
          {
            title: "Polarized Sun",
            image: "/images/collections/sun-men-aviator-silver.jpg",
            href: "/new-arrivals?gender=men&type=sun",
          },
        ],
      },
      {
        id: "women",
        label: "Women",
        items: [
          {
            title: "Rose Gold Elegance",
            image: "/images/collections/women-clean-outdoor.jpg",
            href: "/new-arrivals?gender=women&color=gold",
          },
          {
            title: "Crystal Cat-Eye",
            image: "/images/collections/women-portrait-2.jpg",
            href: "/new-arrivals?gender=women&shape=cat-eye",
          },
          {
            title: "Parisian Round",
            image: "/images/collections/women-portrait-13707877.jpg",
            href: "/new-arrivals?gender=women&shape=round",
          },
          {
            title: "Bold Butterfly",
            image: "/images/collections/women-cateye.jpg",
            href: "/new-arrivals?gender=women&style=butterfly",
          },
        ],
      },
      {
        id: "kids",
        label: "Kids",
        items: [
          {
            title: "Soft Silicone Flex",
            image: "/images/collections/kids-age-2to5.jpg",
            href: "/kids?feature=flexible",
          },
          {
            title: "Gamer Blue Light",
            image: "/images/collections/kids-teen.jpg",
            href: "/kids?feature=blue-light",
          },
          {
            title: "Active Junior",
            image: "/images/collections/kids-boy.jpg",
            href: "/kids?gender=boys",
          },
          {
            title: "Candy Pastel",
            image: "/images/collections/kids-girl.jpg",
            href: "/kids?gender=girls",
          },
        ],
      },
      {
        id: "category",
        label: "Category",
        items: [
          {
            title: "Optical Frames",
            image: "/images/collections/shape-rectangle.jpg",
            href: "/new-arrivals?category=optical",
          },
          {
            title: "Sunglasses",
            image: "/images/collections/sun-polarized.jpg",
            href: "/new-arrivals?category=sunglasses",
          },
          {
            title: "Smart Glasses",
            image: "/images/collections/sun-men-fashion.jpg",
            href: "/smart-glasses",
          },
          {
            title: "Computer Eyewear",
            image: "/images/collections/frame-flatlay-design.jpg",
            href: "/computer-glasses",
          },
        ],
      },
      {
        id: "top-brands",
        label: "Top Brands",
        items: [
          {
            title: "Ray-Ban",
            logo: "/logos/processed/ray-ban.png",
            href: "/new-arrivals?brand=Ray-Ban",
          },
          {
            title: "Oakley",
            logo: "/logos/processed/oakley.png",
            href: "/new-arrivals?brand=Oakley",
          },
          {
            title: "Tom Ford",
            logo: "/logos/processed/tom-ford.png",
            href: "/new-arrivals?brand=Tom+Ford",
          },
          {
            title: "Versace",
            logo: "/logos/processed/versace.png",
            href: "/new-arrivals?brand=Versace",
          },
        ],
      },
    ],
  },
  brands: {
    type: "brands-directory",
    heading: "Brands Directory",
    tabs: [
      {
        id: "all",
        label: "All Brands (27)",
        href: "/brands",
      },
      {
        id: "luxottica",
        label: "Luxottica (8)",
        href: "/brands?category=luxottica",
      },
      {
        id: "lifestyle",
        label: "Life Style (6)",
        href: "/brands?category=lifestyle",
      },
      {
        id: "luxury",
        label: "Luxury (4)",
        href: "/brands?category=luxury",
      },
      {
        id: "designer",
        label: "Designer (3)",
        href: "/brands?category=designer",
      },
      {
        id: "safilo",
        label: "Safilo (4)",
        href: "/brands?category=safilo",
      },
      {
        id: "indian",
        label: "Indian Brands (2)",
        href: "/brands?category=indian",
      },
    ],
    brands: [
      {
        name: "Arnette",
        letter: "A",
        brandType: "Luxottica",
        category: "luxottica",
        categoryLabel: "Luxottica",
        href: "/brands?brand=Arnette",
      },
      {
        name: "Calvin Klein",
        letter: "C",
        brandType: "Life Style",
        category: "lifestyle",
        categoryLabel: "Life Style",
        href: "/brands?brand=Calvin+Klein",
      },
      {
        name: "Carrera",
        letter: "C",
        brandType: "Safilo",
        category: "safilo",
        categoryLabel: "Safilo",
        href: "/brands?brand=Carrera",
      },
      {
        name: "Coach",
        letter: "C",
        brandType: "Designer",
        category: "designer",
        categoryLabel: "Designer",
        href: "/brands?brand=Coach",
      },
      {
        name: "Diesel",
        letter: "D",
        brandType: "Luxottica",
        category: "luxottica",
        categoryLabel: "Luxottica",
        href: "/brands?brand=Diesel",
      },
      {
        name: "Dolce & Gabbana",
        letter: "D",
        brandType: "Designer",
        category: "designer",
        categoryLabel: "Designer",
        href: "/brands?brand=Dolce+%26+Gabbana",
      },
      {
        name: "Emporio Armani",
        letter: "E",
        brandType: "Luxottica",
        category: "luxottica",
        categoryLabel: "Luxottica",
        href: "/brands?brand=Emporio+Armani",
      },
      {
        name: "Fossil",
        letter: "F",
        brandType: "Life Style",
        category: "lifestyle",
        categoryLabel: "Life Style",
        href: "/brands?brand=Fossil",
      },
      {
        name: "French Connection",
        letter: "F",
        brandType: "Life Style",
        category: "lifestyle",
        categoryLabel: "Life Style",
        href: "/brands?brand=French+Connection",
      },
      {
        name: "Hackett",
        letter: "H",
        brandType: "Luxury",
        category: "luxury",
        categoryLabel: "Luxury",
        href: "/brands?brand=Hackett",
      },
      {
        name: "Hugo Boss",
        letter: "H",
        brandType: "Safilo",
        category: "safilo",
        categoryLabel: "Safilo",
        href: "/brands?brand=BOSS",
      },
      {
        name: "Montblanc",
        letter: "M",
        brandType: "Safilo",
        category: "safilo",
        categoryLabel: "Safilo",
        href: "/brands?brand=Montblanc",
      },
      {
        name: "Nautica",
        letter: "N",
        brandType: "Life Style",
        category: "lifestyle",
        categoryLabel: "Life Style",
        href: "/brands?brand=Nautica",
      },
      {
        name: "Nike",
        letter: "N",
        brandType: "Life Style",
        category: "lifestyle",
        categoryLabel: "Life Style",
        href: "/brands?brand=Nike",
      },
      {
        name: "Oakley",
        letter: "O",
        brandType: "Luxottica",
        category: "luxottica",
        categoryLabel: "Luxottica",
        href: "/brands?brand=Oakley",
      },
      {
        name: "Persol",
        letter: "P",
        brandType: "Luxottica",
        category: "luxottica",
        categoryLabel: "Luxottica",
        href: "/brands?brand=Persol",
      },
      {
        name: "Polaroid",
        letter: "P",
        brandType: "Safilo",
        category: "safilo",
        categoryLabel: "Safilo",
        href: "/brands?brand=Polaroid",
      },
      {
        name: "Ray-Ban",
        letter: "R",
        brandType: "Luxottica",
        category: "luxottica",
        categoryLabel: "Luxottica",
        href: "/brands?brand=Ray-Ban",
      },
      {
        name: "Silhouette",
        letter: "S",
        brandType: "Luxury",
        category: "luxury",
        categoryLabel: "Luxury",
        href: "/brands?brand=Silhouette",
      },
      {
        name: "Titan",
        letter: "T",
        brandType: "Indian Brands",
        category: "indian",
        categoryLabel: "Indian Brands",
        href: "/brands?brand=Titan",
      },
      {
        name: "Tom Ford",
        letter: "T",
        brandType: "Luxury",
        category: "luxury",
        categoryLabel: "Luxury",
        href: "/brands?brand=Tom+Ford",
      },
      {
        name: "United Colors of Benetton",
        letter: "U",
        brandType: "Life Style",
        category: "lifestyle",
        categoryLabel: "Life Style",
        href: "/brands?brand=United+Colors+of+Benetton",
      },
      {
        name: "Versace",
        letter: "V",
        brandType: "Designer",
        category: "designer",
        categoryLabel: "Designer",
        href: "/brands?brand=Versace",
      },
      {
        name: "Vogue",
        letter: "V",
        brandType: "Luxottica",
        category: "luxottica",
        categoryLabel: "Luxottica",
        href: "/brands?brand=Vogue",
      },
      {
        name: "Web Eyewear",
        letter: "W",
        brandType: "Luxottica",
        category: "luxottica",
        categoryLabel: "Luxottica",
        href: "/brands?brand=WEB+Eyewear",
      },
      {
        name: "William Morris London",
        letter: "W",
        brandType: "Luxury",
        category: "luxury",
        categoryLabel: "Luxury",
        href: "/brands?brand=William+Morris",
      },
      {
        name: "Xite",
        letter: "X",
        brandType: "Indian Brands",
        category: "indian",
        categoryLabel: "Indian Brands",
        href: "/brands?brand=Xite",
      },
    ],
  },
  eyeCare: {
    type: "simple",
    links: [
      {
        label: "Book Eye Test",
        href: "/eye-care",
        icon: "calendar",
      },
      {
        label: "Eye Health Guide",
        href: "/eye-care",
        icon: "eye",
      },
      {
        label: "Lens Information",
        href: "/eye-care",
        icon: "info",
      },
      {
        label: "Progressive Lenses",
        href: "/eye-care",
        icon: "layers",
      },
      {
        label: "Blue Light Guide",
        href: "/eye-care",
        icon: "shield",
      },
      {
        label: "Anti-Glare Lenses",
        href: "/eye-care",
        icon: "sun",
      },
    ],
  },
  ourStory: {
    type: "simple",
    links: [
      {
        label: "About Vizhen Plus",
        href: "/our-story",
        icon: "users",
      },
      {
        label: "Our Journey",
        href: "/our-story",
        icon: "map",
      },
      {
        label: "Why Choose Us",
        href: "/our-story",
        icon: "star",
      },
      {
        label: "Our Optometrists",
        href: "/our-story",
        icon: "user-check",
      },
      {
        label: "Contact Us",
        href: "/visit",
        icon: "mail",
      },
    ],
  },
}
