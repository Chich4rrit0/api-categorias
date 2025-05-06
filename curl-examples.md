# Ejemplos de uso de la API con curl

## Endpoint raíz
```bash
curl http://localhost:3000
```
Respuesta:
```
Hello World!
```

## Obtener categoría por ID

### Categoría existente (ID: 1)
```bash
curl http://localhost:3000/categoria/1
```
Respuesta:
```json
{"id":1,"nombre":"Neumáticos"}
```

### Categoría existente (ID: 2)
```bash
curl http://localhost:3000/categoria/2
```
Respuesta:
```json
{"id":2,"nombre":"Chasis"}
```

### Categoría existente (ID: 3)
```bash
curl http://localhost:3000/categoria/3
```
Respuesta:
```json
{"id":3,"nombre":"Motor"}
```

### Categoría existente (ID: 4)
```bash
curl http://localhost:3000/categoria/4
```
Respuesta:
```json
{"id":4,"nombre":"Accesorios"}
```

### Categoría inexistente
```bash
curl http://localhost:3000/categoria/99
```
Respuesta:
```json
{"error":"Categoría no encontrada"}
```

## Uso con Postman

1. Abre Postman
2. Crea una nueva solicitud GET
3. Ingresa la URL: `http://localhost:3000/categoria/1`
4. Haz clic en "Send" (Enviar)
5. Deberías recibir una respuesta como: `{ "id": 1, "nombre": "Neumáticos" }`