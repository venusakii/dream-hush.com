import { Header } from "@/components/header"
import { ProductCollection } from "@/components/product-collection"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Products - Dream Hush",
  description: "Explore our collection of premium sleep sound machines and white noise devices.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <ProductCollection />
      </div>
      <Footer />
    </main>
  )
}
