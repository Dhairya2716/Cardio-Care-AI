import pickle
import joblib

# Load original pickle
with open("./model.pkl", "rb") as f:
    obj = pickle.load(f)

# Save compressed (still .pkl)
joblib.dump(obj, "model.pkl", compress=3)

# Load compressed file
obj = joblib.load("model.pkl")
print("compressed model.pkl")