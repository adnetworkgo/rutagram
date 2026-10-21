import { Hono } from 'hono';

type Bindings = {
  // Añadiremos DB: D1Database cuando configuremos D1.
};

const app = new Hono<{ Bindings: Bindings }>();

app.get('/api/health', (c) => c.json({
  app: 'Rutagram',
  status: 'ok',
  version: '0.1.0',
  note: 'Starter técnico; aún no procesa datos de clientes.',
}));

app.notFound((c) => {
  if (c.req.path.startsWith('/api/')) {
    return c.json({ error: 'Ruta API no encontrada' }, 404);
  }
  return c.text('No encontrado', 404);
});

export default app;
