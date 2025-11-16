import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faPlus, faCalendar } from '@fortawesome/free-solid-svg-icons'

export default function HeroHomepages() {
    return (
        <section className="pt-20 pb-12 md:pt-24 md:pb-20 lg:pt-28 lg:pb-24 bg-gradient-to-br from-[#FAFAFA] via-[#FFFFFF] to-[#F8F6F4] min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-10">
                <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    {/* Image Content - Dipindahkan ke atas untuk mobile */}
                    <div className="w-full lg:w-1/2 lg:order-2">
                        <div className="relative">
                            <img
                                src="https://res.cloudinary.com/du4wegspv/image/upload/f_auto,q_auto/v1761172708/soniaproperti_w7hoyv.webp"
                                alt="Sonia Property - Platform properti premium di Cirebon"
                                className="rounded-xl shadow-xl w-full max-w-full h-auto border-4 border-white"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 lg:order-1 mb-8 md:mb-0">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2B2B2B] mb-4 md:mb-6 leading-tight md:leading-tight lg:leading-tight font-serif text-center lg:text-left">
                            Platform Properti <span className="text-[#800000] block sm:inline">Premium</span> di Cirebon
                        </h1>

                        <p className="text-base sm:text-lg md:text-xl text-[#6B7280] mb-6 md:mb-8 leading-relaxed md:leading-loose tracking-normal font-sans text-center lg:text-left">
                            <strong className="font-semibold text-[#800000]">Sonia Property</strong> menghadirkan pengalaman eksklusif dalam jual, beli, dan sewa properti di Cirebon dan sekitarnya.
                            Dengan sistem digital yang canggih dan tampilan yang elegan, kami memudahkan Anda menemukan
                            rumah, ruko, tanah, atau apartemen dengan gaya hidup masa kini.
                        </p>

                        {/* Buttons - Ukuran font diperbaiki untuk desktop */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-8 md:mb-12 lg:flex-row lg:gap-4">
                            <Link
                                to={"/layanan"}
                                className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-[#800000] text-white font-semibold rounded-lg shadow-md hover:shadow-xl hover:bg-[#B22222] transition-all duration-300 flex items-center justify-center text-sm sm:text-base lg:text-sm xl:text-base tracking-wide font-sans hover:transform hover:-translate-y-1 lg:px-6 lg:py-3">
                                <FontAwesomeIcon icon={faSearch} className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="ml-2">Jelajahi Properti Cirebon</span>
                            </Link>
                            <a
                                href="https://wa.me/62817730219"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-6 py-3 sm:px-7 sm:py-3 md:px-8 md:py-4 bg-transparent border-2 border-[#800000] text-[#800000] font-semibold rounded-lg hover:bg-[#800000] hover:text-white transition-all duration-300 flex items-center justify-center text-sm sm:text-base lg:text-sm xl:text-base tracking-wide font-sans hover:transform hover:-translate-y-1 lg:px-6 lg:py-3">
                                <FontAwesomeIcon icon={faPlus} className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="ml-2">Pasang Iklan Properti</span>
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                            <div className="text-center bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#800000] leading-none">10+</div>
                                <div className="text-[#6B7280] text-xs sm:text-sm md:text-base mt-1 tracking-wide font-sans">Properti Tersedia</div>
                            </div>
                            <div className="text-center bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#800000] leading-none">42</div>
                                <div className="text-[#6B7280] text-xs sm:text-sm md:text-base mt-1 tracking-wide font-sans">Properti Terjual</div>
                            </div>
                            <div className="text-center bg-white p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#800000] leading-none">10+</div>
                                <div className="text-[#6B7280] text-xs sm:text-sm md:text-base mt-1 tracking-wide font-sans">Tahun Pengalaman</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}