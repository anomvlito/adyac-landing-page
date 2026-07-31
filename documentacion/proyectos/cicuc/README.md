# Documentación del proyecto CICUC

Documentos comerciales y de validación preparados por ADYAC para el proyecto
de plataforma de gestión de estudios clínicos oncológicos CICUC.

## Estructura

```text
cotizaciones/
├── Paquete-Cotizacion-ADYAC-CICUC-2026-001.pdf
├── Cotizacion-ADYAC-CICUC-2026-001.tex
├── Cotizacion-ADYAC-CICUC-2026-001.pdf
├── Anexos-ADYAC-CICUC-2026-001.tex
├── Anexos-ADYAC-CICUC-2026-001.pdf
├── Anexo-A-Alcance-Hitos-Aceptacion.md
├── Anexo-B-Tratamiento-Datos.md
└── Anexo-C-Propiedad-Intelectual-Seguridad-Continuidad.md

validacion-contraparte/
├── Validacion-Contraparte-CICUC.tex
└── Validacion-Contraparte-CICUC.pdf
```

Los PDF son las versiones de presentación aprobadas visualmente. Los archivos
LaTeX contienen la versión textual completa y editable de cada documento.

El archivo `Paquete-Cotizacion-ADYAC-CICUC-2026-001.pdf` es la versión que debe
enviarse a revisión: integra la cotización y sus tres anexos en un único PDF.
Los documentos son borradores contractuales y requieren revisión jurídica antes
de firma, orden de compra o tratamiento de datos personales reales.

## Compilación de LaTeX

Requiere XeLaTeX y la tipografía Inter:

```bash
xelatex Cotizacion-ADYAC-CICUC-2026-001.tex
xelatex Validacion-Contraparte-CICUC.tex
```

No deben incorporarse a esta carpeta protocolos confidenciales, documentos
clínicos ni datos personales de pacientes.
