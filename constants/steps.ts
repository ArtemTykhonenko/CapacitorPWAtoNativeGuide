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
        title: "Шаг 1: Подготовка проекта",
        content: [
            { type: 'paragraph', content: 'Это руководство предполагает, что у вас есть готовый веб-проект (например, на React, Vue, Vite). Убедитесь, что все зависимости установлены и проект готов к сборке.' },
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
        title: "Шаг 2: Сборка веб-приложения",
        content: [
            { type: 'paragraph', content: 'Соберите ваше веб-приложение в статичные файлы. Эта команда создаст папку `dist`.' },
            { type: 'code', content: 'npm run build', language: 'bash' },
        ]
    },
    {
        title: "Шаг 3: Установка Capacitor Core",
        content: [
            { type: 'paragraph', content: 'Добавьте ядро Capacitor в ваш проект.' },
            { type: 'code', content: 'npm install @capacitor/core', language: 'bash' },
        ]
    },
    {
        title: "Шаг 4: Установка Capacitor CLI",
        content: [
            { type: 'paragraph', content: 'CLI (Command Line Interface) — это инструмент для управления проектами Capacitor.' },
            { type: 'code', content: 'npm install @capacitor/cli --save-dev', language: 'bash' },
        ]
    },
    {
        title: "Шаг 5: Инициализация Capacitor",
        content: [
            { type: 'paragraph', content: 'Эта команда создаст конфигурационный файл `capacitor.config.ts` и сразу укажет в нем папку со сборкой `dist`.' },
            { type: 'code', content: 'npx cap init "YourAppName" "com.yourapp" --web-dir "dist"', language: 'bash' },
        ]
    },
    {
        title: "Шаг 6: Установка Android-платформы",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Установите нативный пакет для Android.' },
            { type: 'code', content: 'npm install @capacitor/android', language: 'bash' },
        ]
    },
    {
        title: "Шаг 7: Добавление платформы Android",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Создайте нативный проект Android в вашем приложении.' },
            { type: 'code', content: 'npx cap add android', language: 'bash' },
        ]
    },
    {
        title: "Шаг 6: Добавление платформы iOS",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'Создайте нативный проект iOS в вашем приложении.' },
            { type: 'code', content: 'npx cap add ios', language: 'bash' },
        ]
    },
    {
        title: "Шаг 8: Синхронизация веб-кода",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Скопируйте вашу веб-сборку (`dist`) в нативный проект. Эту команду нужно выполнять после каждого `npm run build`.' },
            { type: 'code', content: 'npx cap sync', language: 'bash' },
        ]
    },
    {
        title: "Шаг 7: Синхронизация веб-кода",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'Скопируйте вашу веб-сборку (`dist`) в нативный проект. Эту команду нужно выполнять после каждого `npm run build`.' },
            { type: 'code', content: 'npx cap sync', language: 'bash' },
        ]
    },
    {
        title: "Шаг 9: Запуск из Android Studio",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Откройте нативный проект в Android Studio:' },
            { type: 'code', content: 'npx cap open android', language: 'bash' },
            { type: 'paragraph', content: "Дождитесь синхронизации проекта. Затем вверху на панели инструментов выберите ваш эмулятор или устройство и нажмите <b>зеленую кнопку 'Run' (▶)</b>." },
        ]
    },
    {
        title: "Шаг 8: Запуск из Xcode",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'Откройте нативный проект в Xcode:' },
            { type: 'code', content: 'npx cap open ios', language: 'bash' },
            { type: 'paragraph', content: "Вверху слева выберите ваш симулятор или подключенное устройство и нажмите <b>кнопку 'Run' (▶)</b>." },
        ]
    },
    {
        title: "Шаг 10: Сборка APK-файла для публикации",
        platform: 'android',
        content: [
            { type: 'paragraph', content: 'Когда приложение готово, можно собрать подписанный APK-файл для установки на устройства или загрузки в Google Play.' },
            { type: 'paragraph', content: '1. В верхнем меню Android Studio выберите <b>Build &rarr; Generate Signed Bundle / APK...</b>.' },
            { type: 'paragraph', content: '2. Выберите <b>APK</b> и нажмите <b>Next</b>.' },
            { type: 'paragraph', content: '3. На следующем экране, если у вас еще нет ключа подписи, нажмите <b>Create new...</b>.' },
            { type: 'paragraph', content: '4. Заполните форму для создания ключа: укажите путь для сохранения файла ключа (key store path), придумайте пароли для хранилища и самого ключа, укажите псевдоним ключа (alias) и заполните информацию о себе. <b>Надежно сохраните файл ключа и пароли!</b> Они понадобятся для всех будущих обновлений приложения.' },
            { type: 'paragraph', content: '5. После создания (или выбора существующего) ключа, введите пароли, выберите `release` в качестве Build Variant и нажмите <b>Finish</b>.' },
            { type: 'paragraph', content: 'Готовый APK-файл будет находиться в папке `your-project/android/app/release/app-release.apk`.' },
        ]
    },
    {
        title: "Шаг 9: Архивирование и публикация",
        platform: 'ios',
        content: [
            { type: 'paragraph', content: 'Для публикации в App Store необходимо создать архив приложения.' },
            { type: 'paragraph', content: '1. В Xcode убедитесь, что в качестве цели выбрано <b>Any iOS Device (arm64)</b>.' },
            { type: 'paragraph', content: '2. В верхнем меню выберите <b>Product &rarr; Archive</b>.' },
            { type: 'paragraph', content: '3. После завершения архивации откроется окно Organizer. Здесь вы можете проверить архив и нажать <b>Distribute App</b>, чтобы загрузить его в App Store Connect.' },
            { type: 'paragraph', content: 'Вам потребуется активная учетная запись Apple Developer.' },
        ]
    }
];