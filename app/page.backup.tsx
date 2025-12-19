import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  FileText, 
  ImageIcon, 
  Phone, 
  MapPin, 
  Mail,
  ChevronRight,
  Award,
  Droplets,
  Zap,
  Building2
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header with Indian Flag Colors */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-2"></div>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  [Village Name] Gram Panchayat
                </h1>
                <p className="text-sm text-gray-600">
                  [Taluka] • [District] • [State]
                </p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="#home" className="text-gray-700 hover:text-orange-600 font-medium">
                Home
              </Link>
              <Link href="#members" className="text-gray-700 hover:text-orange-600 font-medium">
                Members
              </Link>
              <Link href="#works" className="text-gray-700 hover:text-orange-600 font-medium">
                Works
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-600 font-medium">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 bg-gradient-to-r from-orange-100 to-green-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Welcome to Our Village
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Serving our community with transparency, dedication, and progress
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#members"
                className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition flex items-center gap-2"
              >
                Meet Our Team <ChevronRight className="w-5 h-5" />
              </a>
              <a
                href="#works"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition border-2 border-orange-600"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <Users className="w-12 h-12 text-orange-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-800">2,500+</p>
              <p className="text-gray-600">Population</p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Building2 className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-800">450+</p>
              <p className="text-gray-600">Households</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <Droplets className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-800">100%</p>
              <p className="text-gray-600">Water Supply</p>
            </div>
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-800">100%</p>
              <p className="text-gray-600">Electrification</p>
            </div>
          </div>
        </div>
      </section>

      {/* Panchayat Members Section */}
      <section id="members" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Panchayat Members
            </h2>
            <p className="text-gray-600">
              Meet the dedicated team serving our village
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Sarpanch */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 h-32"></div>
              <div className="p-6 text-center -mt-16">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-white flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold mb-2">
                  <Award className="w-4 h-4 inline mr-1" />
                  Sarpanch
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  [Sarpanch Name]
                </h3>
                <p className="text-gray-600 mb-4">Head of Panchayat</p>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 XXXXX XXXXX</span>
                </div>
              </div>
            </div>

            {/* Up-Sarpanch */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-green-500 to-green-600 h-32"></div>
              <div className="p-6 text-center -mt-16">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-white flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="inline-block bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mb-2">
                  Up-Sarpanch
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  [Up-Sarpanch Name]
                </h3>
                <p className="text-gray-600 mb-4">Deputy Head</p>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 XXXXX XXXXX</span>
                </div>
              </div>
            </div>

            {/* Gram Sevak */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-32"></div>
              <div className="p-6 text-center -mt-16">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-white flex items-center justify-center">
                  <Users className="w-16 h-16 text-gray-400" />
                </div>
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-2">
                  Gram Sevak
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  [Gram Sevak Name]
                </h3>
                <p className="text-gray-600 mb-4">Village Secretary</p>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+91 XXXXX XXXXX</span>
                </div>
              </div>
            </div>
          </div>

          {/* Panch Members */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Panch Members
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-10 h-10 text-gray-400" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 text-center mb-1">
                    [Panch Name {i}]
                  </h4>
                  <p className="text-gray-600 text-center text-sm mb-2">Ward {i}</p>
                  <div className="flex items-center justify-center gap-2 text-gray-600">
                    <Phone className="w-3 h-3" />
                    <span className="text-xs">+91 XXXXX XXXXX</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Works/Projects Section */}
      <section id="works" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Development Works
            </h2>
            <p className="text-gray-600">
              Recent projects and initiatives for village development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <ImageIcon className="w-20 h-20 text-white opacity-50" />
              </div>
              <div className="p-6">
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Completed
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Road Construction
                </h3>
                <p className="text-gray-600 mb-4">
                  2 km village road construction with concrete pavement
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Budget: ₹25 Lakhs</span>
                  <span>2024</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Droplets className="w-20 h-20 text-white opacity-50" />
              </div>
              <div className="p-6">
                <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  Completed
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Water Tank Installation
                </h3>
                <p className="text-gray-600 mb-4">
                  50,000 liter capacity water storage tank for clean water supply
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Budget: ₹15 Lakhs</span>
                  <span>2024</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <Zap className="w-20 h-20 text-white opacity-50" />
              </div>
              <div className="p-6">
                <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold mb-3">
                  In Progress
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  LED Street Lighting
                </h3>
                <p className="text-gray-600 mb-4">
                  Installation of 100 LED street lights across the village
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Budget: ₹10 Lakhs</span>
                  <span>2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              Get in touch with our Gram Panchayat office
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Office Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Address</p>
                    <p className="text-gray-600">
                      Gram Panchayat Office<br />
                      [Village Name], [Taluka]<br />
                      [District], [State] - [PIN Code]
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">grampanchayat@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                Office Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700 font-medium">Monday - Friday</span>
                  <span className="text-gray-600">10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-700 font-medium">Saturday</span>
                  <span className="text-gray-600">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700 font-medium">Sunday</span>
                  <span className="text-gray-600">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                <p className="text-sm text-orange-800">
                  <strong>Note:</strong> For emergency services, please contact the Sarpanch directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">
              [Village Name] Gram Panchayat
            </h3>
            <p className="text-gray-400 mb-4">
              Committed to village development and community welfare
            </p>
            <div className="bg-gradient-to-r from-orange-500 via-white to-green-600 h-1 w-32 mx-auto mb-4"></div>
            <p className="text-gray-500 text-sm">
              © 2024 [Village Name] Gram Panchayat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
