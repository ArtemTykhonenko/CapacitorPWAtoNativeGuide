export interface StepContent {
    type: 'paragraph' | 'code' | 'list';
    content: string | string[];
    language?: string;
}

export interface Step {
    title: string;
    content: StepContent[];
    platform?: 'android' | 'ios';
}

export const STEPS: Step[] = [
    {
        title: "Шаг 0: Установка зависимостей",
        content: [
            { type: 'paragraph', content: 'Перед началом убедитесь, что все зависимости вашего проекта установлены. Выполните эту команду в корневой папке вашего проекта.' },
            { type: 'code', content: 'npm install', language: 'bash' },
        ]
    },
    {
        title: "Подготовка: Установка Android Studio",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Вам понадобится <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300">Android Studio</a>. Она установит все необходимые SDK, инструменты командной строки и менеджер виртуальных устройств (эмуляторов).' },
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
            { type: 'paragraph', content: 'Соберите ваше веб-приложение в статичные файлы. Эта команда создаст папку `dist`.' },
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
        title: "Шаг 7 (Вариант А): Запуск из VS Code",
        platform: 'android',
        content: [
            { type: 'paragraph', content: '<b>Сначала подготовьте эмулятор.</b> Откройте Android Studio, перейдите в <b>Tools > Device Manager</b> и запустите ваш виртуальный девайс. Либо подключите реальное устройство с включенной отладкой по USB.' },
            { type: 'paragraph', content: 'Теперь выполните команду для запуска. Флаг `-l --external` включает Live Reload для быстрой разработки.' },
            { type: 'code', content: 'npx cap run android -l --external', language: 'bash' },
        ]
    },
    {
        title: "Шаг 7 (Вариант А): Запуск из VS Code",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: '<b>Убедитесь, что симулятор запущен.</b> Вы можете запустить его вручную из Xcode или команда ниже сделает это за вас.' },
            { type: 'paragraph', content: 'Теперь выполните команду для запуска. Флаг `-l --external` включает Live Reload для быстрой разработки.' },
            { type: 'code', content: 'npx cap run ios -l --external', language: 'bash' },
        ]
    },
    {
        title: "Шаг 7 (Вариант Б): Запуск из IDE",
        content: [
            { type: 'paragraph', content: 'Вы также можете запускать и отлаживать приложение напрямую из нативной IDE. Это дает больше контроля. Сначала откройте проект.' },
        ]
    },
    {
        title: "Запуск из Android Studio",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Откройте нативный проект в Android Studio:' },
            { type: 'code', content: 'npx cap open android', language: 'bash' },
            { type: 'paragraph', content: "Дождитесь синхронизации проекта. Затем вверху на панели инструментов выберите ваш эмулятор или устройство и нажмите <b>зеленую кнопку 'Run' (▶)</b>." },
        ]
    },
    {
        title: "Запуск из Xcode",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'Откройте нативный проект в Xcode:' },
            { type: 'code', content: 'npx cap open ios', language: 'bash' },
            { type: 'paragraph', content: "Вверху слева выберите ваш симулятор или подключенное устройство и нажмите <b>кнопку 'Run' (▶)</b>." },

        ]
    },
    {
        title: "Шаг 8: Сборка для публикации",
        content: [
            { type: 'paragraph', content: 'Когда приложение готово, его нужно собрать для загрузки в магазин. Убедитесь, что вы сделали финальную сборку и синхронизацию веб-кода.' },
             { type: 'code', content: 'npm run build\nnpx cap sync', language: 'bash' },
        ]
    },
    {
        title: "Публикация (Android): Открытие проекта",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Откройте нативный проект в Android Studio.' },
            { type: 'code', content: 'npx cap open android', language: 'bash' },
        ]
    },
    {
        title: "Публикация (Android): Генерация App Bundle",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'В меню Android Studio выберите <b>Build > Generate Signed Bundle / APK...</b>' },
            { type: 'paragraph', content: 'Выберите <b>Android App Bundle</b> для загрузки в Google Play и нажмите <b>Next</b>.' },
        ]
    },
    {
        title: "Публикация (Android): Создание ключа подписи",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Нажмите <b>Create new...</b>. Этот ключ — ваша цифровая подпись. <b>Обязательно сохраните файл ключа (.jks) и пароли в надежном месте!</b> Без них вы не сможете публиковать обновления.' },
            { type: 'paragraph', content: 'Заполните форму: укажите путь сохранения файла, задайте пароли и заполните информацию о себе. Нажмите <b>OK</b>.' },
        ]
    },
    {
        title: "Публикация (Android): Завершение сборки",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Вы вернетесь в предыдущее окно. Убедитесь, что ваш новый ключ выбран, введите пароли и нажмите <b>Next</b>.' },
            { type: 'paragraph', content: 'Выберите вариант сборки <b>release</b> и нажмите <b>Finish</b>. Android Studio создаст подписанный `.aab` файл в папке `android/app/release/`. Именно его нужно загружать в Google Play Console.' },
        ]
    },
    {
        title: "Публикация (iOS): Настройка и архивация",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'Откройте проект в Xcode:' },
            { type: 'code', content: 'npx cap open ios', language: 'bash' },
            { type: 'paragraph', content: 'В Xcode перейдите в раздел <b>Signing & Capabilities</b> и выберите вашу команду разработчика (требуется аккаунт Apple Developer).' },
            { type: 'paragraph', content: 'Затем в верхнем меню выберите <b>Product > Archive</b>. После завершения архивации откроется окно Organizer, откуда вы сможете загрузить сборку в App Store Connect.' },
        ]
    }
];