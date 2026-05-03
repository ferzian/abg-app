export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-orange-600">ABG</div>
          <ul className="hidden md:flex items-center gap-8 text-gray-700">
            <li><a href="#home" className="hover:text-orange-600 transition">Home</a></li>
            <li><a href="#menu" className="hover:text-orange-600 transition">Menu</a></li>
            <li><a href="#locations" className="hover:text-orange-600 transition">Locations</a></li>
            <li><a href="#about" className="hover:text-orange-600 transition">About Us</a></li>
          </ul>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-gray-700 hover:text-orange-600 font-semibold transition">
              Login
            </a>
            <a href="/register" className="text-gray-700 hover:text-orange-600 font-semibold transition">
              Register
            </a>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              Order Now
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-black bg-opacity-60 text-white py-20 md:py-32">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 600'%3E%3Crect fill='%23333' width='1200' height='600'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              The Ultimate Chicken Experience -
              <span className="text-orange-500"> Grilled & Fried to Perfection</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Authentic Indonesian flavors delivered straight to your door. Experience the secret blend of traditional spices.
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                Order Now
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-4">Explore Our Signature Dishes</h2>
        <div className="w-16 h-1 bg-orange-600 mx-auto mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Ayam Bakar", desc: "Grilled chicken marinated in traditional spices" },
            { name: "Ayam Goreng", desc: "Crispy fried chicken with perfect golden crust" },
            { name: "Combo Packages", desc: "Mix of grilled and fried chicken with sides" },
          ].map((dish) => (
            <div
              key={dish.name}
              className="relative overflow-hidden rounded-lg group cursor-pointer h-64 bg-gray-800"
            >
              <div className="absolute inset-0 bg-linear-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                <h3 className="text-xl font-semibold">{dish.name}</h3>
                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">Our Best Sellers</h2>
            <a href="#" className="text-orange-600 hover:text-orange-700 font-semibold">
              View all →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "Signature Bakar", price: "Rp 45.000", tag: "Best" },
              { name: "Spicy Goreng", price: "Rp 42.000", tag: "Hot" },
              { name: "Healthy Platter", price: "Rp 55.000", tag: "" },
              { name: "Family Bucket", price: "Rp 160.000", tag: "" },
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="relative h-48 bg-gray-300">
                  {product.tag && (
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded text-sm font-semibold">
                      {product.tag}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">Quality chicken prepared to perfection daily</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">{product.price}</span>
                    <button className="bg-orange-600 hover:bg-orange-700 text-white p-2 rounded transition">
                      🛒
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="text-4xl mb-4">🌶️</div>
            <h3 className="text-xl font-semibold mb-2">Traditional Spices</h3>
            <p className="text-gray-600">
              We use only the finest, hand-picked local spices to ensure authentic Indonesian heritage in every dish.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-2">Always Fresh</h3>
            <p className="text-gray-600">
              Our chicken is delivered daily and prepared to order. Never frozen, always eating and ready for you.
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Your hunger shouldnt wait. Our dedicated delivery partners ensure your feast arrives hot and fresh.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Fans Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { text: "The best Ayam Bakar I've ever had in my city. The smokiness is just perfect!", author: "Sarah Andika" },
              { text: "The delivery was incredibly fast, and the chicken was still piping hot!", author: "Rizki Tambunan" },
              { text: "The combo packages are great value. Our family dinner is sorted easily!", author: "Linda Wong" },
            ].map((testimonial, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-orange-400 mb-2">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App CTA */}
      <section className="bg-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get the ABG App Today!</h2>
              <p className="text-orange-50 mb-6">
                Download now to unlock exclusive deals, loyalty points, and faster checkout. Your next feast is just a tap away.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                  App Store
                </button>
                <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition">
                  Play Store
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white rounded-3xl p-4 w-48 h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <p className="text-orange-600 font-semibold">ABG APP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="text-white font-semibold mb-2">ABG</p>
              <p className="text-sm">Indonesian Chicken Experience</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Follow Us</p>
              <div className="space-y-1 text-sm">
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Support</p>
              <div className="space-y-1 text-sm">
                <p>Contact Us</p>
                <p>Delivery Policy</p>
                <p>Privacy Policy</p>
              </div>
            </div>
            <div>
              <p className="text-white font-semibold mb-2">Legal</p>
              <div className="space-y-1 text-sm">
                <p>Terms & Conditions</p>
                <p>Cookie Policy</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm">
            <p>© 2024 ABG. Open Indonesias Chicken Guarantee. Trading & Proudly Indonesian.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
