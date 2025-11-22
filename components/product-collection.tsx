import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Link from "next/link"

const products = [
  {
    name: "Magicteam Sound Machine",
    slug: "magicteam-classic",
    description: "Best-selling compact white noise machine with 20 natural sounds, timer, and memory function.",
    price: "$36",
    rating: 4.5,
    reviews: 12847,
    image: "https://m.media-amazon.com/images/I/71CBN1gUirL._AC_SX679_.jpg",
  },
  {
    name: "Yogasleep Dohm Original",
    slug: "yogasleep-dohm",
    description: "Iconic mechanical white noise machine with real moving fan sound – trusted for over 60 years.",
    price: "$49",
    rating: 4.3,
    reviews: 8934,
    image: "https://m.media-amazon.com/images/I/61217alRDQL._AC_SX679_.jpg",
  },
  {
    name: "SNOOZ White Noise Machine",
    slug: "snooz-white",
    description: "Premium white noise with actual moving fan. Fully adjustable tone and volume.",
    price: "$99",
    rating: 4.6,
    reviews: 3421,
    image: "https://m.media-amazon.com/images/I/71L9YvdXUmL._AC_SX466_.jpg",
  },
  {
    name: "Housbay Glows",
    slug: "housbay-glows",
    description: "Modern white noise machine with 31 HiFi sounds and 7-color ambient lighting.",
    price: "$39",
    rating: 4.4,
    reviews: 5632,
    image: "https://m.media-amazon.com/images/I/61Tem9vYEDL._AC_SX679_.jpg",
  },
  {
    name: "Dreamegg D11 Portable",
    slug: "dreamegg-portable",
    description: "Portable rechargeable white noise machine with 21 sounds – perfect for travel and babies.",
    price: "$35",
    rating: 4.5,
    reviews: 7289,
    image: "https://m.media-amazon.com/images/I/61Duona9HWL._AC_SX679_.jpg",
  },
  {
    name: "LectroFan Evo",
    slug: "lectrofan-evo",
    description: "Gold standard in electronic white noise – fan, white, pink & brown noise.",
    price: "$54",
    rating: 4.7,
    reviews: 4156,
    image: "https://m.media-amazon.com/images/I/51E316urhTL._AC_SX679_.jpg",
  },
  {
    name: "Housbay White Noise Machine",
    slug: "housbay-basic",
    description: "Clean design with 31 soothing sounds and adjustable volume.",
    price: "$32",
    rating: 4.3,
    reviews: 9876,
    image: "https://m.media-amazon.com/images/I/711ra7QGb4L._AC_SX679_.jpg",
  },
  {
    name: "Housbay 2024 Model",
    slug: "housbay-2024",
    description: "Latest Housbay with improved sound quality and sleek design.",
    price: "$44",
    rating: 4.6,
    reviews: 2134,
    image: "https://m.media-amazon.com/images/I/71JulbuCj4L._AC_SX679_.jpg",
  },
  {
    name: "Housbay Wooden",
    slug: "housbay-wooden",
    description: "Elegant wooden look with 31 sounds and dimmable warm light.",
    price: "$49",
    rating: 4.5,
    reviews: 4321,
    image: "https://m.media-amazon.com/images/I/51Pn6oaHlUL._AC_SX466_.jpg",
  },
  {
    name: "LectroFan Micro2",
    slug: "lectrofan-micro2",
    description: "Tiny but powerful – 11 non-looping sounds + full Bluetooth speaker.",
    price: "$34",
    rating: 4.6,
    reviews: 3456,
    image: "https://m.media-amazon.com/images/I/71o2faWTNRL._AC_SX679_.jpg",
  },
  {
    name: "Yogasleep GO Portable",
    slug: "yogasleep-go",
    description: "Pocket-sized rechargeable with 10 rich, deep sounds.",
    price: "$39",
    rating: 4.3,
    reviews: 4321,
    image: "https://m.media-amazon.com/images/I/61ig+5sBQIL._AC_SX679_.jpg",
  },
  {
    name: "Hatch Rest Go",
    slug: "hatch-rest-go",
    description: "Portable version of the famous Hatch Rest – perfect for strollers.",
    price: "$39",
    rating: 4.6,
    reviews: 5432,
    image: "https://m.media-amazon.com/images/I/61IG9t3A4lL._AC_SX679_.jpg",
  },
  {
    name: "Momcozy Portable",
    slug: "momcozy-portable",
    description: "Soft fabric design with 10 lullabies – ideal for newborns.",
    price: "$32",
    rating: 4.4,
    reviews: 8765,
    image: "https://m.media-amazon.com/images/I/61AUYmxWb0L._AC_SX679_.jpg",
  },
  {
    name: "Dr. Talbot's Portable",
    slug: "dr-talbots",
    description: "Soft rounded portable soother with 10 calming sounds.",
    price: "$33",
    rating: 4.3,
    reviews: 6543,
    image: "https://m.media-amazon.com/images/I/71Il67Mwk-L._SX466_.jpg",
  },
  {
    name: "MyBaby by Homedics",
    slug: "mybaby-hoomedics",
    description: "Affordable and reliable with lullabies, heartbeat, and nature sounds.",
    price: "$29",
    rating: 4.6,
    reviews: 2987,
    image: "https://m.media-amazon.com/images/I/71LfMJVEnWL._AC_SX679_.jpg",
  },
  {
    name: "Easysleep 40 Sounds",
    slug: "easysleep-40",
    description: "Feature-packed with 40 sounds and 7-color night light.",
    price: "$45",
    rating: 4.2,
    reviews: 4567,
    image: "https://m.media-amazon.com/images/I/51zRsPEt8GL._AC_SX679_.jpg",
  },
  {
    name: "LectroFan Classic",
    slug: "lectrofan-classic",
    description: "The original LectroFan with 20 unique non-looping sounds.",
    price: "$49",
    rating: 4.5,
    reviews: 1876,
    image: "https://m.media-amazon.com/images/I/71WLW95Q4DL._AC_SX679_.jpg",
  },
  {
    name: "Yogasleep Nova",
    slug: "yogasleep-nova",
    description: "Wireless rechargeable with 10 sounds and dimmable night light.",
    price: "$59",
    rating: 4.3,
    reviews: 5432,
    image: "https://m.media-amazon.com/images/I/612-i8iioGL._SX466_.jpg",
  },
  {
    name: "Kipcush Portable",
    slug: "kipcush",
    description: "Clip-on portable with 30 sounds – perfect for strollers.",
    price: "$38",
    rating: 4.5,
    reviews: 7890,
    image: "https://m.media-amazon.com/images/I/61ltMp0wY8L._AC_SX679_.jpg",
  },
  {
    name: "Easysleep Travel",
    slug: "easysleep-travel",
    description: "Newest portable with long battery and 30 sounds.",
    price: "$39",
    rating: 4.1,
    reviews: 9876,
    image: "https://m.media-amazon.com/images/I/61-yqPUoulL._AC_SX679_.jpg",
  },
  {
    name: "FamiSym",
    slug: "famisym",
    description: "Popular choice with warm light and 30 sounds.",
    price: "$37",
    rating: 4.4,
    reviews: 3456,
    image: "https://m.media-amazon.com/images/I/911aqXiJtLL._AC_SX679_.jpg",
  },
  {
    name: "Nytpal Portable",
    slug: "nytpal",
    description: "Portable with essential oil slot and 20 sounds.",
    price: "$41",
    rating: 4.3,
    reviews: 2345,
    image: "https://m.media-amazon.com/images/I/81-6qA-CqjL._AC_SX679_.jpg",
  },
  {
    name: "iDealSleep",
    slug: "idealsleep",
    description: "Full-featured with remote and 30 sounds.",
    price: "$43",
    rating: 4.5,
    reviews: 4321,
    image: "https://m.media-amazon.com/images/I/719exIQr86L._AC_SX679_.jpg",
  },
  {
    name: "CHICWAY Smart",
    slug: "chicway",
    description: "Smart baby soother with cry detection and Bluetooth.",
    price: "$69",
    rating: 4.6,
    reviews: 3210,
    image: "https://m.media-amazon.com/images/I/51UUYzdPINL._AC_SX679_.jpg",
  },
  {
    name: "ErgoPouch Drift",
    slug: "ergopouch",
    description: "Luxury baby soother with organic cotton cover.",
    price: "$79",
    rating: 4.2,
    reviews: 5678,
    image: "https://m.media-amazon.com/images/I/81nMoCzgiwL._AC_SX679_.jpg",
  },
  {
    name: "Dreamegg D1",
    slug: "dreamegg-d1",
    description: "High-quality 21 sounds with warm night light.",
    price: "$42",
    rating: 4.5,
    reviews: 4567,
    image: "https://m.media-amazon.com/images/I/612XHNPPzJL._SX466_.jpg",
  },
  {
    name: "Portable Sound Machine",
    slug: "portable-29",
    description: "Compact travel-ready with 30 soothing sounds.",
    price: "$36",
    rating: 4.4,
    reviews: 3890,
    image: "https://m.media-amazon.com/images/I/71E3MuY80DL._AC_SX679_.jpg",
  },
  {
    name: "Baby Portable Soother",
    slug: "baby-portable-30",
    description: "Soft design with 10 sounds for newborns.",
    price: "$34",
    rating: 4.3,
    reviews: 2987,
    image: "https://m.media-amazon.com/images/I/61Bu8LnqA3L._AC_SX679_.jpg",
  },
  {
    name: "Stroller Clip Soother",
    slug: "stroller-clip",
    description: "Clip-on design with 10 sounds for strollers.",
    price: "$37",
    rating: 4.5,
    reviews: 5432,
    image: "https://m.media-amazon.com/images/I/81LVYpT6t4L._AC_SX679_.jpg",
  },
  {
    name: "Long Battery Portable",
    slug: "long-battery",
    description: "Ultra-long battery portable white noise.",
    price: "$44",
    rating: 4.2,
    reviews: 6789,
    image: "https://m.media-amazon.com/images/I/6130i7Rd4tL._AC_SX679_.jpg",
  },
  {
    name: "Rechargeable Travel",
    slug: "rechargeable-33",
    description: "Rechargeable with 30 sounds and timer.",
    price: "$38",
    rating: 4.6,
    reviews: 8754,
    image: "https://m.media-amazon.com/images/I/612GHRDb+PL._AC_SX679_.jpg",
  },
  {
    name: "Newborn Portable",
    slug: "newborn-34",
    description: "Designed for newborns with soft materials.",
    price: "$35",
    rating: 4.4,
    reviews: 3210,
    image: "https://m.media-amazon.com/images/I/51Nx+PRUJPL._AC_SX679_.jpg",
  },
  {
    name: "Colorful Portable",
    slug: "colorful-portable",
    description: "Portable with colorful lights and 30 sounds.",
    price: "$42",
    rating: 4.3,
    reviews: 5678,
    image: "https://m.media-amazon.com/images/I/71dq8cP0gyL._SX466_.jpg",
  },
  {
    name: "Nightlight Portable",
    slug: "nightlight-portable",
    description: "Portable with night light and stroller strap.",
    price: "$39",
    rating: 4.5,
    reviews: 4321,
    image: "https://m.media-amazon.com/images/I/71FQ26IHgVL._AC_SX679_.jpg",
  },
  {
    name: "Travel Sound Machine",
    slug: "travel-2025",
    description: "Latest travel model with 30 sounds.",
    price: "$41",
    rating: 4.6,
    reviews: 2134,
    image: "https://m.media-amazon.com/images/I/61dWmZlfswL._AC_SX679_.jpg",
  },
  {
    name: "Battery Powered Soother",
    slug: "battery-powered",
    description: "Battery-powered portable for privacy and sleep.",
    price: "$36",
    rating: 4.2,
    reviews: 1876,
    image: "https://m.media-amazon.com/images/I/51K4Q-mLp1L._AC_SX679_.jpg",
  },
  {
    name: "Rechargeable Soother",
    slug: "rechargeable-39",
    description: "Rechargeable with long-lasting battery.",
    price: "$37",
    rating: 4.3,
    reviews: 5432,
    image: "https://m.media-amazon.com/images/I/71egpA8Jg6L._AC_SX466_.jpg",
  },
  {
    name: "Non-Looping Portable",
    slug: "non-looping-40",
    description: "Portable non-looping with headphone support.",
    price: "$40",
    rating: 4.5,
    reviews: 7890,
    image: "https://m.media-amazon.com/images/I/61+tJxq4b-L._AC_SX679_.jpg",
  },
  {
    name: "Relaxation Sound Machine",
    slug: "relaxation-41",
    description: "Classic white noise machine for deep relaxation.",
    price: "$33",
    rating: 4.1,
    reviews: 9876,
    image: "https://m.media-amazon.com/images/I/61wy7C101SL._AC_SX679_.jpg",
  },
  {
    name: "Non-Looping White Noise",
    slug: "non-looping-42",
    description: "True non-looping white noise experience.",
    price: "$45",
    rating: 4.4,
    reviews: 3456,
    image: "https://m.media-amazon.com/images/I/71TcmBFHg4L._AC_SX679_.jpg",
  },
  {
    name: "Headphone Portable",
    slug: "headphone-portable",
    description: "Portable with headphone jack for private use.",
    price: "$38",
    rating: 4.3,
    reviews: 2345,
    image: "https://m.media-amazon.com/images/I/91cLm7JZLBL._AC_SX679_.jpg",
  },
  {
    name: "Basic Sleep Machine",
    slug: "basic-44",
    description: "Simple and effective with essential sleep sounds.",
    price: "$31",
    rating: 4.5,
    reviews: 4321,
    image: "https://m.media-amazon.com/images/I/71WLW95Q4DL._AC_SX679_.jpg",
  },
  {
    name: "Long Play Portable",
    slug: "long-play-45",
    description: "Portable with extra-long battery life.",
    price: "$40",
    rating: 4.6,
    reviews: 3210,
    image: "https://m.media-amazon.com/images/I/71iUZDtaO+L._AC_SX679_.jpg",
  },
  {
    name: "Final Portable Soother",
    slug: "final-portable",
    description: "Complete portable sleep solution with case.",
    price: "$39",
    rating: 4.2,
    reviews: 5678,
    image: "https://m.media-amazon.com/images/I/51Q7bYGEsZL._AC_SX679_.jpg",
  },
  {
    name: "Premium Travel Soother",
    slug: "last-one",
    description: "The ultimate portable white noise experience.",
    price: "$44",
    rating: 4.5,
    reviews: 4567,
    image: "https://m.media-amazon.com/images/I/71b7HEJsr5L._AC_SX679_.jpg",
  },
]

export function ProductCollection() {
  return (
    <section id="products" className="py-32 bg-midnight text-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl md:text-6xl mb-6 text-balance">Our Collection</h2>
          <p className="text-xl text-mist max-w-2xl mx-auto text-pretty">
            Each device is meticulously crafted to deliver the perfect acoustic environment for your sleep
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.slug}
              className="bg-twilight border border-sage/20 overflow-hidden group hover:border-sage/40 transition-colors rounded-xl"
            >
              <div className="p-0">
                <div className="aspect-square overflow-hidden bg-white p-4">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-cloud mb-2">{product.name}</h3>
                  <p className="text-mist mb-3 text-sm">{product.description}</p>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "fill-sage text-sage"
                              : i < product.rating
                                ? "fill-sage/50 text-sage"
                                : "fill-none text-sage/30"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sage text-sm font-medium">{product.rating}</span>
                    <span className="text-mist/60 text-xs">({product.reviews.toLocaleString()})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-sage/40 text-sage hover:bg-sage hover:text-midnight bg-transparent"
                      asChild
                    >
                      <Link href={`/products/${product.slug}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
