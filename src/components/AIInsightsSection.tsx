const AIInsightsSection = () => {
  return (
    <section id="ai-insights" className="mt-12 px-4">
      <h2 className="text-2xl font-semibold mb-4 text-foreground">
        AI Insights
      </h2>
      <div className="w-full h-[80vh] border border-border rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://izzah-khursheed-astrocleanai.hf.space/"
          title="AI Insights"
          className="w-full h-full"
          frameBorder="0"
        />
      </div>
    </section>
  );
};

export default AIInsightsSection;
