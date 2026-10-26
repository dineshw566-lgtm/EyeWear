export const business = {
  name: "VIZHEN PLUS OPTICS",
  shortName: "VIZHEN",
  tagline: "FOR YOUR PERFECT VISION",
  location:
    "D.No. 268, Sri Nataraja Ginning Factory Compound, Avinashi Road, Bungalow Stop Signal, Tirupur – 641602, Tamil Nadu, India",
  phone: "+91 99760 71233",
  email: "vizhenplusoptics@gmail.com",
  hours: "Monday – Sunday: 9:30 AM – 10:00 PM",
  whatsappNumber: "919976071233",
  logoUrl: "/logo.png",
  logoMarkUrl: "/logo-mark.png",
  instagram: "https://www.instagram.com/vizhenplusoptics/",
  facebook: "https://www.facebook.com/vizhenplusoptics",
  googleMapsUrl:
    "https://maps.google.com/?q=D.No.268+Sri+Nataraja+Ginning+Factory+Compound+Avinashi+Road+Tirupur+641602",
}

export const buildWhatsAppUrl = (message) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`
