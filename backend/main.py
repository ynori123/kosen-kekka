from turtle import title
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles



app = FastAPI()

# CORSミドルウェアを有効にする
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # 許可するオリジンを指定
    allow_credentials=True,
    allow_methods=["*"],  # 許可するHTTPメソッドを指定（"*"はすべてのメソッドを許可）
    allow_headers=["*"],  # 許可するヘッダーを指定（"*"はすべてのヘッダーを許可）
)

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
    else:
        return {
        "code" : 1,
        "token" : "none"
        }

