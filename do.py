from dextools_python import DextoolsAPI
from dotenv import load_dotenv
import os

# Load variables from .env
load_dotenv()

dextools = DextoolsAPI(os.getenv("api_key"))