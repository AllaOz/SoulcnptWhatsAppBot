# WhatsApp Bot на Next.js

WhatsApp бот, готовый к деплою на Vercel.

## 🚀 Быстрый старт

### Локальная разработка

1. Установите зависимости:
```bash
npm install
```

2. Создайте файл `.env.local` с переменными окружения:
```env
WHATSAPP_VERIFY_TOKEN=your_verify_token_here
WHATSAPP_WEBHOOK_SECRET=your_webhook_secret_here
WHATSAPP_PHONE_NUMBER_ID=your_phone_number_id_here
WHATSAPP_ACCESS_TOKEN=your_access_token_here
```

3. Запустите dev сервер:
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 📱 Настройка WhatsApp Business API

1. Создайте приложение на [Meta for Developers](https://developers.facebook.com/)
2. Добавьте продукт "WhatsApp"
3. Получите необходимые credentials:
   - **Phone Number ID**: из настроек WhatsApp
   - **Access Token**: временный или постоянный токен
   - **Verify Token**: любой строковый токен для верификации webhook
   - **Webhook Secret**: из настроек приложения

## 🔗 Настройка Webhook

После деплоя на Vercel:

1. Получите URL вашего webhook: `https://your-domain.vercel.app/api/webhook`
2. В настройках WhatsApp приложения добавьте webhook:
   - **Callback URL**: `https://your-domain.vercel.app/api/webhook`
   - **Verify Token**: тот же токен, что в `WHATSAPP_VERIFY_TOKEN`
   - **Subscription Fields**: выберите `messages`

## 🚢 Деплой на Vercel

### Через Vercel CLI:

```bash
npm i -g vercel
vercel
```

### Через GitHub:

1. Загрузите код в GitHub репозиторий
2. Перейдите на [Vercel](https://vercel.com/new)
3. Импортируйте ваш репозиторий
4. Добавьте переменные окружения в настройках проекта:
   - `WHATSAPP_VERIFY_TOKEN`
   - `WHATSAPP_WEBHOOK_SECRET`
   - `WHATSAPP_PHONE_NUMBER_ID`
   - `WHATSAPP_ACCESS_TOKEN`
5. Нажмите Deploy

### Настройка переменных окружения в Vercel:

1. Откройте проект в Vercel Dashboard
2. Перейдите в Settings → Environment Variables
3. Добавьте все необходимые переменные из `.env.local`
4. Передеплойте проект

## 📝 API Endpoints

### `GET /api/webhook`
Верификация webhook от WhatsApp (используется Meta при настройке webhook)

### `POST /api/webhook`
Принимает входящие сообщения от WhatsApp и отправляет ответы

## 🛠️ Кастомизация

Отредактируйте функцию `handleMessage` в `app/api/webhook/route.ts` для изменения логики бота.

## 📚 Ресурсы

- [Next.js Documentation](https://nextjs.org/docs)
- [WhatsApp Business API Documentation](https://developers.facebook.com/docs/whatsapp)
- [Vercel Deployment Guide](https://vercel.com/docs)
