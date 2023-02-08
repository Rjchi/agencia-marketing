# agencia_marketing
-1. Buscar un dominio gratis o comprarlo

DJANGO

0. Pagina para el despliege render.com
0.1. Verificar el soporte a largo plazo de django (django lts)
0.2. He intalar la version con mas soporte hasta el momento
1. Carpeta_contenedora/capeta/venv_django
2. Ambiente virtual pyhton -m virtualenv venv
3. Lo activamos .\venv\Scripts\activate
4. Instalamos django pip install django==3.2.16(mayor soporte)
5. Creamos un proyecto de django django-admin startproject Nombre . (este va a contener el nucleo del sitio)
6. Abrimos el proyecto en VSC
7. Creamos un archivo requeriments.txt (vamos a pypi.org y buscamos el paquete que queremos instalar para ver la 
	version disponible
	django==3.2.16
	django-environ==0.9.0 este nos permite configurar las variables de ambiente
	django-cors-headers==3.13.0 este nos permite la comunicacion entre fron y back (con esto delegamos permisos) haciendo
	llamados al API correctamente
	djangorestframework==3.14.0 este nos permite crear APIs con django	
	Pillow==9.4.0 este nos permite trabajar con imagenes
	django-storages==1.13.2 esto nos permite guardar las imagenes en aws
	django-ckeditor==6.3.2	esto nos permite crear contenido (por parte del usuario, osea nos da varias opciones para
	que un post se vea mejor negrita, underline etc)
	psycopg2 2.9.5 esto nos permite poder trabajar con potsgresql
)
8. Desde la terminal en la carpeta(donde este el requeriments.txt) y dentro del ambiente
	virtual pip install -r requirements.txt y con esto empieza a instalarce todo.
9. Creamos un archivo .env y un .gitignore
10. Ahora vamos a https://www.toptal.com/developers/gitignore y creamos un react, django, python
11. El resultado lo copiamos y lo pegamos en el .gitignore
12. Buscamos Ctr + f build/ y lo comentamos para que si se suba al proyecto completo cuando despleguemos
13. Publicamos en gitHub y creamos una nueva rama desde el proyecto llamada staging y publicamos
14. Es buena practica trabajar desde el staging porque el master contiene el codigo funcionando ademas de que si
	nos equivocamos en master no hay vuelta atras cosa que no pasa con staging porque podemos volver a master
15. Vinculamos .env con sentting.py
16. Creamos una carpeta nueva llamada apps (va a contener los modelos) y le pegamos el archivo init.py
	( se utiliza para realizar configuraciones de importación, sin el no se podria importar nada desde 
	el archivo que no lo contiene en conclusion: Lo que hace __init__.py es "convertir" un directorio en un modulo (paquete)
	que contiene otros módulos, y esto lo hace para poder importarlos. )
17. Creamos una nueva carpeta llamada media para poder subir archivos como imagenes,  videos etc que subimos al sitio por defecto
	si no indicamos donde queremos subirlos(como aws) estos se suben a media
18. Ahora como estamos en la etapa de la construccion debemos utilizar sqlite, migremos con pyhton manage.py migrate
19. Ahora para poder ver lo que tenemos en la BD instalamos la extension sqlite o la aplicacion DB Browser for sqlite





REACT
0. Podemos tener tantos frontends como queramos y seguir llamando al mismo backend(un backend para varios frontends)
1. Nos ubicamos en el Desktop y aqui ejecutamos npx create-react-app Nombre
2. Ahora abrimos el proyecto de react y copiamos public, src y packaje.json y lo pegamos en carpeta_contenedora/carpeta_de_django (aqui)
3. Ahora nos ubicamos en la carpeta de django y creamos un ambiente virtual para react, llamado nodemoduls
	(esto se crea gracias a las dependencias del packaje.json) ejecutando 
	npm i | npm install
3.1 Nota: Cuando tenemos problemas de paquetes borramos nodemodules, packaje.json y lo volvemos a installar (npm i)
4. Ahora ejecutamos npm run build (dentro de la carpeta que aparece(build) vamos a tener un index.html que va a llamar a todo (SPA))
	osea que tiene un solo punto de entrada
5. Ahora en la consola donde tenemos el venv activado ejecutamos python manage.py collectstatic con esto se nos generara una carpeta
	static (esta contiene todo lo necesario para poder visualizar lo que tenemos en react)
6. Modificamos las templates de settings.py y enrutamos a la carpeta build
7. 








