export interface StepContent {
    type: 'paragraph' | 'code';
    content: string;
    language?: string;
}

export interface Step {
    title: string;
    content: StepContent[];
    platform?: 'android' | 'ios';
}

export const STEPS: Step[] = [
    {
        title: "Подготовка: Установка инструментов",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Для начала работы вам понадобится <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300">Android Studio</a>. Она установит все необходимые SDK и инструменты командной строки. Установите ее и создайте хотя бы один виртуальный эмулятор.' },
        ]
    },
    {
        title: "Подготовка: Установка Xcode",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'Установите <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300">Xcode</a> из App Store. Это основной инструмент для разработки под iOS.' },
        ]
    },
    {
        title: "Подготовка: Установка Xcode Command Line Tools",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'Теперь установите инструменты командной строки Xcode. Выполните в терминале:' },
            { type: 'code', content: 'xcode-select --install', language: 'bash' },
        ]
    },
    {
        title: "Подготовка: Установка CocoaPods",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'CocoaPods — это менеджер зависимостей для iOS проектов. Установите его командой:' },
            { type: 'code', content: 'sudo gem install cocoapods', language: 'bash' },
        ]
    },
    {
        title: "Шаг 1: Сборка веб-приложения",
        content: [
            { type: 'paragraph', content: 'Сначала необходимо собрать ваше веб-приложение в статичные файлы. Эта команда создаст папку `dist`.' },
            { type: 'code', content: 'npm run build', language: 'bash' },
        ]
    },
    {
        title: "Шаг 2: Установка Capacitor Core",
        content: [
            { type: 'paragraph', content: 'Добавьте ядро Capacitor в ваш проект.' },
            { type: 'code', content: 'npm install @capacitor/core', language: 'bash' },
        ]
    },
    {
        title: "Шаг 3: Установка Capacitor CLI",
        content: [
            { type: 'paragraph', content: 'CLI (Command Line Interface) — это инструмент для управления проектами Capacitor.' },
            { type: 'code', content: 'npm install @capacitor/cli --save-dev', language: 'bash' },
        ]
    },
    {
        title: "Шаг 4: Инициализация Capacitor",
        content: [
            { type: 'paragraph', content: 'Эта команда создаст конфигурационный файл `capacitor.config.ts`. Убедитесь, что в нем `webDir` указывает на `"dist"`.' },
            { type: 'code', content: 'npx cap init "MyAppName" "com.company.myapp"', language: 'bash' },
        ]
    },
    {
        title: "Шаг 5: Добавление платформы Android",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Создайте нативный проект Android в вашем приложении.' },
            { type: 'code', content: 'npx cap add android', language: 'bash' },
        ]
    },
    {
        title: "Шаг 5: Добавление платформы iOS",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'Создайте нативный проект iOS в вашем приложении.' },
            { type: 'code', content: 'npx cap add ios', language: 'bash' },
        ]
    },
    {
        title: "Шаг 6: Синхронизация веб-кода",
        content: [
            { type: 'paragraph', content: 'Скопируйте вашу веб-сборку (`dist`) в нативные проекты. Эту команду нужно выполнять после каждого `npm run build`.' },
            { type: 'code', content: 'npx cap sync', language: 'bash' },
        ]
    },
    {
        title: "Шаг 7: Запуск на эмуляторе с Live Reload",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Запустите приложение на Android эмуляторе. Флаг `-l --external` включает Live Reload для быстрой разработки.' },
            { type: 'code', content: 'npx cap run android -l --external', language: 'bash' },
        ]
    },
     {
        title: "Шаг 7: Запуск на симуляторе с Live Reload",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'Запустите приложение на iOS симуляторе. Флаг `-l --external` включает Live Reload для быстрой разработки.' },
            { type: 'code', content: 'npx cap run ios -l --external', language: 'bash' },
        ]
    },
    {
        title: "Шаг 8: Открытие проекта в Android Studio",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Для финальной сборки и публикации откройте нативный проект в Android Studio.' },
            { type: 'code', content: 'npx cap open android', language: 'bash' },
        ]
    },
    {
        title: "Шаг 8: Открытие проекта в Xcode",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'Для финальной сборки и публикации откройте нативный проект в Xcode.' },
            { type: 'code', content: 'npx cap open ios', language: 'bash' },
        ]
    },
    {
        title: "Шаг 9: Публикация в Google Play",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'В Android Studio используйте меню `Build > Generate Signed Bundle / APK...` для создания файла для публикации в Google Play.' },
        ]
    },
    {
        title: "Шаг 9: Публикация в App Store",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'В Xcode сначала укажите вашу команду разработчика (Signing & Capabilities), а затем используйте меню `Product > Archive` для создания сборки для App Store.' },
        ]
    }
];
