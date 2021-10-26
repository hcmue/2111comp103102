from fastapi import FastAPI
from .database import Schema
from .database.Database import engine, MySession
from .Models import MyModel

app = FastAPI(
    title="My FastAPI",
    description="Demo FastAPI + SQL Alchemy ORM MySQL",
    version="1.0.0"
)

# DInh nghia schema cho database
Schema.Base.metadata.create_all(bind=engine)

@app.get("/")
def home():
    return {"message": "Hello"}


@app.post("/users")
def create_user(model: MyModel.User):
    print(model, model.username)
    myuser = Schema.UserInfo
    myuser.username=model.username
    myuser.password=model.password
    print(myuser)
    session = MySession()
    try:
        session.add(myuser)
        session.commit()
        session.refresh(myuser)
    finally:
        session.close()
    return {"data": myuser}