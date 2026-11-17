# ECHOES v2.0 — Justificación del producto y ruta de validación

> Documento de diseño e investigación en desarrollo. Complemento de «ECHOES — Metodología de investigación, partes 1 y 2», fechado el 6 de noviembre de 2026. No constituye dictamen del docente, protocolo aprobado ni resultados con personas.

**Proyecto:** ECHOES — hacer visible el ruido.  
**Disciplina:** Maestría en Diseño Industrial, campo Tecnología, UNAM.  
**Aplicación principal:** [Lente sobre cámara](./lab.html).  
**Comparador:** [Panel informativo 2D](./lab.html?mode=control).  
**Versión preservada:** [Lente v1.3](./lens-v1.3.html).

## 0. Decisión de diseño

La primera propuesta empleaba escenas tridimensionales, objetos virtuales, controles de barrera, tiempo y situaciones CNC/oficina/calle. El prototipo v2.0 conserva el problema y la pregunta de diseño, pero **reduce la metáfora espacial no verificable** y se concentra en un experimento educativo situado:

1. **Percibir:** el audio captado con el micrófono origina una representación reactiva visible.
2. **Distinguir:** una intervención virtual sobre el receptor modifica la representación y el sonido reproducido (optativo), sin modificar el dato ambiental de entrada.
3. **Decidir:** ante un caso breve, escoger medidas que actúan en **fuente, trayectoria o receptor**, y discutir el papel de la duración.

No se usa reconocimiento de fuentes ni se atribuyen niveles independientes a máquinas observadas. La versión principal usa **superposición visual en cámara** y **no usa anclaje espacial 3D**. El desarrollo espacial previo se conserva sólo como antecedente tecnológico.

## 1. Continuidad con la investigación inicial

La pregunta del documento 1–2 sigue vigente en esencia: ¿una representación intermodal e interactiva ayuda a comprender el riesgo acústico y a elegir medidas preventivas, frente a un recurso informativo 2D de contenido equivalente?

- **Objeto de estudio:** representación e interacción para comprender fenómenos acústicos invisibles y decisiones preventivas; **no** exactitud de un sonómetro ni tratamiento de alteraciones auditivas.
- **Población inicial propuesta:** adultos en formación o actividad de mecanizado CNC; extensión cotidiana posterior por validar. No se afirma que se haya reclutado o entrevistado a esta población.
- **Variable independiente principal:** modalidad: cámara con traducción sinestésica (A) frente a presentación informativa bidimensional con señal y gráfica digital (B).
- **Variable dependiente principal:** respuestas correctas a situaciones aplicadas sobre interpretación, fuente, receptor y duración. Instrumento actual **en fase de diseño**, sin validez de contenido ni sensibilidad demostradas.
- **Secundarias previstas:** justificaciones, errores, facilidad de uso, claridad y carga subjetiva; requieren instrumentos validados o adaptación fundamentada.
- **Hipótesis H1 exploratoria:** la modalidad intermodal podría producir mayor comprensión aplicada que la alternativa informativa 2D. H0: no se observaría diferencia. **No existen datos para aceptar o rechazar ninguna de las dos.**

La condición 2D es un **control tecnológico preliminar**, no una comparación experimental ya válida. Ambos recorridos presentan las mismas tres actividades y conceptos, pero deben verificarse equivalencia informativa, tiempos, instrucciones y dificultad antes de reclutar participantes.

## 2. PARTE 3 — Conceptualización de la experiencia

### 3.1 Propósito educativo
Distinguir entre *intensidad captada por el teléfono*, *exposición y riesgo auditivo* y *resultado de intervenciones reales o simuladas*. Se espera que el participante pueda explicar por qué un filtro digital no reduce el ruido emitido, seleccionar una acción en origen cuando es viable y reconocer que la duración importa.

### 3.2 Modalidad tecnológica: RA, RV o RM
Se elige una **superposición de gráficos reactivos a la cámara del entorno físico**, realizable en navegador móvil mediante getUserMedia y Web Audio. Es RA en sentido de superposición contextual, **no RA espacial con localización oclusión ni SLAM**. No se justifica RV: aislaría visualmente el entorno que se quiere observar. El modo informativo 2D ofrece una comparación y una alternativa ante fallas de cámara.

### 3.3 Papel del participante
El usuario es observador e investigador de su propio entorno: identifica un cambio perceptivo, contrasta la simulación auditiva y toma una decisión preventiva. No hay personaje ficticio ni avatar necesario; esta decisión se justifica por la naturaleza situada de la experiencia.

### 3.4 Contexto
Ambientes cotidianos **controlados y seguros**, con una fuente que pueda regularse sin molestia ni exposición elevada (p. ej., bocina a volumen bajo). El caso CNC se conserva como **contexto de formación en las preguntas y futura población de estudio**, no como requisito de usar la aplicación junto a maquinaria activa.

### 3.5 Matriz de interacción

| Acción del usuario | Evidencia disponible en v2.0 | Lo que puede enseñar | Lo que NO significa |
|---|---|---|---|
| Variar una fuente controlable | Movimiento de escala/gráfica y respuesta visual según dBFS | La señal captada cambia con las condiciones | No estima dBA, dosis, fuente o nivel de seguridad |
| Pulsar oreja con tapón | Activar filtro de la salida y representación del receptor | Diferencia entre ambiente y señal recibida **virtualmente** | No cambia la emisión ni sustituye EPP certificado |
| Pulsar «Comparar» (modo lente) | Distinción gráfica de capas | Interpretación de ambiente/receptor | No mide atenuación física |
| Resolver caso de bocina | Elección y retroalimentación | Control en origen vs salida digital; jerarquía de controles | No demuestra capacidad de intervenir todas las fuentes reales |
| Responder cuestionarios | Respuestas y tiempos locales, exportables | Explorar comprensión de conceptos | No equivale por sí solo a mejora causada por ECHOES |

### 3.6 Resultados observables
Respuestas a casos emparejados, tiempos, elección de medida preventiva, autoinforme de si la visualización fue perceptible, errores de interpretación y comentario libre opcional. No se genera puntuación de riesgo auditivo ni porcentaje de ruido eliminado.

## 3. PARTE 4 — Diseño narrativo

**Protagonista:** participante adulto. **Situación problemática:** el ruido forma parte del entorno pero su intensidad, propagación y exposición no son directamente visibles. **Motivación:** comprender qué ocurre y cuál sería una intervención apropiada.

**Escaleta narrativa y guion de interacción:**

1. **Apertura / diagnóstico.** El participante contesta cuatro casos breves (opcional; sin revelar respuestas). Se explican permisos y límites de la medición.
2. **Descubrimiento.** Encuentra una fuente controlable, observa una variación en color y partículas o en gráfica 2D. Puede registrar que no percibió diferencia.
3. **Contraste perceptivo.** Activa el EPP virtual mediante la oreja. Observa que la entrada digital permanece y puede escuchar con audífonos una salida filtrada optativa. En el lente puede comparar dos capas.
4. **Decisión contextual.** Frente a una bocina controlable, selecciona acción; recibe explicación de fuente, trayectoria y receptor.
5. **Cierre / evaluación.** Responde cuatro situaciones paralelas (no idénticas), recibe un resultado descriptivo y, si desea, exporta un JSON local con respuestas y reflexión.

**Storyboard textual:** [A] pantalla de permiso y objetivo → [B] cámara/escala y ondas o gráfica 2D → [C] oreja activada y comparación de receptor → [D] tarjeta de decisión → [E] evaluación y resultado. Los **storyboards dibujados** o capturas validadas en dispositivo real siguen pendientes.

**Game flow funcional:**

    Inicio
      ├── Exploración libre → cámara / panel 2D
      │                         └── Recorrido (sin pretest)
      └── Recorrido guiado → pretest opcional
                               ↓
                         Percibir cambio
                               ↓
                       Comparar receptor
                               ↓
                     Decidir en contexto
                               ↓
                            Postest
                               ↓
                        Resultado / JSON

No se incluyen diálogos ni personajes ficticios sólo para cumplir una plantilla de juego. Los conflictos son cognitivos: ¿qué mide el indicador?, ¿qué cambia realmente al activar un filtro?, ¿qué acción reduce el ruido?

## 4. PARTE 5 — Desarrollo visual y diseño de interacción

### 5.1 Estilo y accesibilidad
Fondo de cámara real, elementos translúcidos de bajo impacto visual, escala azul–verde–amarillo–rojo **sin códigos de seguridad** y movimiento de partículas/ondas. Texto y símbolos redundan la información cromática; el usuario puede reducir efectos visuales. Pendiente comprobar contraste, lectura con luz natural, sensibilidad visual y tamaño táctil con usuarios.

### 5.2 Concept art y variaciones
No se diseñan personajes antropomorfos. Las variaciones visuales relevantes son: nivel digital frío, nivel intermedio, nivel cálido y estado de EPP virtual. El análisis debe documentar los estados reales mediante capturas y describir el significado limitado de cada uno.

### 5.3 Escenarios / objetos
El escenario principal es **el propio entorno observado**. El objeto interactivo central es la oreja/EPP virtual. La escala cromática representa una transferencia de **dBFS digital a una posición relativa**; la salida de auriculares usa filtros de demostración. Las fuentes no se identifican ni localizan automáticamente.

### 5.4 Arquitectura de información
Inicio → consentimiento de permisos o recorrido → visor principal → control de escucha / recorrido → evaluación / exportación. Dos acciones persistentes en barra inferior: **Escuchar** y **Recorrido**; oreja como control directo. Se evita reintroducir múltiples botones de escena, tiempo o fuente virtual.

### 5.5 Wireframe funcional

    ┌──────────────────────────────┐
    │ ECHOES               ⚙      │
    │ estado del micrófono         │
    │                              │
    │  [oreja]        [escala]     │
    │                              │
    │     cámara y efectos         │
    │   o gráfica + dato 2D        │
    │                              │
    │  panel de recorrido si abre  │
    │                              │
    │ [ Escuchar ] [ Recorrido ]   │
    └──────────────────────────────┘

### 5.6 Mockups
El prototipo HTML funcional actual constituye un artefacto de mayor fidelidad que un mockup estático. Para la entrega a clase deben anexarse capturas reales de iPhone o Android y, si procede, mockups anotados; **no se declara que dichas capturas ya se hayan realizado**.

### 5.7 Controles y retroalimentación
Botón de oreja: estado normal / estado EPP virtual. Audio: autorización, nivel interno, tono de prueba y silencio. Recorrido: etapas con explicación, decisión, corrección y evaluación. Eventos de la sesión pueden exportarse localmente sin grabar audio o video.

## 5. Protocolo de evaluación propuesto (pendiente de aplicación)

1. Validar preguntas con expertos en seguridad acústica y pedagogía (claridad, claves y distractores), y realizar **pilotaje cognitivo** antes de comparar porcentajes.
2. Efectuar pruebas de usabilidad formativas con adultos pertinentes, observando permisos, nivel de comprensión, dificultad de control y si se confunde el color con un semáforo de seguridad.
3. Si existe autorización y factibilidad, comparar exploratoriamente las dos modalidades bajo condiciones acústicas e instrucciones similares; registrar experiencia previa, orden/condición, tareas, tiempo, errores y reflexiones. Propuesta inicial del documento 1–2: ~12–20 adultos, sin generalización poblacional. Tamaño y asignación deben justificarse en el protocolo formal.
4. Informar resultados individuales/descriptivos, no asumir causalidad ni superioridad de RA por el simple aumento de aciertos. La equivalencia entre cuestionarios A/B también está por validar.
5. Para medir riesgo real, utilizar procedimientos e instrumentos adecuados y las normas pertinentes; **nunca inferir dosis auditiva a partir de dBFS ni del color de ECHOES**.

### Restricciones de seguridad, ética y privacidad

- No probar con fuentes intensas ni con personas operando maquinaria, conduciendo o cruzando calles.
- La atenuación digital, el EPP virtual y la cancelación comercial de audífonos **no son prueba de protección certificada**. El usuario elige expresamente iniciar la escucha, siempre a volumen bajo.
- La recepción del audio no confirma en Safari qué salida Bluetooth está realmente seleccionada. La prueba de tono sólo verifica una posibilidad de reproducción.
- No se guardan grabaciones ni imágenes por diseño del prototipo actual; el JSON local contiene las opciones seleccionadas, tiempos, eventos y una **reflexión libre opcional**. Debe advertirse al participante que no incluya información personal en esa reflexión.
- Se requieren consentimiento e instrucciones de protección de datos antes de estudios con personas.

## 6. Verificación técnica y pendientes

**Confirmado en el código:** existen dos rutas visuales, modo de escucha optativo, EPP virtual, escala digital, recorrido de tres etapas, dos bancos de preguntas y exportación JSON local.

**Sin comprobar todavía en dispositivo en esta revisión:** rendimiento del visor, ruta real de audífonos en Safari, compatibilidad con modelos distintos, estabilidad de dBFS frente a distancia, comprensión por usuarios, equivalencia de interfaz 2D y lente, seguridad perceptiva de las animaciones. La validación sintáctica del código no equivale a estas pruebas.

**Pruebas de aceptación propuestas:** cambio de señal con fuente suave; misma lectura ambiental antes y después de EPP; salida silenciada hasta autorización; recorrido completo con y sin pretest; resultados JSON correctos; modo 2D sin solicitud de cámara; legibilidad y controles en un iPhone real.

---

**Criterio de siguiente iteración:** no añadir fuentes u objetos simulados ni nuevas animaciones hasta obtener evidencia de qué interacción mejora la comprensión. La prioridad es documentar una prueba funcional y un piloto con usuarios.
