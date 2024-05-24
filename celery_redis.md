# Setting up celery with django

Celery is a distributed task queue system that can be used with Django to execute tasks asynchronously or in the background. 

## Step 1: Install Celery and Celery Beat

Install Celery and a message broker (like Redis) to use it for background task processing. Celery needs Redis to receive tasks from the Django application and distribute them to the Celery workers for execution.

Celery Beat is a scheduler that sends tasks to the Celery worker at regular intervals.  

```bash
pip install celery[redis] django-celery-beat
```

## Step 2: Configure Celery and Celery Beat 

Create a `celery.py` file in the project directory (at project settings.py level)  

```python
#celery.py

from __future__ import absolute_import, unicode_literals
import os
from celery import Celery
from django.conf import settings
  
# Set the default Django settings module for the 'celery' program.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'your_project.settings')

# django.setup()

app = Celery('your_project') # Replace 'your_project' with your project's name.

# Configure Celery using settings from Django settings.py.  
app.config_from_object('django.conf:settings', namespace='CELERY')  

# Load tasks from all registered Django app configs.  
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)
```

## Step 3: Configure Celery Broker (Redis)

Configure Redis and Celery in ```settings.py``` file.

```python
INSTALLED_APPS = [
    'django_celery_beat',
]

CELERY_BROKER_URL = 'redis://127.0.0.1:6379/0'
CELERY_RESULT_BACKEND = 'redis://127.0.0.1:6379/0'
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'
CELERY_TIMEZONE = 'UTC'
CELERY_BEAT_SCHEDULER = 'django_celery_beat.schedulers:DatabaseScheduler'
```

> After adding `django-celery-beat` to installed apps, run migrations.

## Step 4: Create Celery Tasks

Create a `tasks.py` file in the app folder and define the tasks

```python
# tasks.py 

from celery import shared_task
from redis import Redis
from django.conf import settings
import json

@shared_task
def sample_task():
    print('a random log')

```

## Step 5: Now Configure Celery Beat Schedule in celery.py file

```python
from celery.schedules import crontab

app.conf.beat_schedule = {
    'sync-db-every-2-minutes': {
        'task': 'myapp.tasks.my_task',
        'schedule': crontab(minute='*/2'),  # Run every 2 minutes
    },
}
```

## Step 6: Run Celery Beat and Celery Workers

Start Celery Worker

```bash
celery -A myproject worker --loglevel=info
```

Start Celery Beat

```bash
celery -A myproject beat --loglevel=info
```

---
Authored-by: Namratha Shivani  <cactus001@users.noreply.github.com>

