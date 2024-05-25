
# GemTalk - AI Powered Chatbot

GemTalk is an innovative AI-powered chatbot built using the Gemini API. This project leverages the power of modern web technologies to deliver a seamless and interactive chat experience. Built with React and Vite, GemTalk supports new chat initiation, displays recent chats, and ensures information is presented in a structured and visually appealing manner.
## Live Demo

View the live application here: [GemTalk Live Demo](https://aniket067.github.io/GemTalk/)

## Built With
- **React**: A JavaScript library for building user interfaces
- **Vite**: A modern frontend build tool that significantly improves the development experience
- **Gemini API**: For AI-powered natural language processing

## Features

- **New Chat Option**: Users can initiate new conversations easily, providing a user-friendly interface for interaction.
- **Recent Chats**: GemTalk automatically displays recent chats, allowing users to pick up where they left off without any hassle.
- **Structured Display**: Information is organized and presented in a structured format, enhancing readability and user engagement.
- **AI-Powered Responses**: Utilizes the Gemini API to generate intelligent and contextually relevant responses, making the chat experience smooth and efficient.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js (LTS version recommended, e.g., 14.x or 16.x)
- npm (comes with Node.js) or Yarn
- Git installed on your machine
- An API key for the Gemini API (you can obtain one by registering on the Gemini platform)
- ## Obtaining a Gemini API Key

To use the Gemini API in your GemTalk chatbot, you need an API key. Follow these steps to obtain one:

1. Visit the Gemini API website and sign up for an account.
2. Navigate to the API section in your account settings.
3. Follow the instructions to register your application.
4. Once your application is approved, you will receive an API key.
5. Add this API key to your `.env` file as follows:
   
   ```plaintext
   GEMINI_API_KEY=Your_Gemini_API_Key_Here

## Installation
Follow these steps to get your development environment set up:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/GemTalk.git
     ```
2. #### Navigate to the project directory:
   ```bash
   cd brainwave
    ```
3. #### Install Node modules:
    ```bash
    npm install
    ```
4. #### Set up environment variables:
   Create a .env file in the root directory and add the following line:
    ```bash
    GEMINI_API_KEY=Your_Gemini_API_Key_Here
    ```
5. #### Run the development server:
   ```bash
   npm run dev
   ```
  After starting the server, visit http://localhost:5173 to view the project in your browser.
  # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
