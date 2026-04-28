import { X, Check, Monitor, Mail } from 'lucide-react'

const comparisons = [
  { feature: 'Ad blockers stop your ad', digital: true, spotix: false },
  { feature: 'Algorithm changes kill reach', digital: true, spotix: false },
  { feature: 'Competing with 10+ ads on same screen', digital: true, spotix: false },
  { feature: 'Guaranteed physical delivery', digital: false, spotix: true },
  { feature: 'Tangible — stays in the home', digital: false, spotix: true },
  { feature: 'Only 8 advertisers per card', digital: false, spotix: true },
  { feature: 'QR + phone tracking included', digital: 'Extra cost', spotix: true },
  { feature: 'No tech skills needed', digital: false, spotix: true },
]

export default function Comparison() {
  return (
    <section id="comparison" className="py-20 md:py-32 relative">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Digital Ads vs. Spotix</span>
          </h2>
          <p className="text-spotix-gray text-lg max-w-2xl mx-auto">
            See why local businesses are switching from digital to direct mail.
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-spotix-gray font-medium">Feature</th>
                <th className="text-center py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <Monitor className="w-5 h-5 text-spotix-gray" />
                    <span className="text-spotix-gray font-semibold">Digital Ads</span>
                  </div>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-5 h-5 text-spotix-orange" />
                    <span className="text-spotix-orange font-semibold">Spotix</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr key={i} className="border-t border-spotix-gray/10">
                  <td className="py-4 px-4 text-white">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {typeof row.digital === 'boolean' ? (
                      row.digital ? (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      ) : (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      )
                    ) : (
                      <span className="text-spotix-gray text-sm">{row.digital}</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <Check className="w-5 h-5 text-spotix-orange mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
