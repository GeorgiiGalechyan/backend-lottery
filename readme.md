## Problematics

When working with Postgres, in particular, when trying to add a new "user" to the "users" table, the application tries to connect to local Postgres instead of remote Postgres. At the same time, the local Postgres does not exist.

Possible reasons:

1. Postgres does not see .env variables due to the order in which plugins are loaded;
2. Postgres does not see .env variables due to different scopes;
3. The connection string data is not passed to Postgres correctly;
4. I basically wrote the plugin function incorrectly.

## Проблематика

При работе с Postgres, в частности, при попытке добавить в таблицу "users" нового "user", приложение вместо удаленного Postgres пытается подключиться к локальному. При этом, локального Postgres не существует.

Возможные причины:

1. Postgres не видит переменные .env из-за порядка загрузки плагинов
2. Postgres не видит переменные .env из-за разных областей видимости.
3. В Postgres не правильным образом переданы данные строки подключения;
4. Я в принципе неправильно написал функцию-плагин.

### Error object / Объект ошибки

```javascript
INFO [2023-08-19 08:04:40 UTC]: incoming request
    reqId: "req-1"
    req: {
      "method": "POST",
      "url": "/user/",
      "hostname": "localhost:5500",
      "remoteAddress": "::1",
      "remotePort": 60533
    }

ERROR [2023-08-19 08:04:40 UTC]: connect ECONNREFUSED ::1:5432
    reqId: "req-1"
    err: {
      "type": "Error",
      "message": "connect ECONNREFUSED ::1:5432",
      "stack":
          Error: connect ECONNREFUSED ::1:5432
              at TCPConnectWrap.afterConnect [as oncomplete] (node:net:1494:16)
      "errno": -4078,
      "code": "ECONNREFUSED",
      "syscall": "connect",
      "address": "::1",
      "port": 5432
    }
```

## Problem solution

The error occurred for the following reasons:

1. Incorrect writing of plugins.
2. Misunderstanding of scopes when registering plugins.

Actions Taken:

1. Reread the documentation, rewrote the plugins.
2. When registering @fastify/env and @fastify/postgres plugins via `register` API, I used 'fastify-plugin'.

P.S. In some places, I made edits to make the code more concise.

## Решение проблемы

Ошибка возникала по следующим причинам:

1. Неправильное написание плагинов.
2. Неправильное понимание областей видимости при регистрации плагинов.

Предпринятые действия:

1. Перечитал документацию, переписал плагины.
2. При регистрации плагинов @fastify/env и @fastify/postgres через API `register` использовал 'fastify-plugin'.

P.S. В некоторых местах внёс правки, чтобы сделать код более лаконичным.
