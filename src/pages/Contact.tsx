import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const offices = [
    {
      name: "NJ Office",
      address: "220 Davidson Ave, Suite # 125, Somerset NJ, 08873",
      phone: "+1 (732) 555-0123",
      email: "nj@quantuminnovativesolutions.com"
    },
    {
      name: "MI Office", 
      address: "755 W BIG BEAVER RD, SUITE 2020, TROY, MI 48084-4925",
      phone: "+1 (248) 526-1100",
      email: "mi@quantuminnovativesolutions.com"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't hesitate to contact and feel free to reach us!
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              Give us a call or drop an email at anytime, we answer all enquiries within 24 hours. 
              We will be happy to answer your questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-card-custom transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">{office.name}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{office.address}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                      <a href={`tel:${office.phone}`} className="text-muted-foreground hover:text-accent transition-colors duration-200">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-muted-foreground hover:text-accent transition-colors duration-200">
                        {office.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-accent flex-shrink-0" />
                      <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-6">Get In Touch</h2>
              <p className="text-muted-foreground">Ready to Get Started?</p>
            </div>

            <Card className="shadow-card-custom">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input id="company" placeholder="Enter your company name" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="Enter your city" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input id="country" placeholder="Enter your country" required />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone *</Label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      rows={6}
                      placeholder="Tell us about your project or requirements..." 
                      required 
                    />
                  </div>

                  <div className="text-center">
                    <Button variant="cta" size="lg" type="submit">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Our Locations</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-secondary/30 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-accent mx-auto mb-2" />
                      <h4 className="font-semibold text-primary">NJ Office</h4>
                      <p className="text-sm text-muted-foreground">Somerset, New Jersey</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-secondary/30 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-accent mx-auto mb-2" />
                      <h4 className="font-semibold text-primary">MI Office</h4>
                      <p className="text-sm text-muted-foreground">Troy, Michigan</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;