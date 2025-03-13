import os
from dotenv import load_dotenv

load_dotenv()

GCP_PROJECT_ID = os.getenv('PWD')
print(GCP_PROJECT_ID)