import weatherImage from "@/assets/weather-forecast.jpg";
import plantHealthImage from "@/assets/plant-health.jpg";
import fertilizerImage from "@/assets/fertilizer-calc.jpg";
import pestDiseaseImage from "@/assets/pest-disease.jpg";

const Features = () => {
  const features = [
    {
      image: weatherImage,
      title: "Weather Forecast",
      description: "Help grow live status weather forecast 15 long part from fields."
    },
    {
      image: plantHealthImage,
      title: "Plant Health Scan Boosting",
      description: "Advanced agent best health for around your extreme."
    },
    {
      image: fertilizerImage,
      title: "Fertilizer Calculator",
      description: "Calculates optimal fertilizer blend to real your faster."
    },
    {
      image: pestDiseaseImage,
      title: "Pests & Disease Alerts",
      description: "Identify pests improve pests damage and getting disease affecting you."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card border border-card-border rounded-2xl p-6 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;