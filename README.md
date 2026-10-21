# Rutagram

Herramienta para vendedores de consumo masivo: clientes, seguimiento diario, equipos y liquidaciones.

## Estado
Starter inicial. Aún no está listo para manejar datos reales: autenticación, autorización, validaciones y pruebas de seguridad deben implementarse antes del piloto.

## Requisitos
- Node.js LTS
- Cuenta de Cloudflare (para desplegar)
- Repositorio GitHub: https://github.com/adnetworkgo/rutagram

## Ejecutar localmente
```bash
npm install
npm run dev
```
Abre la URL que muestre Vite (normalmente http://localhost:5173). La API de Worker se prueba por separado con `npm run dev:worker`.

## Compilar interfaz
```bash
npm run build
```

## Ejecutar Worker localmente
```bash
npm run dev:worker
```
Abre http://localhost:8787/api/health.

## Cloudflare
1. Crea un Worker llamado `rutagram` en tu cuenta.
2. Para usar D1, crea la base de datos y añade su `database_id` a `wrangler.jsonc` en el bloque comentado `d1_databases`.
3. Aplica las migraciones después de configurar el binding:
   `npx wrangler d1 migrations apply rutagram-db --local`
4. Cuando esté listo para publicar: `npm run deploy`.

No añadas contraseñas, tokens, claves privadas ni archivos `.env` al repositorio. No conectes datos de clientes reales hasta implementar autenticación y permisos.

## Estructura
- `src/ui/`: interfaz React.
- `src/worker/`: API Hono para Cloudflare Workers.
- `migrations/`: esquema inicial D1.
- `wrangler.jsonc`: configuración de Worker y assets.
