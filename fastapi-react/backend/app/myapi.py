from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import json
from pathlib import Path
import os
from .models.Todo import TodoItem
import logging

#Cach 1:
#logging.basicConfig(format='%(asctime)s - %(levelname)s - %(filename)s - %(message)s', level=logging.INFO)

# Cach 2: Luu xuong file
logger = logging.getLogger()
f_handler = logging.FileHandler('file.log')
f_handler.setLevel(logging.DEBUG)
f_format = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
f_handler.setFormatter(f_format)
logger.addHandler(f_handler)



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

todos = [
    {
        "id": "1",
        "item": "Read a book."
    },
    {
        "id": "2",
        "item": "Cycle around town."
    }
]


@app.get("/", tags=["root"])
async def read_root() -> dict:
    logging.error('This is a debug message')
    return {"message": "Welcome to your todo list."}


@app.get("/todo", tags=["todos"])
async def get_todos() -> dict:
    folder = Path(__file__).parent
    my_path_file = os.path.join(folder, "todo.json")
    with open(my_path_file, "r") as the_file:
        data = the_file.read()
        print(data)

    data = json.loads(data)
    return { "data": data }

folder = Path(__file__).parent
my_path_file = os.path.join(folder, "todo.json")


def read_todo_data():
    try:
        with open(my_path_file, "r") as the_file:
            data = the_file.read()

        return json.loads(data)
    except Exception as e:
        logging.error(e)


@app.post("/todo", tags=["todos"])
async def add_todo(todo: TodoItem) -> dict:
    data = read_todo_data()
    data.append(
        {
            'id': todo.id,
            'item': todo.item
        }
    )
    print(data)

    # Save
    with open(my_path_file, "w") as the_file:
        # the_file.write(json.dumps(data))
        json.dump(data, the_file, indent=4)

    return {
        "data": { "Todo added." }
    }


@app.put("/todo/{id}", tags=["todos"])
async def update_todo(id: int, body: TodoItem) -> dict:
    data = read_todo_data()
    for todo in data:
        if int(todo["id"]) == id:
            todo["item"] = body.item

            with open(my_path_file, "w") as the_file:
                json.dump(data, the_file, indent=4)

            return {
                "data": f"Todo with id {id} has been updated."
            }

    return {
        "data": f"Todo with id {id} not found."
    }


# API endpoint
@app.delete("/todo/{id}", tags=["todos"])
async def delete_todo(id: int) -> dict:
    data = read_todo_data()
    for todo in data:
        if int(todo["id"]) == id:
            data.remove(todo)

            with open(my_path_file, "w") as the_file:
                json.dump(data, the_file, indent=4)

            return {
                "data": f"Todo with id {id} has been removed."
            }

    return {
        "data": f"Todo with id {id} not found."
    }


@app.get("/todo/{id}", tags=["todos"])
async def get_todo(id: int) -> dict:
    data = read_todo_data()
    for todo in data:
        if int(todo["id"]) == id:
            return todo

    return {
        "data": f"Todo with id {id} not found."
    }
