# Aplicaci贸n de noticias sobre comida

_Una aplicaci贸n hecha con React donde se muestran noticias relacionadas con comida_

![foto](./src/images_github/portada.png) 

## Un proyecto hecho con React 馃殌

En el proyecto utilizamos distintas funcionalidades que nos proporciona React:

* Descomposici贸n en componentes de React
* React Routing
* Uso de hooks, como useState, useEffect, useReducer, useContext
* Manejo de formularios en React
* Gesti贸n del ciclo de vida de los componentes en React
* Uso de Context para hacer la llamada a la API de noticias
* Uso de Sass dentro de React
  
## 驴Como desplegar el proyecto? 馃搵

Estas instrucciones te permitir谩n obtener una copia del proyecto en funcionamiento en tu m谩quina local para prop贸sitos de desarrollo:

Clonarte el repositorio localmente:
> git clone url del repositorio

Instalar las depedencias necesarias:
> npm i

Ejecutar el script para iniciar el proyecto:

> npm start

馃槉 Genial ya tenemos todo listo para ver nuestra aplicaci贸n en desarrollo 馃槉

## Interfaces y funcionalidades de la aplicaci贸n
- Pantalla Home donde se muestra una portada con el logo y una descripci贸n de nuestra aplicaci贸n. Adem谩s tiene un boton para navegar a la parte del formulario de nuestra aplicaci贸n.

![foto](./src/images_github/home.png) 

- Pantalla Form, muestra un formulario para rellenar una noticia y poder insertala en la lista de noticias, actualmente la noticia la guardamos en LocalStorage.

![foto](./src/images_github/form.png) 

- Pantalla News, muestra la lista con todas las noticias sobre comida que tenemos disponible a d铆a de hoy.

![foto](./src/images_github/news.png) 

Todo el dise帽o es responsive y adem谩s disponemos de un men煤 hamburguesa en la vista para m贸vil donde disponemos de los botones de navegaci贸n.
    <div align="center">
        ![foto](./src/images_github/responsive1.png)
        ![foto](./src/images_github/responsive2.png)  
    </div>

## 馃搶 Organizaci贸n a la hora de trabajar en este proyecto 馃搶

El proyecto consta de dos ramas: main y develop, las distintas funcionalidades del proyecto se han implementado en distintas ramas que posteriormente se han fusionado con la rama develop que es la encargada de actualizar todo el trabajo de desarrollo. Finalmente cuando tengamos versiones estables de la rama develop la fusionamos con la rama main, la encargada de mostrar nuestro Front-End en producci贸n.

---
Hecho por [Germ谩n Fern谩ndez](https://github.com/GeerDev) 馃槉 

