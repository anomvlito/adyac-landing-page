# Adyac

Sitio institucional de Adyac, consultora chilena de tecnología aplicada,
modelación e ingeniería de producto.

## Desarrollo local

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev
```

El sitio queda disponible en [http://localhost:3000](http://localhost:3000).

## Verificación

```bash
npm run lint
npx tsc --noEmit --incremental false
npm run build
npm audit --omit=dev
```

## Despliegue

El proyecto está preparado para despliegue automático en Vercel desde la rama
`main`. El dominio canónico es `adyac.cl`; `www.adyac.cl` debe redirigir al
dominio principal.

No requiere variables de entorno para la versión actual.
