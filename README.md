# JATE - Just Another Text Editor

## Summary
JATE is a simple, web-based text editor designed to provide a seamless and distraction-free writing environment. JATE offers a lightweight and efficient platform for all your note-taking, coding, and writing needs, accessible directly from your browser.

## Features
 **Lightweight Editor**: Fast loading times and responsive design for writing and editing on the go.
- **Offline Support**: Enhanced with Service Workers for offline access to your notes.
- **Data Persistence**: Utilizes IndexedDB for saving and retrieving your documents from the browser.
- **Syntax Highlighting**: (If applicable) Supports syntax highlighting for a variety of programming languages.
- **PWA Support**: Installable as a Progressive Web App for quick access from your desktop or mobile device home screen.

## Installation
1. **Clone the repository**
git clone git@github.com:meerkat501/JATE.git
Then cd into jate

2. **Install the dependencies**
Run npm install. 
Then run the command npm run start.

This will launch JATE in your web browser on http://localhost:3000

## Usage
After launching JATE, you can start editing text right away. Your work will be automatically saved to the browser's IndexedDB, ensuring that you can continue from where you left off even after closing the browser.