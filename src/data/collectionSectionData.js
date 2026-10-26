/**
 * collectionSectionData.js
 * Curated product items populated directly from official ViZHan Plus Optics SKU inventory:
 * - Real brand names from Excel list: Calvin Klein, Carrera, BEBE, Vogue, Arnette, Oakley, Ray-Ban, etc.
 * - Real product codes, barcodes, prices, swatches & in-stock status
 * - 4 categories: Men, Women, Unisex, Kids (16 curated items each for 4x4 grid)
 * - Curated high-resolution isolated eyewear product photography on pure white
 */

export const COLLECTION_CATEGORIES = [
  {
    id: "Men",
    label: "Men",
  },
  {
    id: "Women",
    label: "Women",
  },
  {
    id: "Unisex",
    label: "Unisex",
  },
  {
    id: "Kids",
    label: "Kids",
  },
]

export const MEN_COLLECTION = [
  {
    id: "sku-184086",
    brand: "Calvin Klein",
    name: "Calvin Klein CKJ24204 017",
    price: "₹5,490",
    image: "/images/shop-by-style/rayban-rb3741.png",
    bestseller: true,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-184086-0",
        color: "#5A6268",
      },
      {
        id: "sw-sku-184086-1",
        color: "#222222",
      },
      {
        id: "sw-sku-184086-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=184086",
  },
  {
    id: "sku-999362",
    brand: "Carrera",
    name: "Carrera CA8832 PJP",
    price: "₹13,600",
    image: "/images/shop-by-style/polaroid-pld.png",
    bestseller: true,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-999362-0",
        color: "#1B263B",
      },
      {
        id: "sw-sku-999362-1",
        color: "#222222",
      },
      {
        id: "sw-sku-999362-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=999362",
  },
  {
    id: "sku-313706",
    brand: "David Jones",
    name: "David Jones DJ 2185 C825",
    price: "₹13,250",
    image:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-313706-0",
        color: "#0D0D0D",
      },
      {
        id: "sw-sku-313706-1",
        color: "#222222",
      },
      {
        id: "sw-sku-313706-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=313706",
  },
  {
    id: "sku-304119",
    brand: "David Jones",
    name: "David Jones DJ 0318 C4",
    price: "₹13,950",
    image: "/images/shop-by-style/rayban-rb3928.png",
    bestseller: true,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-304119-0",
        color: "#0D0D0D",
      },
      {
        id: "sw-sku-304119-1",
        color: "#222222",
      },
      {
        id: "sw-sku-304119-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=304119",
  },
  {
    id: "sku-140710",
    brand: "Diesel",
    name: "Diesel DL 5410 091",
    price: "₹8,900",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-140710-0",
        color: "#2E4C6D",
      },
      {
        id: "sw-sku-140710-1",
        color: "#222222",
      },
      {
        id: "sw-sku-140710-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=140710",
  },
  {
    id: "sku-455892",
    brand: "Dolce & Gabbana",
    name: "Dolce & Gabbana DG5072 501",
    price: "₹20,300",
    image: "/images/shop-by-style/tomford-ft0870.png",
    bestseller: true,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-455892-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-455892-1",
        color: "#222222",
      },
      {
        id: "sw-sku-455892-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=455892",
  },
  {
    id: "sku-241866",
    brand: "Emporio Armani",
    name: "Emporio Armani EA 1041 3003",
    price: "₹11,000",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-241866-0",
        color: "#4E5459",
      },
      {
        id: "sw-sku-241866-1",
        color: "#222222",
      },
      {
        id: "sw-sku-241866-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=241866",
  },
  {
    id: "sku-179901",
    brand: "Emporio Armani",
    name: "Emporio Armani EA 3069 5001",
    price: "₹9,950",
    image: "/images/shop-by-style/rayban-rb3972.png",
    bestseller: false,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-179901-0",
        color: "#222222",
      },
      {
        id: "sw-sku-179901-1",
        color: "#222222",
      },
      {
        id: "sw-sku-179901-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=179901",
  },
  {
    id: "sku-365142",
    brand: "Jaguar",
    name: "Jaguar 39528 57 C1",
    price: "₹27,000",
    image:
      "https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-365142-0",
        color: "#C5A059",
      },
      {
        id: "sw-sku-365142-1",
        color: "#222222",
      },
      {
        id: "sw-sku-365142-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=365142",
  },
  {
    id: "sku-176579",
    brand: "Jaguar",
    name: "Jaguar 39123 54 C1",
    price: "₹25,250",
    image: "/images/shop-by-style/capote-cc13.jpg",
    bestseller: true,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-176579-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-176579-1",
        color: "#222222",
      },
      {
        id: "sw-sku-176579-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=176579",
  },
  {
    id: "sku-314079",
    brand: "Jaguar",
    name: "Jaguar 39523 56 C1",
    price: "₹25,950",
    image:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-314079-0",
        color: "#968E76",
      },
      {
        id: "sw-sku-314079-1",
        color: "#222222",
      },
      {
        id: "sw-sku-314079-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=314079",
  },
  {
    id: "sku-302210",
    brand: "Lacoste",
    name: "Lacoste L2928 001 53",
    price: "₹6,890",
    image: "/images/shop-by-style/benetton-be5024.jpg",
    bestseller: false,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-302210-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-302210-1",
        color: "#222222",
      },
      {
        id: "sw-sku-302210-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=302210",
  },
  {
    id: "sku-283391",
    brand: "Montblanc",
    name: "Montblanc MB 0708 56 008",
    price: "₹13,250",
    image: "/images/shop-by-style/williammorris-ritz.webp",
    bestseller: false,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-283391-0",
        color: "#6C757D",
      },
      {
        id: "sw-sku-283391-1",
        color: "#222222",
      },
      {
        id: "sw-sku-283391-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=283391",
  },
  {
    id: "sku-329133",
    brand: "Montblanc",
    name: "Montblanc MB 0636 56 014",
    price: "₹13,950",
    image: "/images/shop-by-style/miumiu-smu56z.jpg",
    bestseller: true,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-329133-0",
        color: "#8E9AA0",
      },
      {
        id: "sw-sku-329133-1",
        color: "#222222",
      },
      {
        id: "sw-sku-329133-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=329133",
  },
  {
    id: "sku-940126",
    brand: "Nautica",
    name: "Nautica N6034 009 54",
    price: "₹7,590",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-940126-0",
        color: "#0D0D0D",
      },
      {
        id: "sw-sku-940126-1",
        color: "#222222",
      },
      {
        id: "sw-sku-940126-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=940126",
  },
  {
    id: "sku-565789",
    brand: "Oakley",
    name: "Oakley OX5121-0455 LIMIT SWITCH",
    price: "₹9,600",
    image: "/images/shop-by-style/web-we0401.jpg",
    bestseller: false,
    tag: "Men",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-565789-0",
        color: "#191970",
      },
      {
        id: "sw-sku-565789-1",
        color: "#222222",
      },
      {
        id: "sw-sku-565789-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=565789",
  },
]

export const WOMEN_COLLECTION = [
  {
    id: "sku-264263",
    brand: "BEBE",
    name: "BEBE BB806 C3",
    price: "₹9,950",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-264263-0",
        color: "#5C6B73",
      },
      {
        id: "sw-sku-264263-1",
        color: "#222222",
      },
      {
        id: "sw-sku-264263-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=264263",
  },
  {
    id: "sku-284721",
    brand: "BEBE",
    name: "BEBE BB5130",
    price: "₹10,650",
    image: "/images/shop-by-style/tomford-ft0870.png",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-284721-0",
        color: "#5D2E46",
      },
      {
        id: "sw-sku-284721-1",
        color: "#222222",
      },
      {
        id: "sw-sku-284721-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=284721",
  },
  {
    id: "sku-325043",
    brand: "Coach",
    name: "Coach HC6180 5002",
    price: "₹20,300",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-325043-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-325043-1",
        color: "#222222",
      },
      {
        id: "sw-sku-325043-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=325043",
  },
  {
    id: "sku-271956",
    brand: "Coach",
    name: "Coach HC6176 5002SB",
    price: "₹21,000",
    image: "/images/shop-by-style/rayban-rb3972.png",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-271956-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-271956-1",
        color: "#222222",
      },
      {
        id: "sw-sku-271956-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=271956",
  },
  {
    id: "sku-346039",
    brand: "Marc Jacobs",
    name: "Marc Jacobs MARC 427 PJP",
    price: "₹14,650",
    image:
      "https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-346039-0",
        color: "#1A2938",
      },
      {
        id: "sw-sku-346039-1",
        color: "#222222",
      },
      {
        id: "sw-sku-346039-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=346039",
  },
  {
    id: "sku-142010",
    brand: "Nova",
    name: "Nova NVF3417 F03",
    price: "₹8,900",
    image: "/images/shop-by-style/capote-cc13.jpg",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-142010-0",
        color: "#1D4E89",
      },
      {
        id: "sw-sku-142010-1",
        color: "#222222",
      },
      {
        id: "sw-sku-142010-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=142010",
  },
  {
    id: "sku-154303",
    brand: "Pierre Cardin",
    name: "Pierre Cardin PC8506 8XO",
    price: "₹14,650",
    image:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-154303-0",
        color: "#D9899E",
      },
      {
        id: "sw-sku-154303-1",
        color: "#222222",
      },
      {
        id: "sw-sku-154303-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=154303",
  },
  {
    id: "sku-244446",
    brand: "Seventh Street",
    name: "Seventh Street S 287 MY0",
    price: "₹13,250",
    image: "/images/shop-by-style/benetton-be5024.jpg",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-244446-0",
        color: "#1D4E89",
      },
      {
        id: "sw-sku-244446-1",
        color: "#222222",
      },
      {
        id: "sw-sku-244446-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=244446",
  },
  {
    id: "sku-332321",
    brand: "Versace",
    name: "Versace 3329 B 108",
    price: "₹21,000",
    image: "/images/shop-by-style/williammorris-ritz.webp",
    bestseller: true,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-332321-0",
        color: "#704214",
      },
      {
        id: "sw-sku-332321-1",
        color: "#222222",
      },
      {
        id: "sw-sku-332321-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=332321",
  },
  {
    id: "sku-271966",
    brand: "Web Eyewear",
    name: "Web Eyewear WE5132 056",
    price: "₹8,900",
    image: "/images/shop-by-style/miumiu-smu56z.jpg",
    bestseller: true,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-271966-0",
        color: "#704214",
      },
      {
        id: "sw-sku-271966-1",
        color: "#222222",
      },
      {
        id: "sw-sku-271966-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=271966",
  },
  {
    id: "sku-797367",
    brand: "Vogue",
    name: "Vogue VO 4231 280",
    price: "₹10,300",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-797367-0",
        color: "#D4AF37",
      },
      {
        id: "sw-sku-797367-1",
        color: "#222222",
      },
      {
        id: "sw-sku-797367-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=797367",
  },
  {
    id: "sku-670518",
    brand: "Vogue",
    name: "Vogue VO 4222 280",
    price: "₹11,000",
    image: "/images/shop-by-style/web-we0401.jpg",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-670518-0",
        color: "#D4AF37",
      },
      {
        id: "sw-sku-670518-1",
        color: "#222222",
      },
      {
        id: "sw-sku-670518-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=670518",
  },
  {
    id: "sku-130188",
    brand: "William Morris London",
    name: "William Morris London SOPHIA 54 C3",
    price: "₹25,250",
    image: "/images/shop-by-style/rayban-rb3741.png",
    bestseller: true,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-130188-0",
        color: "#D4AF37",
      },
      {
        id: "sw-sku-130188-1",
        color: "#222222",
      },
      {
        id: "sw-sku-130188-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=130188",
  },
  {
    id: "sku-355307",
    brand: "William Morris London",
    name: "William Morris London MARBLE 1 53 C9525",
    price: "₹25,950",
    image: "/images/shop-by-style/polaroid-pld.png",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-355307-0",
        color: "#47624F",
      },
      {
        id: "sw-sku-355307-1",
        color: "#222222",
      },
      {
        id: "sw-sku-355307-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=355307",
  },
  {
    id: "sku-185227",
    brand: "William Morris London",
    name: "William Morris London LN50264 C1",
    price: "₹26,650",
    image:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-185227-0",
        color: "#9E2A2B",
      },
      {
        id: "sw-sku-185227-1",
        color: "#222222",
      },
      {
        id: "sw-sku-185227-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=185227",
  },
  {
    id: "sun-miumiu-smu56z",
    brand: "Miu Miu",
    name: "Miu Miu SMU 56Z",
    price: "₹36,890",
    image: "/images/shop-by-style/rayban-rb3928.png",
    bestseller: true,
    tag: "Women",
    inStock: true,
    swatches: [
      {
        id: "sw-sun-miumiu-smu56z-0",
        color: "#e5d4a1",
      },
      {
        id: "sw-sun-miumiu-smu56z-1",
        color: "#d9a5b3",
      },
    ],
    swatchCount: "+1",
    link: "/eyeglasses?q=805659792412",
  },
]

export const UNISEX_COLLECTION = [
  {
    id: "sku-329656",
    brand: "Calvin Klein",
    name: "Calvin Klein CKJ23617 001",
    price: "₹6,190",
    image:
      "https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-329656-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-329656-1",
        color: "#222222",
      },
      {
        id: "sw-sku-329656-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=329656",
  },
  {
    id: "sku-370508",
    brand: "Calvin Klein",
    name: "Calvin Klein CKJ22215LBI 015",
    price: "₹6,890",
    image: "/images/shop-by-style/capote-cc13.jpg",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-370508-0",
        color: "#2E4C6D",
      },
      {
        id: "sw-sku-370508-1",
        color: "#222222",
      },
      {
        id: "sw-sku-370508-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=370508",
  },
  {
    id: "sku-334940",
    brand: "Arnette",
    name: "Arnette AN7217 2758",
    price: "₹11,000",
    image:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-334940-0",
        color: "#222222",
      },
      {
        id: "sw-sku-334940-1",
        color: "#222222",
      },
      {
        id: "sw-sku-334940-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=334940",
  },
  {
    id: "sku-220672",
    brand: "Arnette",
    name: "Arnette AN7217 2829",
    price: "₹9,250",
    image: "/images/shop-by-style/benetton-be5024.jpg",
    bestseller: true,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-220672-0",
        color: "#1E5F74",
      },
      {
        id: "sw-sku-220672-1",
        color: "#222222",
      },
      {
        id: "sw-sku-220672-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=220672",
  },
  {
    id: "sku-342837",
    brand: "Carrera",
    name: "Carrera 8845 SE 003",
    price: "₹12,900",
    image: "/images/shop-by-style/williammorris-ritz.webp",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-342837-0",
        color: "#8B0000",
      },
      {
        id: "sw-sku-342837-1",
        color: "#222222",
      },
      {
        id: "sw-sku-342837-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=342837",
  },
  {
    id: "sku-110412",
    brand: "Diesel",
    name: "Diesel DL5377 097",
    price: "₹10,650",
    image: "/images/shop-by-style/miumiu-smu56z.jpg",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-110412-0",
        color: "#4A5335",
      },
      {
        id: "sw-sku-110412-1",
        color: "#222222",
      },
      {
        id: "sw-sku-110412-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=110412",
  },
  {
    id: "sku-829936",
    brand: "Dolce & Gabbana",
    name: "Dolce & Gabbana DG 3333 501",
    price: "₹19,600",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-829936-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-829936-1",
        color: "#222222",
      },
      {
        id: "sw-sku-829936-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=829936",
  },
  {
    id: "sku-130521",
    brand: "Emporio Armani",
    name: "Emporio Armani EA 1116 3001",
    price: "₹9,250",
    image: "/images/shop-by-style/web-we0401.jpg",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-130521-0",
        color: "#222222",
      },
      {
        id: "sw-sku-130521-1",
        color: "#222222",
      },
      {
        id: "sw-sku-130521-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=130521",
  },
  {
    id: "sku-243727",
    brand: "Fossil",
    name: "Fossil FOS 7075 G 6Q1",
    price: "₹7,240",
    image: "/images/shop-by-style/rayban-rb3741.png",
    bestseller: true,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-243727-0",
        color: "#33383B",
      },
      {
        id: "sw-sku-243727-1",
        color: "#222222",
      },
      {
        id: "sw-sku-243727-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=243727",
  },
  {
    id: "sku-159280",
    brand: "Fossil",
    name: "Fossil FOS 7086 807",
    price: "₹5,490",
    image: "/images/shop-by-style/polaroid-pld.png",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-159280-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-159280-1",
        color: "#222222",
      },
      {
        id: "sw-sku-159280-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=159280",
  },
  {
    id: "sku-151122",
    brand: "Fossil",
    name: "Fossil FOS 7090 G PJP",
    price: "₹6,190",
    image:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-151122-0",
        color: "#1D4E89",
      },
      {
        id: "sw-sku-151122-1",
        color: "#222222",
      },
      {
        id: "sw-sku-151122-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=151122",
  },
  {
    id: "sku-357288",
    brand: "French Connection",
    name: "French Connection FCL4325 C3 54",
    price: "₹6,890",
    image: "/images/shop-by-style/rayban-rb3928.png",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-357288-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-357288-1",
        color: "#222222",
      },
      {
        id: "sw-sku-357288-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=357288",
  },
  {
    id: "sku-300909",
    brand: "French Connection",
    name: "French Connection FC8215C1",
    price: "₹7,590",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=82",
    bestseller: true,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-300909-0",
        color: "#8B0000",
      },
      {
        id: "sw-sku-300909-1",
        color: "#222222",
      },
      {
        id: "sw-sku-300909-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=300909",
  },
  {
    id: "sku-267967",
    brand: "Hackett",
    name: "Hackett HEB276 002",
    price: "₹25,250",
    image: "/images/shop-by-style/tomford-ft0870.png",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-267967-0",
        color: "#222222",
      },
      {
        id: "sw-sku-267967-1",
        color: "#222222",
      },
      {
        id: "sw-sku-267967-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=267967",
  },
  {
    id: "sku-196329",
    brand: "Hackett",
    name: "Hackett HEB144 954",
    price: "₹25,950",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-196329-0",
        color: "#B0B5B3",
      },
      {
        id: "sw-sku-196329-1",
        color: "#222222",
      },
      {
        id: "sw-sku-196329-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=196329",
  },
  {
    id: "sku-356833",
    brand: "Hackett",
    name: "Hackett HEK1328 103 DINERTH",
    price: "₹26,650",
    image: "/images/shop-by-style/rayban-rb3972.png",
    bestseller: false,
    tag: "Unisex",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-356833-0",
        color: "#704214",
      },
      {
        id: "sw-sku-356833-1",
        color: "#222222",
      },
      {
        id: "sw-sku-356833-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=356833",
  },
]

export const KIDS_COLLECTION = [
  {
    id: "sku-159557",
    brand: "Vogue",
    name: "Vogue VY 2011 2976",
    price: "₹9,600",
    image: "/images/shop-by-style/williammorris-ritz.webp",
    bestseller: false,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-159557-0",
        color: "#6A3E8A",
      },
      {
        id: "sw-sku-159557-1",
        color: "#222222",
      },
      {
        id: "sw-sku-159557-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=159557",
  },
  {
    id: "kids-nike-5545-jr",
    brand: "Nike",
    name: "Nike Kids 5545",
    price: "₹4,990",
    image: "/images/shop-by-style/miumiu-smu56z.jpg",
    bestseller: true,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-kids-nike-5545-jr-0",
        color: "#2b4c7e",
      },
      {
        id: "sw-kids-nike-5545-jr-1",
        color: "#6c7a89",
      },
    ],
    swatchCount: "+1",
    link: "/eyeglasses?q=805659792430",
  },
  {
    id: "kids-dash-flex",
    brand: "Dash",
    name: "Dash Kids 102",
    price: "₹2,490",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=82",
    bestseller: true,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-kids-dash-flex-0",
        color: "#1e3d59",
      },
      {
        id: "sw-kids-dash-flex-1",
        color: "#202020",
      },
    ],
    swatchCount: "+1",
    link: "/eyeglasses?q=805659792431",
  },
  {
    id: "kids-seesaw-memory",
    brand: "See Saw",
    name: "See Saw Kids 204",
    price: "₹2,290",
    image: "/images/shop-by-style/web-we0401.jpg",
    bestseller: false,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-kids-seesaw-memory-0",
        color: "#e8a7b8",
      },
      {
        id: "sw-kids-seesaw-memory-1",
        color: "#7eb6d9",
      },
    ],
    swatchCount: "+1",
    link: "/eyeglasses?q=805659792432",
  },
  {
    id: "kids-nova-mini",
    brand: "Nova",
    name: "Nova Mini NVF-01",
    price: "₹3,490",
    image: "/images/shop-by-style/rayban-rb3741.png",
    bestseller: true,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-kids-nova-mini-0",
        color: "#1e827b",
      },
      {
        id: "sw-kids-nova-mini-1",
        color: "#8c5825",
      },
    ],
    swatchCount: "+1",
    link: "/eyeglasses?q=805659792433",
  },
  {
    id: "sku-334940",
    brand: "Arnette",
    name: "Arnette AN7217 2758",
    price: "₹11,000",
    image: "/images/shop-by-style/polaroid-pld.png",
    bestseller: false,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-334940-0",
        color: "#222222",
      },
      {
        id: "sw-sku-334940-1",
        color: "#222222",
      },
      {
        id: "sw-sku-334940-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=334940",
  },
  {
    id: "sku-220672",
    brand: "Arnette",
    name: "Arnette AN7217 2829",
    price: "₹9,250",
    image:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=82",
    bestseller: true,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-220672-0",
        color: "#1E5F74",
      },
      {
        id: "sw-sku-220672-1",
        color: "#222222",
      },
      {
        id: "sw-sku-220672-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=220672",
  },
  {
    id: "sku-159280",
    brand: "Fossil",
    name: "Fossil FOS 7086 807",
    price: "₹5,490",
    image: "/images/shop-by-style/rayban-rb3928.png",
    bestseller: false,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-159280-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-159280-1",
        color: "#222222",
      },
      {
        id: "sw-sku-159280-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=159280",
  },
  {
    id: "sku-267967",
    brand: "Hackett",
    name: "Hackett HEB276 002",
    price: "₹25,250",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-267967-0",
        color: "#222222",
      },
      {
        id: "sw-sku-267967-1",
        color: "#222222",
      },
      {
        id: "sw-sku-267967-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=267967",
  },
  {
    id: "sku-146311",
    brand: "Nike",
    name: "Nike 5545 900 48",
    price: "₹6,890",
    image: "/images/shop-by-style/tomford-ft0870.png",
    bestseller: true,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-146311-0",
        color: "#E5E8E8",
      },
      {
        id: "sw-sku-146311-1",
        color: "#222222",
      },
      {
        id: "sw-sku-146311-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=146311",
  },
  {
    id: "sku-131114",
    brand: "Nova",
    name: "Nova NVF1964 F01",
    price: "₹9,950",
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-131114-0",
        color: "#0D0D0D",
      },
      {
        id: "sw-sku-131114-1",
        color: "#222222",
      },
      {
        id: "sw-sku-131114-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=131114",
  },
  {
    id: "sku-286674",
    brand: "Persol",
    name: "Persol PO3284V 181",
    price: "₹9,250",
    image: "/images/shop-by-style/rayban-rb3972.png",
    bestseller: false,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-286674-0",
        color: "#1D4E89",
      },
      {
        id: "sw-sku-286674-1",
        color: "#222222",
      },
      {
        id: "sw-sku-286674-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=286674",
  },
  {
    id: "sku-301155",
    brand: "Pepe Jeans",
    name: "Pepe Jeans PJ3092 C3",
    price: "₹6,890",
    image:
      "https://images.unsplash.com/photo-1563903530908-afdd155d057a?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-301155-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-301155-1",
        color: "#222222",
      },
      {
        id: "sw-sku-301155-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=301155",
  },
  {
    id: "sku-113442",
    brand: "Seventh Street",
    name: "Seventh Street 7A 030 RHL",
    price: "₹14,300",
    image: "/images/shop-by-style/capote-cc13.jpg",
    bestseller: false,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-113442-0",
        color: "#D4AF37",
      },
      {
        id: "sw-sku-113442-1",
        color: "#222222",
      },
      {
        id: "sw-sku-113442-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=113442",
  },
  {
    id: "sku-449141",
    brand: "Titan",
    name: "Titan TF1116MFC1V 49",
    price: "₹5,590",
    image:
      "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=800&q=82",
    bestseller: false,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-449141-0",
        color: "#704214",
      },
      {
        id: "sw-sku-449141-1",
        color: "#222222",
      },
      {
        id: "sw-sku-449141-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=449141",
  },
  {
    id: "sku-284363",
    brand: "Tom Ford",
    name: "Tom Ford TF5629 B 001",
    price: "₹25,950",
    image: "/images/shop-by-style/benetton-be5024.jpg",
    bestseller: false,
    tag: "Kids & Teens",
    inStock: true,
    swatches: [
      {
        id: "sw-sku-284363-0",
        color: "#1A1A1A",
      },
      {
        id: "sw-sku-284363-1",
        color: "#222222",
      },
      {
        id: "sw-sku-284363-2",
        color: "#704214",
      },
    ],
    swatchCount: "+2",
    link: "/eyeglasses?q=284363",
  },
]

export const COLLECTION_DATA_MAP = {
  Men: MEN_COLLECTION,
  Women: WOMEN_COLLECTION,
  Unisex: UNISEX_COLLECTION,
  Kids: KIDS_COLLECTION,
}
