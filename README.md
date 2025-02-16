# Arcadia's Choice

## Overview
Arcadia's Choice is an interactive story-driven quiz game that educates players about climate change. Players navigate different environmental themes, answer quiz questions, and experience branching storylines based on their choices. The game is built using Superflex AI for the frontend and Firebase/Supabase for backend functionality.

## Features
- **Story-driven Gameplay**: Players engage with NPCs who guide them through a climate-focused storyline.
- **Multiple Themes**: Ocean, Forest, Sky, Snow, and Urban.
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
3. **Theme Selection**: Players choose from five environmental themes.
4. **Quiz Page**: Interactive multiple-choice quiz related to the selected theme.
5. **Ending Screen**: Displays the game outcome based on performance.
6. **Leaderboard**: Shows high scores and rankings.

## Tasks & Development Plan
### Content Creation
- [ ] Write the script for the storyline (NPC dialogues for intro, game, and endings).
- [ ] Develop quiz questions for each theme.

### UI/UX Design
- [ ] Design game screens using Figma.
- [ ] Implement frontend using Superflex AI.
  - [ ] Authentication page (username input via NPC interaction)
  - [ ] Leaderboard page (username and points display)
  - [ ] Quiz layout with dynamic questions per theme
  - [ ] Themed backgrounds and assets
  - [ ] Ending scenes based on user performance

### Backend Development
- [ ] Set up Firebase/Supabase to store usernames and scores.
- [ ] Implement data retrieval and leaderboard logic.

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