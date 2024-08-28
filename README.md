# API REST NODE JS

Aplicación backend, API REST o aplicación de servidor construida con Node JS y Express, en la cual se ha integrado con tecnlogías como express validator para la validación de los datos enviados en la petición, se ha persistido los datos en una base de datos Mongo DB, la cual es provisionada en un contenedor de Docker, se realizaron funciones helpers para validaciones personalizadas y middlewares para la intercepción de las peticiones HTTP, se especifican rutas y controllers en donde se centralizan todas la lógica de negocio, se utiliza mongoose para interacción de la base de datos, bcryptjs para la encriptación de contraseñas y Json Web Token (JWT) para la autenticación de los usuarios y proteger rutas dentro de nuestra aplicación, por otra parte se crea la configuración para una documentación en swagger, se utiliza cors para la gestión de los origenes permitidos y para la manipulación de datos sensibles se utilizan las variables de entorno y dotenv.


## Indicaciones
Clonar el proyecto, dentro del directorio del proyecto instalar las dependecias de node con ```npm i o npm install```, seguidamente copiar el archivo ```.env.template``` y renombrarlo por ```.env```, indicar las varaibles de entorno rqueridas, como lo es la cadena de conexión a la base de datos y el nombre de la base de datos (Mongo DB), por otra parte especificar el puerto para levantar la aplicación y por útlimo el secret del JWT para la firma de tokens, por último ejecutar ```npm run start:dev``` para levantar el servidor en modo observador o ```npm start``` para ejecitar el servidor, para ingresar a la documentación de la aplicación ingresar en el navegador el ```<host>/api-docs```.


## Tecnologías

- <div style="display:flex;aling-items:center;gap:5px;"><a href="https://nodejs.org/en">Node JS</a> <img src="https://res.cloudinary.com/dxn0tqsnw/image/upload/v1724818746/brief/1_TY9uBBO9leUbRtlXmQBiug_f8cwdj.png" width="20px" height="auto" /> </div>
- <div style="display:flex;aling-items:center;gap:5px;"><a href="https://expressjs.com/es/">Express</a> <img src="https://res.cloudinary.com/dxn0tqsnw/image/upload/v1724818746/brief/express-js_azsjla.png" width="20px" height="auto" /> </div>
- <div style="display:flex;aling-items:center;gap:5px;"><a href="https://express-validator.github.io/docs">Express Validator</a> <img src="https://res.cloudinary.com/dxn0tqsnw/image/upload/v1724818746/brief/logo_shg609.svg" width="20px" height="auto" /> </div>
- <div style="display:flex;aling-items:center;gap:5px;"><a href="https://www.mongodb.com/es">Mongo DB</a> <img src="https://res.cloudinary.com/dxn0tqsnw/image/upload/v1724818746/brief/mongodb-branding-icon-symbol-logo-vector-_1540_ke6bhu.png" width="20px" height="auto" /> </div>
- <div style="display:flex;aling-items:center;gap:5px;"><a href="https://mongoosejs.com/">Mongoose</a> <img src="https://res.cloudinary.com/dxn0tqsnw/image/upload/v1724818746/brief/1_jO715XDC1YAEsWUwovWUQw_hggjfx.png" width="20px" height="auto" /> </div>
- <div style="display:flex;aling-items:center;gap:5px;"><a href="https://jwt.io/">Json Web Token (JWT)</a> <img src="https://res.cloudinary.com/dxn0tqsnw/image/upload/v1724818746/brief/descarga_jk8s4b.png" width="20px" height="auto" /> </div>
- <div style="display:flex;aling-items:center;gap:5px;"><a href="https://www.npmjs.com/package/bcryptjs">bcryptjs</a>
- <div style="display:flex;aling-items:center;gap:5px;"><a href="https://swagger.io/tools/swagger-ui/">Swagger</a> <img src="https://res.cloudinary.com/dxn0tqsnw/image/upload/v1724818746/brief/Swagger-logo_tsv3cn.png" width="20px" height="auto" /> </div>

