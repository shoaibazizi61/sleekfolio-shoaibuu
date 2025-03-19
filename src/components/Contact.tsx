
import { useState } from 'react';
import { Send, Linkedin, Instagram, Dribbble, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset the success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground/90 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-background transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground/90 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-background transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground/90 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-background transition-all"
                  placeholder="Project inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground/90 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-background resize-none transition-all"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                    isSubmitted 
                      ? 'bg-green-600 text-white' 
                      : 'bg-primary text-white hover:shadow-lg hover:shadow-primary/20'
                  }`}
                >
                  {isSubmitted ? (
                    <>Message sent successfully!</>
                  ) : (
                    <>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="glass p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 font-montserrat">Let's Connect</h3>
              <p className="text-foreground/80 mb-8">
                Whether you have a project inquiry or just want to say hello, feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:shoaibuudesign@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                    shoaibuudesign@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+420792883261" className="text-primary hover:text-primary/80 transition-colors">
                    +420 792 883 261
                  </a>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-1">Based in</h4>
                  <p className="text-foreground/80">Prague, Czechia</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3">Social Profiles</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://www.linkedin.com/in/shoaibuu/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-white transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/ishoaibuu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-white transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://dribbble.com/shoaibuu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-white transition-all"
                      aria-label="Dribbble"
                    >
                      <Dribbble className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/shoaibazizi61" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-white transition-all"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
