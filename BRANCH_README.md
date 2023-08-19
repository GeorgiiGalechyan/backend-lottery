## Problematics / Проблематика

When working with Postgres, in particular, when trying to add a new "user" to the "users" table, the application tries to connect to local Postgres instead of remote Postgres. At the same time, the local Postgres does not exist.

Possible reasons:

1. Postgres does not see .env variables due to the order in which plugins are loaded;
2. Postgres does not see .env variables due to different scopes;
3. The connection string data is not passed to Postgres correctly;
4. I basically wrote the plugin function incorrectly.

## Problematics / Проблематика

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
