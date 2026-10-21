# Seguridad y privacidad: decisiones iniciales

- No subir datos reales, credenciales, tokens ni secretos al repositorio.
- Separar todos los datos por `workspace_id`.
- Toda ruta de lectura o escritura debe autenticar al usuario y verificar sus permisos en servidor.
- No considerar que un identificador difícil de adivinar sustituye autorización.
- Mantener documentos privados; no guardar adjuntos innecesarios.
- No registrar contraseñas, tokens, contenido de facturas ni documentos en logs.
- El esquema SQL es solo la base: no desplegar con usuarios reales hasta implementar autenticación, autorización, validación, límites y pruebas de acceso entre espacios.
- Las métricas para el proveedor deben minimizarse y agregarse; no incluir nombres de clientes finales ni montos de facturas.
