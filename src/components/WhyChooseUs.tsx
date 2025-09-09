import { CheckCircle, Clock, TrendingUp } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "AI Accuracy",
      description: "Real time data collection from real to improve."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Early Alerts", 
      description: "Prevent problems improve smart and easy live action tracking performance."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Better Yield",
      description: "Optimize farming work to maximize productivity required more money productivity."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-card-border rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {benefit.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;