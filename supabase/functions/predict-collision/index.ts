import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { satelliteData, debrisData, timeframe } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');

    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Predicting collision for:', satelliteData);

    const systemPrompt = `You are AstroCleanAI, an expert satellite collision prediction system.
Analyze satellite orbital data and predict collision risks with space debris.
Return predictions in JSON format with risk levels (low/medium/high), probability percentages, 
time to closest approach, and recommended maneuvers.`;

    const userPrompt = `Analyze collision risk for satellite:
- Name: ${satelliteData.name}
- Orbit: ${satelliteData.orbit}
- Velocity: ${satelliteData.velocity}
- Position: ${satelliteData.position}

Debris in vicinity: ${debrisData.count} objects
Timeframe: ${timeframe || '24-72 hours'}

Provide detailed collision prediction with risk assessment and maneuver recommendations.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error(`AI prediction failed: ${response.status}`);
    }

    const data = await response.json();
    const prediction = data.choices[0].message.content;

    console.log('Prediction generated:', prediction);

    return new Response(JSON.stringify({ prediction }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in predict-collision:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
