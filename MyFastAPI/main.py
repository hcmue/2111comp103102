from fastapi import FastAPI
from .models.MyModel import HangHoa
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello 2111COMP103102 HCMUE"}

# snake_case
@app.post("/hanghoas")
async def them_hang_hoa(model: HangHoa):
    print(model)
    return  {"success": True}
