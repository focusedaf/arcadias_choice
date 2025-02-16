# Arcadia's Choice

## Overview
Arcadia's Choice is an interactive story-driven quiz game that educates players about climate change. Players navigate different environmental themes, answer quiz questions, and experience branching storylines based on their choices. The game is built using Superflex AI for the frontend and Firebase/Supabase for backend functionality.

## Features
- **Story-driven Gameplay**: Players engage with NPCs who guide them through a climate-focused storyline.
- **Multiple Themes**: Aquatic Abyss(Ocean), Emerald Wilds(Forest), Celestial Zenith (Sky), Frostfall Realm (Snow), and Metropolis Matrix (Urban). 
- **Interactive Quizzes**: Each theme has 10 questions related to environmental issues.
- **Scoring System**:
  - Each correct answer: +3 points
  - Incorrect answer: -10 points and loss of one heart
  - Players start with 3 hearts.
- **Dynamic Endings**:
  - If a player loses all three hearts → Bad ending.
  - If a player completes the quiz successfully → Good ending.
- **Leaderboard**: Displays usernames and points.
- **Authentication**: Players enter a username at the start.

## Tech Stack
- **Frontend**: React, Tailwind CSS, JavaScript, Superflex AI
- **Backend**: Firebase/Supabase (for storing usernames and scores)

## Pages Structure
1. **Landing Page**: Introduction to the game with a 'Start' button.
2. **Authentication**: Players enter a username before beginning.
3. **Home page and Theme Selection**: The home page sets the scene of Arcadia's choice and underneath the story there are 5 buttons for the 5 themes(Aquatic Abyss(Ocean), Emerald Wilds(Forest), Celestial Zenith (Sky), Frostfall Realm (Snow), and Metropolis Matrix (Urban)). Players choose from these five environmental themes and the buttons have stlying related to their respective themes.
4. **Quiz Page**: 10 Interactive multiple-choice quiz related to the selected theme.
5. **Ending Screen**: Displays the game outcome based on performance.
6. **Leaderboard**: Shows high scores and rankings.

# Quiz questions for each theme

## Aquatic Abyss(ocean)

1. **What is the main cause of ocean acidification?**
    - A) Increased levels of CO₂ in the atmosphere (right answer)
    - B) Plastic pollution
    - C) Oil spills
    - D) Overfishing
2. **Which of the following is a major consequence of coral bleaching?**
    - A) Loss of marine biodiversity (right answer)
    - B) Increased fish population
    - C) Lower water temperatures
    - D) Faster coral growth
3. **What percentage of the Earth's oxygen is produced by the ocean?**
    - A) Around 50% (right answer)
    - B) Less than 10%
    - C) About 25%
    - D) Over 90%
4. **Which of the following ocean currents helps regulate global climate?**
    - A) The Gulf Stream (right answer)
    - B) The Mariana Trench Current
    - C) The Bermuda Loop
    - D) The Atlantic Vortex
5. **What is "marine heatwave"?**
    - A) A period of abnormally high sea temperatures (right answer)
    - B) A rise in tsunami frequency
    - C) An increase in salt concentration in seawater
    - D) The rapid melting of icebergs
6. **What is the Great Pacific Garbage Patch mostly made of?**
    - A) Microplastics (right answer)
    - B) Glass bottles
    - C) Aluminum cans
    - D) Abandoned ships
7. **Why are rising sea levels a serious concern?**
    - A) They cause coastal flooding and erosion (right answer)
    - B) They make fish migrate faster
    - C) They improve ship navigation
    - D) They increase the Earth's land area
8. **What role do mangroves play in protecting coastlines?**
    - A) They prevent erosion and act as natural barriers against storms (right answer)
    - B) They increase wave height
    - C) They attract more fish
    - D) They make the coastline sink
9. **Which gas is responsible for the majority of global warming?**
    - A) Carbon dioxide (CO₂) (right answer)
    - B) Nitrogen
    - C) Oxygen
    - D) Helium
10. **What happens to marine life when oxygen levels drop in the ocean (hypoxia)?**
    - A) Mass fish die-offs (right answer)
    - B) Increased coral growth
    - C) More whales migrate
    - D) Algae become inactive

## Emerald Wilds(forest)

1. **What is the main driver of deforestation worldwide?**
    - A) Agriculture and livestock farming (right answer)
    - B) Increased tourism
    - C) Natural forest fires
    - D) Tree overgrowth
2. **How do trees help combat climate change?**
    - A) By absorbing carbon dioxide (CO₂) from the atmosphere (right answer)
    - B) By producing more methane
    - C) By reducing wind speed
    - D) By cooling the soil
3. **Which of the following is considered a "carbon sink"?**
    - A) A rainforest (right answer)
    - B) A landfill
    - C) A factory
    - D) A desert
4. **What is the main reason forest fires have increased in recent years?**
    - A) Rising global temperatures and droughts (right answer)
    - B) More lightning strikes
    - C) Increased animal activity
    - D) Fewer fire-resistant trees
5. **Which biome stores the most carbon on Earth?**
    - A) Boreal forests (taiga) (right answer)
    - B) Temperate forests
    - C) Savannas
    - D) Coral reefs
6. **What happens when forests are cut down at a large scale?**
    - A) More CO₂ is released into the atmosphere (right answer)
    - B) The Earth cools down
    - C) Soil fertility increases
    - D) Rainfall increases
7. **Why are tropical rainforests called "the lungs of the Earth"?**
    - A) They produce large amounts of oxygen (right answer)
    - B) They store underground water
    - C) They control volcanoes
    - D) They increase cloud formation
8. **Which of these animals is considered a key indicator of a healthy forest ecosystem?**
    - A) Tigers (right answer)
    - B) Pigeons
    - C) Goldfish
    - D) House cats
9. **What is agroforestry?**
    - A) Growing crops and trees together for environmental benefits (right answer)
    - B) Deforesting large areas for agriculture
    - C) Using forests exclusively for timber production
    - D) Cutting trees to make space for roads
10. **What percentage of Earth's land area is covered by forests?**
    - A) About 30% (right answer)
    - B) Less than 10%
    - C) Over 50%
    - D) 75%

## Metropolis Matrix(urban)

1. **Which sector contributes the most to urban air pollution?**
    - A) Transportation (right answer)
    - B) Fishing
    - C) Space exploration
    - D) Farming
2. **What is a heat island effect?**
    - A) Urban areas being hotter than surrounding rural areas (right answer)
    - B) Increased volcanic activity
    - C) More heatwaves in coastal areas
    - D) A type of climate change myth
3. **Which renewable energy source is best suited for urban environments?**
    - A) Solar power (right answer)
    - B) Hydroelectric
    - C) Geothermal
    - D) Tidal energy
4. **Which material contributes most to carbon emissions in city construction?**
    - A) Cement (right answer)
    - B) Wood
    - C) Glass
    - D) Plastic
5. **What is the leading cause of urban flooding?**
    - A) Poor drainage and overdevelopment (right answer)
    - B) Too many green spaces
    - C) Excess streetlights
    - D) Low car usage
6. **Which urban planning technique helps cities become more sustainable?**
    - A) Green roofs and vertical gardens (right answer)
    - B) Expanding highways
    - C) Cutting down urban trees
    - D) Banning bicycles
7. **What is the main cause of smog in large cities?**
    - A) Vehicle and industrial emissions (right answer)
    - B) Too many skyscrapers
    - C) More trees in urban areas
    - D) Overuse of air conditioning
8. **Which form of public transportation has the lowest carbon footprint per passenger?**
    - A) Trains (right answer)
    - B) Taxis
    - C) Airplanes
    - D) Gasoline-powered buses
9. **What is "smart city" technology primarily designed to do?**
    - A) Improve energy efficiency and sustainability (right answer)
    - B) Increase car usage
    - C) Replace nature with artificial parks
    - D) Make cities more dependent on fossil fuels
10. **Why are electric vehicles (EVs) considered more environmentally friendly than gasoline cars?**
    - A) They produce zero tailpipe emissions (right answer)
    - B) They drive faster
    - C) They increase fuel prices
    - D) They require more fossil fuels

## Celestial Zenith(sky)

1. **What is the main gas responsible for thinning the ozone layer?**
    - A) Chlorofluorocarbons (CFCs) (right answer)
    - B) Carbon monoxide
    - C) Nitrogen
    - D) Oxygen
2. **Why are jet contrails (airplane trails) a concern for climate change?**
    - A) They trap heat in the atmosphere (right answer)
    - B) They block all sunlight
    - C) They cause acid rain
    - D) They have no impact
3. **Which type of cloud is most associated with thunderstorms?**
    - A) Cumulonimbus (right answer)
    - B) Cirrus
    - C) Stratus
    - D) Nimbostratus
4. **What percentage of sunlight is reflected back into space by Earth's atmosphere?**
    - A) About 30% (right answer)
    - B) 10%
    - C) 50%
    - D) 80%
5. **What is the primary reason for increasing extreme weather events?**
    - A) Rising global temperatures (right answer)
    - B) Earth moving closer to the sun
    - C) More satellites in orbit
    - D) Shifts in the moon’s orbit
6. **Which gas makes up most of Earth's atmosphere?**
    - A) Nitrogen (right answer)
    - B) Oxygen
    - C) Carbon dioxide
    - D) Hydrogen
7. **How does air pollution affect human health?**
    - A) It increases respiratory diseases (right answer)
    - B) It improves lung function
    - C) It reduces allergies
    - D) It has no effect
8. **Which human activity contributes most to increasing methane in the atmosphere?**
    - A) Livestock farming (right answer)
    - B) Airplane travel
    - C) Road construction
    - D) Solar panel usage
9. **What is the effect of rising carbon dioxide (CO₂) levels on global temperatures?**
    - A) It increases temperatures due to the greenhouse effect (right answer)
    - B) It cools the planet
    - C) It reduces global warming
    - D) It has no effect
10. **What is "aerosol pollution" known to do?**
    - A) Cause respiratory diseases and climate changes (right answer)
    - B) Make the sky brighter
    - C) Reduce CO₂ emissions
    - D) Help plants grow faster

## Frostfall Realm(snow)

1. **What is permafrost?**
    - A) Permanently frozen ground (right answer)
    - B) Ice that forms in the ocean
    - C) Snow that never melts
    - D) A type of cold desert
2. **Why is melting permafrost a major concern for climate change?**
    - A) It releases methane, a powerful greenhouse gas (right answer)
    - B) It makes land more fertile
    - C) It reduces the Earth’s temperature
    - D) It slows down global warming
3. **Which continent holds the most freshwater in the form of ice?**
    - A) Antarctica (right answer)
    - B) Europe
    - C) North America
    - D) Australia
4. **What effect does snow have on Earth’s climate?**
    - A) It reflects sunlight, helping to cool the planet (right answer)
    - B) It absorbs heat
    - C) It increases greenhouse gas emissions
    - D) It speeds up ocean warming
5. **Why are polar bears at risk due to climate change?**
    - A) Melting sea ice reduces their hunting grounds (right answer)
    - B) They need warmer temperatures
    - C) They are overpopulating
    - D) They prefer freshwater lakes
6. **Which of the following is a direct consequence of shrinking glaciers?**
    - A) Rising sea levels (right answer)
    - B) Increase in desert areas
    - C) Decrease in rainfall
    - D) Stronger earthquakes
7. **What is an "ice shelf"?**
    - A) A floating extension of a glacier (right answer)
    - B) A frozen lake
    - C) A snow-covered hill
    - D) A storage place for ice
8. **What is an avalanche?**
    - A) A sudden flow of snow down a mountain (right answer)
    - B) A rare snow hurricane
    - C) A type of earthquake
    - D) A deep underground ice river
9. **Which ocean current helps keep parts of Europe warm despite their latitude?**
    - A) The Gulf Stream (right answer)
    - B) The Arctic Swirl
    - C) The Pacific Drift
    - D) The Antarctic Spin
10. **What happens when snow melts too quickly in mountainous regions?**
    - A) It causes floods (right answer)
    - B) It makes rivers dry up
    - C) It decreases cloud cover
    - D) It increases snowfall

# Storyline for Arcadia’s Choice

### **Setting the Scene on the home page**

Each theme has a **unique pixelated backdrop** (e.g., a pixel-art **deep ocean, forest, futuristic city, floating sky islands, icy tundra**). Arcadia, a **mysterious yet wise character**, welcomes players and presents the stakes.

She controls the **quiz challenges, keeps track of lives, and reacts dynamically** based on player performance.

# **Aquatic Abyss (Ocean Theme)**

**Backdrop:** A deep-sea trench with glowing corals, pixelated fish swimming, and dark ominous waters.

**Arcadia’s Intro (Pixelated Dialogue Box):**

*"The ocean… vast, deep, and full of wonders. But it is fading. Plastic islands drift in the currents, coral reefs bleach, and marine life suffers. You must prove your wisdom to save it."*

**Quiz Presentation:**

Blue-tinted UI box with bubbles where quiz questions will be displayed

**Losing Lives Reaction (Pixelated Dialogue Box):**

*"You're struggling, aren’t you? The tides are rising… If you’re not careful, this world will be swallowed whole."*

**Good Ending (Pixelated Dialogue Box):**

*"The reefs bloom again! Life returns, and the abyss sings once more. Well done, explorer!"*

**Bad Ending (Pixelated Dialogue Box):**

*"The last light fades… The ocean drowns in darkness. You were too late."*

# **Emerald Wilds (Forest Theme)**

**Backdrop:** A dense pixelated forest with towering trees, mist, and a distant waterfall.

**Arcadia’s Intro (Pixelated Dialogue Box):**

*"This land was once lush and full of life. But greed has scarred it—trees felled, rivers poisoned, creatures displaced. Show me you understand nature’s balance."*

**Quiz Presentation:**

Wooden/plank-styled UI box where quiz questions will be displayed.

**Losing Lives Reaction (Pixelated Dialogue Box):**

*"The trees tremble, their whispers growing weaker… Are you listening at all?"*

**Good Ending (Pixelated Dialogue Box):**

*"The forest thrives once more! The trees stretch to the skies, and the land rejoices!"*

**Bad Ending (Pixelated Dialogue Box):**

*"Ash and silence. The Emerald Wilds have fallen… and you let it happen."*

# **Metropolis Matrix (Urban Theme)**

**Backdrop:** A cyberpunk cityscape with neon lights, smog-covered skies, and pixelated flying cars.

**Arcadia’s Intro (Pixelated Dialogue Box):**

*"Technology was supposed to elevate us… instead, it consumes us. Smog blankets the sky, machines never rest. Can you be the architect of change?"*

**Quiz Presentation:**

Neon-outlined UI box with glitch effects where quiz questions will be displayed.

**Losing Lives Reaction (Pixelated Dialogue Box):**

*"Pollution levels rising… Power grids failing… Is this really your vision of the future?"*

**Good Ending(Pixelated Dialogue Box):**

*"Neo-City is reborn! Green energy fuels progress, and the smog clears."*

 **Bad Ending(Pixelated Dialogue Box):**

*"The lights flicker… then go out. The city chokes, and civilization collapses into ruin."*

# **Celestial Zenith (Sky Theme)**

**Backdrop:** Floating sky islands with pixelated clouds and airships drifting in the distance.

**Arcadia’s Intro(Pixelated Dialogue Box):**

*"The skies were once free… but now, pollution scars the heavens. The storms grow wild. Prove you understand, or risk falling into the void."*

**Quiz Presentation:**

Cloudy, soft edges on the UI box where quiz questions will be displayed.

**Losing Lives Reaction(Pixelated Dialogue Box):**

*"The winds rage, the skies darken… You are losing control."*

**Good Ending(Pixelated Dialogue Box):**

*"The winds calm, the skies brighten… You have saved the Celestial Zenith!"*

 **Bad Ending(Pixelated Dialogue Box):**

*"A never-ending storm swallows the sky. The world below will never see the sun again."*

# **Frostfall Realm (Snow Theme)**

**Backdrop:** A pixelated frozen tundra with towering glaciers and snow-covered mountains.

**Arcadia’s Intro(Pixelated Dialogue Box):**

*"The ice was once eternal, but now it melts. The tundra weakens, the creatures vanish. Can you restore the balance before all is lost?"*

**Quiz Presentation:**

Frosted UI edges with occasional snowflakes where quiz questions will be displayed.

**Losing Lives Reaction(Pixelated Dialogue Box):**

*"Cracks spread through the ice… The land grows unstable… You are failing."*

**Good Ending(Pixelated Dialogue Box):**

*"The glaciers strengthen! Snow falls once more, and the tundra is saved."*

**Bad Ending(Pixelated Dialogue Box):**

*"The last glacier crumbles. Water floods the world. Frostfall Realm is no more."*


## How to Run the Project
1. Clone the repository:
   ```bash
   git clone https://github.com/yp9435/arcadias_choice.git
   cd arcadias_choice
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Set up Firebase/Supabase and configure the backend connection.

## Made for the SuperFlex AI Hackathon.