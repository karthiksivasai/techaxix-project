import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import BackButton from "@/components/BackButton";
import nasimPhoto from "@/assets/NasimAhmed_Photo.jpg";
import { Users } from "lucide-react";

const Directors = () => {
  // Directors page-specific schema
  const directorsSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Directors - Techaxis Consulting Leadership Team",
    "description": "Meet our experienced leadership team at Techaxis Consulting, including directors with deep expertise in Oracle ERP, digital transformation, and financial services.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Techaxis Consulting Private Limited",
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Leadership",
          "recognizedBy": {
            "@type": "Organization",
            "name": "Techaxis Consulting"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Directors - Techaxis Consulting Leadership Team"
        description="Meet our experienced leadership team at Techaxis Consulting, including directors with deep expertise in Oracle ERP, digital transformation, and financial services."
        keywords="Techaxis directors, leadership team, Oracle ERP experts, digital transformation leaders, IT consulting directors"
        schema={directorsSchema}
      />
      
      {/* Hero Section */}
      <section className="section bg-gradient-to-br from-background to-accent/5">
        <div className="container-responsive">
          {/* Back Button */}
          <div className="mb-8">
            <BackButton 
              fallbackPath="/about"
              variant="outline"
              className="text-text-primary hover:text-text-primary-foreground hover:bg-text-primary"
            >
              Back to About
            </BackButton>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-text-primary">
              Our <span className="text-accent">Leadership Team</span>
            </h1>
            <p className="text-lg md:text-xl text-text-body leading-relaxed mb-8">
              Meet the visionary leaders who drive our success and guide our mission to deliver 
              exceptional Oracle ERP solutions and digital transformation services.
            </p>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="section">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-primary">
              Board of Directors
            </h2>
            <p className="text-lg text-text-body max-w-3xl mx-auto">
              Our directors bring decades of combined experience in technology, finance, 
              and business strategy to guide Techaxis Consulting's growth and innovation.
            </p>
          </div>
          
          {/* Directors Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Nasim Ahmad Profile */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-accent/5">
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                    <img 
                      src={nasimPhoto} 
                      alt="Nasim Ahmad - Director" 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '70% 30%' }}
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text-primary">Nasim Ahmad</h3>
                <p className="text-accent font-semibold mb-6 text-lg">Director</p>
                <div className="text-text-body leading-relaxed space-y-4">
                  <p>
                    Nasim is a forward-thinking leader who believes in cultivating authentic, 
                    long-term relationships built on trust and respect.
                  </p>
                  <p>
                    With deep expertise in the banking and financial services domain, he helps 
                    clients design and implement customer-centric solutions that enable impactful 
                    digital transformations.
                  </p>
                  <p>
                    His innovative approach blends industry knowledge with technology, empowering 
                    clients to modernize operations, enhance customer experiences, and maintain 
                    compliance in a rapidly evolving landscape.
                  </p>
                  <p>
                    Nasim also values sustainable business practices and fosters a culture of 
                    healthy collaboration—both within internal teams and in close partnership 
                    with clients—to ensure lasting success.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Tareni Mohanti Profile */}
            <Card className="group hover:shadow-elegant transition-all duration-300 border-0 bg-gradient-to-br from-background to-accent/5">
              <CardContent className="p-8 text-center">
                <div className="mb-8">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent/40 transition-all duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-brand-blue-light/20 flex items-center justify-center">
                      <Users className="w-20 h-20 text-accent/60" />
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-text-primary">Tareni Mohanti</h3>
                <p className="text-accent font-semibold mb-6 text-lg">Director</p>
                <div className="text-text-body leading-relaxed space-y-4">
                  <p>
                    Strategic leader focused on innovation and excellence, committed to delivering 
                    cutting-edge solutions and maintaining our core values.
                  </p>
                  <p>
                    With extensive experience in technology leadership and business development, 
                    Tareni drives our strategic initiatives and ensures operational excellence 
                    across all our service offerings.
                  </p>
                  <p>
                    Her leadership philosophy centers on empowering teams, fostering innovation, 
                    and building strong client relationships that drive mutual success.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Values Section */}
      <section className="section bg-gradient-to-br from-accent/5 to-background">
        <div className="container-responsive">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
              Our Leadership Values
            </h2>
            <p className="text-lg text-text-body max-w-3xl mx-auto">
              Our directors are guided by core principles that shape our company culture 
              and drive our commitment to excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6 border-0 bg-white/50">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary">Collaboration</h3>
                <p className="text-text-body">
                  We believe in the power of teamwork and partnership, both internally and with our clients.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 bg-white/50">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary">Innovation</h3>
                <p className="text-text-body">
                  We continuously seek new ways to solve complex challenges and drive digital transformation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 bg-white/50">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary">Integrity</h3>
                <p className="text-text-body">
                  We maintain the highest standards of honesty and transparency in all our relationships.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Directors;
