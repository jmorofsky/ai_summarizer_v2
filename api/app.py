from flask import Flask, request
from flask_cors import CORS
from openai import OpenAI


app = Flask(__name__)
CORS(app)


@app.post("/summarize")
def summarize():
    if not request.json:
        return {error: "No input json received."}

    client = OpenAI()
    response = client.responses.create(
        model="gpt-5-nano", input=f"Summarize the following text: {request.json}"
    )

    return {"result": response.output_text}
