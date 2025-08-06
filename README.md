# 🌟 SkinAlyzer: An AI Facial Analysis and Skincare Advisor

SkinAlyzer is an intelligent skincare advisory system that leverages AI and deep learning to classify your skin type from a facial image and recommend cosmetic products accordingly. Users can either capture a live photo using their camera or upload an image from their device.

---

## 🧠 Features

- 📸 Upload or capture face images for analysis
- 🤖 Classifies skin into one of four types:  
  - **Oily**
  - **Dry**
  - **Normal**
  - **Acne-Prone**
- 🧴 Provides skincare product recommendations based on your skin type
- 🧬 AI-driven classification using CNN with MobileNet architecture
- 🧑‍💻 User-friendly interface with smooth interactions

---

## ⚙️ Tech Stack

### 🖥️ Frontend
- **React.js**
- **Tailwind CSS**

### 🌐 Backend
- **Node.js**
- **Express.js**
- **MongoDB** (for storing analysis history or user data if required)

### 🧪 AI Service
- **Flask** (Python)
- **CNN** using **MobileNet**
- **OpenCV** or similar tools for image preprocessing


## 🚀 Getting Started

### Prerequisites
- Node.js
- Python 3.8+
- MongoDB (Local or Atlas)
- pip / virtualenv

---

### 1️⃣ Frontend Setup

```bash
cd minor-project/frontend
npm install
npm run dev
2️⃣ Backend Setup (Node + Express)
bash
cd ../backend
npm install
node server.js
3️⃣ AI Flask Service Setup
bash
Copy
Edit
cd ../flask-service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
🧪 How It Works
Image Upload: User uploads or captures an image using the web interface.

API Call: The frontend sends the image to the Flask service via the Express backend.

AI Analysis: Flask service processes the image and classifies the skin type using the trained CNN MobileNet model.

Product Recommendation: Based on the classification, the system suggests general skincare products suitable for the user’s skin type.

💡 Future Enhancements
 Profile management

Advanced analysis (e.g., pore detection, dark spots)

Integration with e-commerce APIs for product purchase

Personalized routines based on weather/location

🤝 Contributing
Contributions are welcome! Feel free to fork this repository, raise issues, or submit PRs to help improve the project.

📬 Contact
Aayush Singh Rajput
Dharan, Nepal
Feel free to connect on LinkedIn or reach out via email
