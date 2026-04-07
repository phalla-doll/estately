import Image from "next/image";
import Link from "next/link";
import {
  Home,
  MapPin,
  BedDouble,
  Bath,
  Maximize,
  ArrowRight,
  Check,
  ChevronDown,
  Menu,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-6 py-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white mix-blend-difference">
            <Home className="w-5 h-5" strokeWidth={1.5} />
            <span className="text-xl font-display font-medium tracking-tight">Estately</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-neutral-400 mix-blend-difference">
            <Link href="#" className="text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">Services</Link>
            <Link href="#" className="hover:text-white transition-colors">Properties</Link>
            <Link href="#" className="hover:text-white transition-colors">About</Link>
            <Link href="#" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="hidden md:flex items-center gap-6 mix-blend-difference">
            <Link href="#" className="text-sm font-medium text-white hover:text-neutral-300 transition-colors">Log in</Link>
            <Link href="#" className="text-sm font-medium bg-white text-black px-6 py-2.5 hover:bg-neutral-200 transition-colors">Sign up</Link>
          </div>

          <button className="md:hidden text-white mix-blend-difference">
            <Menu className="w-6 h-6" strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <div className="flex flex-col md:flex-row h-[100svh] min-h-[700px]">
          {/* Left Dark Side */}
          <div className="w-full md:w-[45%] bg-[#0A0A0A] text-white flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-48 md:py-0 relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-medium tracking-tighter leading-[1.05] mb-8 max-w-lg">
              Select the ideal home that suits you.
            </h1>
            <p className="text-neutral-400 text-base md:text-lg mb-12 max-w-md leading-relaxed font-light">
              Seeking a new house? Our team is prepared to assist you find one matching your daily habits and goals.
            </p>
            <div>
              <button className="group flex items-center gap-4 border-b border-white/30 pb-2 hover:border-white transition-colors text-sm font-medium uppercase tracking-widest">
                Get started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </button>
            </div>
          </div>
          
          {/* Right Image Side */}
          <div className="w-full md:w-[55%] relative h-full hidden md:block">
            <Image
              src="https://picsum.photos/seed/modernhouse/1600/1200"
              alt="Modern House"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>

        {/* Search Bar Overlay */}
        <div className="container mx-auto px-6 relative -mt-32 md:-mt-20 z-20">
          <div className="bg-white p-4 md:p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center gap-4 max-w-5xl mx-auto border border-neutral-100">
            <div className="flex-1 w-full px-4 py-2 hover:bg-neutral-50 transition-colors cursor-pointer">
              <label className="block text-xs font-bold tracking-wider uppercase text-neutral-400 mb-1">Area</label>
              <div className="relative">
                <select className="w-full appearance-none bg-transparent text-neutral-900 font-medium focus:outline-none cursor-pointer">
                  <option value="">Add Location</option>
                  <option value="ny">New York</option>
                  <option value="la">Los Angeles</option>
                  <option value="mi">Miami</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" strokeWidth={1.5} />
              </div>
            </div>
            
            <div className="hidden md:block w-px h-10 bg-neutral-200"></div>

            <div className="flex-1 w-full px-4 py-2 hover:bg-neutral-50 transition-colors cursor-pointer">
              <label className="block text-xs font-bold tracking-wider uppercase text-neutral-400 mb-1">Property Type</label>
              <div className="relative">
                <select className="w-full appearance-none bg-transparent text-neutral-900 font-medium focus:outline-none cursor-pointer">
                  <option value="">Choose style</option>
                  <option value="house">Modern House</option>
                  <option value="apartment">Penthouse</option>
                  <option value="villa">Luxury Villa</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" strokeWidth={1.5} />
              </div>
            </div>

            <div className="hidden md:block w-px h-10 bg-neutral-200"></div>

            <div className="flex-1 w-full px-4 py-2 hover:bg-neutral-50 transition-colors cursor-pointer">
              <label className="block text-xs font-bold tracking-wider uppercase text-neutral-400 mb-1">Price Range</label>
              <div className="relative">
                <select className="w-full appearance-none bg-transparent text-neutral-900 font-medium focus:outline-none cursor-pointer">
                  <option value="">Choose budget</option>
                  <option value="1">$500k - $1M</option>
                  <option value="2">$1M - $5M</option>
                  <option value="3">$5M+</option>
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" strokeWidth={1.5} />
              </div>
            </div>

            <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-4">
              <button className="w-full md:w-auto bg-neutral-900 text-white px-10 py-4 hover:bg-neutral-800 transition-colors text-sm font-medium tracking-wide">
                Find Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best Houses Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-neutral-900 mb-4">Our Best Houses</h2>
            <p className="text-neutral-500 max-w-md">Explore our handpicked selection of premium properties designed for modern living.</p>
          </div>
          <Link href="#" className="group flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors uppercase tracking-widest border-b border-transparent hover:border-neutral-900 pb-1">
            View Everything <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Property Card 1 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-neutral-100">
              <Image
                src="https://picsum.photos/seed/house1/800/600"
                alt="Greenville"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-900">
                For Sale
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-medium uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" strokeWidth={2} /> Aspen, USA
              </div>
              <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4 group-hover:text-neutral-600 transition-colors">Greenville</h3>
              
              <div className="flex items-center gap-6 text-neutral-600 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <BedDouble className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>5 Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>5 Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>4,200 sqft</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
                <div className="text-2xl font-display font-medium text-neutral-900">$7,000,000</div>
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 -rotate-45" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="group cursor-pointer">
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-neutral-100">
              <Image
                src="https://picsum.photos/seed/house2/800/600"
                alt="Mountain Chalet"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-900">
                For Sale
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-medium uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" strokeWidth={2} /> Aspen, USA
              </div>
              <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4 group-hover:text-neutral-600 transition-colors">Mountain Chalet</h3>
              
              <div className="flex items-center gap-6 text-neutral-600 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <BedDouble className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>4 Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>3 Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>2,800 sqft</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
                <div className="text-2xl font-display font-medium text-neutral-900">$4,800,000</div>
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 -rotate-45" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="group cursor-pointer hidden lg:block">
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-neutral-100">
              <Image
                src="https://picsum.photos/seed/house3/800/600"
                alt="Manhattan"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-neutral-900">
                For Sale
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-neutral-500 text-xs font-medium uppercase tracking-wider mb-3">
                <MapPin className="w-3.5 h-3.5" strokeWidth={2} /> New York, USA
              </div>
              <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4 group-hover:text-neutral-600 transition-colors">Manhattan Penthouse</h3>
              
              <div className="flex items-center gap-6 text-neutral-600 text-sm mb-6">
                <div className="flex items-center gap-2">
                  <BedDouble className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>6 Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>4 Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>3,500 sqft</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
                <div className="text-2xl font-display font-medium text-neutral-900">$6,500,000</div>
                <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 -rotate-45" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-32 border-y border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left Collage */}
            <div className="w-full lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 relative aspect-[21/9] overflow-hidden bg-neutral-100">
                  <Image
                    src="https://picsum.photos/seed/mansion1/1000/500"
                    alt="Mansion"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <Image
                    src="https://picsum.photos/seed/pool/600/600"
                    alt="Pool"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <Image
                    src="https://picsum.photos/seed/modern/600/600"
                    alt="Modern Home"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              {/* Center Icon Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]">
                <Home className="w-8 h-8 text-neutral-900" strokeWidth={1.5} />
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-neutral-900"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-neutral-900">What We Do</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-8 tracking-tight">Your ease is our primary goal.</h2>
              <p className="text-neutral-500 text-lg mb-12 leading-relaxed max-w-lg font-light">
                Helping you find a house that you truly love living in is our main objective. We streamline the process so you can focus on what matters.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-neutral-100 p-1.5 rounded-full">
                    <Check className="w-4 h-4 text-neutral-900" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Exclusive Listings</h4>
                    <p className="text-sm text-neutral-500">Access to off-market properties.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-neutral-100 p-1.5 rounded-full">
                    <Check className="w-4 h-4 text-neutral-900" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Zero Hidden Costs</h4>
                    <p className="text-sm text-neutral-500">Transparent pricing always.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-neutral-100 p-1.5 rounded-full">
                    <Check className="w-4 h-4 text-neutral-900" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Guided Tours</h4>
                    <p className="text-sm text-neutral-500">Personalized property viewings.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 bg-neutral-100 p-1.5 rounded-full">
                    <Check className="w-4 h-4 text-neutral-900" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900 mb-1">Seamless Moves</h4>
                    <p className="text-sm text-neutral-500">End-to-end relocation support.</p>
                  </div>
                </div>
              </div>

              <button className="bg-white border border-neutral-200 text-neutral-900 px-8 py-4 hover:bg-neutral-50 transition-colors text-sm font-medium tracking-wide">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Founder Section */}
      <section className="bg-[#0A0A0A] text-white py-32">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-white/30"></div>
                <span className="text-xs font-bold tracking-widest uppercase text-white/50">The Vision</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-display font-medium tracking-tight mb-4">Discover the<br/>Estately Difference</h3>
            </div>
            
            <div className="lg:w-2/3">
              <p className="text-neutral-400 text-xl md:text-2xl font-light mb-16 max-w-3xl leading-relaxed">
                "Our work is built on tight bonds and we're happy to give our exceptional home buying expertise to our clients. We don't just sell houses; we curate lifestyles."
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
                <div>
                  <div className="text-5xl md:text-6xl font-display font-light mb-4">132<span className="text-neutral-500">+</span></div>
                  <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Properties Sold</div>
                </div>
                <div>
                  <div className="text-5xl md:text-6xl font-display font-light mb-4">21<span className="text-neutral-500">y</span></div>
                  <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Years Experience</div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="text-5xl md:text-6xl font-display font-light mb-4">44</div>
                  <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase">Ongoing Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimal */}
      <footer className="bg-white border-t border-neutral-100 py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Home className="w-5 h-5 text-neutral-900" strokeWidth={1.5} />
            <span className="text-xl font-display font-medium tracking-tight text-neutral-900">Estately</span>
          </div>
          <p className="text-neutral-500 text-sm font-light">&copy; {new Date().getFullYear()} Estately. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-neutral-500">
            <Link href="#" className="hover:text-neutral-900 transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-neutral-900 transition-colors">Terms</Link>
            <Link href="#" className="hover:text-neutral-900 transition-colors">Instagram</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
