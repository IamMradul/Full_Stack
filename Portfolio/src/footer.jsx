function Footer() {
  return (
    <>
      <h2>Contact Me!</h2>

      <form className="contact-form">
        
        <label htmlFor="name">Enter Your Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder="Eg. John Doe" 
          required 
        />

        <label htmlFor="email">Enter Your E-mail ID:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Eg. JohnDoe23@gmail.com" 
          required 
        />

        <label htmlFor="phone">Enter Your Phone No.:</label>
        <input 
          type="tel" 
          id="phone" 
          name="phone" 
          placeholder="Eg. +91 99999 99999" 
          required 
        />

        <label htmlFor="reason">Reason of contact</label>
        <select id="reason" name="reason" required>
          <option value="">---Reason---</option>
          <option value="job">Job Opportunity</option>
          <option value="freelance">Freelance Work</option>
          <option value="training">Training</option>
        </select>

        <label htmlFor="feedback">I'll be happy to know my errors:</label>
        <textarea 
          id="feedback" 
          name="feedback" 
          placeholder="Feedback"
        ></textarea>

        <button type="submit">Send</button>

      </form>
      <footer>
        &copy; All Rights are Reserved : Mradul Gupta
    </footer>
    </>
  );
}

export default Footer;