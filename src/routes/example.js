fastify.get('/user/:id', async (req, reply) => {
  const client = await fastify.pg.connect()
  try {
    const { rows } = await client.query('SELECT id, username, hash, salt FROM users WHERE id=$1', [req.params.id])
    // Note: avoid doing expensive computation here, this will block releasing the client
    return rows
  } finally {
    // Release the client immediately after query resolves, or upon error
    client.release()
  }
})
