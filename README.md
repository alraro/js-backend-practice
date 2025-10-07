# 🌐 Full-Stack Learning Project

<p align="center">
  <img src="https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />
</p>

Este repositorio es un proyecto personal con fines de **aprendizaje y práctica**, donde pongo en marcha un stack completo de tecnologías modernas.  
El objetivo principal es consolidar conocimientos en bases de datos, backend, frontend e infraestructura, aplicando buenas prácticas de desarrollo.

---

## 🚀 Tecnologías utilizadas

### 📦 Backend

- **Node.js** con **Express.js** → Creación de una **API REST**.
- **PostgreSQL** → Base de datos relacional robusta.
- **Docker & Docker Compose** → Orquestación de contenedores y despliegue sencillo.

### 🎨 Frontend

- **Astro** → Framework moderno, rápido y orientado a la optimización.
- **Integraciones JS/TS** → Posible uso de librerías reactivas o componentes UI.

### 🤖 Inteligencia Artificial (en exploración)

- Futuras pruebas de integración de modelos de IA/ML para añadir funcionalidades avanzadas.

---

## 🛠️ Características

- 📂 Arquitectura **modular y escalable**.
- 🔌 API REST para comunicación entre frontend y backend.
- 🐳 Entorno de desarrollo y despliegue simplificado con Docker.
- 📊 Base de datos relacional con PostgreSQL.
- ⚡ Frontend optimizado con Astro.
- 🔮 Posible integración futura de IA.

---

## 📂 Estructura del proyecto (en progreso)

```text
project-root/
│── backend/ # Node.js + Express API
│── frontend/ # Astro frontend
│── database/ # Configuración PostgreSQL
```

---

## 🚧 Estado del proyecto

Actualmente este proyecto está en desarrollo activo.
La finalidad de la aplicación web aún no está definida, pero el repositorio servirá como **muestra de conocimientos técnicos y buenas prácticas**.

---

## 💡 Próximos pasos

## 🌱 FASE 1 — Fundamentos y Preparación

**Duración estimada:** 1–2 semanas
**Meta:** Entender el entorno base y sentar estructura del proyecto.

### Aprender / configurar

* [ ] Repaso de fundamentos de JavaScript y Node.js (modules, npm, imports/exports)
* [ ] Git + GitHub (repos, branches, commits, pull requests)
* [ ] Docker y Docker Compose:

  * Contenedores, imágenes, redes, volúmenes
  * `docker-compose up/down`
  * Cómo se comunican los servicios entre sí
* [ ] PostgreSQL básico (tablas, claves, relaciones, SQL simple)
* [ ] Markdown y documentación básica de proyectos

### Crear

* [ ] Estructura base del proyecto (monorepo):

  ```
  /frontend
  /backend
  /ml-api
  /infra
  docker-compose.yml
  ```
* [ ] `.env` y `.gitignore` correctamente configurados
* [ ] `README.md` con descripción inicial del proyecto

---

## ⚙️ FASE 2 — Backend (Node.js + Express + Prisma + PostgreSQL)

**Duración estimada:** 3–4 semanas
**Meta:** Tener una API funcional, conectada a la base de datos, con endpoints básicos.

### Aprender

* [ ] Node.js avanzado (event loop, módulos, streams)
* [ ] Express.js (rutas, middlewares, controladores)
* [ ] TypeScript en Node.js
* [ ] Prisma ORM (modelado de datos, migraciones, queries)
* [ ] Validación con `zod` o `joi`
* [ ] Seguridad básica (`helmet`, `cors`, rate limiting)
* [ ] Logging con `pino` o `winston`
* [ ] Tests con `vitest` o `jest` + `supertest`

### Implementar

* [ ] Configurar `backend/Dockerfile`
* [ ] Crear esquema `prisma/schema.prisma` con modelo `User` y `Company`
* [ ] CRUD de usuarios (`/api/users`)
* [ ] CRUD de empresas (`/api/companies`)
* [ ] Autenticación JWT (`/api/auth/login`, `/api/auth/register`)
* [ ] Endpoints `/health` y `/metrics`
* [ ] Prisma Studio y migraciones con Docker
* [ ] Documentación Swagger o similar (`swagger-ui-express`)

---

## 🧠 FASE 3 — Módulo de Inteligencia Artificial (Python + FastAPI)

**Duración estimada:** 3–5 semanas
**Meta:** Servir un modelo de ML simple a través de una API.

### Aprender

* [ ] Python 3 básico (entornos virtuales, dependencias, imports)
* [ ] FastAPI (routers, validaciones, Pydantic)
* [ ] scikit-learn (entrenar modelos simples)
* [ ] Serializar modelos (`joblib`, `pickle`)
* [ ] Uvicorn + gunicorn
* [ ] Peticiones HTTP entre microservicios
* [ ] ML básico: regresión lineal, clasificación, normalización de datos

### Implementar

* [ ] Entrenar modelo simple (ej. predicción de ventas o satisfacción)
* [ ] Guardar modelo en `ml-api/models/model.pkl`
* [ ] Endpoint `/predict` que reciba JSON y devuelva predicción
* [ ] Endpoint `/health` para supervisión
* [ ] Configurar `ml-api/Dockerfile`
* [ ] Probar comunicación desde backend (fetch/post con `axios`)

---

## 💅 FASE 4 — Frontend (Astro + Preact)

**Duración estimada:** 3–4 semanas
**Meta:** Tener una interfaz funcional para consumir la API.

### Aprender

* [ ] Astro (estructura, componentes, layouts)
* [ ] Preact (estado, hooks, componentes funcionales)
* [ ] Routing (`preact-router`)
* [ ] Formularios y validación (`react-hook-form` + `zod`)
* [ ] Llamadas a API con `fetch` o `axios`
* [ ] Autenticación con JWT en el navegador
* [ ] Diseño básico (TailwindCSS)
* [ ] Componentes reutilizables y tipados (`TypeScript`)

### Implementar

* [ ] Login y registro de usuario
* [ ] Dashboard (ver empresas, usuarios, estadísticas)
* [ ] Formulario de predicciones (conecta con el servicio de IA)
* [ ] Layout general (header, sidebar, contenido)
* [ ] Dockerfile para Astro

---

## 🐳 FASE 5 — Integración con Docker Compose

**Duración estimada:** 1–2 semanas
**Meta:** Todo funciona junto en contenedores coordinados.

### Aprender

* [ ] Redes internas en Docker Compose
* [ ] Variables de entorno entre servicios
* [ ] Healthchecks
* [ ] Volúmenes y persistencia
* [ ] Logs y debugging en contenedores

### Implementar

* [ ] `docker-compose.yml` con:

  * PostgreSQL
  * Backend (Node.js)
  * ML API (FastAPI)
  * Frontend (Astro)
* [ ] `.env` con variables (DB URL, JWT secret, etc.)
* [ ] Script `start.sh` para levantar todo fácilmente
* [ ] Pruebas de comunicación entre servicios (`curl`, `axios`)

---

## 🔒 FASE 6 — Seguridad, Escalabilidad y Buenas Prácticas

**Duración estimada:** 3–4 semanas
**Meta:** Convertir el sistema en una base sólida para producción.

### Aprender

* [ ] Autenticación segura (refresh tokens, expiración)
* [ ] Cifrado de contraseñas (`bcrypt`)
* [ ] HTTPS y reverse proxy (Traefik / Nginx)
* [ ] Logs centralizados (Grafana + Loki o ELK)
* [ ] Métricas (Prometheus)
* [ ] Despliegue con GitHub Actions o Docker Registry
* [ ] Testing e2e
* [ ] Documentación técnica avanzada

---

## 🚀 FASE 7 — Extras y Exploración Avanzada

**Opcional / largo plazo**

* [ ] GraphQL con Apollo
* [ ] gRPC entre servicios
* [ ] MLflow o BentoML para versionado de modelos
* [ ] Redis / RabbitMQ para colas de tareas
* [ ] Kubernetes (minikube / kind)
* [ ] Auth con Keycloak u OAuth2
* [ ] Analítica con Metabase o Superset
* [ ] WebSockets para actualizaciones en tiempo real
* [ ] Testing automatizado en CI/CD completo

---

## 📚 Repos y recursos recomendados

| Tema                 | Recurso                                                                    |
| -------------------- | -------------------------------------------------------------------------- |
| **Docker básico**    | [Play with Docker](https://labs.play-with-docker.com/)                     |
| **Express + Prisma** | [Prisma Docs](https://www.prisma.io/docs)                                  |
| **FastAPI**          | [FastAPI Tutorial](https://fastapi.tiangolo.com/)                          |
| **Astro**            | [Astro Docs](https://docs.astro.build)                                     |
| **Preact**           | [Preact Docs](https://preactjs.com/guide/v10/getting-started)              |
| **TypeScript**       | [TS Handbook](https://www.typescriptlang.org/docs/)                        |
| **scikit-learn**     | [scikit-learn User Guide](https://scikit-learn.org/stable/user_guide.html) |
| **DevOps / CI/CD**   | [GitHub Actions Docs](https://docs.github.com/actions)                     |

---

## 👤 Autor

Desarrollado por **alraro**
🔗 [Perfil de GitHub](https://github.com/alraro)

---

✨ _Este repositorio es parte de mi portafolio en construcción. Está pensado para recruiters, colaboradores y cualquier persona interesada en mi proceso de aprendizaje._
