---
name: adyac-landing-deploy
description: Mantén y despliega la landing page de Adyac. Usa esta skill cuando se soliciten cambios visuales o funcionales en la landing, verificaciones locales, commits, pushes a main o despliegues automáticos en Vercel.
---

# Adyac landing: desarrollo y despliegue

## Contexto

- Proyecto: `/home/fabian/src/adyac-landing-page`.
- Stack: Next.js 16, React 19, TypeScript y CSS global.
- UI principal: `src/app/page.tsx` y `src/app/globals.css`.
- El remoto GitHub es `origin` y la rama de producción es `main`.
- El despliegue de producción se activa automáticamente en Vercel al actualizar `origin/main`.

## Flujo obligatorio para cambios

1. Lee `AGENTS.md` y revisa `git status --short --branch` antes de editar.
2. Implementa sólo el alcance solicitado y conserva cambios ajenos del working tree.
3. Ejecuta `npm run lint` y `npm run build` desde la raíz del proyecto.
4. Revisa el diff con `git diff` y confirma que no entren `.next`, secretos, credenciales ni archivos temporales.
5. Crea un commit descriptivo y sube a `main` con `git push origin main`.
6. Informa el commit enviado y que Vercel queda encargado del despliegue. No afirmes que producción terminó hasta comprobarlo en Vercel o recibir su estado.

## Reglas de seguridad

- Nunca uses `git push --force`, `reset --hard` ni borres cambios del usuario.
- Si `main` avanzó en remoto, detente antes de sobrescribirlo y sincroniza de forma segura.
- No expongas valores de `.env*` ni los incluyas en commits.

## Criterios visuales

Mantén la identidad editorial de Adyac: composición amplia, tipografía sobria, contraste verde/negro/ácido, layouts horizontales en proyectos y animaciones suaves con soporte para `prefers-reduced-motion`.
