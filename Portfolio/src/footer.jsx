import { useState } from 'react'

function Footer({ isMobile, theme, isDark }) {
  const [hoveredButton, setHoveredButton] = useState(false)
  const [focusedField, setFocusedField] = useState('')

  const styles = {
    section: {
      marginTop: isMobile ? '30px' : '36px',
      borderRadius: '20px',
      background: theme.contactBg,
      border: `1px solid ${theme.contactBorder}`,
      padding: isMobile ? '18px 14px' : '24px 22px',
      color: theme.contactText,
      boxShadow: '0 20px 34px rgba(49, 32, 19, 0.24)',
      animation: 'riseUp 1s ease both',
      transition: 'background 220ms ease',
    },
    heading: {
      margin: 0,
      fontFamily: 'Playfair Display, Georgia, serif',
      fontSize: isMobile ? '1.35rem' : '1.65rem',
      letterSpacing: '0.02em',
    },
    text: {
      margin: '8px 0 16px',
      color: theme.contactText,
      lineHeight: 1.7,
      maxWidth: '60ch',
      opacity: 0.92,
    },
    form: {
      display: 'grid',
      gap: '11px',
      gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    },
    fieldBlock: {
      display: 'grid',
      gap: '7px',
    },
    fullWidth: {
      gridColumn: '1 / -1',
      display: 'grid',
      gap: '7px',
    },
    label: {
      fontWeight: 700,
      fontSize: '0.85rem',
      color: theme.contactText,
      letterSpacing: '0.02em',
    },
    input: {
      width: '100%',
      border: `1px solid ${theme.inputBorder}`,
      background: theme.inputBg,
      color: theme.inputText,
      borderRadius: '10px',
      padding: '10px 12px',
      outline: 'none',
      fontFamily: 'Manrope, Segoe UI, sans-serif',
      fontSize: '0.92rem',
      transition: 'border-color 140ms ease, box-shadow 140ms ease, background 140ms ease',
    },
    textarea: {
      width: '100%',
      minHeight: '110px',
      resize: 'vertical',
      border: `1px solid ${theme.inputBorder}`,
      background: theme.inputBg,
      color: theme.inputText,
      borderRadius: '10px',
      padding: '10px 12px',
      outline: 'none',
      fontFamily: 'Manrope, Segoe UI, sans-serif',
      fontSize: '0.92rem',
      transition: 'border-color 140ms ease, box-shadow 140ms ease, background 140ms ease',
    },
    button: {
      marginTop: '2px',
      width: isMobile ? '100%' : 'fit-content',
      border: 'none',
      borderRadius: '10px',
      padding: '11px 18px',
      fontWeight: 800,
      cursor: 'pointer',
      color: theme.primaryText,
      background: theme.primaryGradient,
      boxShadow: '0 10px 18px rgba(35, 20, 10, 0.3)',
      fontFamily: 'Manrope, Segoe UI, sans-serif',
      transition: 'transform 170ms ease, box-shadow 170ms ease, filter 170ms ease',
    },
    footer: {
      borderTop: `1px solid ${theme.contactBorder}`,
      marginTop: '18px',
      paddingTop: '14px',
      fontSize: '0.84rem',
      color: theme.contactText,
      letterSpacing: '0.02em',
      opacity: 0.9,
    },
  }

  const inputStyle = (field) => ({
    ...styles.input,
    borderColor: focusedField === field ? theme.eyebrow : theme.inputBorder,
    boxShadow: focusedField === field ? `0 0 0 3px ${isDark ? 'rgba(212, 165, 121, 0.24)' : 'rgba(210, 158, 108, 0.22)'}` : 'none',
  })

  const textareaStyle = {
    ...styles.textarea,
    borderColor: focusedField === 'feedback' ? theme.eyebrow : theme.inputBorder,
    boxShadow:
      focusedField === 'feedback'
        ? `0 0 0 3px ${isDark ? 'rgba(212, 165, 121, 0.24)' : 'rgba(210, 158, 108, 0.22)'}`
        : 'none',
  }

  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.text}>
        Open to internships, project collaborations, and software opportunities. Share your message and
        I will get back to you soon.
      </p>

      <form style={styles.form}>
        <div style={styles.fieldBlock}>
          <label htmlFor="name" style={styles.label}>
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Eg. John Doe"
            required
            style={inputStyle('name')}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField('')}
          />
        </div>

        <div style={styles.fieldBlock}>
          <label htmlFor="email" style={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Eg. john23@gmail.com"
            required
            style={inputStyle('email')}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField('')}
          />
        </div>

        <div style={styles.fieldBlock}>
          <label htmlFor="phone" style={styles.label}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Eg. +91 99999 99999"
            required
            style={inputStyle('phone')}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => setFocusedField('')}
          />
        </div>

        <div style={styles.fieldBlock}>
          <label htmlFor="reason" style={styles.label}>
            Reason for Contact
          </label>
          <select
            id="reason"
            name="reason"
            required
            style={inputStyle('reason')}
            onFocus={() => setFocusedField('reason')}
            onBlur={() => setFocusedField('')}
          >
            <option value="">Select a reason</option>
            <option value="job">Job Opportunity</option>
            <option value="freelance">Freelance Work</option>
            <option value="collaboration">Project Collaboration</option>
          </select>
        </div>

        <div style={styles.fullWidth}>
          <label htmlFor="feedback" style={styles.label}>
            Message
          </label>
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Write your message here..."
            style={textareaStyle}
            onFocus={() => setFocusedField('feedback')}
            onBlur={() => setFocusedField('')}
          />
        </div>

        <div style={styles.fullWidth}>
          <button
            type="submit"
            style={{
              ...styles.button,
              transform: hoveredButton ? 'translateY(-2px)' : 'translateY(0)',
              filter: hoveredButton ? 'brightness(1.04)' : 'none',
              boxShadow: hoveredButton ? '0 14px 22px rgba(35, 20, 10, 0.35)' : styles.button.boxShadow,
            }}
            onMouseEnter={() => setHoveredButton(true)}
            onMouseLeave={() => setHoveredButton(false)}
          >
            Send Message
          </button>
        </div>
      </form>

      <footer style={styles.footer}>&copy; {new Date().getFullYear()} Mradul Gupta. All rights reserved.</footer>
    </section>
  )
}

export default Footer