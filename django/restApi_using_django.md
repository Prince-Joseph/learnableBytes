# Learning `djangorestframework`

## Installation

```bash
pip install djangorestframework django-cors-headers
```

## How it works kinda

Models --> Serializers --> Viewsets --> Routers --> Urls  
`models.py` --> `serializers.py` --> `views.py` --> `urls.py` --> `urls.py`

**Models**: It stores the structure (model/an example) of the Database as we define.  
**Serializers**: Here we define the structure of JSON. (Model Serializers, it automatically gets the structure of JSON from the model)  
**Viewsets**: Viewset is a combination of Views. One view is for listing the data and other one is for updating. We define model and serializer in viewset to display content of model in the format of defined serializer.  
**Routers**: Routers is used to register our Viewset as viewset can have other url parameters as well.  
**Urls**: Routers will linked here under a url path.

## Setup

```bash
python manage.py startapp api
```

```python

INSTALLED_APPS = [

    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    
    # add our libraries
    'corsheaders',
    'rest_framework',

    # add our app
    'api.apps.ApiConfig',

]

```

```python
        
```
