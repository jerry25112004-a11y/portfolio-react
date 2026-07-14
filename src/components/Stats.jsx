const stats = [
  { value: '15+', label: 'Projects Completed' },
  { value: '3+', label: 'ASP.NET Projects' },
  { value: '8+', label: 'Technologies' },
  { value: '100%', label: 'Client Satisfaction' },
]

export default function Stats() {
  return (
    <section className="py-[80px] lg:py-[110px]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h2 className="text-primary text-[36px] sm:text-[42px] font-extrabold mb-2">{stat.value}</h2>
              <p className="text-[#bbbbbb]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
