from os.path import exists

# -# Use 12factor inspired environment variables or from a file
import environ
from os.path import dirname, join

env = environ.Env()

# Build paths inside the project like this: join(BASE_DIR, "directory")
BASE_DIR = dirname(dirname(__file__))
# Ideally move env file should be outside the git repo
# i.e. BASE_DIR.parent.parent
env_file = join(dirname(BASE_DIR), "config.env")
if not exists(env_file):
    env_file = "/etc/ai/config.env"

if exists(env_file):
    environ.Env.read_env(str(env_file))
