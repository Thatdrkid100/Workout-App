from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()


@app.get("/", response_class=HTMLResponse)
def root():
    return """
    <html>
        <head>
            <title>Workout API</title>
        </head>
        <body>
            <h1>Workout API is running 🚀</h1>
        </body>
    </html>
    """
