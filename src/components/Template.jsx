export function SectionHeader({ title, subTitle, desc }) {
    return (
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16">
            <h2
                className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-[#2B2B2B] mb-3 xs:mb-4 sm:mb-4 md:mb-5 lg:mb-6 leading-tight tracking-tight font-serif"
            >
                {title} <span className="bg-gradient-to-r from-[#800000] to-[#B22222] bg-clip-text text-transparent">
                    {subTitle}
                </span>
            </h2>
            <p className="text-base xs:text-lg sm:text-lg md:text-xl text-[#6B7280] max-w-2xl xs:max-w-2xl sm:max-w-3xl mx-auto leading-relaxed md:leading-loose tracking-normal font-sans px-4 xs:px-0"
                dangerouslySetInnerHTML={{ __html: desc }}
            />
        </div>
    )
}