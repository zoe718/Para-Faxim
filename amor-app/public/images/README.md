# 📸 Carpeta de Imágenes

## Cómo Agregar Tus Fotos

1. **Coloca tus imágenes aquí** en esta carpeta `/public/images/`

2. **Formatos recomendados:**
   - JPG/JPEG
   - PNG
   - WebP

3. **Nombres sugeridos para organizar:**
   - `encuentro.jpg` - Primera vez que se vieron
   - `primera-cita.jpg` - Su primera cita
   - `te-amo.jpg` - Primer "te amo"
   - `aventuras.jpg` - Viajes juntos
   - `cotidiano.jpg` - Momentos del día a día
   - `sueños.jpg` - Planes futuros
   - `siempre.jpg` - Su amor eterno

4. **Tamaño recomendado:**
   - Ancho: 800-1200px
   - Optimiza las imágenes para web para mejor rendimiento
   - Usa herramientas como TinyPNG o Squoosh.app

5. **Una vez que agregues tus fotos:**
   - Ve a `src/pages/OurStoryPage.jsx`
   - Descomenta las líneas de `image:` en cada slide
   - Actualiza con el nombre correcto de tu imagen
   
   Ejemplo:
   ```javascript
   {
     id: 1,
     title: "El Primer Encuentro",
     description: "...",
     emoji: "✨",
     image: "/images/encuentro.jpg"  // ← Descomenta esta línea
   }
   ```

## Nota
- Las imágenes se mostrarán en un contenedor de 500x300px
- Se adaptarán automáticamente manteniendo las proporciones
- No es necesario que tengan el tamaño exacto

¡Agrega tus fotos especiales y haz esta aplicación aún más personal! 💜
