import React, { useState } from 'react'

// Put your Web3Forms Access Key here to receive emails.
// Get your free key instantly from: https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: 'AI Applications',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      console.warn("Web3Forms Access Key is not configured. Simulating successful submission.")
      setSubmitted(true)
      return
    }

    setLoading(true)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formState.name,
          email: formState.email,
          company: formState.company,
          subject: `New Evolvix Inquiry from ${formState.name}`,
          service: formState.service,
          message: formState.message,
        }),
      })

      const result = await response.json()
      if (result.success) {
        setSubmitted(true)
      } else {
        alert("Something went wrong: " + (result.message || "Please try again."))
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Failed to send message. Please check your internet connection and try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Info Side */}
          <div className="contact-info">
            <p className="section-label">Connect</p>
            <h2 className="section-title">Let's Build Something Intelligent Together</h2>
            <p className="section-subtitle">
              Have an idea, project, or want to explore how artificial intelligence can optimize your workflows? Reach out to our team of experts.
            </p>

            <div className="contact-items">
              <div className="contact-item reveal">
                <div className="contact-item-icon">📬</div>
                <div className="contact-item-text">
                  <strong>Email Us</strong>
                  <span>hr.evolvix.official@gmail.com</span>
                </div>
              </div>
              <div className="contact-item reveal reveal-delay-1">
                <div className="contact-item-icon">📍</div>
                <div className="contact-item-text">
                  <strong>Location</strong>
                  <span>Global Operations / Remote-first</span>
                </div>
              </div>
              <div className="contact-item reveal reveal-delay-2">
                <div className="contact-item-icon">⚡</div>
                <div className="contact-item-text">
                  <strong>Response Time</strong>
                  <span>Within 24 Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="contact-form reveal">
            {submitted ? (
              <div className="form-success">
                <h3>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--color-text-muted)', marginTop: 12 }}>
                  Thank you for reaching out to Evolvix. One of our experts will get back to you shortly.
                </p>
                <button
                  className="btn btn-primary"
                  style={{ marginTop: 24 }}
                  onClick={() => {
                    setSubmitted(false)
                    setFormState({ name: '', email: '', company: '', service: 'AI Applications', message: '' })
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Start a Conversation</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-company">Company Name</label>
                    <input
                      type="text"
                      id="contact-company"
                      name="company"
                      placeholder="Acme Corp"
                      value={formState.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-service">Interested Service</label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                    >
                      <option value="AI Applications">AI Applications</option>
                      <option value="Custom Software Development">Custom Software</option>
                      <option value="Intelligent Automation">Intelligent Automation</option>
                      <option value="Scalable Digital Products">Scalable Digital Products</option>
                      <option value="Other">Other / General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">How Can We Help?</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell us about your project goals or requirements..."
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
