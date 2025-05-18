# AI4Edu Chatbot

An intelligent educational chatbot powered by Anthropic's Claude API, designed to provide personalized learning assistance across various subjects.

## Features

- Intelligent responses using Claude AI
- Conversation history support
- Educational focus with detailed explanations
- Support for multiple learning formats
- Document processing capabilities
- Quiz generation
- Flashcard creation

## Prerequisites

- Python 3.8+
- Node.js 14+
- Anthropic API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd ai4edu
```

2. Set up the Python virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. Install spaCy model:
```bash
python -m spacy download en_core_web_sm
```

4. Set up environment variables:
```bash
# On Unix/Linux/macOS
export CLAUDE_API_KEY="your-api-key-here"

# On Windows (Command Prompt)
set CLAUDE_API_KEY=your-api-key-here

# On Windows (PowerShell)
$env:CLAUDE_API_KEY="your-api-key-here"
```

5. Install frontend dependencies:
```bash
cd frontend
npm install
cd ..
```

## Running the Application

1. Start the AI service:
```bash
cd ai_service
python app.py
```

2. Start the backend server:
```bash
cd backend
node server.js
```

3. Start the frontend development server:
```bash
cd frontend
npm start
```

The application should now be running at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- AI Service: http://localhost:5001

## API Endpoints

### Chat Endpoint
```
POST /chat
Content-Type: application/json

{
    "message": "Your question here",
    "sessionId": "unique-session-id"  // Optional
}
```

### Document Processing Endpoint
```
POST /process
Content-Type: application/json

{
    "text": "Your text content",
    // OR
    "file": {
        "content": "base64-encoded-file-content",
        "type": "application/pdf"  // or other supported types
    }
}
```

## Features in Detail

1. **Intelligent Chat**
   - Context-aware responses
   - Educational focus
   - Conversation history support
   - Session management

2. **Document Processing**
   - PDF support
   - Word document support
   - PowerPoint support
   - Text extraction and analysis

3. **Learning Tools**
   - Quiz generation
   - Flashcard creation
   - Key concept extraction
   - Summary generation

## Security Notes

- Never commit API keys to version control
- Use environment variables for sensitive data
- Keep dependencies updated
- Follow security best practices for production deployment

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

[Add your license information here] 