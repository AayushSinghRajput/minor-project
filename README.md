# 🌟 SkinAlyzer: An AI Facial Analysis and Skincare Advisor

**SkinAlyzer** is an intelligent skincare advisory system that leverages AI and deep learning to classify your skin type from a facial image and recommend cosmetic products accordingly. Users can either capture a live photo using their camera or upload an image from their local device.

![SkinAlyzer Logo](frontend/public/assets/logoAI.png)

## 📋 Table of Contents
- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#️-project-structure)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Usage](#-usage)
- [How It Works](#-how-it-works)
- [API Endpoints](#-api-endpoints)
- [Team Members](#-team-members)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

## 🧠 Features

- 📸 **Dual Input Method**: Upload existing images or capture live photos for analysis
- 🤖 **Advanced Skin Classification**: Identifies four distinct skin types:  
  - **Oily**
  - **Dry**
  - **Normal**
  - **Acne-Prone**
- 🧴 **Personalized Recommendations**: Suggests tailored skincare products based on skin analysis
- 🔐 **Secure Authentication**: User account creation with email verification
- 🔄 **Password Reset Functionality**: Secure password recovery process
- 🌐 **Google OAuth Integration**: Quick sign-in with Google accounts
- 🧬 **CNN with MobileNet**: Advanced deep learning for accurate skin classification
- 💻 **Responsive UI**: Clean, intuitive interface across all devices

## ⚙️ Tech Stack

### 🖥️ Frontend
- [React.js](https://reactjs.org/) (v19.0.0) - Modern UI framework
- [React Router](https://reactrouter.com/) (v7.1.1) - Client-side routing
- [Bootstrap](https://getbootstrap.com/) (v5.3.3) - Responsive design framework
- [Axios](https://axios-http.com/) - HTTP client for API requests

### 🌐 Backend
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - NoSQL database
- [Bcrypt](https://www.npmjs.com/package/bcrypt) - Password hashing
- [JWT](https://jwt.io/) - Authentication tokens
- [Multer](https://www.npmjs.com/package/multer) - File upload handling
- [@react-oauth/google](https://www.npmjs.com/package/@react-oauth/google) - Google OAuth integration

### 🧪 AI Service
- [Flask](https://flask.palletsprojects.com/) (v3.1.0) - Python web framework
- [TensorFlow](https://www.tensorflow.org/) - Deep learning framework
- [OpenCV](https://opencv.org/) - Computer vision library
- [MobileNet](https://arxiv.org/abs/1704.04861) - CNN architecture for image classification
- [Gunicorn](https://gunicorn.org/) - WSGI HTTP Server

## 🗂️ Project Structure

```
minor-project/
├── frontend/                # React application
│   ├── public/              # Static assets
│   │   └── assets/          # Images and media files
│   └── src/                 # Source code
│       ├── Components/      # Reusable UI components
│       ├── pages/           # Application pages
│       └── data/            # Static data
│
├── backend/                 # Node.js + Express server
│   ├── controllers/         # Request handlers
│   ├── db/                  # Database connection
│   ├── middlewares/         # Authentication and request processing
│   ├── models/              # Data models
│   ├── routes/              # API routes
│   └── utils/               # Helper functions
│
└── flask-service/           # AI image processing service
    ├── myenv/               # Python virtual environment
    ├── final_model.ipynb    # Jupyter notebook with model development
    ├── final.py             # Flask application
    └── requirements.txt     # Python dependencies
```

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [Python](https://www.python.org/) (v3.8+)
- [MongoDB](https://www.mongodb.com/) (local installation or cloud account)
- [Git](https://git-scm.com/)

## 🔧 Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AayushSinghRajput/minor-project.git
cd minor-project
```

### 2️⃣ Backend Setup

```bash
cd backend

# Create a .env file with the following variables
# (replace with your actual values)
echo "
MONGODB_URL=mongodb://localhost:27017/skinanalyzer
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
CLIENT_URL=http://localhost:3000
" > .env

# Install dependencies
npm install

# Start the server
node server.js
# OR use nodemon for development
npx nodemon server.js
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend

# Create a .env file if needed
echo "
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
" > .env

# Install dependencies
npm install

# Start the development server
npm start
```

### 4️⃣ Flask AI Service Setup

```bash
cd ../flask-service

# Create and activate virtual environment
python -m venv myenv
# On Windows:
myenv\Scripts\activate
# On macOS/Linux:
# source myenv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the Flask server
python final.py
```

## 💻 Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Create an account or log in with Google
3. Upload a facial image or use the webcam to capture one
4. View the skin analysis results and product recommendations

## 🧪 How It Works

1. **Image Acquisition**: User uploads an image or captures one using their device camera
2. **Image Processing**: The Flask service preprocesses the image using OpenCV
3. **AI Analysis**: The MobileNet CNN model classifies the skin type based on visual patterns
4. **Product Recommendation**: Based on the classification, the system suggests appropriate skincare products
5. **Results Display**: The user receives their skin type classification and personalized recommendations

## 📡 API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - User login
- `GET /api/auth/verify-email/:token` - Verify email address
- `POST /api/auth/reset-password` - Request password reset
- `POST /api/auth/reset-password/:token` - Set new password
- `POST /api/auth/google` - Google OAuth authentication

### Image Analysis
- `POST /api/analyze/image` - Upload and analyze an image
- `POST /api/analyze/camera` - Analyze image from webcam

### User Management
- `POST /api/contact` - Submit contact form

## 👥 Team Members

- Aayush Singh Rajput - Project Lead & Full Stack Developer
- Ashmita Thapa - UI/UX Designer
- Bhanu Bhakta Khatri - Machine Learning Engineer 
- Bishal Neupane - Backend Developer

## 💡 Future Enhancements

- 👤 **User Profile Dashboard**: Save analysis history and track skin changes over time
- 🛒 **E-commerce Integration**: Direct purchase of recommended products
- 📱 **Mobile Application**: Native iOS and Android apps
- 🔍 **Advanced Analytics**: More detailed skin condition analysis (wrinkles, spots, etc.)
- 🌐 **Multi-language Support**: Internationalization for global users
- 📊 **Progress Tracking**: Monitor skin improvement with sequential analyses

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### 🌐 Try the Live Demo

**🔗 [SkinAlyzer on Hugging Face →](https://huggingface.co/spaces/biswa000/minor_project_facial_analysis)**

---

<p align="center">© 2025 SkinAlyzer Team. All Rights Reserved.</p>

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
