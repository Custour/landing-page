
# Hero Animation Specification

This document outlines the visual and technical requirements for the animated hero section of the Custour landing page.

## Concept
The animation simulates a conversational interface between a traveler and the Custour AI agent. It demonstrates the ease of planning a trip by showing a natural language request transforming into tangible travel options (flights, hotels, activities). It transitions from a simple chat UI to a rich visual display of results.

## Storyboard

The animation plays in a loop or ends on the final state. Total duration approx 8-10 seconds.

### Scene 1: The Request
*   **Visual**: A clean chat interface appears within the main hero card.
*   **Action**: A user avatar (Traveler) pops in. A message bubble animates in typing out:
    *   *"Help me plan a trip to Bangkok"*
*   **Timing**: 0s - 2s

### Scene 2: The Assessment
*   **Visual**: The Custour AI Agent avatar appears on the opposite side.
*   **Action**: The Agent replies immediately (or with a brief "thinking" indicator):
    *   *"Sure! Do you need flights, hotels, activities, or restaurants?"*
*   **Timing**: 2s - 4s

### Scene 3: The "Magic" Command
*   **Action**: The User replies:
    *   *"Help me with everything"*
*   **Visual**: As this message sends, the chat interface begins to expand or fade out to make room for the results. A "magic" effect (sparkles or glow) triggers around the chat.
*   **Timing**: 4s - 6s

### Scene 4: The Reveal (Product Cards)
*   **Visual**: The chat bubbles fade/slide away or morph. Three distinct product cards animate into view (cards dealing, sliding, or popping in).
*   **Content**:
    1.  **Flight Card**: Shows a flight to Bangkok (e.g., airline logo, time, price).
    2.  **Hotel Card**: Shows a luxury hotel in Bangkok (image, stars, price).
    3.  **Activity Card**: Shows a tour or experience (e.g., "Grand Palace Tour").
*   **Action**: The cards fan out or arrange themselves in a grid/row.
*   **Timing**: 6s - 10s (holds for a few seconds before looping)

## Assets Required

### 1. Avatars
*   **Traveler Avatar**: A friendly, modern avatar (illustration or photo style).
*   **Agent Avatar**: The Custour logo or a robot/AI helper character.

### 2. Product Card Images
*   **Flight Image**: Abstract or realistic view of a plane/sky or airline branding.
*   **Hotel Image**: A beautiful resort or cityscape of Bangkok.
*   **Activity Image**: A cultural landmark (temple) or street food scene.

## Prompts for Asset Generation (if needed)

If we use AI to generate the assets, here are the proposed prompts:

**Traveler Avatar:**
> "A friendly, modern 3D icon of a traveler, minimal style, soft lighting, pastel background."

**Agent Avatar:**
> "A futuristic but friendly AI assistant icon, glowing orb or robot face, minimal 3D style, Custour brand colors."

**Hotel Card Image:**
> "Beautiful luxury hotel swimming pool in Bangkok with city skyline at sunset, high quality, photorealistic, travel photography style."

**Activity Card Image:**
> "The Grand Palace in Bangkok, golden spires, blue sky, vibrant colors, travel photography style."

## Technical Implementation Plan

*   **Framework**: React + Framer Motion.
*   **Container**: The white card div currently in `Hero.tsx`.
*   **State Management**: `useState` to track the animation phase (`'chat'`, `'typing'`, `'results'`).
*   **Transitions**: Smooth `AnimatePresence` transitions between the chat view and the results grid.
*   **Responsiveness**: ensure it scales down for mobile (maybe stack cards vertically or show a carousel).

---
**Status**: Draft ready for review.
