import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to transform your farming?
          </h2>
          
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mb-12"
          >
            Download Pro App & Get Started
          </Button>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">About Us</a>
            <a href="#" className="hover:text-foreground transition-colors">Support</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>© 2024 [Company Name]</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;