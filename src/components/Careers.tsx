import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Users, TrendingUp, Award, Globe } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      title: "Global Opportunities",
      description: "Work with international clients and teams across multiple time zones",
      icon: Globe
    },
    {
      title: "Professional Growth",
      description: "Continuous learning and development programs to advance your career",
      icon: TrendingUp
    },
    {
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive team environment",
      icon: Users
    },
    {
      title: "Recognition & Rewards",
      description: "Performance-based rewards and recognition for outstanding contributions",
      icon: Award
    }
  ];

  const positions = [
    "Senior Software Engineer",
    "Cloud Solutions Architect", 
    "DevOps Engineer",
    "UI/UX Designer",
    "Business Analyst",
    "Project Manager"
  ];

  return (
    <section className="py-20 bg-background" id="careers">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2 tracking-wider">JOIN OUR TEAM</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Build Your Career With Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Join Quantum Innovative Solutions and be part of a dynamic team that's 
            shaping the future of technology. We offer exciting opportunities for 
            growth and innovation.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-card-custom transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-semibold text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Open Positions */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Current Openings</h3>
            <div className="space-y-4">
              {positions.map((position, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-accent/50 transition-colors duration-300">
                  <span className="font-medium text-foreground">{position}</span>
                  <Button variant="ghost" size="sm">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Us?</h3>
            <p className="mb-6 text-primary-foreground/90">
              Don't see the perfect role? We're always looking for talented individuals 
              to join our growing team. Send us your resume and let's explore opportunities together.
            </p>
            <div className="space-y-4">
              <Button variant="secondary" size="lg" className="w-full">
                Submit Your Resume
              </Button>
              <Button variant="outline" size="lg" className="w-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;