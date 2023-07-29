// TRUNCATE - очищает таблицу и сбрасывает счётчики
// Нужно для очистки пользователем свой истрии и достижений
async function truncateTable(DB, tableName) {
  try {
    await DB.transact(`TRUNCATE TABLE ${tableName};`)
    await app.log.info(`The table ${tableName} has been successfully truncated.`)
  } catch (e) {
    app.log.error(e)
  }
}

// DELETE - удаляет строку из БД
// Нужно для удаления пользователем своего профиля
async function deleteTableRow(DB, tableName, key = 'id', value) {
  try {
    await DB.transact(`DELETE FROM ${tableName} WHERE ${key} = ${value}
    RETURNING *;`)
    await app.log.info()
  } catch (e) {
    app.log.error(e)
  }
}
