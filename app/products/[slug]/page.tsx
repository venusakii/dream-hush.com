import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { notFound } from "next/navigation"

const products = [
  {
    name: "Magicteam Sound Machine",
    slug: "magicteam-classic",
    tagline: "20 Soothing Sounds Classic",
    price: "$36",
    description: "Best-selling compact white noise machine with 20 natural sounds, timer, and memory function.",
    image: "https://m.media-amazon.com/images/I/71CBN1gUirL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Magicteam-Machine-Looping-Soothing-Function/dp/B07RWRJ4XW",
    features: [
      "20 Natural Sounds",
      "Timer & Auto-Off",
      "Memory Function",
      "Volume Control",
      "Compact Design",
      "Headphone Jack",
    ],
    specs: { dimensions: '3.9" × 3.9" × 2.3"', weight: "0.65 lbs", battery: "AC/USB Powered", connectivity: "None" },
  },
  {
    name: "Yogasleep Dohm Original",
    slug: "yogasleep-dohm",
    tagline: "The Original Fan-Based White Noise",
    price: "$49",
    description: "Iconic mechanical white noise machine with real moving fan sound – trusted for over 60 years.",
    image: "https://m.media-amazon.com/images/I/61217alRDQL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Yogasleep-Original-Soothing-Cancelling-Meditation/dp/B00HD0ELFK",
    features: ["Real Fan Sound", "Two Speed Settings", "Non-Looping", "Hand-Assembled", "Natural Sleep Aid"],
    specs: { dimensions: '5.75" × 5.75" × 3.75"', weight: "1.6 lbs", battery: "AC Powered", connectivity: "None" },
  },
  {
    name: "SNOOZ White Noise Machine",
    slug: "snooz-white",
    tagline: "Real Fan Inside – No Loops",
    price: "$99",
    description: "Premium white noise with actual moving fan. Fully adjustable tone and volume.",
    image: "https://m.media-amazon.com/images/I/71L9YvdXUmL._AC_SX466_.jpg",
    amazonUrl: "https://www.amazon.com/SNOOZ-White-Noise-Sound-Machine/dp/B076F2JKYC",
    features: ["Real Moving Fan", "10 Volume Levels", "Adjustable Tone", "Optional App", "Nursery Safe"],
    specs: {
      dimensions: '5.6" × 5.6" × 3.3"',
      weight: "2.0 lbs",
      battery: "AC Powered",
      connectivity: "Bluetooth Optional",
    },
  },
  {
    name: "Housbay Glows",
    slug: "housbay-glows",
    tagline: "31 Sounds + Colorful Night Light",
    price: "$39",
    description: "Modern white noise machine with 31 HiFi sounds and 7-color ambient lighting.",
    image: "https://m.media-amazon.com/images/I/61Tem9vYEDL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Machine-Soothing-Sounds-Colors-Adults/dp/B0D46Z9MC9",
    features: ["31 Soothing Sounds", "7 Color Lights", "Timer", "Child Lock", "Memory Function"],
    specs: { dimensions: '4.7" × 4.7" × 2.4"', weight: "0.8 lbs", battery: "AC/USB Powered", connectivity: "None" },
  },
  {
    name: "Dreamegg D11 Portable",
    slug: "dreamegg-portable",
    tagline: "Rechargeable Travel Essential",
    price: "$35",
    description: "Portable rechargeable white noise machine with 21 sounds – perfect for travel and babies.",
    image: "https://m.media-amazon.com/images/I/61Duona9HWL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Canceling-White-Sleeping-Nightlight-Calm/dp/B0CQ71ZTZV",
    features: ["21 Sounds", "Rechargeable Battery", "Up to 12h Playtime", "Clip & Lanyard", "Timer"],
    specs: { dimensions: '3.4" × 3.4" × 1.4"', weight: "0.4 lbs", battery: "Up to 12 hours", connectivity: "None" },
  },
  {
    name: "LectroFan Evo",
    slug: "lectrofan-evo",
    tagline: "22 Non-Looping Digital Sounds",
    price: "$54",
    description: "Gold standard in electronic white noise – fan, white, pink & brown noise.",
    image: "https://m.media-amazon.com/images/I/51E316urhTL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Adaptive-Sound-Technologies-LectroFan-Non-Looping/dp/B00E6D6LQY",
    features: ["22 Unique Sounds", "Non-Looping", "Precise Volume", "60min Timer", "Travel Friendly"],
    specs: { dimensions: '4.7" × 4.7" × 3.3"', weight: "1.2 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "Housbay White Noise Machine",
    slug: "housbay-basic",
    tagline: "Simple & Effective Sleep Aid",
    price: "$32",
    description: "Clean design with 31 soothing sounds and adjustable volume.",
    image: "https://m.media-amazon.com/images/I/711ra7QGb4L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Housbay-Machine-Soothing-Auto-Off-Adjustable/dp/B0865VQMH8",
    features: ["31 Sounds", "Auto-Off Timer", "Adjustable Volume", "Memory Function", "Compact"],
    specs: { dimensions: '4.7" × 4.7" × 2.4"', weight: "0.8 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "Housbay 2024 Model",
    slug: "housbay-2024",
    tagline: "Updated Design + 31 Sounds",
    price: "$44",
    description: "Latest Housbay with improved sound quality and sleek design.",
    image: "https://m.media-amazon.com/images/I/71JulbuCj4L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Housbay-Machine-Sleeping-Soothing-Canceling/dp/B0F48628M2",
    features: ["31 HiFi Sounds", "Modern Design", "Timer", "Memory", "Headphone Jack"],
    specs: { dimensions: '4.7" × 4.7" × 2.5"', weight: "0.85 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "Housbay Wooden",
    slug: "housbay-wooden",
    tagline: "Premium Wooden Finish",
    price: "$49",
    description: "Elegant wooden look with 31 sounds and dimmable warm light.",
    image: "https://m.media-amazon.com/images/I/51Pn6oaHlUL._AC_SX466_.jpg",
    amazonUrl: "https://www.amazon.com/HOUSBAY-Machine-Dimmable-Sleeping-Baby-Wooden/dp/B0BZ73VS6N",
    features: ["31 Sounds", "Dimmable Light", "Wooden Design", "Timer", "Memory"],
    specs: { dimensions: '4.7" × 4.7" × 2.6"', weight: "1.0 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "LectroFan Micro2",
    slug: "lectrofan-micro2",
    tagline: "Pocket-Sized + Bluetooth Speaker",
    price: "$34",
    description: "Tiny but powerful – 11 non-looping sounds + full Bluetooth speaker.",
    image: "https://m.media-amazon.com/images/I/71o2faWTNRL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/LectroFan-Guaranteed-Non-Looping-Sound-Toddlers/dp/B086RMXN61",
    features: ["11 Digital Sounds", "Bluetooth Speaker", "Rechargeable", "Twist Design", "Travel Case"],
    specs: { dimensions: '2.5" diameter', weight: "0.3 lbs", battery: "Up to 16 hours", connectivity: "Bluetooth 5.0" },
  },
  {
    name: "Yogasleep GO Portable",
    slug: "yogasleep-go",
    tagline: "Ultra-Portable Travel Soother",
    price: "$39",
    description: "Pocket-sized rechargeable with 10 rich, deep sounds.",
    image: "https://m.media-amazon.com/images/I/61ig+5sBQIL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Portable-Relaxing-Soothing-Charging-Auto-Off/dp/B00A2JBMRE",
    features: ["10 Rich Sounds", "Rechargeable", "12h Battery", "Clip Design", "Timer"],
    specs: { dimensions: '3.5" × 3.5" × 1.5"', weight: "0.35 lbs", battery: "Up to 12 hours", connectivity: "None" },
  },
  {
    name: "Hatch Rest Go",
    slug: "hatch-rest-go",
    tagline: "Baby & Travel Essential",
    price: "$39",
    description: "Portable version of the famous Hatch Rest – perfect for strollers.",
    image: "https://m.media-amazon.com/images/I/61IG9t3A4lL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Portable-Soothing-Function-Headphone-Charging/dp/B07K3WVXMV",
    features: ["10 Sounds", "Rechargeable", "Volume Limiter", "Drop-Proof", "Strap"],
    specs: { dimensions: '4.5" × 2.5" × 1.5"', weight: "0.35 lbs", battery: "Up to 12 hours", connectivity: "None" },
  },
  {
    name: "Momcozy Portable",
    slug: "momcozy-portable",
    tagline: "Soft Fabric Stroller Soother",
    price: "$32",
    description: "Soft fabric design with 10 lullabies – ideal for newborns.",
    image: "https://m.media-amazon.com/images/I/61AUYmxWb0L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Machine-Soothing-Sounds-Sleeping-Feature/dp/B09SG9TZNS",
    features: ["10 Lullabies", "Soft Fabric", "20h Battery", "Stroller Strap", "Auto-Off"],
    specs: { dimensions: '4.0" × 3.5" × 1.8"', weight: "0.45 lbs", battery: "Up to 20 hours", connectivity: "None" },
  },
  {
    name: "Dr. Talbot's Portable",
    slug: "dr-talbots",
    tagline: "Baby-Safe Rounded Design",
    price: "$33",
    description: "Soft rounded portable soother with 10 calming sounds.",
    image: "https://m.media-amazon.com/images/I/71Il67Mwk-L._SX466_.jpg",
    amazonUrl: "https://www.amazon.com/Dreamegg-White-Noise-Machine-Canceling/dp/B0BBQX7P5J",
    features: ["10 Sounds", "Soft Design", "Rechargeable", "Timer", "Volume Control"],
    specs: { dimensions: '4.0" × 3.5" × 1.8"', weight: "0.4 lbs", battery: "Up to 15 hours", connectivity: "None" },
  },
  {
    name: "MyBaby by Homedics",
    slug: "mybaby-hoomedics",
    tagline: "Classic Baby Sound Machine",
    price: "$29",
    description: "Affordable and reliable with lullabies, heartbeat, and nature sounds.",
    image: "https://m.media-amazon.com/images/I/71LfMJVEnWL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Machine-Portable-Soothing-Auto-Off-Rechargeable/dp/B0CYL4ZVWP",
    features: ["6 Sounds", "Heartbeat", "Lullabies", "Auto-Off Timer", "Portable"],
    specs: { dimensions: '4.5" × 4.5" × 3.0"', weight: "0.8 lbs", battery: "AC/Battery", connectivity: "None" },
  },
  {
    name: "Easysleep 40 Sounds",
    slug: "easysleep-40",
    tagline: "40 Sounds + Colorful Lights",
    price: "$45",
    description: "Feature-packed with 40 sounds and 7-color night light.",
    image: "https://m.media-amazon.com/images/I/51zRsPEt8GL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Machine-Portable-Soothing-Rechargeable-Function/dp/B0DZXCKRGB",
    features: ["40 Sounds", "7 Colors", "Remote Control", "Timer", "Memory"],
    specs: { dimensions: '5.1" × 5.1" × 2.8"', weight: "1.1 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "LectroFan Classic",
    slug: "lectrofan-classic",
    tagline: "Original 20 Non-Looping Sounds",
    price: "$49",
    description: "The original LectroFan with 20 unique non-looping sounds.",
    image: "https://m.media-amazon.com/images/I/71WLW95Q4DL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Portable-Machine-Soothing-Newborn-Function/dp/B0FGCQX62F",
    features: ["20 Sounds", "Non-Looping", "Timer", "Solid Build", "Volume Control"],
    specs: { dimensions: '4.7" × 4.7" × 3.3"', weight: "1.2 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "Yogasleep Nova",
    slug: "yogasleep-nova",
    tagline: "Wireless Portable with Light",
    price: "$59",
    description: "Wireless rechargeable with 10 sounds and dimmable night light.",
    image: "https://m.media-amazon.com/images/I/612-i8iioGL._SX466_.jpg",
    amazonUrl: "https://www.amazon.com/Portable-Function-Soothing-Registry-Stroller/dp/B0DT6ZPT5X",
    features: ["10 Sounds", "Wireless", "Dimmable Light", "Rechargeable", "Timer"],
    specs: { dimensions: '4.0" × 4.0" × 2.2"', weight: "0.7 lbs", battery: "Up to 15 hours", connectivity: "None" },
  },
  {
    name: "Kipcush Portable",
    slug: "kipcush",
    tagline: "30 Sounds Clip-On",
    price: "$38",
    description: "Clip-on portable with 30 sounds – perfect for strollers.",
    image: "https://m.media-amazon.com/images/I/61ltMp0wY8L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Portable-Machine-Long-Lasting-Soothing-Privacy/dp/B0FZJNRZJS",
    features: ["30 Sounds", "Clip", "Rechargeable", "Auto-Off"],
    specs: { dimensions: '3.8" × 3.8" × 1.6"', weight: "0.4 lbs", battery: "Up to 18h", connectivity: "None" },
  },
  {
    name: "Easysleep Travel",
    slug: "easysleep-travel",
    tagline: "2025 Portable Edition",
    price: "$39",
    description: "Newest portable with long battery and 30 sounds.",
    image: "https://m.media-amazon.com/images/I/61-yqPUoulL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/iDealSleep-Machine-Soothing-Auto-Off-Function/dp/B0BB74JTQY",
    features: ["30 Sounds", "Rechargeable", "20h Battery", "Lightweight"],
    specs: { dimensions: '3.5" × 3.5" × 1.5"', weight: "0.35 lbs", battery: "Up to 20h", connectivity: "None" },
  },
  {
    name: "FamiSym",
    slug: "famisym",
    tagline: "30 Sounds + Night Light",
    price: "$37",
    description: "Popular choice with warm light and 30 sounds.",
    image: "https://m.media-amazon.com/images/I/911aqXiJtLL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/SNOOZ-Go-Portable-Non-Looping-Bluetooth/dp/B08NVBCR46",
    features: ["30 Sounds", "Night Light", "Timer", "Memory"],
    specs: { dimensions: '4.5" × 4.5" × 2.3"', weight: "0.8 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "Nytpal Portable",
    slug: "nytpal",
    tagline: "With Aromatherapy Slot",
    price: "$41",
    description: "Portable with essential oil slot and 20 sounds.",
    image: "https://m.media-amazon.com/images/I/81-6qA-CqjL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Nytpal-Portable-sleeping-dimmable-essential/dp/B0CT8P8FMZ",
    features: ["20 Sounds", "Aroma Slot", "Rechargeable", "Light"],
    specs: { dimensions: '3.8" × 3.8" × 1.7"', weight: "0.45 lbs", battery: "Up to 18h", connectivity: "None" },
  },
  {
    name: "iDealSleep",
    slug: "idealsleep",
    tagline: "30 Sounds + Remote",
    price: "$43",
    description: "Full-featured with remote and 30 sounds.",
    image: "https://m.media-amazon.com/images/I/719exIQr86L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Portable-Machine-Sleeping-Non-looping-Headphone/dp/B0CS6DPJ9N",
    features: ["30 Sounds", "Remote", "Timer", "Memory"],
    specs: { dimensions: '5.0" × 5.0" × 2.5"', weight: "1.0 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "CHICWAY Smart",
    slug: "chicway",
    tagline: "Cry Detection + Bluetooth",
    price: "$69",
    description: "Smart baby soother with cry detection and Bluetooth.",
    image: "https://m.media-amazon.com/images/I/51UUYzdPINL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/White-Noise-Sound-Machine-Relaxation/dp/B07F7LWYDR",
    features: ["Cry Detection", "Bluetooth", "Auto-On", "Rechargeable"],
    specs: { dimensions: '4.5" × 4.5" × 2.0"', weight: "0.7 lbs", battery: "Up to 20h", connectivity: "Bluetooth" },
  },
  {
    name: "ErgoPouch Drift",
    slug: "ergopouch",
    tagline: "Premium Organic Cotton",
    price: "$79",
    description: "Luxury baby soother with organic cotton cover.",
    image: "https://m.media-amazon.com/images/I/81nMoCzgiwL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Momcozy-Portable-Soothing-Long-Lasting-Stroller/dp/B0DZBMV3LM",
    features: ["Organic Cotton", "10 Sounds", "Night Light", "Rechargeable"],
    specs: { dimensions: '5.0" × 5.0" × 2.5"', weight: "0.9 lbs", battery: "Up to 18h", connectivity: "None" },
  },
  {
    name: "Dreamegg D1",
    slug: "dreamegg-d1",
    tagline: "Powerful Sound + Light",
    price: "$42",
    description: "High-quality 21 sounds with warm night light.",
    image: "https://m.media-amazon.com/images/I/612XHNPPzJL._SX466_.jpg",
    amazonUrl: "https://www.amazon.com/Dr-Talbots-Portable-Sound-Machine/dp/B0C5F3YZ1J",
    features: ["21 Sounds", "Night Light", "Timer", "Memory"],
    specs: { dimensions: '4.7" × 4.7" × 2.4"', weight: "0.9 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "Portable Sound Machine",
    slug: "portable-29",
    tagline: "30 Sounds Travel",
    price: "$36",
    description: "Compact travel-ready with 30 soothing sounds.",
    image: "https://m.media-amazon.com/images/I/71E3MuY80DL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Battery-Powered-Machine-Calming-Privacy/dp/B0FP4ZX53K",
    features: ["30 Sounds", "Rechargeable", "Timer", "Lightweight"],
    specs: { dimensions: '3.6" × 3.6" × 1.6"', weight: "0.38 lbs", battery: "Up to 18h", connectivity: "None" },
  },
  {
    name: "Baby Portable Soother",
    slug: "baby-portable-30",
    tagline: "Newborn Favorite",
    price: "$34",
    description: "Soft design with 10 sounds for newborns.",
    image: "https://m.media-amazon.com/images/I/61Bu8LnqA3L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Hatch-Portable-Baby-Soothing-Registry/dp/B0C5S6SRM2",
    features: ["10 Sounds", "Soft Touch", "Rechargeable", "Timer"],
    specs: { dimensions: '3.8" × 3.8" × 1.7"', weight: "0.4 lbs", battery: "Up to 16h", connectivity: "None" },
  },
  {
    name: "Stroller Clip Soother",
    slug: "stroller-clip",
    tagline: "Registry Essential",
    price: "$37",
    description: "Clip-on design with 10 sounds for strollers.",
    image: "https://m.media-amazon.com/images/I/81LVYpT6t4L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Portable-Travel-Sound-Machine-Adults/dp/B0DMZSXF23",
    features: ["10 Sounds", "Stroller Clip", "Rechargeable", "Auto-Off"],
    specs: { dimensions: '4.0" × 3.0" × 1.5"', weight: "0.35 lbs", battery: "Up to 20h", connectivity: "None" },
  },
  {
    name: "Long Battery Portable",
    slug: "long-battery",
    tagline: "48-Hour Playtime",
    price: "$44",
    description: "Ultra-long battery portable white noise.",
    image: "https://m.media-amazon.com/images/I/6130i7Rd4tL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/LectroFan-Guaranteed-Non-Looping-Sound-Relaxation/dp/B07MZN92LX",
    features: ["30 Sounds", "48h Battery", "Premium Build", "Case Included"],
    specs: { dimensions: '3.8" × 3.8" × 1.7"', weight: "0.45 lbs", battery: "Up to 48h", connectivity: "None" },
  },
  {
    name: "Rechargeable Travel",
    slug: "rechargeable-33",
    tagline: "30 Sounds Portable",
    price: "$38",
    description: "Rechargeable with 30 sounds and timer.",
    image: "https://m.media-amazon.com/images/I/612GHRDb+PL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Yogasleep-Portable-Soothing-Wireless-Canceling/dp/B0BMCY5C48",
    features: ["30 Sounds", "Rechargeable", "Timer", "Lightweight"],
    specs: { dimensions: '3.6" × 3.6" × 1.5"', weight: "0.39 lbs", battery: "Up to 18h", connectivity: "None" },
  },
  {
    name: "Newborn Portable",
    slug: "newborn-34",
    tagline: "Soft & Safe",
    price: "$35",
    description: "Designed for newborns with soft materials.",
    image: "https://m.media-amazon.com/images/I/51Nx+PRUJPL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Yogasleep-Portable-Soothing-Dimmable-Rechargeable/dp/B088BS1L7L",
    features: ["10 Sounds", "Soft Design", "Rechargeable", "Timer"],
    specs: { dimensions: '4.0" × 3.5" × 1.8"', weight: "0.4 lbs", battery: "Up to 16h", connectivity: "None" },
  },
  {
    name: "Colorful Portable",
    slug: "colorful-portable",
    tagline: "With Night Light",
    price: "$42",
    description: "Portable with colorful lights and 30 sounds.",
    image: "https://m.media-amazon.com/images/I/71dq8cP0gyL._SX466_.jpg",
    amazonUrl: "https://www.amazon.com/Portable-Machine-Nightlight-Soothing-Stroller/dp/B099FH2XKH",
    features: ["30 Sounds", "Color Light", "Rechargeable", "Timer"],
    specs: { dimensions: '4.2" × 4.2" × 2.0"', weight: "0.6 lbs", battery: "Up to 15h", connectivity: "None" },
  },
  {
    name: "Nightlight Portable",
    slug: "nightlight-portable",
    tagline: "Stroller & Travel Ready",
    price: "$39",
    description: "Portable with night light and stroller strap.",
    image: "https://m.media-amazon.com/images/I/71FQ26IHgVL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Easysleep-Portable-Soothing-Function-Rechargeable/dp/B0DTK4RYYQ",
    features: ["10 Sounds", "Night Light", "Stroller Strap", "Rechargeable"],
    specs: { dimensions: '3.5" × 3.5" × 1.6"', weight: "0.4 lbs", battery: "Up to 18h", connectivity: "None" },
  },
  {
    name: "Travel Sound Machine",
    slug: "travel-2025",
    tagline: "Compact & Powerful",
    price: "$41",
    description: "Latest travel model with 30 sounds.",
    image: "https://m.media-amazon.com/images/I/61dWmZlfswL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/FamiSym-White-Noise-Machine-Sleeping/dp/B09YRYM9XF",
    features: ["30 Sounds", "Compact", "Timer", "Memory"],
    specs: { dimensions: '4.0" × 4.0" × 2.0"', weight: "0.5 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "Battery Powered Soother",
    slug: "battery-powered",
    tagline: "Privacy Anywhere",
    price: "$36",
    description: "Battery-powered portable for privacy and sleep.",
    image: "https://m.media-amazon.com/images/I/51K4Q-mLp1L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/ergoPouch-White-Noise-Machine-Drift/dp/B0C3LPWPTC",
    features: ["Privacy", "Battery Operated", "Compact", "Simple"],
    specs: { dimensions: '4.5" × 4.5" × 2.5"', weight: "0.6 lbs", battery: "AA Batteries", connectivity: "None" },
  },
  {
    name: "Rechargeable Soother",
    slug: "rechargeable-39",
    tagline: "Long-Lasting Battery",
    price: "$37",
    description: "Rechargeable with long-lasting battery.",
    image: "https://m.media-amazon.com/images/I/71egpA8Jg6L._SX466_.jpg",
    amazonUrl: "https://www.amazon.com/MyBaby-Baby-Sound-Machine-Lightweight/dp/B07317NQKW",
    features: ["Rechargeable", "Long Battery", "Timer", "Compact"],
    specs: { dimensions: '4.0" × 4.0" × 2.0"', weight: "0.55 lbs", battery: "Up to 24h", connectivity: "None" },
  },
  {
    name: "Non-Looping Portable",
    slug: "non-looping-40",
    tagline: "Seamless Sound Experience",
    price: "$40",
    description: "Portable non-looping with headphone support.",
    image: "https://m.media-amazon.com/images/I/61+tJxq4b-L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/CHICWAY-Portable-Detection-Bluetooth-Canceling/dp/B0DDX9TR5V",
    features: ["Non-Looping", "Headphone Jack", "Bluetooth", "Rechargeable"],
    specs: { dimensions: '2.5" diameter', weight: "0.3 lbs", battery: "Up to 16h", connectivity: "Bluetooth" },
  },
  {
    name: "Relaxation Sound Machine",
    slug: "relaxation-41",
    tagline: "Deep Relaxation Aid",
    price: "$33",
    description: "Classic white noise machine for deep relaxation.",
    image: "https://m.media-amazon.com/images/I/61wy7C101SL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Dreamegg-White-Noise-Machine-Canceling/dp/B0DSFXN8XG",
    features: ["Relaxation Sounds", "Timer", "Volume Control", "Compact"],
    specs: { dimensions: '4.5" × 4.5" × 2.5"', weight: "0.8 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "Non-Looping White Noise",
    slug: "non-looping-42",
    tagline: "Pure White Noise",
    price: "$45",
    description: "True non-looping white noise experience.",
    image: "https://m.media-amazon.com/images/I/71TcmBFHg4L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/White-Noise-Machine-Non-looping-Canceling/dp/B0F9P4C7S8",
    features: ["Non-Looping", "High Fidelity", "Precise Volume", "Timer"],
    specs: { dimensions: '4.7" × 4.7" × 3.3"', weight: "1.2 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "Headphone Portable",
    slug: "headphone-portable",
    tagline: "Private Listening",
    price: "$38",
    description: "Portable with headphone jack for private use.",
    image: "https://m.media-amazon.com/images/I/91cLm7JZLBL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Rechargeable-Smoothing-Portable-Sleeping-Auto-Off/dp/B0B4JJFJWV",
    features: ["Headphone Jack", "Portable", "Timer", "Rechargeable"],
    specs: { dimensions: '3.5" × 3.5" × 1.5"', weight: "0.4 lbs", battery: "Up to 18h", connectivity: "None" },
  },
  {
    name: "Basic Sleep Machine",
    slug: "basic-44",
    tagline: "Essential Sleep Sounds",
    price: "$31",
    description: "Simple and effective with essential sleep sounds.",
    image: "https://m.media-amazon.com/images/I/71WLW95Q4DL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Portable-Machine-Soothing-Newborn-Function/dp/B0FGCQX62F",
    features: ["Essential Sounds", "Simple Controls", "Timer", "Compact"],
    specs: { dimensions: '4.2" × 4.2" × 2.2"', weight: "0.7 lbs", battery: "AC/USB", connectivity: "None" },
  },
  {
    name: "Long Play Portable",
    slug: "long-play-45",
    tagline: "Extended Playtime",
    price: "$40",
    description: "Portable with extra-long battery life.",
    image: "https://m.media-amazon.com/images/I/71iUZDtaO+L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Portable-Adjustable-Colorful-Rechargeable-Registry/dp/B0F9Y8FM76",
    features: ["Long Battery", "30 Sounds", "Timer", "Memory"],
    specs: { dimensions: '3.8" × 3.8" × 1.8"', weight: "0.5 lbs", battery: "Up to 36h", connectivity: "None" },
  },
  {
    name: "Final Portable Soother",
    slug: "final-portable",
    tagline: "Complete Sleep Kit",
    price: "$39",
    description: "Complete portable sleep solution with case.",
    image: "https://m.media-amazon.com/images/I/51Q7bYGEsZL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Easysleep-Soothing-Machines-Function-Relaxation/dp/B087CPCVK9",
    features: ["Travel Case", "Rechargeable", "Timer", "Compact"],
    specs: { dimensions: '3.6" × 3.6" × 1.6"', weight: "0.4 lbs", battery: "Up to 20h", connectivity: "None" },
  },
  {
    name: "Premium Travel Soother",
    slug: "last-one",
    tagline: "The Ultimate Portable",
    price: "$44",
    description: "The ultimate portable white noise experience.",
    image: "https://m.media-amazon.com/images/I/71b7HEJsr5L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Portable-Machine-Soothing-Rechargeable-Canceling/dp/B0CPJ9DGHB",
    features: ["Advanced Audio", "Smart Features", "Premium Build", "Remote"],
    specs: { dimensions: '5.5" × 5.5" × 3.0"', weight: "1.4 lbs", battery: "AC Powered", connectivity: "Bluetooth" },
  },
  {
    name: "Ultimate Sleep Solution",
    slug: "ultimate-48",
    tagline: "Advanced Sleep Tech",
    price: "$59",
    description: "Premium sound quality with advanced features for the best sleep.",
    image: "https://m.media-amazon.com/images/I/61lAWFKrA5L._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/Kipcush-Machine-Soothing-Portable-Favorites/dp/B0DCZ99JT4",
    features: ["Advanced Audio", "Smart Features", "Premium Build", "Remote"],
    specs: { dimensions: '5.5" × 5.5" × 3.0"', weight: "1.4 lbs", battery: "AC Powered", connectivity: "Bluetooth" },
  },
  {
    name: "WavHello SoundBub",
    slug: "wavhello-soundbub",
    tagline: "Portable Bluetooth Baby Soother",
    description:
      "A versatile portable sound machine and Bluetooth speaker designed for babies. It features built-in white noise tracks and connects to the VoiceShare app for recording messages.",
    price: "$29.99",
    rating: 4.2,
    reviews: 6789,
    image: "https://m.media-amazon.com/images/I/71RCqFqWOYL._AC_SX679_.jpg",
    amazonUrl: "https://www.amazon.com/dp/B01LY4W3Q7",
    features: [
      "Bluetooth speaker function",
      "6 built-in white noise tracks",
      "Chew-safe materials",
      "Attachable to cribs/strollers",
      "VoiceShare app compatible",
    ],
    specs: {
      Dimensions: "5 x 3 x 6 inches",
      Weight: "8 ounces",
      "Power Source": "Rechargeable Battery",
      "Battery Life": "Up to 4 hours",
    },
  },
]

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="bg-white rounded-2xl p-8 border border-sage/20 shadow-sm flex items-center justify-center">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full max-w-md object-contain rounded-lg"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-sage/10 text-sage px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-sage animate-pulse"></span>
                  In Stock
                </span>
                <span className="text-mist text-sm">Free Shipping</span>
              </div>

              <h1 className="font-serif text-5xl md:text-6xl text-midnight mb-4 text-balance">{product.name}</h1>
              <p className="text-2xl text-sage mb-6">{product.tagline}</p>

              <p className="text-lg text-charcoal leading-relaxed mb-8">{product.description}</p>

              <div className="h-px w-full bg-sage/20 mb-8"></div>

              <div className="flex items-center gap-6 mb-8">
                <Button size="lg" className="bg-sage hover:bg-sage/90 text-midnight h-12 px-8 text-lg" asChild>
                  <a href={product.amazonUrl} target="_blank" rel="noopener noreferrer">
                    Buy on Amazon
                  </a>
                </Button>
                <div className="text-sm text-mist">Secure transaction via Amazon</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-charcoal">
                  <Check className="w-5 h-5 text-sage" />
                  <span>30-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal">
                  <Check className="w-5 h-5 text-sage" />
                  <span>2-Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal">
                  <Check className="w-5 h-5 text-sage" />
                  <span>Expert Support</span>
                </div>
                <div className="flex items-center gap-2 text-charcoal">
                  <Check className="w-5 h-5 text-sage" />
                  <span>Fast Shipping</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-twilight/30 rounded-2xl p-8 border border-sage/10">
              <h2 className="font-serif text-3xl text-midnight mb-6">Key Features</h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-sage" />
                    <span className="text-charcoal text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-sage/20 shadow-sm">
              <h2 className="font-serif text-3xl text-midnight mb-6">Technical Specifications</h2>
              <div className="space-y-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b border-sage/10 pb-3 last:border-0">
                    <span className="text-mist capitalize">{key}</span>
                    <span className="text-charcoal font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
