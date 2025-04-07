# DjangoPractice 🐍🧱

This project is a simple Django web application built for learning purposes and containerized using Docker.

It exposes a route:

```
/playground/hello
```

Which returns a greeting message:

```
Hello my name is [MyName]
```

Where [MyName] is set by a function variable.

---

## 📦 Project Features

- Simple Django view at `/playground/hello`
- Django debug toolbar
- Dockerized for easy setup and deployment
- Python 3.12.3 based image

---

## 🐳 Getting Started with Docker

You can run this project using Docker in just a few steps.

Docker iamge pull Url : https://hub.docker.com/r/yenn31/djangopractice

### 1. 📥 Pull the Docker Image

```bash
docker pull yenn31/djangopractice
```

### 2. ▶️ Run the Container

```bash
docker run -p 8000:8000 yenn31/djangopractice
```

This command runs the Django server and maps it to your local machine’s port 8000.

### 3. 🌐 Access the Application

Open your browser and go to:

```
http://localhost:8000/playground/hello
```

You will see:

```
Hello my name is [MyName]
```

## 分工 Team26
B10902007 游立宇：33% Django project design
B10902017 楊慶彥：33% Docker
B10902041 連奕維：33% Django debug toolbar