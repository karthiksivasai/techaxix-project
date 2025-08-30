import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResponsiveTest = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container-laptop-lg">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-fluid-4xl sm:text-fluid-5xl md:text-fluid-6xl lg:text-fluid-6xl xl:text-fluid-7xl 2xl:text-fluid-7xl font-bold text-foreground mb-6">
            Resolution-Based Responsive Test
          </h1>
          <p className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl lg:text-fluid-2xl xl:text-fluid-3xl text-muted-foreground max-w-4xl mx-auto">
            Test the responsive scaling system across different screen sizes and resolutions
          </p>
        </div>

        {/* Breakpoint Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="card-responsive">
            <CardHeader>
              <CardTitle className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl">Mobile</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-muted-foreground mb-4">
                ≤ 767px
              </p>
              <div className="space-y-2">
                <div className="h-2 bg-primary rounded"></div>
                <div className="h-2 bg-secondary rounded"></div>
                <div className="h-2 bg-accent rounded"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-responsive">
            <CardHeader>
              <CardTitle className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl">Tablet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-muted-foreground mb-4">
                768px - 1023px
              </p>
              <div className="space-y-2">
                <div className="h-2 bg-primary rounded"></div>
                <div className="h-2 bg-secondary rounded"></div>
                <div className="h-2 bg-accent rounded"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-responsive">
            <CardHeader>
              <CardTitle className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl">Laptop</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-muted-foreground mb-4">
                1024px - 1439px
              </p>
              <div className="space-y-2">
                <div className="h-2 bg-primary rounded"></div>
                <div className="h-2 bg-secondary rounded"></div>
                <div className="h-2 bg-accent rounded"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="card-responsive">
            <CardHeader>
              <CardTitle className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl">Desktop</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-muted-foreground mb-4">
                1440px+
              </p>
              <div className="space-y-2">
                <div className="h-2 bg-primary rounded"></div>
                <div className="h-2 bg-secondary rounded"></div>
                <div className="h-2 bg-accent rounded"></div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Typography Test */}
        <Card className="card-responsive mb-12">
          <CardHeader>
            <CardTitle className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-4xl xl:text-fluid-5xl">
              Typography Scaling Test
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h1 className="text-fluid-5xl sm:text-fluid-6xl lg:text-fluid-6xl xl:text-fluid-7xl font-bold text-foreground">
                Heading 1 - Main Title
              </h1>
              <p className="text-fluid-sm text-muted-foreground">Fluid scaling from mobile to desktop</p>
            </div>
            
            <div>
              <h2 className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-4xl xl:text-fluid-5xl font-semibold text-foreground">
                Heading 2 - Section Title
              </h2>
              <p className="text-fluid-sm text-muted-foreground">Responsive typography with clamp()</p>
            </div>
            
            <div>
              <h3 className="text-fluid-xl sm:text-fluid-2xl lg:text-fluid-2xl xl:text-fluid-3xl font-medium text-foreground">
                Heading 3 - Subsection
              </h3>
              <p className="text-fluid-sm text-muted-foreground">Optimized for all screen sizes</p>
            </div>
            
            <div>
              <p className="text-fluid-base sm:text-fluid-lg md:text-fluid-xl lg:text-fluid-xl xl:text-fluid-2xl text-foreground">
                This is body text that scales responsively across all devices. The text size adjusts smoothly 
                from mobile phones to ultra-wide monitors, ensuring optimal readability at every resolution.
              </p>
              <p className="text-fluid-sm text-muted-foreground">Body text with fluid scaling</p>
            </div>
          </CardContent>
        </Card>

        {/* Spacing Test */}
        <Card className="card-responsive mb-12">
          <CardHeader>
            <CardTitle className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-4xl xl:text-fluid-5xl">
              Spacing & Layout Test
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-secondary rounded-lg">
                <h4 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
                  Card 1
                </h4>
                <p className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-muted-foreground">
                  Responsive padding and margins
                </p>
              </div>
              
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-secondary rounded-lg">
                <h4 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
                  Card 2
                </h4>
                <p className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-muted-foreground">
                  Consistent spacing patterns
                </p>
              </div>
              
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-secondary rounded-lg">
                <h4 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl font-semibold mb-2 sm:mb-3 md:mb-4">
                  Card 3
                </h4>
                <p className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-muted-foreground">
                  Mobile-first approach
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Button Test */}
        <Card className="card-responsive mb-12">
          <CardHeader>
            <CardTitle className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-4xl xl:text-fluid-5xl">
              Button Scaling Test
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              <Button className="btn-responsive">
                Small Button
              </Button>
              <Button className="btn-responsive-lg">
                Large Button
              </Button>
              <Button variant="outline" className="btn-responsive">
                Outline Button
              </Button>
            </div>
            
            <div className="text-center">
              <Button 
                variant="default" 
                size="lg" 
                className="btn-responsive-lg px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20 py-3 sm:py-4 md:py-5 lg:py-6 xl:py-7"
              >
                Responsive CTA Button
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Container Test */}
        <Card className="card-responsive mb-12">
          <CardHeader>
            <CardTitle className="text-fluid-2xl sm:text-fluid-3xl md:text-fluid-4xl lg:text-fluid-4xl xl:text-fluid-5xl">
              Container Classes Test
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="p-6 bg-secondary rounded-lg">
              <h4 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl font-semibold mb-4">
                container-responsive
              </h4>
              <p className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-muted-foreground">
                Max-width: 1440px - Suitable for most laptops and desktops
              </p>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h4 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl font-semibold mb-4">
                container-laptop-sm
              </h4>
              <p className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-muted-foreground">
                Max-width: 1280px - Perfect for MacBook 13" and small laptops
              </p>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h4 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl font-semibold mb-4">
                container-laptop-lg
              </h4>
              <p className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-muted-foreground">
                Max-width: 1600px - Ideal for 15-16" laptops
              </p>
            </div>
            
            <div className="p-6 bg-secondary rounded-lg">
              <h4 className="text-fluid-lg sm:text-fluid-xl md:text-fluid-2xl font-semibold mb-4">
                container-ultra-wide
              </h4>
              <p className="text-fluid-sm sm:text-fluid-base md:text-fluid-lg text-muted-foreground">
                Max-width: 1920px - For ultra-wide monitors
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="card-responsive">
          <CardHeader>
            <CardTitle className="text-fluid-xl sm:text-fluid-2xl md:text-fluid-3xl lg:text-fluid-3xl xl:text-fluid-4xl">
              Testing Instructions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-fluid-base sm:text-fluid-lg md:text-fluid-xl">
              <p>
                <strong>1. Test at these resolutions:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>320px (small phone)</li>
                <li>768px (tablet)</li>
                <li>1024px (small laptop)</li>
                <li>1280px (MacBook 13")</li>
                <li>1440px (large laptop)</li>
                <li>1600px (desktop)</li>
                <li>1920px (ultra-wide)</li>
                <li>2560px (4K)</li>
              </ul>
              
              <p className="mt-6">
                <strong>2. Verify:</strong>
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Typography scales smoothly</li>
                <li>Spacing increases proportionally</li>
                <li>No horizontal overflow</li>
                <li>Content remains centered on wide screens</li>
                <li>Icons and buttons scale appropriately</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResponsiveTest;
