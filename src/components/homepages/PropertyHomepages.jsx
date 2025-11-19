import { propertyTypes } from "../../data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { SectionHeader } from "../Template"

export default function PropertyHomepages() {
    return (
        <section className="section-padding bg-gradient-to-b from-[#121212] to-[#1A1A1A]" aria-labelledby="property-types-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeader
                    title={"Jelajahi Berbagai"}
                    subTitle={"Jenis Properti"}
                    desc={"Dari rumah keluarga hingga investasi komersial, temukan berbagai pilihan properti di Cirebon sesuai kebutuhan Anda."}
                />

                <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-6">
                    {propertyTypes.map((property, index) => (
                        <article
                            key={index}
                            className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group border border-[#FFFFFF15]"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={property.image}
                                    alt={`${property.title} di Cirebon - ${property.description}`}
                                    className="w-full h-40 xs:h-44 sm:h-48 md:h-52 lg:h-48 xl:h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4">
                                    <span className="bg-gradient-to-r from-[#E4725A] to-[#D8896A] text-white px-2 py-1 xs:px-2 xs:py-1 sm:px-3 sm:py-1 rounded-lg text-xs font-medium shadow-lg">
                                        {property.count}+ Tersedia
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            <div className="p-4 xs:p-5 sm:p-6 md:p-5 lg:p-6">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <div className="bg-gradient-to-r from-[#E4725A] to-[#D8896A] p-2 rounded-lg mr-3 group-hover:from-[#D6A676] group-hover:to-[#D6A676] transition-all duration-300 shadow-lg group-hover:scale-110">
                                        <FontAwesomeIcon
                                            icon={faHome}
                                            className="w-4 h-4 xs:w-4 xs:h-4 sm:w-5 sm:h-5 text-white"
                                        />
                                    </div>
                                    <h3 className="text-base xs:text-lg sm:text-xl font-bold text-white group-hover:text-[#D6A676] transition-colors duration-300 leading-tight font-sans">
                                        {property.title}
                                    </h3>
                                </div>

                                <p className="text-[#CCCCCC] mb-4 sm:mb-5 leading-relaxed text-xs xs:text-sm sm:text-base font-sans line-clamp-3">
                                    {property.description}
                                </p>

                                <div className="flex justify-between items-center">
                                    <span className="text-xs text-[#A7A7A7] flex items-center font-sans">
                                        <FontAwesomeIcon
                                            icon={faMapMarkerAlt}
                                            className="w-3 h-3 xs:w-3 xs:h-3 sm:w-4 sm:h-4"
                                        />
                                        <span className="ml-1 xs:ml-1 sm:ml-2">Seluruh Cirebon</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}