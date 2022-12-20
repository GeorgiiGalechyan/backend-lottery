## **Задачи на ближайшее время**

### **Логирование**

**Инструменты:**

- [@fastify/one-line-logger](https://github.com/fastify/one-line-logger) - По сути это надстройка над pino-pretty. Форматирует журнал fastify в красивое однострочное сообщение:

```
// YYYY-MM-dd HH:mm:ss.SSSTZ - <level> - <method> <route path> - <message>

// 2022-08-11 01:08:02.194+0100 - info - GET / - incoming request
```

- [@mgcrea/fastify-request-logger](https://github.com/mgcrea/fastify-request-logger) - Плагин для логирования запросов для fastify .
- [cls-rtracer](https://github.com/puzpuzpuz/cls-rtracer) - Плагин для генерации идентификаторов запросов на основе CLS.

### **Авторизация**

**Инструменты:**

- [@fastify/auth](https://github.com/fastify/fastify-auth) - Очень быстрая утилита для обработки аутентификации (и нескольких стратегий) в маршрутах. **_Не предоставляет стратегии аутентификации_**.
- [fastify-basic-auth](https://github.com/fastify/fastify-basic-auth) - Простой базовый плагин аутентификации. Декорирует экземпляр fastify функцией basicAuth, которую можно использовать внутри любого хука перед обработчиком маршрута или с помощью `@fastify/auth`.
- [@fastify/oauth2](https://github.com/fastify/fastify-oauth2) - Обертка вокруг библиотеки [simple-oauth2](https://github.com/lelylan/simple-oauth2). OAuth 2.0 - это стандартный протокол авторизации, позволяющий сторонним приложениям получать ограниченный доступ к HTTP-сервису либо от имени владельца ресурса, либо позволяя стороннему приложению получать доступ от своего имени.
- [@fastify/jwt](https://github.com/fastify/fastify-jwt) - Утилиты JWT для Fastify, внутри используется [fast-jwt]().
- [fastify-auth0-verify](https://github.com/nearform/fastify-auth0-verify) - Auth0 плагин верификации дляr Fastify, внутри использует [@fastify/jwt](https://github.com/fastify/fastify-jwt).
- [@fastify/secure-session](https://github.com/fastify/fastify-secure-session) - Создает безопасную cookie-сессию без статических данных для Fastify, основанную на [шифровании блока секретных ключей](https://github.com/sodium-friends/sodium-native#secret-key-box-encryption) libsodium и [@fastify/cookie](https://github.com/fastify/fastify-cookie).
- [@fastify/session](https://github.com/fastify/session) - Плагин сессий для fastify. Требуется плагин [@fastify/cookie](https://github.com/fastify/fastify-cookie).

### Нормальное подключеничеи настройка БД

### Routes
