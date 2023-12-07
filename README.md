# 奈良高専生向け 欠課時数管理アプリ「欠課マン」
## 技術スタック

- Frontend: TypeScript/Next.js (App Router)
- Backend: Python/FastAPI
- DB: PostgreSQL
- Infra: 
  - Frontend: Vercel
  - Backend: 未定
  - DB: 未定



create "frontend/.env" on development env
```
NEXT_PUBLIC_FRONT_URL="http://localhost:3000"
NEXT_PUBLIC_BACK_URL="http://localhost:8000"
```

and launch app: 
```bash
docker-compose up --build
```


<!-- ## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. -->
