import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Globe,
  MapPin,
  Calendar,
  User,
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      title: "Global Opportunities",
      description:
        "Work with international clients and teams across multiple time zones",
      icon: Globe,
    },
    {
      title: "Professional Growth",
      description:
        "Continuous learning and development programs to advance your career",
      icon: TrendingUp,
    },
    {
      title: "Collaborative Culture",
      description:
        "Work with talented professionals in a supportive team environment",
      icon: Users,
    },
    {
      title: "Recognition & Rewards",
      description:
        "Performance-based rewards and recognition for outstanding contributions",
      icon: Award,
    },
  ];

  const jobOpenings = [
    {
      title: "System Analyst",
      location: "Orange, CA",
      duration: "16+ mos Contract",
      experience: "4+ Years",
      skills: ["C Programming", "Firmware development", "PEI", "DXE", "BDS"],
      type: "Contract",
    },
    {
      title: "Software Developer",
      location: "Remote",
      duration: "Full-time",
      experience: "3+ Years",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      type: "Full-time",
    },
    {
      title: "Salesforce Developer",
      location: "New York, NY",
      duration: "Full-time",
      experience: "5+ Years",
      skills: ["Salesforce", "Apex", "Lightning", "Integration"],
      type: "Full-time",
    },
    {
      title: "Java Developer",
      location: "Austin, TX",
      duration: "Full-time",
      experience: "4+ Years",
      skills: ["Java", "Spring Boot", "Microservices", "Kafka"],
      type: "Full-time",
    },
    {
      title: "DevOps Engineer",
      location: "Seattle, WA",
      duration: "Full-time",
      experience: "6+ Years",
      skills: ["Docker", "Kubernetes", "Jenkins", "AWS"],
      type: "Full-time",
    },
    {
      title: "Quality Assurance Engineer",
      location: "Remote",
      duration: "Full-time",
      experience: "3+ Years",
      skills: ["Automation Testing", "Selenium", "Jest", "Cypress"],
      type: "Full-time",
    },
  ];

  const allRoles = [
    "System Analyst",
    "System Administrator",
    "Software Developer",
    "Salesforce Developer",
    "SAP HR",
    "SAP HR Consultants",
    "Programmer Analyst",
    "Java Developer",
    "Hadoop Developer",
    "Big Data Developer",
    ".Net Developer",
    "Quality Assurance Engineer",
    "DevOps Engineer",
    "Oracle Developer",
    "Project Manager",
    "System Tester",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
            Careers
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            @Techaxis Consulting we offer career, not jobs.
          </p>
        </div>
      </section>

      {/* What We Are Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">
                What We Are
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We believe productivity and efficiency cannot be rule-bound,
                  nor can it be achieved without setting targets. We fuel our
                  people's dreams of high achievement with hope since we believe
                  people will flourish when they have hope.
                </p>
                <p>
                  @Techaxis Consulting we provide healthy, real-time and
                  enjoyable work environment since we believe "People give their
                  best when they enjoy their work". We provide opportunities
                  wherein people can grow and perform.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden text-center hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl"
                >
                  <CardContent className="relative p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <benefit.icon className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-primary mb-2 text-sm">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>

                  {/* Clean glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Career Opportunities
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role to
              advance your career.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            {jobOpenings.map((job, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out hover:scale-105 cursor-pointer border border-gradient-to-r from-accent via-brand-blue-light to-accent rounded-2xl"
              >
                <CardContent className="relative p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-primary">
                      {job.title}
                    </h3>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>Experience: {job.experience}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-2 text-sm">
                      Required Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Details & Apply
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>

                {/* Clean glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-brand-blue-light/20 rounded-2xl blur-xl"></div>
                </div>
              </Card>
            ))}
          </div>

          {/* All Available Roles */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary mb-8">
              All Available Roles
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {allRoles.map((role, index) => (
                <div
                  key={index}
                  className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
                >
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Don't see the perfect role? We're always looking for talented
            individuals. Send us your resume and let's explore opportunities
            together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Submit Your Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
