from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()
client=MongoClient(os.getenv("MONGO_URL", "mongodb://localhost:27017"))
db=client["vignan"]
student_collections=db["student"]
staff_collections=db["staff"]