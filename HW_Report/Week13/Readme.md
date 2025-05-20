# Portfolio & Comment System - Django Project

A portfolio website built with Django that showcases personal information, work experience, projects, skills, and includes a message/comment section directly on the homepage. Authenticated users can post and delete their comments. The system replaces the previous room-based structure with a global message board.

## Features

* Portfolio and media sections on the homepage.
* Global comment section.
* User authentication (Login/Register/Logout).
* Authenticated users can delete their own messages.
* Static and media content (audio/video).

## Tech Stack

* **Backend:** Django 5.x
* **Frontend:** HTML, CSS, JavaScript
* **Auth:** Django built-in auth system

## Setup Instructions

1. **Run migrations:**

```bash
python manage.py makemigrations
python manage.py migrate
```

2. **Create a superuser (for admin panel):**

```bash
python manage.py createsuperuser
```

3. **Run the development server:**

```bash
python manage.py runserver
```

4. **Visit the site:**

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.

## Usage

* Click **Login** or **Register** on the navigation bar to create or access your account.
* Once logged in, scroll to the **Message Area** at the bottom of the page to:

  * View all messages left by users.
  * Post new messages.
  * Delete your own messages.
