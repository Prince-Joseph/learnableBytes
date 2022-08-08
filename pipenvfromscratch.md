<!-- guide.md -->
# Guide

Install desired version of `python`  
add `pip` to path variable in windows

`win`+`r` for run prompt and type `powershell`

```powershell
$env:PATH

PS C:\Users\whindows> $env:PATH
C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;C:\Windows\System32\OpenSSH\;C:\Program Files\Git\cmd;C:\Users\whindows\AppData\Local\Microsoft\WindowsApps;
C:\Users\whindows\AppData\Local\Programs\Python\Python310\Scripts; #this should be there
C:\Users\whindows\AppData\Local\Programs\Microsoft VS Code\bin
```
if not simple
`win`+`r` for run prompt and type `sysdm.cpl` --> advanced tab and environment variables
under user variables click path and edit.
then new 
`%USERPROFILE%\AppData\Local\Programs\Python\Python310\Scripts` paste

```powershell
PS C:\Users\whindows> pip --version
pip 22.2.1 from C:\Users\whindows\AppData\Local\Programs\Python\Python310\lib\site-packages\pip (python 3.10)
```
done pip is working.

now install virtual environment stuff.

why on earth do we need it? because we have to isolate package
lets assume we are working on 2 projects.
one project requires django==2.0 and another project requires django==4.0
so how do we solve this 2 ways
1. create a global installation and switch everytime to that version when needed  
    `switch django==2.0 python3.6`    
    `switch django==4.0 python3.10`  
    Limitation: well you cannot run both apps together :)
2. If you do individual local installation for that project.  
    `create virtualenv for project1 with django==4.0 python3.10 `
    `activate virtualenv for project1`
    ```powershell
    PS C:\Users\whindows\Projects\test_venv> django-admin   --version
    4.1
    # closing the environment
    PS C:\Users\whindows\Projects\test_venv> exit
    # after environment is closed, django isnt available in global scope
    PS C:\Users\whindows\Projects\test_venv> django-admin --version
    django-admin : The term 'django-admin' is not recognized as the     name of a cmdlet, function, script file, or operable
    program. Check the spelling of the name, or if a path was   included, verify that the path is correct and try again.
    At line:1 char:1
    + django-admin --version
    + ~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (django-admin:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
    ``` 

    `create virtualenv for project2 with django==2.0 python3.6 `

## but what do we do?
```powershell
# Install PIPENV
PS C:\Users\whindows> pip install pipenv
```
`pipenv ` : python's simplified virtual environment manager.
```powershell
# Check Installation
PS C:\Users\whindows\Projects\lal> pipenv --version
pipenv, version 2022.8.5
```

## using `pipenv`
```powershell
PS C:\Users\whindows\Projects> mkdir myfavfolder
PS C:\Users\whindows\Projects> cd myfavfolder
```

## creating our virtual env
`pipenv shell`
```powershell
PS C:\Users\whindows\Projects\myfavfolder> pipenv shell
Creating a virtualenv for this project...
Pipfile: C:\Users\whindows\Projects\lal\myfavfolder\Pipfile
Using C:/Users/whindows/AppData/Local/Programs/Python/Python310/python.exe (3.10.6) to create virtualenv...
[ ===] Creating virtual environment...created virtual environment CPython3.10.6.final.0-64 in 1213ms
  creator CPython3Windows(dest=C:\Users\whindows\.virtualenvs\myfavfolder-nAH7ux8A, clear=False, no_vcs_ignore=False, global=False)
  seeder FromAppData(download=False, pip=bundle, setuptools=bundle, wheel=bundle, via=copy, app_data_dir=C:\Users\whindows\AppData\Local\pypa\virtualenv)
    added seed packages: pip==22.2.2, setuptools==63.4.1, wheel==0.37.1
  activators BashActivator,BatchActivator,FishActivator,NushellActivator,PowerShellActivator,PythonActivator

Successfully created virtual environment!
Virtualenv location: C:\Users\whindows\.virtualenvs\myfavfolder-nAH7ux8A
Creating a Pipfile for this project...
Launching subshell in virtual environment...
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.

Try the new cross-platform PowerShell https://aka.ms/pscore6

PS C:\Users\whindows\Projects\lal\myfavfolder>
```

now its active
> in windows, this can be done to verify. If its not active then nothing will show up.
```powershell
PS C:\Users\whindows\Projects\lal\myfavfolder> $env:PIPENV_ACTIVE
1
PS C:\Users\whindows\Projects\lal\myfavfolder> $env:VIRTUAL_ENV
C:\Users\whindows\.virtualenvs\myfavfolder-nAH7ux8A
```

## `pipenv` commands
```powershell
PS C:\Users\whindows\Projects\lal\myfavfolder> exit #closing the env
```
> In windows its not obvious, whether virtualenv opened or closed,
```
PS C:\Users\whindows\Projects\lal\myfavfolder> $env:PIPENV_ACTIVE
PS C:\Users\whindows\Projects\lal\myfavfolder> $env:VIRTUAL_ENV
```
---
### Installing packages
```powershell
PS C:\Users\whindows\Projects\lal\myfavfolder>  pipenv shell
#.... after its activated
PS C:\Users\whindows\Projects\lal\myfavfolder>  pip install django selenium numpy pandas matplotlib fatflopflip 
```
---

Removing `virtual environment`
```powershell
PS C:\Users\whindows\Projects\lal> pipenv --rm
Removing virtualenv (C:\Users\whindows\.virtualenvs\lal-AljEGijP)...
```
```powershell
PS C:\Users\whindows\Projects\lal> rm .\Pipfile
```
---
