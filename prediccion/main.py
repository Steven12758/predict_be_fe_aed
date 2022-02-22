from typing import Optional
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from models import Student
import pickle

app = FastAPI()
origins = [
    "http://localhost",
    "http://localhost:4200",
    "https://damp-wave-33692.herokuapp.com"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
def load_model():
    global model
    model = pickle.load(open("ml_model_regression.pkl", "rb"))

@app.get("/")
def index():
    return {
        "msg" : "Servicio de aprendizaje automático que brinda predicción de la nota final de un alumno en base a ciertas circustancias.",
        "autores": "Angel Martinez - Henrry Jimenez",
        "email": "[angel.martinez, henrry.jimenez]@unl.edu.ec",
        "org": "UNL 2022",
        }


@app.post("/predict")
def get_home_price(data: Student): 
    received = data.dict()
    std_attr = [[
        received['age'],
        received['mother_education'],
        received['father_education'],
        received['commute_time'],
        received['study_time'],
        received['failures'],
        received['family_quality'],
        received['free_time'],
        received['go_out'],
        received['weekday_alcohol_usage'],
        received['weekend_alcohol_usage'],
        received['health'],
        received['absences'],
        received['period1_score'],
        received['period2_score'],
        received['school_GP'],
        received['school_MS'],
        received['sex_F'],
        received['sex_M'],
        received['address_Rural'],
        received['address_Urban'],
        received['family_size_GT3'],
        received['family_size_LE3'],
        received['parents_status_A'],
        received['parents_status_T'],
        received['mother_job_at_home'],
        received['mother_job_health'],
        received['mother_job_other'],
        received['mother_job_services'],
        received['mother_job_teacher'],
        received['father_job_at_home'],
        received['father_job_health'],
        received['father_job_other'],
        received['father_job_services'],
        received['father_job_teacher'],
        received['reason_course'],
        received['reason_home'],
        received['reason_other'],
        received['reason_reputation'],
        received['guardian_father'],
        received['guardian_mother'],
        received['guardian_other'],
        received['school_support_no'],
        received['school_support_yes'],
        received['family_support_no'],
        received['family_support_yes'],
        received['paid_classes_no'],
        received['paid_classes_yes'],
        received['activities_no'],
        received['activities_yes'],
        received['nursery_no'],
        received['nursery_yes'],
        received['desire_higher_edu_no'],
        received['desire_higher_edu_yes'],
        received['internet_no'],
        received['internet_yes'],
        received['romantic_no'],
        received['romantic_yes'],
    ]]
    final_note = model.predict(std_attr).tolist()[0]
    
    return {'data': received, 'nota': final_note}