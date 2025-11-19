import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCalendar,
    faChevronDown,
    faSearch,
    faStar
} from '@fortawesome/free-solid-svg-icons'

export default function HeroServicepages() {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#121212] relative overflow-hidden" aria-labelledby="services-hero-heading">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#E4725A] rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#D6A676] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#D8896A] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center bg-[#1E1E1E]/80 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-2 mb-6 md:mb-8 border border-[#E4725A]/30">
                        <FontAwesomeIcon icon={faStar} className="text-[#D6A676] w-4 h-4 md:w-5 md:h-5" />
                        <span className="text-[#CCCCCC] font-medium text-sm md:text-base font-sans ml-2">Platform Properti Terpercaya di Cirebon</span>
                    </div>

                    <h1 id="services-hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                        Layanan <span className="bg-gradient-to-r from-[#E4725A] to-[#D6A676] bg-clip-text text-transparent">Sonia Property</span>
                    </h1>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#CCCCCC] max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed md:leading-loose font-sans">
                        Temukan solusi properti terbaik untuk kebutuhan Anda di Cirebon. <strong className="font-semibold text-[#D6A676]">Jual, beli, atau sewa properti</strong> dengan mudah, aman, dan terpercaya melalui platform digital modern kami.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto">
                        <div className="text-center bg-[#1E1E1E]/80 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-[#E4725A]/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E4725A] mb-1 leading-none">10+</div>
                            <div className="text-[#CCCCCC] text-xs sm:text-sm leading-tight font-sans">Properti Aktif</div>
                        </div>
                        <div className="text-center bg-[#1E1E1E]/80 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-[#D8896A]/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D8896A] mb-1 leading-none">1.2K+</div>
                            <div className="text-[#CCCCCC] text-xs sm:text-sm leading-tight font-sans">Klien Puas</div>
                        </div>
                        <div className="text-center bg-[#1E1E1E]/80 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-[#D6A676]/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D6A676] mb-1 leading-none">98%</div>
                            <div className="text-[#CCCCCC] text-xs sm:text-sm leading-tight font-sans">Success Rate</div>
                        </div>
                        <div className="text-center bg-[#1E1E1E]/80 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-[#FFFFFF]/20">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 leading-none">Profesional</div>
                            <div className="text-[#CCCCCC] text-xs sm:text-sm leading-tight font-sans">Layanan Unggulan</div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <a
                            href="#properti"
                            className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#E4725A] to-[#D8896A] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-[#D8896A] hover:to-[#E4725A] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center text-sm sm:text-base lg:text-sm xl:text-base font-sans"
                        >
                            <FontAwesomeIcon icon={faSearch} className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="ml-2 md:ml-3">Jelajahi Properti Cirebon</span>
                        </a>
                        <a
                            href="https://wa.me/62817730219"
                            target="_blank"
                            className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-transparent border-2 border-[#D6A676] text-[#D6A676] font-semibold rounded-lg hover:bg-[#D6A676] hover:text-[#121212] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center text-sm sm:text-base lg:text-sm xl:text-base font-sans">
                            <FontAwesomeIcon icon={faCalendar} className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="ml-2 md:ml-3">Konsultasi Gratis</span>
                        </a>
                    </div>

                    <div className="flex justify-center">
                        <div className="animate-bounce">
                            <FontAwesomeIcon icon={faChevronDown} className="text-[#D6A676] w-6 h-6 md:w-8 md:h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}