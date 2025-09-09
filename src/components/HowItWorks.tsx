import { Leaf, BarChart3, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Leaf className="w-12 h-12 text-primary" />,
      title: "Monitor",
      description: "Real time data collection from fields."
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-primary" />,
      title: "Analyze", 
      description: "AI powered insight becomes for best health growth."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Optimize",
      description: "AI powered suggestions for growth for maximize crop growth."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Agritech monitoring gets easier to transform your farming.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-card border border-card-border flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;