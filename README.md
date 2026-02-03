# 🌌 AstroSafe — AI-Powered Space Traffic Management and Collision Avoidance System

**AstroSafe** is a next-generation **Space Situational Awareness (SSA)** and **Space Traffic Management (STM)** platform designed to predict, visualize, and prevent satellite collisions using **AI-driven orbit analytics**, **real-time visualization**, and **autonomous decision support**.

It integrates **deep learning–based trajectory modeling**, **orbital mechanics computation**, and **3D visualization** (inspired by [StuffIn.Space](https://github.com/ajmas/StuffInSpace)) to enhance **safety, efficiency, and automation** in low Earth orbit (LEO) operations.

---

## 🛰️ Problem Context

With over **9,000 active satellites** and **36,000+ tracked debris objects**, space has become congested.  
Every day, operators must monitor thousands of conjunction alerts — possible collisions that could trigger cascading debris events (Kessler Syndrome).

Traditional systems rely on manual tracking and simple physics models. However:
- Collision probabilities are uncertain.
- Decision-making is slow.
- Visualization lacks AI insights.

**AstroSafe bridges this gap** — combining **AI**, **aerospace-grade analytics**, and **immersive visualization** to enable proactive, data-driven space traffic safety.

---

## 🚀 Our Mission

To enable **autonomous orbital safety** — where AI can **predict, prioritize, and prevent** potential collisions, providing mission operators a clear and intelligent view of orbital threats.

---

## ✨ Core Innovation

Unlike existing visualization tools or static dashboards, **AstroSafe introduces an integrated intelligence layer**:
- 🧠 AI-based **collision prediction** using past orbital behavior.
- 🌐 Real-time **3D spatial situational visualization**.
- 🔔 Automated **risk alerting and maneuver recommendations**.
- 📊 Orbital heatmaps highlighting **congested and unstable regions**.
- 🛰️ Integration with **Thales-inspired control architecture** for scalability.

---

## ⚙️ System Architecture (Deep Dive)

AstroSafe follows a **three-tier modular architecture**:  
**1️⃣ Data Layer → 2️⃣ AI Prediction Layer → 3️⃣ Visualization Layer**

```
                               ┌────────────────────────────┐
                               │       User Interface       │
                               │  React + Three.js + Vite   │
                               └────────────┬───────────────┘
                                            │
                     ┌───────────────────────┴────────────────────────┐
                     │                                                │
             ┌────────────────────┐                      ┌────────────────────┐
             │  Data Ingestion API │                      │ AI Prediction Engine│
             │ (NORAD / SpaceTrack)│                      │ (Python, TensorFlow)│
             └────────────────────┘                      └────────────────────┘
                     │                                                │
                     └───────────────────────┬────────────────────────┘
                                             │
                               ┌────────────────────────────┐
                               │ Visualization + Analytics │
                               │ (3D Rendering, Alerts)    │
                               └────────────────────────────┘
```

---

## 🧩 Data Layer — Orbital Data Ingestion

**Data Sources:**
- **NORAD TLE Feeds** – Two-Line Element data for every known satellite and debris object.  
- **NASA Space-Track API** – Real-time updates on new launches, decayed orbits, and collisions.  
- **Custom Data Inputs** – Users can upload TLEs or custom satellite files to simulate mission risks.  

**Processing:**
- A **Node.js backend** (planned) periodically fetches TLE data.
- Data is standardized using the `sgp4` library to compute Cartesian coordinates (x, y, z) in Earth-centered inertial (ECI) frame.
- Cleaned data is sent to the AI model for inference and to the frontend for visualization.

---

## 🧠 AI Prediction Layer — Collision Risk Estimation

**Objective:**  
Estimate the probability of collision between any two orbital objects within a given time window (e.g., next 24–48 hours).

**Model Overview:**
- **Input:** Time-series of orbital state vectors for multiple objects.
- **Architecture:** Hybrid deep learning model combining:
  - LSTM for temporal pattern recognition.
  - Graph Neural Networks (GNNs) for spatial relationships between orbiting bodies.
  - Attention layers for weighting high-risk regions dynamically.
- **Output:** Collision Probability `P(col)` between 0 and 1.

**Prediction Equation:**
\[ P(col) = \sigma(W_f [LSTM(x_t), GNN(G_t)] + b) \]

**Example Output:**
```json
{
  "objectA": "STARLINK-3214",
  "objectB": "COSMOS-2251 DEB",
  "probability": 0.81,
  "closest_approach": "2025-10-13T02:14:00Z",
  "miss_distance_km": 0.17
}
```

---

## 🌍 Visualization Layer — Real-Time Orbital Awareness

**Frontend Framework:**  
Built in **React + Three.js**, with an emphasis on **real-time rendering**, **intuitive interactivity**, and **aerospace UI fidelity**.

**Features:**
- Real-time 3D rendering of Earth and satellite constellations.
- Zoom and rotation to explore specific orbital planes.
- Satellite trails, velocity vectors, and altitude indicators.
- **Color-coded markers:**
  - 🟢 Safe  
  - 🟡 Medium risk  
  - 🔴 High risk  

**Libraries Used:**
- Three.js for rendering
- React Three Fiber for state management
- TailwindCSS for styling (Thales brand-inspired palette)

---

## 🎨 Frontend Design — Thales Aesthetic

| Element | Color Code | Description |
|----------|-------------|-------------|
| Primary Blue | `#002554` | Core brand color (Thales) |
| Accent Cyan | `#00AEEF` | Represents AI and technology |
| Orbit Line | `#6FC3DF` | Neutral satellite path |
| Danger Highlight | `#FF3B3B` | Collision probability > 0.7 |
| Background | `#000814` | Deep space black |

**Layout:**
- **Hero Section:** Animated 3D globe with live orbit visualization.
- **Risk Dashboard:** Dynamic table showing top 10 potential conjunctions.
- **AI Prediction Panel:** Displays confidence metrics and impact analysis.
- **Heatmap Overlay:** Highlights spatial density of orbital objects.
- **Footer:** Thales-inspired credits and mission statement.

---

## ⚡ Data Flow Summary

1. Fetch and preprocess satellite data (TLEs).  
2. Convert TLE → Orbital coordinates via SGP4.  
3. AI model predicts future positions & risk probabilities.  
4. Results are visualized in real-time 3D scene.  
5. Alerts are generated for conjunction events (`P(col) > 0.6`).  

---

## 🧰 Tech Stack Overview

| Component | Technology |
|------------|-------------|
| **Frontend** | React.js, Vite, Three.js, TailwindCSS |
| **Backend (optional)** | Flask / FastAPI for AI services |
| **AI Model** | TensorFlow / PyTorch |
| **Data Processing** | SGP4, Poliastro, NumPy, Pandas |
| **Visualization** | React-Three-Fiber, D3.js (for graphs) |
| **Deployment** | Netlify (Frontend), Render (Backend) |
| **Versioning** | Git + GitHub Actions |

---

## 🧪 Installation and Setup

```bash
git clone https://github.com/SakshiChilkoti/AstroSafe.git
cd AstroSafe
npm install
npm run dev
```

Then visit: **http://localhost:5173**

---

## 🧬 AI Engine (Conceptual Example)

```python
from sgp4.api import Satrec
import numpy as np
import torch
from torch import nn

class OrbitLSTM(nn.Module):
    def __init__(self, input_dim=6, hidden_dim=64, num_layers=2):
        super().__init__()
        self.lstm = nn.LSTM(input_dim, hidden_dim, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_dim, 1)
    
    def forward(self, x):
        h, _ = self.lstm(x)
        out = self.fc(h[:, -1, :])
        return torch.sigmoid(out)
```

---

## 🛰️ Potential Impact

- Enhances situational awareness for mission operators.  
- Reduces false positive alerts using AI-driven scoring.  
- Automates debris prioritization and collision avoidance.  
- Scalable integration with Thales’ space systems.

---

## 🌐 Future Roadmap

- AI backend integration with PyTorch.  
- Space-Track live API bridge.  
- Automated maneuver planning.  
- Satellite clustering filters.  
- Mobile visualization module.

---

## 🏆 Hackathon Context

**Track:** Flight of the Future — Safety, Efficiency & Automation  
**Organizer:** Thales GenTech India Hackathon 2025  
**Theme:** AI-driven Aerospace Systems and Space Safety  

AstroSafe aligns with Thales’ vision to **secure tomorrow’s skies and space**, extending their air traffic management expertise into orbital space.

---

## 👩‍🚀 Team and Credits

| Contributor | Role |
|--------------|------|
| **Sakshi Chilkoti** | ML Integrator, UI/UX Designer |
| **Ayush Tiwari** | Full-Stack Developer, ML Integrator |


---

## 📜 License

Licensed under **MIT License** — open for research and development with attribution.
