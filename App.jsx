import { Button } from "@/components/ui/button";

function App() {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to CloudNova</h1>
        <p className="text-lg mb-6 max-w-xl">
          Supercharge your business with ultra-fast cloud solutions built for speed, security, and simplicity.
        </p>
        <Button size="lg" variant="secondary">Get Started</Button>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 rounded-2xl shadow-xl text-center">
              <h3 className="text-2xl font-semibold mb-3">Blazing Fast</h3>
              <p>Our infrastructure is optimized for high performance and zero downtime.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-xl text-center">
              <h3 className="text-2xl font-semibold mb-3">Secure by Design</h3>
              <p>We prioritize enterprise-grade security so you don’t have to worry about it.</p>
            </div>
            <div className="p-6 rounded-2xl shadow-xl text-center">
              <h3 className="text-2xl font-semibold mb-3">24/7 Support</h3>
              <p>Our team is always here for you — any time, any day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="space-y-8">
            <blockquote className="p-6 bg-white rounded-2xl shadow">
              <p className="text-lg mb-2">"CloudNova completely transformed how we manage our infrastructure. The speed is unreal."</p>
              <cite className="block text-sm text-gray-500">— Alex P., CTO at SkyTech</cite>
            </blockquote>
            <blockquote className="p-6 bg-white rounded-2xl shadow">
              <p className="text-lg mb-2">"Their support team is incredible — responsive, helpful, and genuinely caring."</p>
              <cite className="block text-sm text-gray-500">— Sarah L., Product Manager at BrightApps</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 bg-indigo-700 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to launch your next project?</h2>
        <p className="mb-6 text-lg">Join hundreds of companies already powered by CloudNova.</p>
        <Button size="lg" variant="secondary">Sign Up Free</Button>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2025 CloudNova. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
