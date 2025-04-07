# DjangoPractice 🐍🧱

This project is a simple Django web application built for learning purposes and containerized using Docker.

It exposes a route:

```
/playground/hello
```

Which returns a greeting message:

```
Hello [MyName]
```
Where [MyName] can be set in function variable 
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
Hello [MyName]
```