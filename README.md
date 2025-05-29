# Gulp Project

Демонстрационный проект с использованием Gulp для автоматизации задач разработки.

## Возможности

- Компиляция SCSS в CSS
- Автоматическое обновление страницы (Live Reload)
- Добавление вендорных префиксов
- Минификация CSS
- Оптимизация и форматирование кода

## Установка

1. Убедитесь, что у вас установлен [Node.js](https://nodejs.org/)
2. Клонируйте репозиторий:
```bash
git clone [URL вашего репозитория]
```
3. Установите зависимости:
```bash
npm install
```

## Использование

### Запуск в режиме разработки
```bash
npm start
```
или
```bash
gulp
```

### Сборка проекта
```bash
npm run build
```
или
```bash
gulp build
```

## Структура проекта

```
project/
├── src/
│   ├── scss/
│   │   └── style.scss
│   └── index.html
├── dist/
│   ├── css/
│   │   └── style.css
│   └── index.html
├── gulpfile.js
├── package.json
└── README.md
```

## Технологии

- Gulp 4
- SCSS
- Browser-Sync
- Autoprefixer
- Clean CSS 