# Nimble Gravity Challenge — React App

Este proyecto es la resolución de un desafío técnico para la posición de **Junior Fullstack Developer** en Nimble Gravity.

## Descripción

La aplicación es una mini interfaz desarrollada en **React** que interactúa con la API de Nimble Gravity para:
1. Validar los datos de un candidato mediante su correo electrónico.
2. Listar las posiciones laborales disponibles en tiempo real.
3. Permitir la postulación a una posición específica enviando la URL de este repositorio de GitHub.

## Tecnologías Utilizadas

- **React** (Vite)
- **CSS Vanilla** (Diseño prolijo y funcional)
- **Fetch API** (Comunicación con la API REST)

## Instalación y Ejecución

Si deseas ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/EnriqueMartinez26/nimble-gravity-challenge.git
   ```
2. Entra en la carpeta del proyecto:
   ```bash
   cd nimble-gravity-challenge
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto

- `src/api.js`: Lógica de comunicación con los endpoints de la API.
- `src/components/`: Componentes modulares (Formulario de Email, Lista de Jobs, Tarjeta de Job).
- `src/App.jsx`: Componente principal que maneja el flujo de navegación del candidato.

---
Desarrollado por **Enrique Martínez**.
