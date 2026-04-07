import Image from "next/image";
import Link from "next/link";
import {
  Home,
  MapPin,
  Bed,
  Bath,
  Square,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Menu,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="w-6 h-6" />
          <span className="text-xl font-bold tracking-tight">Estately</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="#" className="text-slate-900 border-b-2 border-slate-900 pb-1">Home</Link>
          <Link href="#" className="hover:text-slate-900 transition-colors">Services</Link>
          <Link href="#" className="hover:text-slate-900 transition-colors">Properties</Link>
          <Link href="#" className="hover:text-slate-900 transition-colors">About</Link>
          <Link href="#" className="hover:text-slate-900 transition-colors">Agents</Link>
          <Link href="#" className="hover:text-slate-900 transition-colors">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-sm font-medium hover:text-slate-600 transition-colors">Log in</Link>
          <Link href="#" className="text-sm font-medium bg-slate-900 text-white px-5 py-2.5 rounded-md hover:bg-slate-800 transition-colors">Sign up</Link>
        </div>

        <button className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="flex flex-col md:flex-row h-[600px]">
          {/* Left Dark Side */}
          <div className="w-full md:w-1/2 bg-[#0a0a0a] text-white flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6 max-w-lg">
              Select the ideal home that suits you
            </h1>
            <p className="text-slate-400 text-sm md:text-base mb-10 max-w-md leading-relaxed">
              Seeking a new house? Our team is prepared to assist you find one matching your daily habits and goals.
            </p>
            <div>
              <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition-colors text-sm font-medium">
                Get started
              </button>
            </div>
          </div>
          
          {/* Right Image Side */}
          <div className="w-full md:w-1/2 relative h-full hidden md:block">
            <Image
              src="https://picsum.photos/seed/modernhouse/1200/800"
              alt="Modern House"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Search Bar Overlay */}
        <div className="container mx-auto px-6 relative -mt-24 md:-mt-16 z-10">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center gap-6 max-w-5xl mx-auto">
            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-slate-900 mb-2">Area</label>
              <div className="relative">
                <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 py-3 pl-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm">
                  <option value="">Add Location</option>
                  <option value="ny">New York</option>
                  <option value="la">Los Angeles</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-slate-200"></div>

            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-slate-900 mb-2">Property Type</label>
              <div className="relative">
                <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 py-3 pl-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm">
                  <option value="">Choose style</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-slate-200"></div>

            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-slate-900 mb-2">Price Range</label>
              <div className="relative">
                <select className="w-full appearance-none bg-slate-50 border border-slate-200 text-slate-600 py-3 pl-4 pr-10 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-900 text-sm">
                  <option value="">Choose budget</option>
                  <option value="1">$100k - $500k</option>
                  <option value="2">$500k - $1M</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div className="w-full md:w-auto mt-6 md:mt-0 md:self-end">
              <button className="w-full md:w-auto bg-[#0a0a0a] text-white px-8 py-3 rounded-md hover:bg-slate-800 transition-colors text-sm font-medium h-[46px]">
                Find Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Houses Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Our Best Houses</h2>
          <Link href="#" className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
            View Everything <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Property Card 1 */}
          <div className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
            <div className="relative h-64 w-full overflow-hidden p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/house1/600/400"
                  alt="Greenville"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold text-slate-900">
                  For Sale
                </div>
              </div>
            </div>
            <div className="p-6 pt-2">
              <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
                <MapPin className="w-3 h-3" /> Aspen, USA
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Greenville</h3>
              
              <div className="flex items-center justify-between text-slate-600 text-sm mb-6 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-2">
                  <Bed className="w-4 h-4" /> <span>5 Bed Room</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-4 h-4" /> <span>5 Bath</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="w-4 h-4" /> <span>4200 SQ FT</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-slate-900">$ 7,000,00</div>
                <button className="bg-[#0a0a0a] text-white px-4 py-2 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors">
                  View Details <ChevronDown className="w-3 h-3 -rotate-90" />
                </button>
              </div>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white">
            <div className="relative h-64 w-full overflow-hidden p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/house2/600/400"
                  alt="Mountain Chalet"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold text-slate-900">
                  For Sale
                </div>
              </div>
            </div>
            <div className="p-6 pt-2">
              <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
                <MapPin className="w-3 h-3" /> Aspen, USA
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Mountain Chalet</h3>
              
              <div className="flex items-center justify-between text-slate-600 text-sm mb-6 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-2">
                  <Bed className="w-4 h-4" /> <span>4 Bed Room</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-4 h-4" /> <span>3 Bath</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="w-4 h-4" /> <span>2800 SQ FT</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-slate-900">$ 4,800,00</div>
                <button className="bg-[#0a0a0a] text-white px-4 py-2 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors">
                  View Details <ChevronDown className="w-3 h-3 -rotate-90" />
                </button>
              </div>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="group border border-slate-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white hidden lg:block">
            <div className="relative h-64 w-full overflow-hidden p-3">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/house3/600/400"
                  alt="Manhattan"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-semibold text-slate-900">
                  For Sale
                </div>
              </div>
            </div>
            <div className="p-6 pt-2">
              <div className="flex items-center gap-1 text-slate-500 text-xs mb-2">
                <MapPin className="w-3 h-3" /> Aspen, USA
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Manhattan</h3>
              
              <div className="flex items-center justify-between text-slate-600 text-sm mb-6 border-b border-slate-100 pb-6">
                <div className="flex items-center gap-2">
                  <Bed className="w-4 h-4" /> <span>6 Bed Room</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-4 h-4" /> <span>3 Bath</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="w-4 h-4" /> <span>3000 SQ FT</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xl font-bold text-slate-900">$ 6,500,00</div>
                <button className="bg-[#0a0a0a] text-white px-4 py-2 rounded-md text-xs font-medium flex items-center gap-2 hover:bg-slate-800 transition-colors">
                  View Details <ChevronDown className="w-3 h-3 -rotate-90" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-10">
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          <div className="w-2 h-2 rounded-full bg-slate-900"></div>
          <div className="w-2 h-2 rounded-full bg-slate-200"></div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Collage */}
          <div className="w-full lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/mansion1/800/400"
                  alt="Mansion"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/pool/400/400"
                  alt="Pool"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <Image
                  src="https://picsum.photos/seed/modern/400/400"
                  alt="Modern Home"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Center Icon Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] p-4 rounded-full border-4 border-white shadow-xl">
              <Home className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-slate-900"></div>
              <span className="text-sm font-bold tracking-wider uppercase text-slate-900">What We Do</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Your Ease Is Our Goal</h2>
            <p className="text-slate-500 text-lg mb-8 leading-relaxed max-w-lg">
              helping you get a house that you truly like living is our main goal, your ease is best.
            </p>

            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-900">Free Ads</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-900">No Costs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-900">Guided Tours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-900">Easy Moves</span>
              </div>
            </div>

            <button className="border border-slate-200 text-slate-900 px-8 py-3 rounded-md hover:bg-slate-50 transition-colors text-sm font-medium">
              View More
            </button>
          </div>
        </div>
      </section>

      {/* Stats / Founder Section */}
      <section className="bg-[#0a0a0a] text-white py-20 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold mb-2">Discover The</h3>
              <p className="text-slate-400">Estately</p>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-4">The Founder: Marref Nada</h3>
              <p className="text-slate-400 mb-12 max-w-2xl leading-relaxed">
                our work is built on tight bonds and we're happy to give our good home buying skills to your guests.
              </p>
              
              <div className="grid grid-cols-3 gap-8 border-t border-slate-800 pt-12">
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-2">132+</div>
                  <div className="text-xs font-bold tracking-wider text-slate-500 uppercase">Previous Projects</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-2">21y+</div>
                  <div className="text-xs font-bold tracking-wider text-slate-500 uppercase">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-light mb-2">44</div>
                  <div className="text-xs font-bold tracking-wider text-slate-500 uppercase">Ongoing Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newest Facts Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Newest Facts</h2>
          <button className="bg-[#0a0a0a] text-white px-6 py-2.5 rounded-md hover:bg-slate-800 transition-colors text-sm font-medium">
            View More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Fact Card 1 */}
          <div className="group rounded-2xl overflow-hidden cursor-pointer">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-4">
              <Image
                src="https://picsum.photos/seed/fact1/600/400"
                alt="Fact 1"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-md text-xs font-semibold text-slate-900 shadow-sm">
                New
              </div>
            </div>
          </div>
          
          {/* Fact Card 2 */}
          <div className="group rounded-2xl overflow-hidden cursor-pointer">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-4">
              <Image
                src="https://picsum.photos/seed/fact2/600/400"
                alt="Fact 2"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-md text-xs font-semibold text-slate-900 shadow-sm">
                New
              </div>
            </div>
          </div>

          {/* Fact Card 3 */}
          <div className="group rounded-2xl overflow-hidden cursor-pointer hidden lg:block">
            <div className="relative h-64 w-full overflow-hidden rounded-2xl mb-4">
              <Image
                src="https://picsum.photos/seed/fact3/600/400"
                alt="Fact 3"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-md text-xs font-semibold text-slate-900 shadow-sm">
                New
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="border-t border-slate-100 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Estately. All rights reserved.</p>
      </footer>
    </div>
  );
}
