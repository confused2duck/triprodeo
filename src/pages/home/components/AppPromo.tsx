export default function AppPromo() {
  return (
    <section className="py-16 md:py-24" style={{ background: '#111' }}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-400 text-xs uppercase tracking-widest font-semibold mb-3">Download Now</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Take Triprodeo<br />Wherever You Go
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-md">
              Book on-the-go, get exclusive app-only deals, real-time notifications, offline itinerary access, and seamless check-in — all in your pocket.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8 max-w-xs">
              {[
                { icon: 'ri-flashlight-line', text: 'Instant booking' },
                { icon: 'ri-percent-line', text: 'App-only deals' },
                { icon: 'ri-wifi-off-line', text: 'Offline access' },
                { icon: 'ri-notification-3-line', text: 'Real-time alerts' },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <div className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-full shrink-0">
                    <i className={`${icon} text-amber-400 text-sm`} />
                  </div>
                  <span className="text-white/70 text-xs">{text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl hover:bg-stone-100 transition-colors cursor-pointer">
                <i className="ri-apple-fill text-stone-900 text-2xl" />
                <div className="text-left">
                  <p className="text-stone-500 text-xs">Download on the</p>
                  <p className="text-stone-900 text-sm font-bold">App Store</p>
                </div>
              </button>
              <button className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl hover:bg-stone-100 transition-colors cursor-pointer">
                <i className="ri-google-play-fill text-stone-900 text-2xl" />
                <div className="text-left">
                  <p className="text-stone-500 text-xs">Get it on</p>
                  <p className="text-stone-900 text-sm font-bold">Google Play</p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-80 md:w-80 md:h-96">
              <img
                src="https://readdy.ai/api/search-image?query=modern%20smartphone%20mockup%20showing%20luxury%20travel%20app%20interface%20with%20property%20cards%20and%20booking%20on%20screen%2C%20isolated%20on%20dark%20background%2C%20premium%20product%20photography&width=400&height=500&seq=app1&orientation=portrait"
                alt="Triprodeo App"
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute -top-4 -right-4 bg-amber-400 text-stone-900 rounded-2xl px-3 py-2 text-xs font-bold shadow-lg">
                App-only 20% off
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
