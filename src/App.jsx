import React, { useState } from 'react'
import { Button } from './components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card.jsx'
import { Input } from './components/ui/input.jsx'
import { Textarea } from './components/ui/textarea.jsx'
import { Badge } from './components/ui/badge.jsx'
import {
  Bot,
  Zap,
  Clock,
  DollarSign,
  Settings,
  Shield,
  ArrowRight,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X
} from 'lucide-react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will contact you soon.')
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Industrial Automation",
      description: "Transform your manufacturing processes with intelligent robotic systems that increase efficiency and reduce costs."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Optimization",
      description: "Streamline repetitive tasks and workflows using AI-powered automation solutions tailored to your business needs."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Custom Robotics",
      description: "Design and deploy custom robotic solutions for specialized tasks in your industry or workplace."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Implement automated quality control systems that ensure consistent product standards and reduce human error."
    }
  ]

  const benefits = [
    { icon: <Clock className="w-6 h-6" />, text: "Save 80% of time on repetitive tasks" },
    { icon: <DollarSign className="w-6 h-6" />, text: "Reduce operational costs by up to 60%" },
    { icon: <CheckCircle className="w-6 h-6" />, text: "Increase accuracy to 99.9%" },
    { icon: <Zap className="w-6 h-6" />, text: "24/7 continuous operation" }
  ]

  const portfolioItems = [
    {
      title: "Manufacturing Line Automation",
      description: "Automated assembly line for automotive parts with 300% efficiency increase",
      category: "Manufacturing"
    },
    {
      title: "Warehouse Management System",
      description: "Robotic inventory management reducing processing time by 75%",
      category: "Logistics"
    },
    {
      title: "Quality Control Robots",
      description: "AI-powered inspection systems with 99.9% accuracy rate",
      category: "Quality Assurance"
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bot className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gradient-green">Carbonaz Solutions</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
            
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Get Quote
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-green">
                Start Automation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
                <a href="#services" className="hover:text-primary transition-colors">Services</a>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
                <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
                <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Get Quote
                  </Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Start Automation
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-primary/20 text-primary border-primary">
                🤖 Next-Gen Automation
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Automate Your Future with 
                <span className="text-gradient-green"> Smart Robotics</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your business with cutting-edge automation solutions. 
                Our robots handle repetitive tasks so your team can focus on innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-lift">
                  Start Your Automation Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Watch Demo Video
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <div className="text-primary">{benefit.icon}</div>
                    <span className="text-muted-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-green rounded-lg p-8 hover-lift">
                <div className="bg-card rounded-lg p-6">
                  <Bot className="w-24 h-24 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-center mb-2">Ready to Automate?</h3>
                  <p className="text-center text-muted-foreground">
                    Join 500+ companies that trust our automation solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comprehensive <span className="text-gradient-green">Automation Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple task automation to complex robotic systems, we provide end-to-end solutions 
              that transform how your business operates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover-lift group">
                <CardHeader>
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary">
                About Carbonaz Solutions
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Leading the <span className="text-gradient-green">Automation Revolution</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                With over a decade of experience in robotics and automation, we've helped hundreds of 
                businesses transform their operations. Our team of expert engineers and AI specialists 
                design custom solutions that deliver measurable results.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>500+ Successful Automation Projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>99.9% System Reliability Rate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span>24/7 Technical Support</span>
                </div>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-green rounded-lg p-1">
                <div className="bg-background rounded-lg p-8">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">10+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              Our Work
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Success <span className="text-gradient-green">Stories</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've helped businesses across industries achieve remarkable results 
              through intelligent automation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="bg-card border-border hover-lift">
                <CardHeader>
                  <Badge className="w-fit bg-primary/20 text-primary border-primary mb-2">
                    {item.category}
                  </Badge>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground mb-4">
                    {item.description}
                  </CardDescription>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    View Case Study
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary">
              Get In Touch
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-gradient-green">Automate</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how our automation solutions can transform your business. 
              Get a free consultation and custom quote today.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">contact@carbonazsolutions.com</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-muted-foreground">123 Innovation Drive, Tech City, TC 12345</div>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-background border-border">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-input border-border focus:border-primary"
                      />
                    </div>
                  </div>
                  <Input
                    name="company"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="bg-input border-border focus:border-primary"
                  />
                  <Textarea
                    name="message"
                    placeholder="Tell us about your automation needs..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="bg-input border-border focus:border-primary"
                  />
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="w-8 h-8 text-primary" />
                <span className="text-xl font-bold text-gradient-green">Carbonaz Solutions</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Leading the automation revolution with intelligent robotic solutions 
                for businesses worldwide.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Industrial Automation</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Process Optimization</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Custom Robotics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Quality Assurance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-muted-foreground mb-4">
                Stay updated with the latest automation trends and solutions.
              </p>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="bg-input border-border" />
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Carbonaz Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
