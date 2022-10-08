# Angular

## Installation

```bash
npm install -g @angular/cli
ng --version
```

## Creating New App

```bash
ng new custom-name-app
```

```bash
Y --> for routing
Select
CSS (or) SCSS
```

## Serving App

```bash
cd custom-name-app
ng serve
```

## Creating a New Component

```bash
ng g c navlalal-bar # or
ng generate component navbar-comp
```

Component is a region of code which can be abstracted into an individual entity.

```html
<!-- index.html -->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>AngyApp</title>
  <base href="/">
    <!-- Omitted for Brevity -->
</head>
<body>
  <!-- App Component -->
  <app-root></app-root> 
</body>
</html>
```

```html
<!-- app/app.component.html -->
<html>
    <app-navbar-comp></app-navbar-comp>
    <app-main-comp></app-main-comp>
    <app-search-comp></app-search-comp>
    <app-cards-comp></app-cards-comp>
    <app-footer-comp></app-footer-comp>
</html>
```

```html
<!-- app/navbar-comp/navbar-comp.html -->
<div class="navbar">
    <ul>
        <li>Home</li>
        <li>...</li>
        ....
</div>
```

Generally a Component,  
Consists of  
    1.`html`  
    2.`css`  
    3.`typescript`  
    4.`typescript-test`  

This is the setup for apps created by `ng g c component-name`  

**src** is the folder which contains out main stuff.

```bash
src
    - index.html
    - styles.css
    - main.ts
    - app
        - app.ts
        - app.css
        - navbar-component
            ...
    - assets
```

## `angular` way of pushing data to template

```ts
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ang';
  my_name = "prince";
  
  get name() {
   return this.my_name; // JavaScript wierd way of telling variable belongs to "this" class 
  }

}

```

## Routing

```bash
ng g c home
ng g c dashboard
```

Add Stuff to the prexisting file

```typescript
// app-routing.module.ts

// Importing our component
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Adding routes
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
```

```html
// app.component.html

<ul>
    <li> <a routerLink=''>Home</a> </li>
    <li> <a routerLink='dashboard'>Dashboard</a> </li>
</ul>

<router-outlet>
  <!-- Home stuff -->
  <!-- Dashboard Stuff -->
</router-outlet>

```
