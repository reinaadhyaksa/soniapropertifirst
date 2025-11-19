import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus, faCalendar } from '@fortawesome/free-solid-svg-icons'

export default function HeroHomepages() {
    return (
        <section className="pt-20 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 bg-gradient-to-br from-[#121212] via-[#181818] to-[#1F1F1F] min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">

                    {/* Image Content */}
                    <div className="w-full lg:w-1/2 lg:order-2">
                        <div className="relative">
                            <img
                                src="https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto/v1761172708/soniaproperti_w7hoyv.webp"
                                alt="Sonia Property - Platform properti premium di Cirebon"
                                className="rounded-xl shadow-2xl w-full max-w-full h-auto border-2 border-white/10"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 lg:order-1 mb-8 md:mb-0">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight font-serif text-center lg:text-left">
                            Platform Properti <span className="text-[#C2185B] block sm:inline font-serif">Premium</span> di Cirebon
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 leading-relaxed tracking-normal text-center lg:text-left">
                            <strong className="font-serif font-semibold text-[#D4AF37]">Sonia Property</strong> menghadirkan pengalaman eksklusif dalam jual, beli, dan sewa properti di Cirebon dan sekitarnya.
                            Dengan sistem digital yang canggih dan tampilan yang elegan, kami memudahkan Anda menemukan
                            rumah, ruko, tanah, atau apartemen dengan gaya hidup masa kini.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12">

                            {/* Button 1 */}
                            <Link
                                to={"/layanan"}
                                className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-[#8B0000] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-[#A52A2A] transition-all duration-300 flex items-center justify-center text-sm sm:text-base tracking-wide hover:transform hover:-translate-y-1 hover:scale-105">
                                <FontAwesomeIcon icon={faSearch} className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="ml-2 font-bold">Jelajahi Properti Cirebon</span>
                            </Link>

                            {/* Button 2 (Gold) */}
                            <a
                                href="https://wa.me/62817730219"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-lg hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center justify-center text-sm sm:text-base tracking-wide hover:transform hover:-translate-y-1 hover:scale-105">
                                <FontAwesomeIcon icon={faPlus} className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="ml-2 font-bold">Pasang Iklan Properti</span>
                            </a>

                        </div>

                        {/* Stats */}
                        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                            <div className="text-center bg-[#1E1E1E] p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-[#C2185B] hover:transform hover:-translate-y-1">
                                <div className="text-2xl md:text-3xl font-bold text-[#C2185B] leading-none">10+</div>
                                <div className="text-white text-sm md:text-base mt-1 font-bold">Properti Tersedia</div>
                            </div>

                            <div className="text-center bg-[#1E1E1E] p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-[#D4AF37] hover:transform hover:-translate-y-1">
                                <div className="text-2xl md:text-3xl font-bold text-[#D4AF37] leading-none">42</div>
                                <div className="text-white text-sm md:text-base mt-1 font-bold">Properti Terjual</div>
                            </div>

                            <div className="text-center bg-[#1E1E1E] p-4 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 hover:border-[#C2185B] hover:transform hover:-translate-y-1">
                                <div className="text-2xl md:text-3xl font-bold text-[#C2185B] leading-none">10+</div>
                                <div className="text-white text-sm md:text-base mt-1 font-bold">Tahun Pengalaman</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}