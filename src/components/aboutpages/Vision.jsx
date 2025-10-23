import { dataMisi } from "../../data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBullseye,
    faCheck,
    faEye,
    faFlag
} from '@fortawesome/free-solid-svg-icons'

export default function Vision() {
    return (
        <section className="section-padding bg-gradient-to-br from-white to-[#FAFAFA]" aria-labelledby="vision-mission-heading">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12 md:mb-16">
                        <div className="inline-flex items-center bg-gradient-to-r from-[#800000] to-[#B22222] text-white rounded-lg px-4 py-2 md:px-6 md:py-3 mb-4 md:mb-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base font-sans">
                            <FontAwesomeIcon icon={faBullseye} className="w-4 h-4 md:w-5 md:h-5" />
                            <span className="font-semibold ml-2 md:ml-3">Visi & Misi Sonia Property</span>
                        </div>
                        <h2 id="vision-mission-heading" className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-[#2B2B2B] mb-4 md:mb-6 leading-tight font-serif">
                            Masa Depan <span className="bg-gradient-to-r from-[#800000] to-[#B22222] bg-clip-text text-transparent">Properti Cirebon</span>
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-[#6B7280] max-w-2xl mx-auto leading-relaxed font-sans">
                            Membangun ekosistem properti Cirebon yang modern, transparan, dan menguntungkan bagi semua pihak.
                        </p>
                    </div>

                    <div className="space-y-8 md:space-y-12">
                        <article className="bg-white rounded-xl p-6 md:p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#800000]/5 to-[#B22222]/5 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16"></div>

                            <div className="mb-4 md:mb-6 relative z-10">
                                <div className="flex items-center mb-3 md:mb-4">
                                    <div className="bg-gradient-to-br from-[#800000] to-[#B22222] p-3 md:p-4 rounded-xl mr-3 md:mr-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        <FontAwesomeIcon icon={faEye} className="text-white w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-[#2B2B2B] group-hover:text-[#800000] transition-colors duration-300 leading-tight font-sans">Visi Kami</h3>
                                </div>
                                <div className="w-12 h-1 md:w-16 md:h-1 bg-gradient-to-r from-[#800000] to-[#B22222] rounded-full group-hover:w-20 md:group-hover:w-24 transition-all duration-300 ml-16 md:ml-20"></div>
                            </div>
                            <p className="text-base sm:text-lg text-[#6B7280] leading-relaxed md:leading-loose relative z-10 font-sans">
                                Menjadi <strong className="text-[#800000] font-semibold">agen properti terpercaya di Cirebon</strong> yang menghubungkan masyarakat dengan properti impian mereka melalui layanan profesional, kepercayaan, dan pengalaman pelanggan yang terbaik.
                            </p>
                        </article>

                        <article className="bg-gradient-to-br from-[#800000] to-[#B22222] rounded-xl p-6 md:p-8 shadow-lg text-white group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                            <div className="mb-4 md:mb-6 relative z-10">
                                <div className="flex items-center mb-3 md:mb-4">
                                    <div className="bg-white/20 p-3 md:p-4 rounded-xl mr-3 md:mr-4 shadow-inner backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                        <FontAwesomeIcon icon={faFlag} className="text-white w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight font-sans">Misi Kami</h3>
                                </div>
                                <div className="w-12 h-1 md:w-16 md:h-1 bg-white/60 rounded-full group-hover:w-20 md:group-hover:w-24 transition-all duration-300 ml-16 md:ml-20"></div>
                            </div>
                            <ul className="space-y-3 md:space-y-4 relative z-10">
                                {dataMisi.map((mission, index) => (
                                    <li key={index} className="flex items-start group/item hover:translate-x-2 transition-transform duration-300">
                                        <div className="bg-white/20 p-1.5 md:p-2 rounded-lg mr-3 md:mr-4 mt-0.5 md:mt-1 backdrop-blur-sm group-hover/item:bg-white/30 transition-colors duration-300 flex-shrink-0">
                                            <FontAwesomeIcon icon={faCheck} className="text-white w-3 h-3 md:w-4 md:h-4" />
                                        </div>
                                        <span className="text-white/90 leading-relaxed flex-1 text-sm sm:text-base md:text-lg font-sans">{mission}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}