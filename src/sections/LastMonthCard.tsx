import { Mail } from 'lucide-react'

export default function LastMonthCard() {
  return (
    <section id="last-card" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-spotix-orange/5 via-transparent to-spotix-orange/5" />
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">See What 10,000 Homes Received</span>
          </h2>
          <p className="text-spotix-gray text-lg max-w-2xl mx-auto">
            An example of a Spotix postcard mailing — professional, tangible, impossible to ignore.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-spotix-darkgray/50 rounded-3xl p-8 md:p-12 border border-spotix-orange/20 glow-orange">
            {/* Postcard Mockup */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              {/* Postcard Header */}
              <div className="bg-gradient-to-r from-spotix-orange to-spotix-orangeDark p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Sample Advertiser</p>
                      <p className="text-white/80 text-sm">Toronto, ON</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 text-xs">YOUR AD HERE</p>
                    <p className="text-white font-bold text-xl">SPOTIX</p>
                  </div>
                </div>
              </div>

              {/* Postcard Body */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Left: Ad Space */}
                  <div>
                    <div className="bg-spotix-gray/10 rounded-xl p-6 border-2 border-dashed border-spotix-orange/30 mb-4">
                      <div className="w-20 h-20 bg-spotix-orange/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl font-black text-spotix-orange">LOGO</span>
                      </div>
                      <div className="text-center space-y-2">
                        <div className="h-4 bg-spotix-gray/20 rounded w-3/4 mx-auto" />
                        <div className="h-4 bg-spotix-gray/20 rounded w-1/2 mx-auto" />
                        <div className="h-4 bg-spotix-orange/20 rounded w-2/3 mx-auto mt-4" />
                      </div>
                    </div>
                    <p className="text-spotix-gray text-xs text-center">Your business gets a dedicated spot like this</p>
                  </div>

                  {/* Right: Info */}
                  <div className="space-y-4">
                    <h4 className="text-spotix-black font-bold text-lg">What You Get:</h4>
                    <ul className="space-y-3">
                      {[
                        'Professional postcard design',
                        'Guaranteed delivery to 10,000 homes',
                        'QR code for digital tracking',
                        'Unique phone number for call tracking',
                        'Your logo, offer, and contact info',
                        'Only 8 advertisers per card',
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-spotix-gray text-sm">
                          <div className="w-5 h-5 rounded-full bg-spotix-orange/10 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-spotix-orange" />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t border-spotix-gray/10">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-spotix-gray">Scan to learn more:</span>
                        <div className="w-16 h-16 bg-spotix-black rounded-lg flex items-center justify-center">
                          <div className="w-12 h-12 border-2 border-white rounded flex items-center justify-center">
                            <span className="text-white text-xs">QR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Postcard Footer */}
              <div className="bg-spotix-black/5 px-8 py-4 flex items-center justify-between">
                <p className="text-spotix-gray text-xs">Delivered by Spotix Direct Mail</p>
                <p className="text-spotix-orange text-xs font-semibold">10,000 Toronto Homes</p>
              </div>
            </div>

            {/* Caption */}
            <p className="text-spotix-gray text-sm text-center mt-6">
              This is a sample layout. Your actual design will be customized with your branding and offer.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
