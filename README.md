Summarize any text using OpenAI's ChatGPT.

---

To run the project in dev, first clone the repository.
```
git clone https://github.com/jmorofsky/ai_summarizer_v2
```

Navigate to the repository.
```
cd ai_summarizer_v2
```

Install required frontend packages.
```
cd frontend
npm i
```

Run the development server.
```
npm run dev
```

In a new terminal window, navigate back to the project root.
```
cd ai_summarizer_v2
```

Create a new python virtual environment.
```
cd backend
python -m venv venv
```

Activate the virtual environment and install backend dependencies.
```
venv/Scripts/activate
pip install -r requirements.txt
```

Run the backend server.
```
flask run
```
