from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from os.path import join, dirname
import os
# from fastapi.staticfiles import StaticFiles

load_dotenv(verbose=True)

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

app = FastAPI()


if os.environ.get("DEBUG", "False") == "False":
    app.openapi_url = None
    app.docs_url = None
    app.redoc_url = None

# CORSミドルウェアを有効にする
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 許可するオリジンを指定
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"], 
    allow_headers=["*"],  # 許可するヘッダーを指定（"*"はすべてのヘッダーを許可）
)

# testdata
test_users = [
    {
        "id": 1,
        "name": "test1",
        "email": "kosen@kosen.com",
        "token" : "85e1150b-b0a2-40cf-b854-bb7b04016fd9"
    },
    {
        "id": 2,
        "name": "test2",
        "email": "kosen1@kosen.com",
        "token" : "b0c2019d-1111-4c70-b319-8773a26ec55d"
    }
]
misses = [
    {
        "id": 1,
        "miss" : [
            {"id": "06c0b353-4782-4c4a-852a-92cd9b56ae2c", "subject": "情報工学実験", "date": "2021-06-01", "time": 4, "memo": "バス遅延"},
            {"id": "94931ff6-a794-47e4-b08b-cd9756ac25b4","subject": "英語", "date": "2021-06-02", "time": 2, "memo": "寝坊"},
            {"id": "990ed763-041a-4fa5-bd89-8217d8d6e072","subject": "数学α", "date": "2021-06-03", "time": 2, "memo": ""}
        ],
        "user_id": 1
    },
    {
        "id": 2,
        "miss" : [
            {"id": "afb326e1-4679-4d73-9c04-8811823368bd","subject": "情報工学実験", "date": "2021-06-01", "time": 2, "memo": "バス遅延"},
            {"id": "bc322fd0-b2f2-4c63-9369-c2e0f9144bb5","subject": "英語", "date": "2021-06-02", "time": 2, "memo": "寝坊"},
            {"id": "aadc10fd-554f-46bc-891b-73f85c8c90b2","subject": "数学α", "date": "2021-06-03", "time": 2, "memo": ""},
        ],
        "user_id": 2
    }
]
miss_ratio = [
    {
        "id": 1,
        "miss" : [
            {"subject": "情報工学実験", "missTime": 5, "totalTime": 30},
            {"subject": "英語", "missTime": 6, "totalTime": 60},
            {"subject": "数学α", "missTime": 8, "totalTime": 30},
        ],
        "user_id": 1
    },
    {
        "id": 2,
        "miss" : [
            {"subject": "", "missTime": 10, "totalTime": 30},
            {"subject": "英語", "missTime": 2, "totalTime": 60},
            {"subject": "数学α", "missTime": 2, "totalTime": 30},
        ],
        "user_id": 2
    }
]
subjects = ["情報工学実験", "英語", "数学α"]
class LoginRequest(BaseModel):
    email: str
    password: str

@app.post("/login")
def get_offers(login: LoginRequest):
    if "a" in login.email:
        return {
        "code" : 0,
        "token" : "85e1150b-b0a2-40cf-b854-bb7b04016fd9"
        }
    if "b" in login.email: 
        return {
            "code" : 0,
            "token" : "b0c2019d-1111-4c70-b319-8773a26ec55d"
        }
    else:
        return {
        "code" : 1,
        "token" : "none"
        }

@app.get("/auth")
def authenticate(token: str):
    if token == "85e1150b-b0a2-40cf-b854-bb7b04016fd9":
        return {
        "code" : 0,
        "user" : test_users[0]
        }
    if token == "b0c2019d-1111-4c70-b319-8773a26ec55d":
        return {
        "code" : 0,
        "user" : test_users[1]
        }
    else:
        return {
        "code" : 1,
        "user" : None
        }

@app.get("/misses")
def get_misses(token: str):
    if token == "85e1150b-b0a2-40cf-b854-bb7b04016fd9":
        return {
        "code" : 0,
        "misses" : miss_ratio[0]
        }
    else:
        return{
            "code" : 1,
            "misses" : None
        }

class RegisterRequest(BaseModel):
    subject: str
    date: str
    memo: str

@app.post("/register")
# 欠課登録
async def register(register: RegisterRequest, token: str):
    if token == "85e1150b-b0a2-40cf-b854-bb7b04016fd9":
        return {
        "code" : 0
        }
    else:
        return{
            "code" : 1
        }

@app.get("/miss/{id}")
def get_miss(id: str, token: str):
    if token == "85e1150b-b0a2-40cf-b854-bb7b04016fd9":
        for m in misses[0]["miss"]:
            if m["id"] == id:
                return {
                "code" : 0,
                "miss" : m
                }
        return {
        "code" : 1,
        "miss" : None
        }
    else:
        return{
            "code" : 1,
            "miss" : None
        }

class EditRequest(BaseModel):
    time: int
    date: str
    memo: str

@app.put("/miss/{id}")
def edit_miss(id: str, edit: EditRequest, token: str):
    if token == "85e1150b-b0a2-40cf-b854-bb7b04016fd9":
        for m in misses[0]["miss"]:
            if m["id"] == id:
                m["time"] = edit.time
                m["date"] = edit.date
                m["memo"] = edit.memo
                return {
                "code" : 0,
                "miss" : m
                }
        return {
        "code" : 1,
        "miss" : None
        }
    else:
        return{
            "code" : 1,
            "miss" : None
        }

@app.get("/misses/all")
def get_misses_all(token: str):
    if token == "85e1150b-b0a2-40cf-b854-bb7b04016fd9":
        data = []
        for m in misses[0]["miss"]:
            data.append({"id":m["id"],"subject": m["subject"], "time": m["time"], "date":m["date"], "memo":m["memo"]})
        return {
        "code" : 0,
        "misses" : data
        }
    else:
        return{
            "code" : 1,
            "misses" : None
        }

@app.get("/subjects")
def get_subjects(token: str):
    if token == "85e1150b-b0a2-40cf-b854-bb7b04016fd9":
        return {
        "code" : 0,
        "subjects" : subjects
        }
    else:
        return{
            "code" : 1,
            "subjects" : None
        }

# uvicorn.run(app=app, port=8000, reload=True)
