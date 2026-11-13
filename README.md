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

## v0.8 (beta) — Referencia del sonómetro del usuario (13 nov 2026)

El usuario comparó el mismo ambiente y observó aproximadamente **−44 a −45 dBFS** en ECHOES frente a **48–50 dB** en su sonómetro. Se toma el punto medio **−44.5 dBFS ↔ 49 dB** y se aplica una **corrección provisional de +93.5 dB** a la lectura digital del micrófono, únicamente como referencia didáctica.

Ejemplo: `−44.5 dBFS + 93.5 dB = 49.0 dB referenciados (aprox.)`.

La interfaz muestra simultáneamente el número referenciado y el valor original en dBFS; el usuario puede recalibrar durante otra sesión introduciendo una lectura externa, o volver al valor sin referencia. El offset no constituye una calibración multibanda, no aplica ponderación A ni valida un nivel dBA; no sirve para evaluaciones normativas o protección auditiva. El ajuste puede dejar de ser válido al cambiar de micrófono, usar AirPods como entrada o variar el procesamiento de audio del sistema. Para comparar, mantener ambos equipos próximos y en condiciones estables durante 15–30 segundos.

**Estado de validación:** código publicado y comprobación de sintaxis JavaScript realizada. La respuesta del indicador en Safari iPhone real todavía debe probarse después de estos cambios.

## v0.9 (beta) — Controles superpuestos y micrófono desde inicio

La experiencia `lab.html` se rediseñó como un entorno de RA con **acciones de un toque**: colocar fuente, alternar barrera, EPP (CNC), micrófono, cambiar escenarios y duración. Los widgets se abren como tarjetas compactas sobre la escena, no como paneles largos. Audio muestra un resumen de captura y filtros; la calibración queda detrás del control secundario «Calibración y detalles».

**Micrófono:** al tocar **Iniciar RA + micrófono**, el sitio intenta solicitar acceso y comenzar la captura como parte del arranque. Safari exige autorización de usuario la primera vez. Si no da permiso o la captura falla, la RA puede seguir con una visualización simulada. La escucha por audífonos **permanece apagada** hasta activar explícitamente «Escuchar» y confirmar audífonos y bajo volumen.

**Audífonos y detección:** `enumerateDevices()` permite inspeccionar lo que Safari decida exponer, pero **no asegura conocer la salida activa**. Puede mostrar «posible audífono», «audífono como entrada; salida no confirmada» o «salida no verificable». No se activa automáticamente la escucha a partir de esas pistas. Si se detecta un cambio de dispositivos durante la reproducción se silencia la ruta monitorizada por precaución. Una etiqueta reconocible de micrófono de audífonos invalida la referencia provisional aplicada para el micrófono del iPhone.

**Limitaciones y prueba:** se verificó sintaxis JS y que las acciones tengan sus manejadores en el código; falta validar permisos simultáneos de cámara/micrófono y el comportamiento de tarjetas y dispositivos en Safari del iPhone. Esta interfaz no detecta fuentes acústicas ni controla ANC.

## ECHOES 1.0 beta — Lente acústico (versión principal)

**Entrada:** https://brunososal.github.io/echoes-webar/  
**Experiencia:** https://brunososal.github.io/echoes-webar/lab.html

La experiencia actual deja atrás los widgets de escena CNC/oficina/calle, tiempo, barrera espacial y fuente virtual. Prioriza la **traducción visual del sonido captado** en una cámara real: realidad aumentada tipo superposición de video, **sin SLAM ni localización acústica**.

- Escala cromática discreta azul → verde → amarillo → rojo para **intensidad relativa de entrada digital**. No equivale a seguridad o daño, y no mide niveles normativos en dBA.
- Acciones principales **Ambiente**, **Intervenir** y **Escuchar**; evaluación pre/post optativa en **Evaluar**.
- Ruta de audio rediseñada: captura combinada de cámara/micrófono (fallback de micrófono si el permiso combinado falla), analizador RMS digital, ganancia de entrada, filtros pasa-altas/pasa-bajas, compresor, saturación suave y control de ganancia de salida. **Salida apagada por defecto**; se activa sólo por interacción directa y confirmación manual de audífonos conectados y volumen bajo.
- **Prueba de salida** con tono sinusoidal breve, accionada expresamente, para separar problemas de reproducción Bluetooth de captura. Volumen interno ajustable y botón visible «Silenciar» durante la reproducción.
- La señal ambiental original y su escala cromática **permanecen iguales** al activar una intervención. Sólo cambian el audio reproducido y una capa visual que representa lo que escucha el receptor; no se infiere una reducción acústica real.
- Cuatro preguntas de comprensión antes/después (optativas). Se puede exportar JSON local de opciones y respuestas sin audio, video ni coordenadas. No demuestra eficacia causal sin estudio comparativo.
- La referencia exploratoria +93.5 dB desde −44.5 dBFS ↔ 49 dB del sonómetro externo se conserva únicamente para diagnóstico; **no es validación dBA** y no determina la escala cromática. Se descarta la referencia si se reconoce un micrófono Bluetooth.

**Versiones históricas:** [RA espacial v0.9](./spatial-v0.9.html) y [simulación anterior](./legacy-home-v0.9.html).

**Pruebas pendientes:** permisos simultáneos de cámara y micrófono en Safari, ruta real Bluetooth, latencia y nivel de escucha. Safari no permite conocer siempre la salida de audio activa ni controlar ANC. Si no se oye el tono, revisar AirPlay/Bluetooth y volumen de iPhone; si el tono funciona pero el micrófono no, revisar permisos y dispositivo de captura. Detener al oír retroalimentación, pitidos o malestar.

**Estado:** actualizado en GitHub y comprobado sintácticamente; el nuevo audio no ha sido verificado en un iPhone con audífonos físicos.

## ECHOES 1.1 beta — Mayor sensibilidad visual, sólo dBFS (13 nov 2026)

- El lente principal (`lab.html`) **elimina la referencia de +93.5 dB** y usa únicamente **dBFS RMS nativos del flujo digital**. En el icono ⚙ se muestra el dBFS y el pico digital para diagnóstico; no se representa una medida de presión acústica calibrada ni un valor dBA.
- Transferencia visual estática y sensible de `−58 dBFS` (extremo frío) a `−22 dBFS` (extremo cálido). El color **no marca un umbral de salud**. Por ejemplo, el mismo teléfono a `−45 dBFS` se representaría alrededor de 0.36, mientras `−35 dBFS` rondaría 0.64 antes del refuerzo por transitorios. Estas cifras ilustran el mapeo del software, no niveles ambientales.
- Se añadió cálculo de pico para resaltar eventos breves de la señal; seguimiento visual con ataque aproximado de 55 ms y liberación de 380 ms, filtro de color más visible, ondas más intensas y densidad de partículas variable.
- No se modifica la ganancia ni se promete mejorar la sensibilidad física del micrófono: sólo su **traducción visual**. Si iOS aplica ganancia automática o limita la captura, la señal nativa podría variar menos con la distancia; se debe verificar en iPhone frente a una fuente estable a diferentes distancias.
- Se mantienen la separación entre ambiente captado y filtro perceptivo, la reproducción opcional con audífonos y la evaluación educativa.

## ECHOES v1.2 beta — Escala extendida y EPP virtual inmediato (13 nov 2026)

La vista principal en `lab.html` alarga la escala azul→rojo de 135 a 238 px en pantallas normales y de 94 a 158 px en pantallas cortas, amplía ligeramente la barra y el indicador blanco. En el lado opuesto aparece un **icono de oreja**, con un **tapón visual** cuando está activo; alterna con un toque entre la señal sin atenuación virtual y **EPP virtual**. No activa automáticamente la reproducción por audífonos: la salida sigue condicionada a confirmación de audífonos, volumen bajo y orden explícita «Escuchar». La atenuación virtual se aplica al filtro/gain de recepción únicamente y no cambia el nivel digital del micrófono ni la escala del entorno.

Se intensificaron las capas visuales conforme se aproxima al extremo cálido: tintes, densidad y tamaño de partículas, ondas y halo rojo periférico suave. La animación sigue el nivel **nativo en dBFS**, sin volver a introducir la conversión +93.5 dB. Los efectos rojos no son un indicador validado de peligro o de daño al oído; el usuario puede activar reducción de movimiento. Se aumentó el arreglo de partículas para evitar accesos inexistentes con la densidad mayor.

Pruebas realizadas en el código: sintaxis JavaScript, existencia y unicidad de ID de interfaz, manejador de pulsación de EPP y control de límite de cantidad de partículas. Pendiente de prueba en Safari/iPhone con entrada y audífonos reales.
