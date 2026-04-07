'use client';

import { useState } from "react";
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
  Star,
  Quote,
  SlidersHorizontal
} from "lucide-react";

const propertiesData = [
  {
    id: 1,
    name: "Greenville",
    location: "Aspen, USA",
    price: 7000000,
    beds: 5,
    baths: 5,
    sqft: 4200,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Mountain Chalet",
    location: "Aspen, USA",
    price: 4800000,
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Manhattan Penthouse",
    location: "New York, USA",
    price: 6500000,
    beds: 6,
    baths: 4,
    sqft: 3500,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Beverly Hills Estate",
    location: "Beverly Hills, CA",
    price: 12500000,
    beds: 7,
    baths: 8,
    sqft: 8500,
    image: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    name: "Oceanfront Villa",
    location: "Miami, FL",
    price: 8200000,
    beds: 5,
    baths: 6,
    sqft: 6100,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "Modern Minimalist",
    location: "Austin, TX",
    price: 3100000,
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=800&auto=format&fit=crop"
  }
];

export default function LandingPage() {
  const [priceFilter, setPriceFilter] = useState("all");
  const [bedsFilter, setBedsFilter] = useState("all");
  const [bathsFilter, setBathsFilter] = useState("all");

  const filteredProperties = propertiesData.filter(prop => {
    let priceMatch = true;
    if (priceFilter === "under5") priceMatch = prop.price < 5000000;
    else if (priceFilter === "5to10") priceMatch = prop.price >= 5000000 && prop.price <= 10000000;
    else if (priceFilter === "over10") priceMatch = prop.price > 10000000;

    let bedsMatch = true;
    if (bedsFilter !== "all") {
      if (bedsFilter === "6+") bedsMatch = prop.beds >= 6;
      else bedsMatch = prop.beds === parseInt(bedsFilter);
    }

    let bathsMatch = true;
    if (bathsFilter !== "all") {
      if (bathsFilter === "6+") bathsMatch = prop.baths >= 6;
      else bathsMatch = prop.baths === parseInt(bathsFilter);
    }

    return priceMatch && bedsMatch && bathsMatch;
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

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
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
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
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-neutral-900 mb-4">Our Best Houses</h2>
            <p className="text-neutral-500 max-w-md">Explore our handpicked selection of premium properties designed for modern living.</p>
          </div>
          <Link href="#" className="group flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors uppercase tracking-widest border-b border-transparent hover:border-neutral-900 pb-1">
            View Everything <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12 pb-6 border-b border-neutral-200">
          <div className="flex items-center gap-2 text-neutral-400 mr-2">
            <SlidersHorizontal className="w-4 h-4" strokeWidth={1.5} />
            <span className="text-sm font-medium uppercase tracking-wider">Filters:</span>
          </div>
          
          <div className="relative">
            <select 
              value={priceFilter} 
              onChange={(e) => setPriceFilter(e.target.value)} 
              className="appearance-none bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-full px-5 py-2.5 pr-10 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 cursor-pointer transition-all"
            >
              <option value="all">Any Price</option>
              <option value="under5">Under $5M</option>
              <option value="5to10">$5M - $10M</option>
              <option value="over10">Over $10M</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" strokeWidth={1.5} />
          </div>

          <div className="relative">
            <select 
              value={bedsFilter} 
              onChange={(e) => setBedsFilter(e.target.value)} 
              className="appearance-none bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-full px-5 py-2.5 pr-10 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 cursor-pointer transition-all"
            >
              <option value="all">Any Beds</option>
              <option value="3">3 Beds</option>
              <option value="4">4 Beds</option>
              <option value="5">5 Beds</option>
              <option value="6+">6+ Beds</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" strokeWidth={1.5} />
          </div>

          <div className="relative">
            <select 
              value={bathsFilter} 
              onChange={(e) => setBathsFilter(e.target.value)} 
              className="appearance-none bg-white border border-neutral-200 text-neutral-700 text-sm font-medium rounded-full px-5 py-2.5 pr-10 focus:outline-none focus:border-neutral-900 focus:ring-1 focus:ring-neutral-900 cursor-pointer transition-all"
            >
              <option value="all">Any Baths</option>
              <option value="3">3 Baths</option>
              <option value="4">4 Baths</option>
              <option value="5">5 Baths</option>
              <option value="6+">6+ Baths</option>
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" strokeWidth={1.5} />
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProperties.map((property) => (
              <div key={property.id} className="group cursor-pointer">
                <div className="relative aspect-[4/3] w-full overflow-hidden mb-6 bg-neutral-100">
                  <Image
                    src={property.image}
                    alt={property.name}
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
                    <MapPin className="w-3.5 h-3.5" strokeWidth={2} /> {property.location}
                  </div>
                  <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4 group-hover:text-neutral-600 transition-colors">{property.name}</h3>
                  
                  <div className="flex items-center gap-6 text-neutral-600 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize className="w-4 h-4 text-neutral-400" strokeWidth={1.5} /> <span>{property.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-neutral-200 pt-6">
                    <div className="text-2xl font-display font-medium text-neutral-900">{formatPrice(property.price)}</div>
                    <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-900 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 -rotate-45" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-neutral-100 rounded-2xl">
            <h3 className="text-xl font-display font-medium text-neutral-900 mb-2">No properties found</h3>
            <p className="text-neutral-500">Try adjusting your filters to see more results.</p>
            <button 
              onClick={() => {
                setPriceFilter("all");
                setBedsFilter("all");
                setBathsFilter("all");
              }}
              className="mt-6 text-sm font-medium border-b border-neutral-900 pb-1"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {/* Neighborhoods Section */}
      <section className="bg-white py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-neutral-900 mb-4">Explore Neighborhoods</h2>
              <p className="text-neutral-500 max-w-md">Discover exclusive properties in the most sought-after locations across the country.</p>
            </div>
            <Link href="#" className="group flex items-center gap-2 text-sm font-medium text-neutral-900 transition-colors uppercase tracking-widest border-b border-transparent hover:border-neutral-900 pb-1">
              All Locations <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location 1 */}
            <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-neutral-100">
              <Image 
                src="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?q=80&w=600&auto=format&fit=crop" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                alt="Miami" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-display font-medium text-white mb-1">Miami</h3>
                <p className="text-white/70 text-sm">42 Properties</p>
              </div>
            </div>
            
            {/* Location 2 */}
            <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-neutral-100">
              <Image 
                src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&auto=format&fit=crop" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                alt="New York" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-display font-medium text-white mb-1">New York</h3>
                <p className="text-white/70 text-sm">86 Properties</p>
              </div>
            </div>

            {/* Location 3 */}
            <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-neutral-100">
              <Image 
                src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&auto=format&fit=crop" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                alt="Beverly Hills" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-display font-medium text-white mb-1">Beverly Hills</h3>
                <p className="text-white/70 text-sm">35 Properties</p>
              </div>
            </div>

            {/* Location 4 */}
            <div className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-neutral-100">
              <Image 
                src="https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?q=80&w=600&auto=format&fit=crop" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                alt="Aspen" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-display font-medium text-white mb-1">Aspen</h3>
                <p className="text-white/70 text-sm">28 Properties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            {/* Left Collage */}
            <div className="w-full lg:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 relative aspect-[21/9] overflow-hidden bg-neutral-100">
                  <Image
                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop"
                    alt="Mansion"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <Image
                    src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=600&auto=format&fit=crop"
                    alt="Pool"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden bg-neutral-100">
                  <Image
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop"
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

      {/* Testimonials Section */}
      <section className="bg-[#FAFAFA] py-32 border-t border-neutral-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-medium tracking-tight text-neutral-900 mb-4">Client Stories</h2>
            <p className="text-neutral-500 text-lg font-light">Hear from those who have found their perfect home with Estately.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Review Card 1 */}
            <div className="bg-white p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-neutral-100 relative">
              <Quote className="absolute top-10 right-10 w-12 h-12 text-neutral-100" strokeWidth={1} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-neutral-900 text-neutral-900" />)}
              </div>
              <p className="text-neutral-600 leading-relaxed mb-10 relative z-10 font-light">
                "Estately made finding our dream home an absolute breeze. Their exclusive access to off-market properties gave us options we couldn't find anywhere else."
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100">
                  <Image src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" fill className="object-cover" alt="Sarah Jenkins" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm">Sarah Jenkins</h4>
                  <p className="text-xs text-neutral-500">Homeowner in Aspen</p>
                </div>
              </div>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-neutral-100 relative">
              <Quote className="absolute top-10 right-10 w-12 h-12 text-neutral-100" strokeWidth={1} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-neutral-900 text-neutral-900" />)}
              </div>
              <p className="text-neutral-600 leading-relaxed mb-10 relative z-10 font-light">
                "The level of professionalism and dedication from the Estately team is unmatched. They understood exactly what we were looking for and delivered beyond expectations."
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100">
                  <Image src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" fill className="object-cover" alt="Michael Chen" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm">Michael Chen</h4>
                  <p className="text-xs text-neutral-500">Investor in New York</p>
                </div>
              </div>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-neutral-100 relative">
              <Quote className="absolute top-10 right-10 w-12 h-12 text-neutral-100" strokeWidth={1} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-neutral-900 text-neutral-900" />)}
              </div>
              <p className="text-neutral-600 leading-relaxed mb-10 relative z-10 font-light">
                "From the first consultation to closing, the process was seamless. They handled all the complexities of buying a luxury property, allowing us to just enjoy the experience."
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden bg-neutral-100">
                  <Image src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" fill className="object-cover" alt="Elena Rodriguez" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 text-sm">Elena Rodriguez</h4>
                  <p className="text-xs text-neutral-500">Homeowner in Miami</p>
                </div>
              </div>
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

      {/* CTA Section */}
      <section className="bg-neutral-900 text-white py-32 px-6 relative overflow-hidden">
        {/* Subtle background pattern/gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05)_0%,transparent_80%)]"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-6xl font-display font-medium tracking-tight mb-6">Ready to find your dream home?</h2>
              <p className="text-neutral-400 text-lg mb-10 font-light max-w-md leading-relaxed">
                Join our exclusive network of buyers and sellers to experience real estate at its finest. Our agents are ready to assist you.
              </p>
              <div className="flex items-center gap-4">
                <button className="bg-white text-neutral-900 px-8 py-4 hover:bg-neutral-200 transition-colors text-sm font-medium tracking-wide">
                  Browse Properties
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="bg-[#111111] border border-white/10 p-8 md:p-10">
                <h3 className="text-2xl font-display font-medium mb-8">Contact an Agent</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-neutral-400 mb-2">First Name</label>
                      <input type="text" className="w-full bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium tracking-wider uppercase text-neutral-400 mb-2">Last Name</label>
                      <input type="text" className="w-full bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-neutral-400 mb-2">Email Address</label>
                    <input type="email" className="w-full bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-neutral-400 mb-2">Phone Number</label>
                    <input type="tel" className="w-full bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase text-neutral-400 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-transparent border border-white/20 text-white px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none" placeholder="I'm interested in buying a property..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-white text-neutral-900 px-8 py-4 mt-2 hover:bg-neutral-200 transition-colors text-sm font-medium tracking-wide">
                    Send Message
                  </button>
                </form>
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
