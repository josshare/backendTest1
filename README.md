# Backend Checkpoint

[![logo](https://s3.amazonaws.com/bego.ai/assets/images/logo.png)](https://bego.ai/home)

## Te damos la bienvenida al checkpoint para postulantes de **backend**

- NodeJS
- MongoDB
- Typescript

### Requisitos

- Conocer bases y fundamentos de Typescript, NodeJS y MongoDB.
- Desarrollar la lógica para una API, implementando interfaces, modelos, rutas y controladores.
- Utilizar código limpio, utility types y buenas prácticas.
- Implementar auth con JWT y validar el token antes de consumir cada servicio.
- Como sugerencia puedes usar aggregations de MongoDB.

#### Dominios

- [Users](users.md)
- [Trucks](trucks.md)
- [Orders](orders.md)
- [Locations](locations.md)

#### Notas

- Crear un CRUD por cada dominio.
- Asugurate de validar los modelos de los datos antes de hacer una inserción a la base de datos
- El objetivo final de la prueba es que un usuario pueda crear ordenes vinculadas a un truck, origen, destino y completar sus estatus.
- Utilizar una rama distinta para cada dominio, y realizar el merge a la rama principal.
- Usar variables de entorno en un archivo .env (compartirnos el archivo).
- Esperamos que al final del checkpoint, puedas armar un README indicando. La funcionalidad de tu API y la manera en la cual abordaste el desarrollo del mismo.
- Recuerda compartirnos tu enlace al repositorio de Git (GitHub | BitBucket).
