import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TestTube, CheckCircle, ArrowRight } from "lucide-react";

const TestingServices = () => {
  const testingTypes = [
    "Functional Testing",
    "Performance Testing",
    "Security Testing",
    "User Acceptance Testing (UAT)",
    "Automation Testing",
    "Mobile Application Testing",
    "API Testing",
    "Cross-browser Testing",
  ];

  const tools = [
    "Selenium WebDriver",
    "JUnit & TestNG",
    "Postman & REST Assured",
    "LoadRunner & JMeter",
    "Cypress & Playwright",
    "Appium for Mobile Testing",
    "OWASP Security Tools",
    "Custom Testing Frameworks",
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <TestTube className="w-8 h-8 text-accent" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-primary">
                  Testing Services
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                The use of automated testing tools and optimized software
                delivery reduces project costs and time-to-market while ensuring
                the highest quality standards.
              </p>
            </div>
            <div className="bg-gradient-primary opacity-20 rounded-2xl h-80"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Comprehensive Quality Assurance
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our comprehensive testing services include functional testing,
                  performance testing, security testing, and user acceptance
                  testing. We ensure your applications are reliable, secure, and
                  perform optimally across all platforms.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With our systematic approach to quality assurance, we help
                  organizations deliver software that meets the highest
                  standards of quality, security, and performance.
                </p>
              </CardContent>
            </Card>

            {/* Testing Types Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Testing Services
                  </h3>
                  <div className="space-y-4">
                    {testingTypes.map((type, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{type}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Testing Tools & Frameworks
                  </h3>
                  <div className="space-y-4">
                    {tools.map((tool, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Benefits Section */}
            <Card className="mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Benefits of Our Testing Services
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">⚡</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Faster Time-to-Market
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Accelerated testing cycles through automation
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">💰</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Cost Reduction
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Lower project costs through efficient testing
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">🛡️</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Higher Quality
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Superior software quality and reliability
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Process Section */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Our Testing Process
                </h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Planning
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Test strategy and planning
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Design</h4>
                    <p className="text-sm text-muted-foreground">
                      Test case design and preparation
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Execution
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Test execution and automation
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-accent font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">
                      Reporting
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Results analysis and reporting
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ensure Your Software Quality
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Partner with us to implement comprehensive testing strategies that
            deliver reliable, high-quality software.
          </p>
          <Button variant="secondary" size="lg">
            Get Testing Services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestingServices;
