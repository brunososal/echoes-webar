# ECHOES — Visualización del ruido con WebAR

**ECHOES** es un prototipo académico de una experiencia educativa de realidad aumentada para explorar la exposición al ruido y las medidas preventivas. Funciona en el navegador de un teléfono inteligente, sin sensores externos.

## Abrir

- **Experiencia:** https://brunososal.github.io/echoes-webar/
- **Marcador Hiro:** https://brunososal.github.io/echoes-webar/marker.html

## Cómo probar

1. Abre la experiencia en Safari o Chrome. Para cámara y micrófono utiliza la URL HTTPS de GitHub Pages.
2. El modo **Demo** es interactivo sin permisos y permite cambiar entre CNC, oficina y calle, ajustar barreras, distancias, duración y protección.
3. Pulsa **Activar micrófono** para que las ondas respondan al audio del entorno. Es una señal relativa, no dBA.
4. Para **WebAR**, abre o imprime el marcador Hiro desde una segunda pantalla. Pulsa WebAR, autoriza la cámara y enfoca el marcador.

## Limitaciones

El proyecto no es sonómetro ni dosímetro. No identifica la dirección o la fuente física del ruido. Los efectos, cambios de condiciones, tiempo y controles son representaciones educativas que no estiman un nivel de exposición real ni predicen daño médico. No utiliza grabaciones de audio ni las envía a un servidor. La AR necesita prueba en iPhone real, iluminación y navegador compatible.

## Tecnología

HTML, CSS y JavaScript; Canvas 2D; Web Audio API; AR.js y A-Frame cargados sólo en el modo WebAR. Los recursos de AR.js y del marcador Hiro se obtienen de servidores públicos.

## Seguridad

No uses la experiencia mientras operas máquinas o caminas en zonas de tránsito. Las simulaciones se deben probar en un entorno seguro.
