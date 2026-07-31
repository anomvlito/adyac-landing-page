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

### Mes 2 — Desarrollo de MVP funcional básico y validación con usuarios

- autenticación y autorización;
- inventario y ciclo de vida de estudios;
- criterios de aceptación, selección y manejo de candidatos;
- pruebas continuas y validación con usuarios.

### Mes 3 — Puesta en marcha y beta testing

- historias de usuario incluidas en la línea base aprobada;
- indicadores, alertas y trazabilidad acordados;
- beta testing y pruebas de aceptación;
- correcciones, documentación y capacitación;
- puesta en marcha y entrega.

La gestión del proyecto seguirá principios compatibles con PMBOK 7, adaptados a
un desarrollo iterativo con entregas demostrables.

## 6. Precio y forma de pago

| Concepto | Cantidad | Valor mensual neto | Total neto |
|---|---:|---:|---:|
| Servicio mensual de desarrollo e implementación | 3 meses | $3.000.000 CLP | $9.000.000 CLP |
| IVA |  |  | $1.710.000 CLP |
| **Total con IVA** |  |  | **$10.710.000 CLP** |

- Facturación y pago: mensual.
- Valor mensual con IVA: **$3.570.000 CLP**.
- Condición de pago propuesta: dentro de 15 días corridos desde la emisión del
  documento tributario correspondiente.
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

## 8. Propiedad intelectual

CICUC será titular de los entregables desarrollados específicamente para el
proyecto y pagados íntegramente, incluyendo código específico, configuración,
documentación y modelo de datos propio del producto, sin perjuicio de derechos de
terceros.

Adyac conservará la titularidad de herramientas preexistentes y componentes
genéricos reutilizables —incluidos métodos, bibliotecas, infraestructura,
plantillas y algoritmos generales de machine learning— que no incorporen datos
confidenciales ni reglas exclusivas de CICUC. Cuando estos componentes estén
embebidos en el producto, Adyac otorgará a CICUC una licencia perpetua,
irrevocable, mundial, libre de regalías y suficiente para usar, mantener y
modificar el sistema entregado.

Los modelos o artefactos entrenados exclusivamente con datos de CICUC, y los
derivados que permitan reconstruir información sensible, serán de CICUC y no
podrán reutilizarse por Adyac sin autorización expresa y escrita.

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

No se tratarán datos personales o clínicos reales hasta acordar controles,
responsabilidades, base jurídica, acceso, retención, respaldo y respuesta ante
incidentes. La infraestructura productiva, integraciones institucionales y
servicios de terceros se cotizarán cuando se conozcan sus requisitos.

## 11. Aceptación

La aceptación de esta cotización deberá constar por escrito y complementarse con
el contrato u orden de compra correspondiente.

| Por Adyac | Por CICUC |
|---|---|
| Investigación, Tecnología y Gestión ADYAC SpA | `[NOMBRE]` |
| `[CARGO]` | `[CARGO]` |
| Firma: ____________________ | Firma: ____________________ |
| Fecha: ____________________ | Fecha: ____________________ |
