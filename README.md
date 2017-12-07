Para Levantar La app es necesario tener instalado node.js v6 o superior, angular CLI, mysql
Es necesario tener levantado mysql con usuario con permisos.

Dentro del la carpeta back/db tenemos un script sql para obtener la bd sus tablas y datos precargados.
De ser necesario cambiar user y paswor de mysql, el archivo de configuracion se encuentra en:
webAppEns/back/src/utils/, el archivo se llama connection.js dentro deberan cambiar los valores de user y password de ser necesario

Una Vez tengamos esto para levantar la aplicacion debemos 

Como primer paso desde consola pararse en webAppEns/back y ejecutar el comando: npm install 
Luego  en front/webApp  ejecutar npm install, para que instale todas las dependecias del proyecto

Como segundo paso desde consola pararse en webAppEns/back y ejecutar el comando: node src/app.js 
Luego pararce en front/webApp y ejecutar ng serve

La aplicacion correra en el puerto 4200, para ingresar desde el navegador vamos a localhost:4200
