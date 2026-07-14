import { useState } from 'react'

const initialForm = { name: '', email: '', subject: '', message: '' }

function validate(form) {
  const errors = {}

  if (!form.name.trim()) errors.name = 'Name is required.'
  else if (form.name.length > 100) errors.name = 'Name must be 100 characters or fewer.'

  if (!form.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Enter a valid email address.'

  if (!form.subject.trim()) errors.subject = 'Subject is required.'
  else if (form.subject.length > 150) errors.subject = 'Subject must be 150 characters or fewer.'

  if (!form.message.trim()) errors.message = 'Message is required.'
  else if (form.message.length > 1000) errors.message = 'Message must be 1000 characters or fewer.'

  return errors
}

export default function Contact({ onResult }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setSubmitting(true)

    // NOTE: This is a frontend-only port. Wire this up to your own API
    // endpoint (e.g. POST /api/contact) to actually send the email.
    // The block below simulates the original controller's success/error flow.
    try {
      await new Promise((resolve) => setTimeout(resolve, 900))
      onResult?.({
        type: 'success',
        message: '✅ Your message has been sent successfully.',
      })
      setForm(initialForm)
    } catch {
      onResult?.({
        type: 'error',
        message: '❌ Sorry! Something went wrong while sending your message.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-[80px] lg:py-[110px]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-14">
          <span className="text-primary font-bold">GET IN TOUCH</span>
          <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-bold uppercase mt-2 mb-6 section-title inline-block">
            Contact Me
          </h2>
          <p className="text-[#bbbbbb] leading-[2] max-w-2xl mx-auto">
            Have an idea or project? Feel free to contact me. I'll reply as soon as possible.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Contact Info */}
          <div className="lg:w-5/12">
            <div className="bg-[#141414] rounded-[20px] p-10 h-full">
              <h3 className="text-primary mb-5 text-2xl font-semibold">Let's Work Together</h3>
              <p className="mb-10 text-[#c8c8c8] leading-[1.8]">
                I'm available for internships, freelance work and ASP.NET Core development projects.
              </p>

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#181818] mb-4 transition-transform duration-400 hover:translate-x-2 hover:shadow-[0_10px_25px_rgba(255,0,0,.18)]">
                <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center text-[28px] bg-primary text-white shrink-0">
                  📧
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Email</h5>
                  <p className="text-[#bfbfbf]">m.aitzazqamar510@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#181818] mb-4 transition-transform duration-400 hover:translate-x-2 hover:shadow-[0_10px_25px_rgba(255,0,0,.18)]">
                <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center text-[28px] bg-primary text-white shrink-0">
                  📱
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Phone</h5>
                  <p className="text-[#bfbfbf]">+92 320 5447578</p>
                </div>
              </div>

              <div className="flex items-center gap-5 p-5 rounded-2xl bg-[#181818] transition-transform duration-400 hover:translate-x-2 hover:shadow-[0_10px_25px_rgba(255,0,0,.18)]">
                <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center text-[28px] bg-primary text-white shrink-0">
                  📍
                </div>
                <div>
                  <h5 className="font-semibold mb-1">Location</h5>
                  <p className="text-[#bfbfbf]">Islamabad, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-7/12">
            <div className="bg-white/5 border border-white/[.08] backdrop-blur-md rounded-[20px] p-[35px] transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(255,0,0,.20)]">
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[#dddddd] font-medium mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-[#1b1b1b] border border-[#333] text-white p-[14px] rounded-xl focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(255,0,0,.25)]"
                    />
                    {errors.name && <span className="text-red-400 text-sm mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-[#dddddd] font-medium mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="w-full bg-[#1b1b1b] border border-[#333] text-white p-[14px] rounded-xl focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(255,0,0,.25)]"
                    />
                    {errors.email && <span className="text-red-400 text-sm mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-[#dddddd] font-medium mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="w-full bg-[#1b1b1b] border border-[#333] text-white p-[14px] rounded-xl focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(255,0,0,.25)]"
                  />
                  {errors.subject && <span className="text-red-400 text-sm mt-1 block">{errors.subject}</span>}
                </div>

                <div className="mb-4">
                  <label className="block text-[#dddddd] font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    className="w-full bg-[#1b1b1b] border border-[#333] text-white p-[14px] rounded-xl focus:outline-none focus:border-primary focus:shadow-[0_0_15px_rgba(255,0,0,.25)]"
                  />
                  {errors.message && <span className="text-red-400 text-sm mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="py-[14px] px-[35px] rounded-full font-semibold bg-primary text-white transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(255,0,0,.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
