from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

# Chỉ định các host có thể truy cập Web API này
origins = [
    "http://localhost:3000",
    "localhost:3000"
]


app.add_middleware(
    CORSMiddleware,
    # allow_origins=origins,
    allow_origins=["*"], # cho tất cả các host
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}