
import { useState } from 'react';
import { Send, Linkedin, Instagram, Dribbble, Github } from 'lucide-react';
import { Button } from './ui/button';
import emailjs from 'emailjs-com';
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

// Create a schema for form validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize the form with react-hook-form and zod validation
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Prepare the template parameters for EmailJS
    const templateParams = {
      from_name: values.name,
      reply_to: values.email,
      subject: values.subject,
      message: values.message,
      to_email: 'shoaibuudesign@gmail.com',
    };

    // Send the email using EmailJS
    emailjs.send(
      'service_gvwuhci', // Service ID from EmailJS
      'template_7i8xj4u', // Template ID from EmailJS
      templateParams,
      'FEpRt_p5uQsRLFHrt' // Public Key from EmailJS
    )
      .then((response) => {
        console.log('Email sent successfully:', response);
        toast({
          title: "Message Sent",
          description: "Your message has been sent successfully. I'll get back to you soon!",
          variant: "default",
        });
        form.reset();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        toast({
          title: "Error",
          description: "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground/90">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your name" 
                          {...field}
                          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-background transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground/90">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="your.email@example.com" 
                          {...field}
                          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-background transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground/90">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Project inquiry" 
                          {...field}
                          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-background transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-foreground/90">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell me about your project..." 
                          {...field}
                          rows={5}
                          className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none bg-background resize-none transition-all"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 bg-primary text-white hover:shadow-lg hover:shadow-primary/20`}
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
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
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/ishoaibuu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://dribbble.com/shoaibuu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                      aria-label="Dribbble"
                    >
                      <Dribbble className="w-5 h-5" />
                    </a>
                    <a 
                      href="https://github.com/shoaibazizi61" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center bg-background hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1"
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
