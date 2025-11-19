import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeadset,
    faClock,
    faShieldAlt,
    faUsers,
    faTag,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export default function HeroContactpages() {
    return (
        <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#121212] relative overflow-hidden" aria-labelledby="contact-hero-heading">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#E4725A] rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#D6A676] rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-[#D8896A] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center bg-[#1E1E1E]/80 backdrop-blur-sm rounded-lg px-4 py-2 md:px-6 md:py-2 mb-6 md:mb-8 border border-[#E4725A]/30">
                        <FontAwesomeIcon icon={faHeadset} className="text-[#D6A676] mr-2 text-sm w-4 h-4" />
                        <span className="text-[#CCCCCC] font-medium text-sm sm:text-base font-sans">Layanan Pelanggan Profesional</span>
                    </div>

                    {/* Main Heading */}
                    <h1 id="contact-hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif">
                        Hubungi <span className="bg-gradient-to-r from-[#E4725A] to-[#D6A676] bg-clip-text text-transparent">Sonia Property</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#CCCCCC] max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed md:leading-loose font-sans">
                        Kami siap membantu Anda dalam setiap langkah perjalanan properti di Cirebon. Jangan ragu untuk menghubungi tim Sonia Property yang ramah dan profesional.
                    </p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 max-w-2xl mx-auto">
                        <div className="text-center bg-[#1E1E1E]/80 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-[#E4725A]/20 hover:border-[#D6A676]/30 transition-all duration-300">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                                <FontAwesomeIcon icon={faClock} className="text-[#D6A676] text-lg md:text-xl" />
                            </div>
                            <div className="text-[#CCCCCC] text-xs sm:text-sm leading-tight font-sans">Respons Cepat</div>
                        </div>
                        <div className="text-center bg-[#1E1E1E]/80 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-[#D8896A]/20 hover:border-[#D6A676]/30 transition-all duration-300">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                                <FontAwesomeIcon icon={faShieldAlt} className="text-[#D6A676] text-lg md:text-xl" />
                            </div>
                            <div className="text-[#CCCCCC] text-xs sm:text-sm leading-tight font-sans">Aman & Terpercaya</div>
                        </div>
                        <div className="text-center bg-[#1E1E1E]/80 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-[#D6A676]/20 hover:border-[#D6A676]/30 transition-all duration-300">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                                <FontAwesomeIcon icon={faUsers} className="text-[#D6A676] text-lg md:text-xl" />
                            </div>
                            <div className="text-[#CCCCCC] text-xs sm:text-sm leading-tight font-sans">Tim Profesional</div>
                        </div>
                        <div className="text-center bg-[#1E1E1E]/80 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-[#FFFFFF]/20 hover:border-[#D6A676]/30 transition-all duration-300">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                                <FontAwesomeIcon icon={faTag} className="text-[#D6A676] text-lg md:text-xl" />
                            </div>
                            <div className="text-[#CCCCCC] text-xs sm:text-sm leading-tight font-sans">Gratis Konsultasi</div>
                        </div>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                        <a
                            href="https://wa.me/62817730219" target="_blank"
                            className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 shadow-lg flex items-center justify-center group text-sm sm:text-base lg:text-sm xl:text-base font-sans">
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-2 md:mr-3 text-base md:text-lg group-hover:scale-110 transition-transform" />
                            Chat WhatsApp
                        </a>
                        <a
                            href="tel:0817730219"
                            className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-transparent border-2 border-[#D6A676] text-[#D6A676] font-semibold rounded-lg hover:bg-[#D6A676] hover:text-[#121212] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-center justify-center group text-sm sm:text-base lg:text-sm xl:text-base font-sans">
                            <FontAwesomeIcon icon={faHeadset} className="mr-2 md:mr-3 text-base md:text-lg group-hover:scale-110 transition-transform" />
                            Telepon Langsung
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="flex justify-center">
                        <div className="animate-bounce">
                            <FontAwesomeIcon icon={faChevronDown} className="text-[#D6A676] text-xl md:text-2xl opacity-70" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}