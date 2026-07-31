# Cotización comercial — Plataforma CICUC

**Documento:** ADYAC-COT-CICUC-2026-001  
**Fecha de emisión:** 31 de julio de 2026  
**Vigencia de la oferta:** 15 días corridos  
**Estado:** Borrador pendiente de completar datos tributarios y aceptación

## 1. Proveedor

- **Nombre comercial:** Adyac
- **Razón social:** Investigación, Tecnología y Gestión ADYAC SpA
- **RUT:** 78.329.959-3
- **Emisor:** ADYAC SpA
- **Correo:** hola@adyac.cl
- **Sitio web:** [https://www.adyac.cl/](https://www.adyac.cl/)
- **Domicilio:** `[COMPLETAR DOMICILIO TRIBUTARIO]`

## 2. Cliente

- **Institución solicitante:** Centro de Investigaciones Clínicas UC — CICUC,
  Facultad de Medicina
- **Razón social:** Pontificia Universidad Católica de Chile
- **RUT:** 81.698.900-0
- **Dirección institucional:** Av. Libertador Bernardo O'Higgins 340, Santiago
- **Dirección CICUC:** Portugal 61, Santiago
- **Contacto responsable:** `[COMPLETAR]`
- **Correo:** `[COMPLETAR]`

## 3. Objeto de la propuesta

Adyac propone diseñar, desarrollar, validar y poner en marcha una plataforma
web modular para la gestión centralizada de estudios clínicos oncológicos de
CICUC. La solución contará con APIs documentadas para facilitar la interacción
de los equipos clínicos y una interoperabilidad gradual con sistemas
institucionales expresamente autorizados. Deberá quedar operativa y no se
limitará a un prototipo visual.

El proyecto considera descubrimiento y levantamiento, definición de una línea
base aprobada de historias de usuario, desarrollo iterativo, pruebas,
documentación, capacitación y puesta en marcha.

## 4. Alcance inicial

La línea base funcional se consolidará y aprobará durante el levantamiento. Se
consideran inicialmente:

1. identificación de usuarios, centros, roles y permisos;
2. inventario centralizado y ciclo de vida de los estudios;
3. registro y actualización de protocolos, responsables y criterios;
4. criterios de aceptación, selección y manejo de candidatos, seguimiento;
5. gestión de cupos para estudios, listas de espera, exámenes previos y alertas;
6. panel de indicadores de reclutamiento, compromisos y actividad;
7. trazabilidad de acciones relevantes;
8. datos de demostración, documentación y guía de uso.

Las funciones de inteligencia artificial, procesamiento de voz, integración con
fichas clínicas y automatización de decisiones clínicas se evaluarán durante el
levantamiento. No se considerarán incorporadas a la línea base hasta que exista
una definición escrita de alcance, seguridad, privacidad y criterios de
aceptación.

La plataforma servirá como apoyo informativo y operativo. No determinará por sí
sola la elegibilidad clínica ni sustituirá el juicio profesional.

La interoperabilidad describe una capacidad de evolución del sistema. No
implica que el MVP incluya integración con ficha clínica u otros sistemas que no
hayan sido definidos, autorizados y acordados por escrito.

## 5. Plan de trabajo

### Mes 1 — Levantamiento de información, requerimientos y flujo de procesos/arquitectura

- levantamiento y validación de procesos;
- consolidación de requisitos e historias de usuario;
- definición de arquitectura, modelo de datos y permisos;
- priorización y aprobación de la línea base;
- definición del flujo de procesos y la arquitectura inicial.

### Mes 2 — Desarrollo del incremento intermedio del MVP y validación con usuarios

- autenticación y autorización;
- inventario y ciclo de vida de estudios;
- criterios de aceptación, selección y manejo de candidatos;
- pruebas continuas y validación con usuarios.

### Mes 3 — Entrega del producto operativo, puesta en marcha y marcha blanca

- historias de usuario incluidas en la línea base aprobada;
- indicadores, alertas y trazabilidad acordados;
- marcha blanca y pruebas de aceptación;
- correcciones, documentación y capacitación;
- puesta en marcha y entrega.

El MVP del mes 2 es un incremento intermedio; la entrega comprometida al cierre
del mes 3 es el producto operativo definido por la línea base aprobada.

La gestión del proyecto seguirá principios compatibles con PMBOK 7, adaptados a
un desarrollo iterativo con entregas demostrables.

## 6. Precio y forma de pago

| Concepto | Cantidad | Valor mensual neto | Total neto |
|---|---:|---:|---:|
| Desarrollo e implementación por hitos | 3 hitos | $3.000.000 CLP netos | $9.000.000 CLP netos |
| Bolsa de infraestructura AWS para desarrollo (cargo CICUC) | 1 bolsa | USD 500 | USD 500 |
| IVA |  |  | $1.710.000 CLP |
| **Total con IVA** |  |  | **$10.710.000 CLP** |

Adicionalmente, CICUC dispondrá de una bolsa de **USD 500 para servicios AWS
durante el desarrollo**. Este monto corresponde a costos de infraestructura del
proyecto, es de cargo de CICUC y no forma parte del precio de ADYAC ni del total
en pesos indicado arriba. La contratación, cuenta y forma de pago de AWS deberán
ser definidas por CICUC. Cualquier ampliación de esta bolsa requerirá autorización
escrita de CICUC antes de incurrir en el gasto.

- Tres cuotas de **$3.570.000 CLP IVA incluido**, facturadas contra la aceptación
  escrita de los hitos correspondientes a los meses 1, 2 y 3.
- El pago deberá efectuarse dentro de 15 días corridos desde la emisión del
  documento tributario respectivo.
- Inicio estimado: sujeto a aceptación, disponibilidad de antecedentes y
  formalización administrativa.

Podrá acordarse por escrito una extensión de hasta un mes frente a contingencias.
La extensión no se presume gratuita: plazo, alcance y contraprestación deberán
ser negociados y aprobados por ambas partes antes de iniciarla.

## 7. Entregables y aceptación

- repositorios y código fuente del producto;
- aplicación web operativa en el ambiente acordado;
- base de datos y migraciones reproducibles;
- pruebas correspondientes al alcance;
- documentación técnica, operativa y de usuario;
- capacitación inicial;
- registro de historias de usuario y evidencia de aceptación.

Cada incremento se revisará contra criterios de aceptación escritos. El cierre
requiere una prueba de aceptación de la línea base aprobada. Las observaciones
deberán identificar el requisito o criterio incumplido.

CICUC dispondrá de 5 días hábiles para revisar cada entrega. La aceptación debe
constar por escrito y el silencio no constituye aceptación. El procedimiento
completo se encuentra en el Anexo A.

## 8. Propiedad intelectual

Adyac entregará a CICUC el código fuente, documentación y configuraciones
desarrolladas específicamente y pagadas en virtud del proyecto, cediendo los
derechos patrimoniales correspondientes en los términos del Anexo C. CICUC podrá
usar, reproducir, adaptar y modificar estos entregables internamente o mediante
otro proveedor para fines institucionales.

Adyac conservará la titularidad de herramientas y componentes preexistentes o
desarrollados independientemente, que deberán identificarse antes de su uso.
Cuando sean indispensables para operar o mantener el producto, otorgará a CICUC
una licencia perpetua, irrevocable, mundial y libre de regalías, suficiente para
operar, mantener y modificar el sistema, conforme al Anexo C. No se incluyen
componentes de machine learning en el alcance inicial.

Esta cláusula debe incorporarse al contrato definitivo y ser revisada por las
partes antes de su firma.

## 9. Control de cambios

La expresión “historias de usuario faltantes” se entenderá limitada a las
historias incluidas en la línea base aprobada al finalizar el levantamiento.
Cualquier requisito nuevo o cambio material deberá registrar impacto en plazo,
costo, seguridad y pruebas, y requerirá aprobación escrita antes de su
implementación.

## 10. Supuestos, responsabilidades y exclusiones

CICUC designará responsables disponibles para validar procesos, contenidos y
entregas, y proporcionará oportunamente documentación y datos ficticios o
debidamente autorizados.

No se tratarán datos personales o clínicos reales hasta que el Anexo B haya sido
aprobado y las medidas técnicas, organizativas y de seguridad allí establecidas
se encuentren implementadas y verificadas. Durante desarrollo y pruebas se
utilizarán preferentemente datos sintéticos o correctamente anonimizados. La
infraestructura productiva, integraciones institucionales y servicios de terceros
se cotizarán cuando se conozcan sus requisitos.

No se incluyen costos de infraestructura cloud que excedan la bolsa AWS de USD
500 indicada en la sección 6, licencias de terceros, integraciones no identificadas
en el Anexo A, soporte adicional al incluido en el Anexo A ni operación 24/7.

## 11. Aceptación

La aceptación deberá constar por escrito y comprender conjuntamente esta
cotización y los Anexos A, B y C, versión 1.0 de 31 de julio de 2026. La persona
que acepte por cada parte deberá contar con facultades suficientes. Una orden de
compra debe identificar expresamente los cuatro documentos.

| Por Adyac | Por CICUC |
|---|---|
| Investigación, Tecnología y Gestión ADYAC SpA | `[NOMBRE]` |
| `[CARGO]` | `[CARGO]` |
| Firma: ____________________ | Firma: ____________________ |
| Fecha: ____________________ | Fecha: ____________________ |
