import { Button } from "@/components/ui/button";
import phoneImage from "@/assets/phone-mockup.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-12">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Revolutionize Your Farm with{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              AI Powered Crop Monitoring
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Monitor, Analyze and Optimize for Healthier Yields
          </p>
          
          <div className="flex justify-center mb-16">
            <div className="relative">
              <img 
                src={phoneImage} 
                alt="AI Crop Monitoring App Interface" 
                className="w-64 md:w-80 h-auto rounded-3xl shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 0 40px hsl(var(--primary) / 0.3))'
                }}
              />
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Start Monitoring Your Crops
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;