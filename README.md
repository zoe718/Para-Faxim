# 💜 Aplicación Romántica - Para Mi Amor

Una hermosa aplicación web creada con React para expresar amor de manera única y especial.

## ✨ Características

- **Pantalla de Inicio**: Diseño elegante con colores pastel morado/rosa
- **Nuestra Historia**: Carrusel con momentos especiales y fotos
- **Por Qué Te Amo**: Lista scrolleable de razones románticas
- **Animaciones suaves**: Transiciones y efectos visuales encantadores
- **Diseño responsivo**: Se adapta perfectamente a móvil, tablet y desktop
- **Corazones flotantes**: Elementos decorativos animados

## 🚀 Cómo Usar

### Instalación Local

1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abre tu navegador en:**
   ```
   http://localhost:5173
   ```

### 📸 Agregar tus Fotos Personales

1. Coloca tus imágenes en la carpeta `/public/images/`
2. Edita el archivo `src/pages/OurStoryPage.jsx`
3. Descomenta las líneas de `image` en cada slide y actualiza con el nombre de tu imagen:
   ```javascript
   {
     id: 1,
     title: "El Primer Encuentro",
     description: "...",
     emoji: "✨",
     image: "/images/tu-foto.jpg"  // ← Descomenta y actualiza
   }
   ```

### 🎨 Personalizar Contenido

#### Modificar la Historia (Nuestra Historia)
Edita `src/pages/OurStoryPage.jsx` - array `storySlides`:
- Cambia títulos, descripciones y emojis
- Agrega o elimina slides
- Actualiza rutas de imágenes

#### Modificar las Razones (Por Qué Te Amo)
Edita `src/pages/WhyILoveYouPage.jsx` - array `reasons`:
- Cambia títulos y descripciones
- Agrega más razones (hasta infinitas)
- Modifica los iconos

#### Personalizar Colores
Edita `src/styles/index.css` - variables CSS en `:root`:
```css
:root {
  --purple-light: #E6D5F5;    /* Ajusta estos valores */
  --purple-medium: #D4B5F0;
  --pink-light: #FFD6E8;
  /* ... más colores */
}
```

## 🌐 Desplegar en Vercel con GitHub

### Paso 1: Crear Repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea un nuevo repositorio
2. No inicialices con README (ya lo tienes)

### Paso 2: Subir tu Código

En tu terminal, dentro de la carpeta del proyecto:

```bash
# Inicializar git (si no lo has hecho)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Mi aplicación romántica inicial"

# Agregar repositorio remoto (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git

# Subir al repositorio
git branch -M main
git push -u origin main
```

### Paso 3: Desplegar en Vercel

1. Ve a [vercel.com](https://vercel.com) e inicia sesión con GitHub
2. Click en "Add New Project"
3. Selecciona tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite
5. Click en "Deploy"
6. ¡Listo! Tu aplicación estará disponible en pocos minutos

### Actualizaciones Futuras

Cada vez que hagas cambios:
```bash
git add .
git commit -m "Descripción de tus cambios"
git push
```

Vercel automáticamente desplegará los cambios.

## 📱 Estructura del Proyecto

```
amor-app/
├── public/
│   └── images/          # Coloca tus fotos aquí
├── src/
│   ├── components/
│   │   ├── FloatingHearts.jsx
│   │   └── FloatingHearts.css
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── HomePage.css
│   │   ├── OurStoryPage.jsx
│   │   ├── OurStoryPage.css
│   │   ├── WhyILoveYouPage.jsx
│   │   └── WhyILoveYouPage.css
│   ├── styles/
│   │   ├── index.css
│   │   └── App.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## 🎨 Paleta de Colores

- **Morado Pastel**: #E6D5F5, #D4B5F0, #C8A5E8
- **Rosa Pastel**: #FFD6E8, #FFC4DD, #FFB3D1
- **Lavanda**: #E8D8F0, #DCC9E8
- **Crema**: #FFFEF9, #FFF9F5

## 💡 Tips

- Los botones tienen formas orgánicas (no rectangulares) para un diseño único
- Las animaciones se activan con scroll en la página de razones
- Los corazones flotantes son sutiles y no distraen del contenido
- El diseño es completamente responsivo

## 🛠️ Tecnologías

- **React 18** - Framework principal
- **Vite** - Build tool rápido
- **Lucide React** - Iconos elegantes
- **CSS Modules** - Estilos personalizados
- **Google Fonts** - Playfair Display & Quicksand

## 💝 Creado con Amor

Esta aplicación fue diseñada para expresar amor de una manera única y personal. 
¡Disfrútala y personalízala para tu ser querido!

---

**Nota**: Recuerda personalizar todo el contenido antes de compartir la aplicación.
