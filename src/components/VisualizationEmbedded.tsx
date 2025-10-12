const VisualizationEmbedded = () => {
  return (
    <section id="visualization" className="py-12 bg-background text-center">
      <h2 className="text-3xl font-bold text-foreground mb-4">
        Real-Time 3D Satellite Visualization
      </h2>
      <p className="text-muted-foreground mb-6">
        Explore real-time satellite orbits with interactive visualization.
      </p>

      <div className="relative w-full max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://stuffin.space/"
          className="w-full h-full"
          frameBorder="0"
          loading="lazy"
          onError={(e) => {
            console.error("Visualization iframe blocked or failed to load.");
          }}
          title="3D Satellite Visualization"
        />
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        (If the visualization doesn’t load, click below to open it externally)
      </p>
      <a
        href="https://stuffin.space/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2 text-secondary underline hover:text-secondary/80"
      >
        Open Full Visualization
      </a>
    </section>
  );
};

export default VisualizationEmbedded;
