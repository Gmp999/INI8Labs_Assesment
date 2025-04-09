# 📝 Django User Registration System

A sleek, responsive web application built with Django that allows users to register, update, view, and delete records. Designed with a modern glassmorphism UI and styled using custom CSS and background imagery.

---

## 🚀 Features

- ✅ User Registration Form
- ✅ Create, Read, Update, Delete (CRUD) Operations
- ✅ Email Validation & Unique Constraints
- ✅ Responsive UI with Animated Transitions
- ✅ Stylish Glassmorphism Theme
- ✅ Background Image with Transparent Containers

---

## 🛠 Tech Stack

- **Backend**: Python, Django
- **Frontend**: HTML, CSS, JavaScript
- **Database**: SQLite (default Django DB)
- **Styling**: Custom CSS with backdrop blur and gradient effects

---

## 📁 Project Structure

├── backend/ │ ├── registration/ │ │ ├── migrations/ │ │ ├── static/ │ │ │ └── images/ │ │ │ └── register.jpg │ │ ├── templates/ │ │ │ └── index.html │ │ ├── admin.py │ │ ├── models.py │ │ ├── views.py │ │ ├── urls.py │ ├── backend/ │ │ └── settings.py ├── db.sqlite3 ├── manage.py ├── README.md



---

## 🔧 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/registration-app.git
   cd registration-app
   
2. **Create a Virtual Environment**

    python -m venv venv
   
    source venv/bin/activate  # on Windows: venv\Scripts\activate

4. **Install Dependencies**

    pip install -r requirements.txt

5. **Apply Migrations**

    python manage.py makemigrations
   
    python manage.py migrate
   
7. **Run the Server**

    python manage.py runserver
   
9. **Visit**
   
    http://127.0.0.1:8000/
