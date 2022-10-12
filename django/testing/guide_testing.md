# Tests in Django

We will deal with unit tests initially.
So what is unit test?
Test which test a particular function or a class it can include simply testing urls path, views function or model class.

Types of test:

1. Unit Test
2. Integrated Test
3. Functional Test

## Why do we need testing?

Lets assume you built an entire app without testing. Now, you build a new feature on it.  
These are steps to makesure your new feature actually works.  

* To make sure previous code works fine (So you have to test it right?)
you can do several times and check whether previous code works instead you can write a test which will assert `True` or `False`.
So no need to unneccesarrily waste time on checking previous code when you are building a new feature.

* to make sure your new feature works, when you write a test case for your new feature no need to test repeatedly.

* makes your code reliable. it brings out bugs and mistakes which pass through.

* programmers who are new to your project can peacefully start working on it and instantly familiarise with the code. as testing helps us write good documentation too. We can also be under this category if we havent worked on the same project for a long time.

TLDR; IT SAVES TIME, Effort and Energy!!

## Terminology of Testing (basics bro)

### `assert`

```python
    assert 100 == 69 # if this fails it gives an assertion error 
    
    self.assertEquals(100,69)
```

### `RaiseException`

```python
    if user != "Prince":
        RaiseException('not prince')
```

Refernce:
[For Django Unit Test](https://www.youtube.com/playlist?list=PLbpAWbHbi5rMF2j5n6imm0enrSD9eQUaM)
[Selenium Django Integration](https://www.youtube.com/watch?v=XnSQ6sRGKzI)