# Dockerfile

FROM python:3.12.3-slim

# 設定工作目錄
WORKDIR /app

# 複製需求套件與專案
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

# 對外開放 8000 port（Django 預設）
EXPOSE 8000

# 預設啟動命令
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
