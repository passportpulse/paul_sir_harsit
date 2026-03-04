'use client'

import { Phone, Mail, MapPin } from 'lucide-react'

export default function ContactCards() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 mb-12 ">
        <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
          Get in Touch With Us
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl ">
          We're here to help you succeed in your commerce education journey.
          Reach out through any of the following channels.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* RIGHT SIDE BOXES */}
        <div className="space-y-8">
          
          {/* BIG LOCATION BOX */}
          <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
            <div className="flex items-start gap-6">
              <div className="bg-gray-200 p-4 rounded-xl">
                <MapPin className="h-6 w-6 text-gray-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Our Locations
                </h3>
                <div className="flex flex-col md:flex-row gap-4 items-stretch">
                  
                  {/* MAIN BRANCH */}
                  <div className="flex-1 p-4 bg-[#f5c542]/10 rounded-xl h-full">
                    <h4 className="font-bold text-[#0b1e6d] mb-3 flex items-center gap-2">
                      <span className="bg-[#f5c542] text-white text-xs px-2 py-1 rounded">
                        MAIN BRANCH
                      </span>
                    </h4>

                    <div className="space-y-2 text-gray-700 flex flex-col justify-between h-full">
                      <div>
                        <p className="font-semibold">35B, South Sinthee Road</p>
                        <p>Kolkata – 700050</p>
                        <p className="text-sm text-gray-500">(Near Dumdum Station)</p>
                      </div>

                      <button
                        onClick={() =>
                          window.open(
                            "https://www.google.com/maps/search/?api=1&query=35B+South+Sinthee+Road+Kolkata+700050",
                            "_blank"
                          )
                        }
                        className="mt-4 text-[#0b1e6d] hover:text-[#f5c542] text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        View on Google Maps
                      </button>
                    </div>
                  </div>

                  {/* OTHER BRANCH */}
                  <div className="flex-1 p-4 bg-gray-50 rounded-xl h-full">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded">
                        OTHER BRANCH
                      </span>
                    </h4>

                    <div className="space-y-2 text-gray-700 flex flex-col justify-between h-full">
                      <div>
                        <p className="font-semibold">148, Ramdulal Sarkar Street</p>
                        <p>Hedua, Kolkata – 700006</p>
                        <p className="text-sm text-gray-500">(Near Girish Park Metro)</p>
                      </div>

                      <button
                        onClick={() =>
                          window.open(
                            "https://www.google.com/maps/search/?api=1&query=148+Ramdulal+Sarkar+Street+Hedua+Kolkata+700006",
                            "_blank"
                          )
                        }
                        className="mt-4 text-[#0b1e6d] hover:text-[#f5c542] text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        <MapPin className="w-4 h-4" />
                        View on Google Maps
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* TWO SMALL BOXES */}
          <div className="grid sm:grid-cols-2 gap-8">
            
            {/* CALL BOX */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
              <div className="bg-gray-200 p-3 rounded-xl w-fit mb-6">
                <Phone className="h-5 w-5 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Call Us
              </h3>
              <p className="text-gray-600">9007019442</p>
              <p className="text-gray-600">9830275787</p>
            </div>

            {/* EMAIL BOX */}
            <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
              <div className="bg-gray-200 p-3 rounded-xl w-fit mb-6">
                <Mail className="h-5 w-5 text-gray-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Email Us
              </h3>
              <p className="text-gray-600">
                paulsirsclasses@gmail.com
              </p>
              <p className="text-sm text-gray-500 mt-2">
                We reply within 24 hours
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
