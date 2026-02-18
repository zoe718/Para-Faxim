# 🚀 Guía Rápida de Despliegue

## Opción 1: Despliegue Automático con Vercel + GitHub (RECOMENDADO)

### Requisitos
- Cuenta de GitHub (gratis)
- Cuenta de Vercel (gratis)

### Pasos:

#### 1. Sube el proyecto a GitHub

```bash
# 1. Abre la terminal en la carpeta del proyecto
cd ruta/a/amor-app

# 2. Inicializa git (si no lo has hecho)
git init

# 3. Agrega todos los archivos
git add .

# 4. Haz el primer commit
git commit -m "Primera versión de mi aplicación de amor"

# 5. Ve a GitHub.com y crea un nuevo repositorio
# - Dale un nombre (ej: "amor-app")
# - NO marques ninguna opción de inicialización

# 6. Conecta tu proyecto local con GitHub (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/amor-app.git

# 7. Sube tu código
git branch -M main
git push -u origin main
```

#### 2. Despliega en Vercel

1. **Ve a [vercel.com](https://vercel.com)**
2. **Click en "Sign Up"** y selecciona "Continue with GitHub"
3. **Autoriza Vercel** en tu cuenta de GitHub
4. **Click en "Add New..."** → "Project"
5. **Importa tu repositorio:**
   - Busca "amor-app" (o el nombre que le pusiste)
   - Click en "Import"
6. **Configuración (Vercel detecta automáticamente):**
   - Framework Preset: Vite ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
7. **Click en "Deploy"**
8. **¡Espera 1-2 minutos!** ⏳

### ✅ ¡Listo!

Tu aplicación estará disponible en una URL como:
```
https://amor-app-tuusuario.vercel.app
```

Vercel te dará una URL que puedes compartir inmediatamente.

---

## Opción 2: Despliegue Manual (Solo para Testing Local)

Si solo quieres probar localmente antes de desplegar:

```bash
# 1. Instala dependencias
npm install

# 2. Inicia servidor de desarrollo
npm run dev

# 3. Abre en el navegador
# http://localhost:5173
```

---

## 🔄 Actualizar tu Aplicación Desplegada

Cada vez que hagas cambios y quieras actualizar la versión en línea:

```bash
# 1. Guarda tus cambios
git add .
git commit -m "Descripción de los cambios que hiciste"

# 2. Sube a GitHub
git push

# 3. ¡Vercel automáticamente actualiza tu sitio! 🎉
```

---

## 🎨 Personalización ANTES de Desplegar

### ¡IMPORTANTE! Personaliza el contenido:

1. **Agrega tus fotos:**
   - Coloca imágenes en `/public/images/`
   - Edita `src/pages/OurStoryPage.jsx`
   - Descomenta y actualiza las rutas de imagen

2. **Edita los momentos de tu historia:**
   - Archivo: `src/pages/OurStoryPage.jsx`
   - Array: `storySlides`
   - Cambia títulos, descripciones, emojis

3. **Personaliza las razones:**
   - Archivo: `src/pages/WhyILoveYouPage.jsx`
   - Array: `reasons`
   - Agrega tus propias razones únicas

4. **Ajusta colores (opcional):**
   - Archivo: `src/styles/index.css`
   - Variables CSS en `:root`

---

## 🌐 Dominio Personalizado (Opcional)

Si quieres un dominio como `miamorperfecto.com`:

1. **Compra un dominio** (Namecheap, GoDaddy, etc.)
2. **En Vercel:**
   - Ve a tu proyecto
   - Settings → Domains
   - Agrega tu dominio personalizado
   - Sigue las instrucciones de DNS

---

## ⚡ Comandos Útiles

```bash
# Desarrollo local
npm run dev          # Inicia servidor de desarrollo

# Construir para producción
npm run build        # Crea versión optimizada

# Vista previa de producción local
npm run preview      # Ver cómo se verá en producción

# Git
git status           # Ver archivos modificados
git add .            # Agregar todos los cambios
git commit -m "msg"  # Guardar cambios
git push             # Subir a GitHub
```

---

## 🆘 Problemas Comunes

### Error: "command not found: npm"
**Solución:** Instala Node.js desde [nodejs.org](https://nodejs.org)

### Error al hacer `git push`
**Solución:** Asegúrate de haber configurado tu usuario de GitHub:
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### La aplicación no se ve bien en Vercel
**Solución:** 
- Verifica que todas las rutas de imágenes empiecen con `/` 
- Ejemplo: `/images/foto.jpg` ✅ (no `./images/foto.jpg` ❌)

---

## 💝 Notas Finales

- **GRATIS:** Vercel es 100% gratis para proyectos personales
- **RÁPIDO:** Los cambios se reflejan en 1-2 minutos
- **AUTOMÁTICO:** Solo haz `git push` y Vercel actualiza tu sitio
- **HTTPS:** Tu sitio tendrá certificado SSL automático

¡Tu aplicación de amor estará en línea y lista para compartir! 💜✨
