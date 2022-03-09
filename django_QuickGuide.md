<!-- django_quickanddirty.md -->
# `Django` Quick Refernce

I have another detailed file in my jammed hardisk untill I recover it 🙃.  
I wrote this thing

## what the heck is `django`

Python Framework for Webdev.
Framework is a collection of files and scripts engineered to helps us write / build stuff faster and in a *specific way* for efficiency and maintainablity.  
It handles complicated stuff inside and gives us nice steering wheels.
well drawbacks:
you have to stuff in a certain way which framework recommends us to do.
well idk ill do whatever which makes my life easier.  

## webdev - small brushup

django is actually a fullstack framework, and can run almost anything perfectly well. due to recent advance of frontend frameworks. we are using django as backend to serve api's to fe and mobile apps.

## that stupid specific way

what we see a html page: `home.html` django calls it a **template**.  
deals with database nonsense and business logic: `models.py` it is db of django called **models**.
**views** helps us to connect templates(fw,htmlpage) to models(be,sqlite3). (a.k.a controller `views.py`).  
**urls** it just lifts the massive burden of managing links and urls. It directs our page to specific url.

how does django know where is everything smart people django a pattern if we follow it, it is flipping magic.

and it also allocates everything into **apps**. beauty of abstraction.

> kinda important stuff
    models
    views
    templates
    urls
    static files
    tests
    forms
    optional addons (admins, filters for ajax-selects, permissions for django-authority, notifications for django-notifications, etc, etc)

Confused? even I was confused.

```py
# models.py
class Website(models.Model):
    name = models.CharField(max_length=200)
    url = models.CharField(max_length=200)
    visitors = models.IntegerField())
```

```py
# views.py
class SearchResultView(TemplateView):
    template_name = "results.html"

    def get_context_data(self, **kwargs):
       context = super().get_context_data(**kwargs)
       context['websites'] = Website.objects.all()
       return context
```

```html
<!-- templates/results.html -->
<div>
    {% for item in websites %}
        <h2>{{ item.name }}</h2>
        <a>{{ item.url }}</a>
        <p>{{ item.visitors }}</p>
    {% endfor %}
</div>
```

```py
# urls.py
urlpatterns = [
    path('results/', SearchResultView.as_view(),name='search'),
]
```
