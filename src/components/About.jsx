const details = [
  { label: 'Name', value: 'Muhammad Aitzaz' },
  { label: 'Email', value: 'm.aitzazqamar510@gmail.com' },
  { label: 'Location', value: 'Islamabad, Pakistan' },
  { label: 'Education', value: 'BS Software Engineering' },
]

export default function About() {
  return (
    <section id="about" className="py-[80px] lg:py-[120px]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left */}
          <div className="flex-1 flex justify-center order-1 lg:order-none">
            <img
              src="/images/profile.png"
              alt="Muhammad Aitzaz"
              className="w-[280px] sm:w-[340px] lg:w-[380px] rounded-[20px] border-[5px] border-primary shadow-[0_0_35px_rgba(255,0,0,.25)] transition-transform duration-400 hover:scale-[1.03]"
            />
          </div>

          {/* Right */}
          <div className="flex-1">
            <span className="text-primary font-bold">ABOUT ME</span>
            <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-bold uppercase mt-2 mb-6 relative section-title text-left inline-block">
              Passionate ASP.NET Core Developer
            </h2>

            <p className="text-[#bbbbbb] leading-[2] mb-8">
              Hi, I'm <strong className="text-white">Muhammad Aitzaz</strong>, a passionate ASP.NET Core MVC
              developer with a strong interest in building modern, responsive and user-friendly web
              applications.
            </p>

            <p className="text-[#bbbbbb] leading-[2] mb-8">
              I enjoy developing applications using ASP.NET Core MVC, C#, SQL Server, Bootstrap, HTML, CSS
              and JavaScript. I'm always learning new technologies and improving my problem-solving skills.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {details.map((item) => (
                <div key={item.label}>
                  <h6 className="text-primary font-bold mb-1">{item.label}</h6>
                  <p className="text-[#dddddd]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
