# ECHOES — Experiencia inmersiva WebAR

**ECHOES v0.4** es un prototipo académico que transforma el sonido en una representación visual interactiva y permite explorar, mediante simulaciones, cómo podrían influir el tiempo y diversas medidas preventivas en la exposición acústica.

**Abrir:** https://brunososal.github.io/echoes-webar/

## Experiencia actual

La interfaz ocupa la pantalla disponible y se maneja como una aplicación móvil. Su escenario es el centro de la experiencia; los controles aparecen como cinco widgets flotantes.

- **Escenas:** CNC, oficina y calle, con ilustraciones inmersivas.
- **Protección:** cabina o puerta, barreras, distancia, y EPP auditivo en CNC.
- **Tiempo:** exposición hipotética y huella visual relativa.
- **Efectos:** fichas de pérdida auditiva, acúfenos, fatiga y comunicación.
- **Audio:** micrófono real para animar ondas o intensidad simulada para demostración.

El botón **Cámara** activa una vista real del entorno y superpone ondas visuales **sin marcador Hiro**. Al volver a **Simulación**, se muestran las escenas ilustradas. No es una localización acústica ni un mapa real de propagación.

## En iPhone

Abre la URL HTTPS directamente en Safari. Para que se vea como una app independiente, puedes usar **Compartir → Añadir a pantalla de inicio** (cuando Safari ofrezca esa opción). No se requiere descargar una app desde la tienda ni adquirir micrófonos.

Permite cámara y micrófono solamente cuando el navegador lo solicite. La visualización y los controles simulados funcionan sin conceder permisos. El audio se procesa localmente: no se graba ni se envía a servidor.

## Limitaciones

No es un sonómetro ni un dosímetro; no mide dBA con precisión normativa, no diagnostica daño auditivo, no identifica fuentes sonoras y no predice efectos médicos. La "huella" es un **indicador educativo relativo sin unidad física**, no una dosis certificada. El EPP cambia conceptualmente la exposición del receptor, no la emisión ambiental.

Las ilustraciones y el modo cámara requieren pruebas en iPhone real para caracterizar rendimiento y permisos. Nunca utilices el celular durante la operación de una máquina o caminando entre vehículos.

## Historia

- v0.3: primer demo con controles y WebAR mediante Hiro.
- v0.4: rediseño completo a interfaz inmersiva móvil con widgets, tres ilustraciones y cámara sin marcador.

[Marcador Hiro (legado opcional)](https://brunososal.github.io/echoes-webar/marker.html). Ya no es necesario para la experiencia principal.
