export function Footer() {
  return (
    <footer className="bg-midnight text-cloud py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-3xl mb-4">Dream Hush</h3>
            <p className="text-mist text-sm">Crafting the perfect sound for perfect sleep since 2015</p>
          </div>

          

          

          
        </div>

        <div className="border-t border-sage/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-mist">
          <p>© 2025 Dream Hush. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-sage transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-sage transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
