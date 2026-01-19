Summarize any text using OpenAI's ChatGPT.

https://ai-summarizer-v2-1jqquo34j-jmorofskys-projects.vercel.app/

<img width="1267" height="1255" alt="image" src="https://github.com/user-attachments/assets/e20ebb78-7fd0-4f98-8d68-03bf7fe9806c" />

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
cd api
python -m venv venv
```

Activate the virtual environment and install backend dependencies.
```
venv/Scripts/activate
pip install -r ../requirements.txt
```

Run the backend server.
```
flask run
```
