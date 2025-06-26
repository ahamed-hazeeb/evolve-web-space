
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Let's connect to discuss opportunities or collaborations!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-3 font-semibold transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="flex flex-col justify-center">
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Email</h4>
                    <a 
                      href="mailto:your.email@example.com" 
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      your.email@example.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Location</h4>
                    <p className="text-slate-600">Sri Lanka</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-4">Connect</h4>
                    <div className="flex gap-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-300 hover:bg-slate-100"
                        onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-300 hover:bg-slate-100"
                        onClick={() => window.open('https://github.com/yourusername', '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    </div>
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
