# 🌟 SkinAlyzer: An AI Facial Analysis and Skincare Advisor

**SkinAlyzer** is an intelligent skincare advisory system that leverages AI and deep learning to classify your skin type from a facial image and recommend cosmetic products accordingly. Users can either capture a live photo using their camera or upload an image from their local device.

---

## 🧠 Features

- 📸 Upload or capture face images for analysis
- 🤖 Classifies skin into one of four types:  
  - **Oily**
  - **Dry**
  - **Normal**
  - **Acne-Prone**
- 🧴 Recommends general skincare products based on skin type
- 🧬 Uses CNN with MobileNet for skin type classification
- 💻 Clean and user-friendly interface

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### 🌐 Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

### 🧪 AI Service
- [Flask (Python)](https://flask.palletsprojects.com/)
- [CNN](https://en.wikipedia.org/wiki/Convolutional_neural_network) using **MobileNet**
- [OpenCV](https://opencv.org/) for image preprocessing

---

## 🗂️ Project Folder Structure

minor-project/
├── frontend/ # React + Tailwind CSS for UI
├── backend/ # Node.js + Express for API
└── flask-service/ # Flask app for AI-based image classification



---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js
- Python 3.8+
- MongoDB (local or cloud)
- pip / virtualenv

---

### 🔧 Setup Instructions

#### 1️⃣ Frontend Setup

```bash
cd minor-project/frontend
npm install
npm run dev


2️⃣ Backend Setup (Node + Express)
cd ../backend
npm install
node server.js

3️⃣ Flask AI Service Setup
cd ../flask-service
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py


🧪 How It Works
Image Upload: User uploads or captures an image using the web interface.

API Call: The frontend sends the image to the Flask service through the Node/Express backend.

AI Analysis: Flask service processes the image and classifies the skin type using the trained CNN MobileNet model.

Product Recommendation: Based on the result, the system suggests appropriate skincare products for the user.


### 🌐 Test It Live on Hugging Face

**🔗 [Try the model on Hugging Face →](https://huggingface.co/spaces/biswa000/minor_project_facial_analysis)**


💡 Future Enhancements
👤 User profile management

🔬 Advanced skin analysis (e.g., pore detection, dark spots)

🛍️ E-commerce API integration for real product suggestions

🌦️ Personalized routines based on weather and location

🤝 Contributing
We welcome contributions! If you'd like to improve this project, feel free to:

Fork the repo

Raise issues

Submit pull requests

📬 Contact
Project Members:

Name	Email
Aayush Kumar Singh	078bct003@ioepc.edu.np
Ashmita Karki	078bct017@ioepc.edu.np
Bhanu Prasad Chaudhary	078bct021@ioepc.edu.np
Bishal Sharma	078bct027@ioepc.edu.np
