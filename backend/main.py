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
    allow_methods=["GET", "POST"],  # 許可するHTTPメソッドを指定（"*"はすべてのメソッドを許可）
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
            {"subject": "情報工学実験", "date": "2021-06-01", "time": 1},
            {"subject": "英語", "date": "2021-06-02", "time": 2},
            {"subject": "英語", "date": "2021-06-11", "time": 2},
        ],
        "user_id": 1
    },
    {
        "id": 2,
        "miss" : [
            {"subject": "情報工学実験", "date": "2021-06-01", "time": 2},
            {"subject": "英語", "date": "2021-06-02", "time": 2},
            {"subject": "数学α", "date": "2021-06-03", "time": 2},
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

@app.post("/users/auth")
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

@app.get("/misses/all")
def get_misses_all(token: str):
    if token == "85e1150b-b0a2-40cf-b854-bb7b04016fd9":
        return {
        "code" : 0,
        "misses" : misses[0]["miss"]
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
