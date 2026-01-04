# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# import joblib
# import pandas as pd
# import numpy as np
# from fastapi.middleware.cors import CORSMiddleware
# import os

# app = FastAPI(title="Cardio Disease Prediction API")

# # CORS
# origins = [
#     "http://localhost:3000",
#     "https://your-vercel-app.vercel.app", # Placeholder for deployment
#     "*"
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# import zipfile

# # Load Model
# model_path = "model.pkl"
# zip_path = "model.zip"

# if not os.path.exists(model_path) and os.path.exists(zip_path):
#     print("Model pickle not found, extracting from zip...")
#     with zipfile.ZipFile(zip_path, 'r') as zip_ref:
#         zip_ref.extractall(".")
#     print("Model extracted successfully.")

# try:
#     model = joblib.load(model_path)
#     print("Model loaded successfully.")
# except Exception as e:
#     model = None
#     print(f"Error loading model: {e}")

# class PatientData(BaseModel):
#     age: int # In Years
#     gender: int # 1: Women, 2: Men
#     height: int # cm
#     weight: float # kg
#     ap_hi: int # Systolic blood pressure
#     ap_lo: int # Diastolic blood pressure
#     cholesterol: int # 1: normal, 2: above normal, 3: well above normal
#     gluc: int # 1: normal, 2: above normal, 3: well above normal
#     smoke: int # 0: No, 1: Yes
#     alco: int # 0: No, 1: Yes
#     active: int # 0: No, 1: Yes

# @app.get("/")
# def read_root():
#     return {"message": "Cardio Prediction API is running"}

# @app.post("/predict")
# def predict(data: PatientData):
#     if model is None:
#         raise HTTPException(status_code=500, detail="Model not loaded")

#     # Convert age from years to days (approximate)
#     age_days = data.age * 365 

#     # Prepare input array matching the training columns:
#     # age, gender, height, weight, ap_hi, ap_lo, cholesterol, gluc, smoke, alco, active
#     input_data = pd.DataFrame([{
#         'age': age_days,
#         'gender': data.gender,
#         'height': data.height,
#         'weight': data.weight,
#         'ap_hi': data.ap_hi,
#         'ap_lo': data.ap_lo,
#         'cholesterol': data.cholesterol,
#         'gluc': data.gluc,
#         'smoke': data.smoke,
#         'alco': data.alco,
#         'active': data.active
#     }])

#     # Predict
#     try:
#         prediction = model.predict(input_data)
#         probability = model.predict_proba(input_data)
        
#         # prediction[0] is 0 or 1
#         # probability[0] is [prob_0, prob_1]
        
#         result = {
#             "prediction": int(prediction[0]),
#             "probability": float(probability[0][1]), # Probability of having the disease
#             "risk_level": "High" if prediction[0] == 1 else "Low"
#         }
#         return result
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")

# # For Render deployment, Uvicorn will handle execution

#
#
#

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np
import os
import zipfile

# --------------------------------------------------
# App setup
# --------------------------------------------------
app = FastAPI(title="Cardio Disease Prediction API")

# --------------------------------------------------
# CORS
# --------------------------------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Safe for API usage
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --------------------------------------------------
# Model paths
# --------------------------------------------------
MODEL_PATH = "model.pkl"
ZIP_PATH = "model.zip"

# --------------------------------------------------
# Extract model ONLY if needed
# --------------------------------------------------
if not os.path.exists(MODEL_PATH) and os.path.exists(ZIP_PATH):
    print("Extracting model from ZIP...")
    with zipfile.ZipFile(ZIP_PATH, "r") as z:
        z.extractall(".")
    print("Model extracted successfully")

# --------------------------------------------------
# Lazy-load model (memory safe)
# --------------------------------------------------
model = None

def get_model():
    global model
    if model is None:
        try:
            model = joblib.load(MODEL_PATH)
            print("Model loaded into memory")
        except Exception as e:
            print("Model load failed:", e)
            raise HTTPException(status_code=500, detail="Model not available")
    return model

# --------------------------------------------------
# Input schema
# --------------------------------------------------
class PatientData(BaseModel):
    age: int              # years
    gender: int           # 1 = female, 2 = male
    height: int           # cm
    weight: float         # kg
    ap_hi: int            # systolic BP
    ap_lo: int            # diastolic BP
    cholesterol: int      # 1,2,3
    gluc: int             # 1,2,3
    smoke: int            # 0,1
    alco: int             # 0,1
    active: int           # 0,1

# --------------------------------------------------
# Routes
# --------------------------------------------------
@app.get("/")
def root():
    return {"status": "Cardio Prediction API is running"}

@app.post("/predict")
def predict(data: PatientData):
    model = get_model()

    # Convert age to days (as used in training)
    age_days = data.age * 365

    # Create NumPy array (NO pandas – saves memory)
    input_data = np.array([[
        age_days,
        data.gender,
        data.height,
        data.weight,
        data.ap_hi,
        data.ap_lo,
        data.cholesterol,
        data.gluc,
        data.smoke,
        data.alco,
        data.active
    ]])

    try:
        prediction = model.predict(input_data)[0]
        probability = model.predict_proba(input_data)[0][1]

        return {
            "prediction": int(prediction),
            "probability": float(probability),
            "risk_level": "High" if prediction == 1 else "Low"
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
