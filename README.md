# API de Categorías

Este proyecto es una API REST desarrollada con NestJS que permite consultar categorías por ID.

## Versiones utilizadas

- NestJS: 10.0.0
- Node.js: 20.5.1
- PostgreSQL: 13
- Docker: 24.0.6 (o superior)
- Docker Compose: 2.23.0 (o superior)

## Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/api-categorias.git
cd api-categorias
```

### 2. Configurar variables de entorno

Crea un archivo `.env` en la raíz del proyecto basado en el archivo `.env.example`:

```bash
# Copia el archivo .env.example a .env
cp .env.example .env
```

Contenido del archivo `.env.example`:
```
DB_HOST=postgres
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=categorias
PORT=3000
```

### 3. Levantar el entorno con Docker Compose

```bash
docker-compose up -d
```

Este comando construirá la imagen de Docker para la API y levantará los contenedores necesarios (API y PostgreSQL).

### 4. Ejecutar las migraciones

Una vez que los contenedores estén en funcionamiento, ejecuta las migraciones para crear la tabla de categorías y cargar los datos iniciales:

```bash
docker-compose exec api npm run migration:run
```

### 5. Probar el endpoint

#### Con Postman:

1. Abre Postman
2. Crea una nueva solicitud GET
3. Ingresa la URL: `http://localhost:3000/categoria/1`
4. Haz clic en "Send" (Enviar)
5. Deberías recibir una respuesta como: `{ "id": 1, "nombre": "Neumáticos" }`

#### Con cURL:

```bash
curl http://localhost:3000/categoria/1
```

Respuesta esperada:
```json
{ "id": 1, "nombre": "Neumáticos" }
```

## Estructura del proyecto

- `src/`: Contiene el código fuente de la aplicación
  - `main.ts`: Punto de entrada de la aplicación
  - `app.module.ts`: Módulo principal que configura la aplicación
  - `categorias/`: Módulo para manejar las categorías
    - `categoria.entity.ts`: Define la entidad Categoria
    - `categorias.controller.ts`: Controlador que maneja las peticiones HTTP
    - `categorias.service.ts`: Servicio que contiene la lógica de negocio
    - `categorias.module.ts`: Módulo que organiza los componentes de categorías
  - `database/`: Configuración de la base de datos
    - `datasource.ts`: Configuración de la conexión a la base de datos
    - `migrations/`: Contiene las migraciones para crear la tabla y cargar datos
- `Dockerfile`: Instrucciones para construir la imagen Docker
- `docker-compose.yml`: Configuración para orquestar los contenedores
- `.env`: Variables de entorno (no incluido en el repositorio)
- `.env.example`: Plantilla para las variables de entorno

## Cómo funciona

La API expone un endpoint GET `/categoria/:id` que consulta la base de datos PostgreSQL para obtener la categoría correspondiente al ID proporcionado. Si el ID existe, devuelve los datos de la categoría. Si no existe, devuelve un error 404 con un mensaje indicando que la categoría no fue encontrada.

Los datos iniciales cargados en la base de datos son:

| ID | Categoría   |
|----|------------|
| 1  | Neumáticos |
| 2  | Chasis     |
| 3  | Motor      |
| 4  | Accesorios |