# ECHOES — Experiencia inmersiva WebAR

**ECHOES v0.4** es un prototipo académico que transforma el sonido en una representación visual interactiva y permite explorar, mediante simulaciones, cómo podrían influir el tiempo y diversas medidas preventivas en la exposición acústica.

**Abrir:** https://brunososal.github.io/echoes-webar/

**Probar RA espacial (beta):** https://brunososal.github.io/echoes-webar/ar.html

## Experiencia actual

La interfaz ocupa la pantalla disponible y se maneja como una aplicación móvil. Su escenario es el centro de la experiencia; los controles aparecen como cinco widgets flotantes.

- **Escenas:** CNC, oficina y calle, con ilustraciones inmersivas.
- **Protección:** cabina o puerta, barreras, distancia, y EPP auditivo en CNC.
- **Tiempo:** exposición hipotética y huella visual relativa.
- **Efectos:** fichas de pérdida auditiva, acúfenos, fatiga y comunicación.
- **Audio:** micrófono real para animar ondas o intensidad simulada para demostración.

El botón **RA espacial** abre `/ar.html`, una prueba de seguimiento espacial sin Hiro mediante el motor 8th Wall Engine Binary (SLAM). Se genera un campo acústico virtual en el espacio y el botón **Reubicar** permite recentrar el campo. Debe probarse en Safari de un iPhone físico: la publicación y la verificación de sintaxis no equivalen a validar su seguimiento. No identifica la fuente real del ruido ni mide propagación acústica.

## En iPhone

Abre la URL HTTPS directamente en Safari. Para que se vea como una app independiente, puedes usar **Compartir → Añadir a pantalla de inicio** (cuando Safari ofrezca esa opción). No se requiere descargar una app desde la tienda ni adquirir micrófonos.

Permite cámara y micrófono solamente cuando el navegador lo solicite. La visualización y los controles simulados funcionan sin conceder permisos. El audio se procesa localmente: no se graba ni se envía a servidor.

## Limitaciones

No es un sonómetro ni un dosímetro; no mide dBA con precisión normativa, no diagnostica daño auditivo, no identifica fuentes sonoras y no predice efectos médicos. La "huella" es un **indicador educativo relativo sin unidad física**, no una dosis certificada. El EPP cambia conceptualmente la exposición del receptor, no la emisión ambiental.

Las ilustraciones y el modo cámara requieren pruebas en iPhone real para caracterizar rendimiento y permisos. Nunca utilices el celular durante la operación de una máquina o caminando entre vehículos.

## Historia

- v0.3: primer demo con controles y WebAR mediante Hiro.
- v0.4: rediseño completo a interfaz inmersiva móvil con widgets y tres ilustraciones.
- v0.5 (experimental): RA espacial mediante SLAM, campo de ondas 3D anclado sin Hiro y widgets de controles educativos. Se necesita validar el seguimiento en iPhone.

[Marcador Hiro (legado opcional)](https://brunososal.github.io/echoes-webar/marker.html). Ya no es necesario para la experiencia principal.

## Motor AR espacial

El modo espacial emplea el motor 8th Wall Engine Binary y three.js de acuerdo con la [licencia del motor](https://github.com/8thwall/engine/blob/main/LICENSE). El código de aplicación y los efectos 3D son propios de este prototipo; el motor SLAM es un binario externo bajo licencia de uso limitado. La RA depende de recursos CDN y permisos del navegador. Safari iOS no expone todavía WebXR inmersivo de forma general; la experiencia utiliza el motor de seguimiento del video directamente.


## v0.6 (beta) — Laboratorio espacial

- **Abrir laboratorio:** https://brunososal.github.io/echoes-webar/lab.html
- **Prototipo RA anterior v0.5:** https://brunososal.github.io/echoes-webar/ar.html

La nueva versión incorpora:
1. Selección manual de una fuente sonora virtual tocando la imagen en modo de ubicación. El sistema proyecta un rayo sobre un plano virtual de referencia Y=0 o usa una posición frontal de respaldo; **no detecta superficies físicas ni fuentes de ruido de manera automática**.
2. Barrera acústica virtual anclada en el mundo, colocada entre fuente y teléfono al activarla. La representación no modela reflexiones o atenuación real.
3. Indicador de huella educativa que combina un valor de contexto hipotético, duración, EPP y separación espacial relativa (sin calibración métrica/acústica).
4. Separación pedagógica entre emisión de la fuente y protección del receptor: el EPP no apaga las ondas que salen de la fuente.
5. Fichas de efectos posibles y misión de cinco tareas para evaluar comprensión conceptual.
6. Descarga opcional de bitácora anónima JSON con acciones y tiempos relativos. No guarda audio, imágenes ni coordenadas de la cámara.

### Prueba recomendada en iPhone

1. Abre el enlace del laboratorio en Safari y toca **Iniciar RA espacial**.
2. Cuando se vea el campo 3D, pulsa **Ubicar fuente** y toca el punto donde quieres el marcador virtual.
3. Abre **Control** para añadir la barrera y, en CNC, activar protección auditiva.
4. Muévete con cuidado para explorar la relación espacial; cambia el tiempo, consulta los efectos y resuelve la misión.
5. Descarga la bitácora de la sesión desde **Misión** si quieres conservarla para una prueba de usuario.

**Estado:** la lógica de los widgets y la sintaxis del JavaScript se comprobaron en el repositorio. El nuevo flujo completo de colocación por toque y evaluación espacial aún debe verificarse en un iPhone físico. La v0.5 permanece disponible como versión de referencia.

## v0.7 (beta) — Laboratorio auditivo en tiempo real

En [ECHOES Laboratorio RA + Audio](https://brunososal.github.io/echoes-webar/lab.html), el sexto widget **Escuchar** permite:

- Captar el micrófono (sin subir grabaciones), medir nivel digital **dBFS**, y animar las ondas 3D con esa señal real.
- Escuchar voluntariamente una versión limitada y procesada por audífonos, tras confirmar que están conectados y con volumen del sistema bajo. La salida está apagada por defecto.
- Comparar cuatro procesamientos: original a volumen bajo, suavizado por paso bajo, voz destacada, y sonido más apagado. Barrera virtual y EPP también atenúan la salida **procesada**, no la emisión ambiental ni la protección real.
- Ajustar un volumen interno conservador con un límite de ganancia digital. Hay botón de silencio inmediato y parada ante saturación digital; **esto no garantiza un nivel físico de escucha seguro**, que depende de los audífonos y el volumen del sistema.
- Opcionalmente introducir el nivel conocido de un **sonómetro externo** para obtener un número de dB aproximadamente referenciado desde un único punto. Es una aproximación sin ponderación A implementada, no un registro de dBA ni apto para cumplimiento de la NOM-011. Sin esa referencia, sólo se muestra dBFS.

### Importante sobre audífonos y ANC

La aplicación no puede saber de forma fiable si el audio está saliendo por los audífonos o por el altavoz. El usuario debe confirmar la conexión antes de activar la escucha; si cambia la salida o escucha pitidos, debe detenerla inmediatamente. Si utiliza AirPods u otros audífonos con **cancelación activa de ruido (ANC)**, deberá activarla o desactivarla mediante los propios audífonos o los controles del sistema: Safari **no puede conmutar ANC ni medir su efectividad**. La captura puede utilizar el micrófono del audífono en vez del iPhone, según las decisiones del sistema operativo, lo que limita comparaciones de condiciones.

**No utilizar para exponer a una persona a niveles peligrosos, operar maquinaria, sustituir protectores auditivos certificados, ni amplificar ruido de taller.** Probar sólo en un entorno silencioso o moderado, a volumen bajo y sin riesgos de seguridad. La representación espacial del sonido no es una predicción física del campo acústico.

Referencias de contexto sobre la calibración: [NIOSH Sound Level Meter App](https://www.cdc.gov/niosh/noise/about/app.html) y [Web Audio API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API).

**Validación pendiente:** comportamiento de entrada/salida Bluetooth, latencia, permisos de micrófono y cámara simultáneos, y respuesta de filtros en Safari iPhone real.
