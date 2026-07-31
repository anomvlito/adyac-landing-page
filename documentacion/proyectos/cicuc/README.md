# Documentación del proyecto CICUC

Documentos comerciales y de validación preparados por ADYAC para el proyecto
de plataforma de gestión de estudios clínicos oncológicos CICUC.

## Estructura

```text
cotizaciones/
├── Cotizacion-ADYAC-CICUC-2026-001.tex
└── Cotizacion-ADYAC-CICUC-2026-001.pdf

validacion-contraparte/
├── Validacion-Contraparte-CICUC.tex
└── Validacion-Contraparte-CICUC.pdf
```

Los PDF son las versiones de presentación aprobadas visualmente. Los archivos
LaTeX contienen la versión textual completa y editable de cada documento.

## Compilación de LaTeX

Requiere XeLaTeX y la tipografía Inter:

```bash
xelatex Cotizacion-ADYAC-CICUC-2026-001.tex
xelatex Validacion-Contraparte-CICUC.tex
```

No deben incorporarse a esta carpeta protocolos confidenciales, documentos
clínicos ni datos personales de pacientes.
