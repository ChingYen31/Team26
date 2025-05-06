# myUrl 🔗🌐

This project is a simple Django web application, where users can have a room of message area to interact with other user based on the portfolio and media pages.

---

## 📦 Project Features

- Django-based URL shortener with clear MVC separation

- Interactive feedback using JavaScript: dynamically updates the page with the name and message

- Database-backed message area: Displays original and shortened URLs by retrieving entries from the backend

- URL redirection logic that maps short URLs to original targets using Django views and models

- Simple and clean HTML template integrating front-end and back-end seamlessly

---

## 🎨 Template Details

The template includes:  

- A message area that shows after first submission

- The message area is dynamically populated by querying the database for the latest shortened URL instance  

---

## ▶️ Getting Started Locally

To run this project locally:

### 1. Install Dependencies

Make sure you have Python 3.12.3 and Django installed.

You can install Django using pip:

```bash
pip install django
````

### 2. Run the Server

From the project root directory:

```bash
cd myUrl
python3 manage.py runserver
```

### 3. Access the Application

Open your browser and go to:

```
http://localhost:8000/room/room_name
```

From there, you can open a room of message area for you and other users.

check the following as example
```
http://localhost:8000/room/default
```

---

## 👥 分工 Team26

* B10902007 游立宇：33% Django models, template logic, and database-driven message display
* B10902017 楊慶彥：33% Setup & environment configuration
* B10902041 連奕維：33% URL redirection logic & template layout


