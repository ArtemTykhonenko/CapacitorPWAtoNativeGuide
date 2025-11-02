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

const commonSteps = {
    prepareProject: (title: string, p1: string) => ({
        title,
        content: [
            { type: 'paragraph', content: p1 },
            { type: 'code', content: 'npm install', language: 'bash' },
        ]
    }),
    buildApp: (title: string, p1: string) => ({
        title,
        content: [
            { type: 'paragraph', content: p1 },
            { type: 'code', content: 'npm run build', language: 'bash' },
        ]
    }),
    installCore: (title: string, p1: string) => ({
        title,
        content: [
            { type: 'paragraph', content: p1 },
            { type: 'code', content: 'npm install @capacitor/core', language: 'bash' },
        ]
    }),
    installCli: (title: string, p1: string) => ({
        title,
        content: [
            { type: 'paragraph', content: p1 },
            { type: 'code', content: 'npm install @capacitor/cli --save-dev', language: 'bash' },
        ]
    }),
    initCapacitor: (title: string, p1: string) => ({
        title,
        content: [
            { type: 'paragraph', content: p1 },
            { type: 'code', content: 'npx cap init "YourAppName" "com.yourapp" --web-dir "dist"', language: 'bash' },
        ]
    }),
    android: {
        installStudio: (title: string, p1: string) => ({
            title,
            platform: 'android',
            content: [{ type: 'paragraph', content: p1 }]
        }),
        installPlatform: (title: string, p1: string) => ({
            title,
            platform: 'android',
            content: [
                { type: 'paragraph', content: p1 },
                { type: 'code', content: 'npm install @capacitor/android', language: 'bash' },
            ]
        }),
        addPlatform: (title: string, p1: string) => ({
            title,
            platform: 'android',
            content: [
                { type: 'paragraph', content: p1 },
                { type: 'code', content: 'npx cap add android', language: 'bash' },
            ]
        }),
        syncWebCode: (title: string, p1: string) => ({
            title,
            platform: 'android',
            content: [
                { type: 'paragraph', content: p1 },
                { type: 'code', content: 'npx cap sync', language: 'bash' },
            ]
        }),
        openStudio: (title: string, p1: string, p2: string) => ({
            title,
            platform: 'android',
            content: [
                { type: 'paragraph', content: p1 },
                { type: 'code', content: 'npx cap open android', language: 'bash' },
                { type: 'paragraph', content: p2 },
            ]
        }),
        buildApk: (title: string, ...p: string[]) => ({
            title,
            platform: 'android',
            content: p.map(content => ({ type: 'paragraph', content }))
        }),
    },
    ios: {
        installXcode: (title: string, p1: string) => ({
            title,
            platform: 'ios',
            content: [{ type: 'paragraph', content: p1 }]
        }),
        installCliTools: (title: string, p1: string) => ({
            title,
            platform: 'ios',
            content: [
                { type: 'paragraph', content: p1 },
                { type: 'code', content: 'xcode-select --install', language: 'bash' },
            ]
        }),
        installCocoaPods: (title: string, p1: string) => ({
            title,
            platform: 'ios',
            content: [
                { type: 'paragraph', content: p1 },
                { type: 'code', content: 'sudo gem install cocoapods', language: 'bash' },
            ]
        }),
        addPlatform: (title: string, p1: string) => ({
            title,
            platform: 'ios',
            content: [
                { type: 'paragraph', content: p1 },
                { type: 'code', content: 'npx cap add ios', language: 'bash' },
            ]
        }),
        syncWebCode: (title: string, p1: string) => ({
            title,
            platform: 'ios',
            content: [
                { type: 'paragraph', content: p1 },
                { type: 'code', content: 'npx cap sync', language: 'bash' },
            ]
        }),
        openXcode: (title: string, p1: string, p2: string) => ({
            title,
            platform: 'ios',
            content: [
                { type: 'paragraph', content: p1 },
                { type: 'code', content: 'npx cap open ios', language: 'bash' },
                { type: 'paragraph', content: p2 },
            ]
        }),
        archiveApp: (title: string, ...p: string[]) => ({
            title,
            platform: 'ios',
            content: p.map(content => ({ type: 'paragraph', content }))
        }),
    }
};

const en = {
    landing: {
        title: "From Web Code to Native App",
        description: "This guide will walk you through the entire process of packaging your web application, built with React, Vue, Vite, or any other modern framework, into a ready-to-use <strong>.apk</strong> (Android) or <strong>.ipa</strong> (iOS) file.",
        cta: "Get Started",
        techTitle: "Supported Technologies"
    },
    selector: {
        title: "Select a Platform",
        description: "Which platform are you building for?",
        androidDescription: "Build a native application for Android.",
        iosDescription: "Build a native application for iOS."
    },
    guide: {
        title: "PWA to Native App with Capacitor",
        platformLabel: "Platform:",
        restart: "Restart Guide"
    },
    success: {
        title: "Success!",
        description: "You have completed the guide. Your app is ready for the final steps and publishing!",
        cta: "Start Over"
    },
    progressBar: {
        title: "Progress",
        of: "{current} of {total}"
    },
    common: {
        back: "Back",
        next: "Next",
        finish: "Finish",
        copy: "Copy",
        copied: "Copied!"
    },
    steps: [
        commonSteps.prepareProject("Prepare Your Project", "This guide assumes you have a ready web project (e.g., on React, Vue, Vite). Ensure all dependencies are installed and the project is ready to build."),
        commonSteps.android.installStudio("Preparation: Install Android Studio", 'You will need <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300">Android Studio</a>. It will install all the necessary SDKs, command-line tools, and the virtual device manager (emulators).'),
        commonSteps.ios.installXcode("Preparation: Install Xcode", 'Install <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300">Xcode</a> from the App Store. This is the primary tool for iOS development.'),
        commonSteps.ios.installCliTools("Preparation: Install Xcode Command Line Tools", "Now install the Xcode command line tools. Run in your terminal:"),
        commonSteps.ios.installCocoaPods("Preparation: Install CocoaPods", "CocoaPods is a dependency manager for iOS projects. Install it with the command:"),
        commonSteps.buildApp("Build Your Web Application", "Build your web application into static files. This command will create a `dist` folder."),
        commonSteps.installCore("Install Capacitor Core", "Add the Capacitor core to your project."),
        commonSteps.installCli("Install Capacitor CLI", "The CLI (Command Line Interface) is a tool for managing Capacitor projects."),
        commonSteps.initCapacitor("Initialize Capacitor", "This command creates a `capacitor.config.ts` configuration file and specifies the `dist` build folder within it."),
        commonSteps.android.installPlatform("Install Android Platform", "Install the native package for Android."),
        commonSteps.android.addPlatform("Add Android Platform", "Create a native Android project in your application."),
        commonSteps.ios.addPlatform("Add iOS Platform", "Create a native iOS project in your application."),
        commonSteps.android.syncWebCode("Sync Web Code", "Copy your web build (`dist`) to the native project. This command needs to be run after every `npm run build`."),
        commonSteps.ios.syncWebCode("Sync Web Code", "Copy your web build (`dist`) to the native project. This command needs to be run after every `npm run build`."),
        commonSteps.android.openStudio("Run from Android Studio", "Open the native project in Android Studio:", "Wait for the project to sync. Then, select your emulator or device from the top toolbar and click the <b>green 'Run' button (▶)</b>."),
        commonSteps.ios.openXcode("Run from Xcode", "Open the native project in Xcode:", "At the top left, select your simulator or connected device and click the <b>'Run' button (▶)</b>."),
        commonSteps.android.buildApk("Build an APK for Publishing",
            'When the app is ready, you can build a signed APK file for installation on devices or for uploading to Google Play.',
            '1. In the top menu of Android Studio, select <b>Build &rarr; Generate Signed Bundle / APK...</b>.',
            '2. Select <b>APK</b> and click <b>Next</b>.',
            '3. On the next screen, if you do not have a signing key yet, click <b>Create new...</b>.',
            '4. Fill out the form to create a key: specify the path to save the key store file, create passwords for the keystore and the key itself, provide a key alias, and fill in your information. <b>Securely save the key file and passwords!</b> You will need them for all future app updates.',
            '5. After creating (or selecting an existing) key, enter the passwords, select `release` as the Build Variant, and click <b>Finish</b>.',
            'The finished APK file will be located in the `your-project/android/app/release/app-release.apk` folder.'
        ),
        commonSteps.ios.archiveApp("Archive and Publish",
            'To publish to the App Store, you need to create an application archive.',
            '1. In Xcode, ensure that <b>Any iOS Device (arm64)</b> is selected as the target.',
            '2. In the top menu, select <b>Product &rarr; Archive</b>.',
            '3. After the archiving is complete, the Organizer window will open. Here you can review the archive and click <b>Distribute App</b> to upload it to App Store Connect.',
            'You will need an active Apple Developer account.'
        )
    ]
};

const ru = {
    landing: {
        title: "Из Веб-кода в Нативное Приложение",
        description: "Это руководство проведет вас через весь процесс упаковки вашего веб-приложения, созданного на React, Vue, Vite или любом другом современном фреймворке, в готовый <strong>.apk</strong> (Android) или <strong>.ipa</strong> (iOS) файл.",
        cta: "Начать",
        techTitle: "Поддерживаемые технологии"
    },
    selector: {
        title: "Выберите Платформу",
        description: "Для какой платформы вы создаете приложение?",
        androidDescription: "Сборка нативного приложения для Android.",
        iosDescription: "Сборка нативного приложения для iOS."
    },
    guide: {
        title: "PWA в Нативное Приложение с Capacitor",
        platformLabel: "Платформа:",
        restart: "Вернуться к выбору платформы"
    },
    success: {
        title: "Успех!",
        description: "Вы завершили руководство. Ваше приложение готово к финальным шагам и публикации!",
        cta: "Начать заново"
    },
    progressBar: {
        title: "Прогресс",
        of: "{current} из {total}"
    },
    common: {
        back: "Назад",
        next: "Далее",
        finish: "Завершить",
        copy: "Копировать",
        copied: "Скопировано!"
    },
    steps: [
        commonSteps.prepareProject("Подготовка проекта", "Это руководство предполагает, что у вас есть готовый веб-проект (например, на React, Vue, Vite). Убедитесь, что все зависимости установлены и проект готов к сборке."),
        commonSteps.android.installStudio("Подготовка: Установка Android Studio", 'Вам понадобится <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300">Android Studio</a>. Она установит все необходимые SDK, инструменты командной строки и менеджер виртуальных устройств (эмуляторов).'),
        commonSteps.ios.installXcode("Подготовка: Установка Xcode", 'Установите <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300">Xcode</a> из App Store. Это основной инструмент для разработки под iOS.'),
        commonSteps.ios.installCliTools("Подготовка: Установка Xcode Command Line Tools", "Теперь установите инструменты командной строки Xcode. Выполните в терминале:"),
        commonSteps.ios.installCocoaPods("Подготовка: Установка CocoaPods", "CocoaPods — это менеджер зависимостей для iOS проектов. Установите его командой:"),
        commonSteps.buildApp("Сборка веб-приложения", "Соберите ваше веб-приложение в статичные файлы. Эта команда создаст папку `dist`."),
        commonSteps.installCore("Установка Capacitor Core", "Добавьте ядро Capacitor в ваш проект."),
        commonSteps.installCli("Установка Capacitor CLI", "CLI (Command Line Interface) — это инструмент для управления проектами Capacitor."),
        commonSteps.initCapacitor("Инициализация Capacitor", "Эта команда создаст конфигурационный файл `capacitor.config.ts` и сразу укажет в нем папку со сборкой `dist`."),
        commonSteps.android.installPlatform("Установка Android-платформы", "Установите нативный пакет для Android."),
        commonSteps.android.addPlatform("Добавление платформы Android", "Создайте нативный проект Android в вашем приложении."),
        commonSteps.ios.addPlatform("Добавление платформы iOS", "Создайте нативный проект iOS в вашем приложении."),
        commonSteps.android.syncWebCode("Синхронизация веб-кода", "Скопируйте вашу веб-сборку (`dist`) в нативный проект. Эту команду нужно выполнять после каждого `npm run build`."),
        commonSteps.ios.syncWebCode("Синхронизация веб-кода", "Скопируйте вашу веб-сборку (`dist`) в нативный проект. Эту команду нужно выполнять после каждого `npm run build`."),
        commonSteps.android.openStudio("Запуск из Android Studio", "Откройте нативный проект в Android Studio:", "Дождитесь синхронизации проекта. Затем вверху на панели инструментов выберите ваш эмулятор или устройство и нажмите <b>зеленую кнопку 'Run' (▶)</b>."),
        commonSteps.ios.openXcode("Запуск из Xcode", "Откройте нативный проект в Xcode:", "Вверху слева выберите ваш симулятор или подключенное устройство и нажмите <b>кнопку 'Run' (▶)</b>."),
        commonSteps.android.buildApk("Сборка APK-файла для публикации",
            'Когда приложение готово, можно собрать подписанный APK-файл для установки на устройства или загрузки в Google Play.',
            '1. В верхнем меню Android Studio выберите <b>Build &rarr; Generate Signed Bundle / APK...</b>.',
            '2. Выберите <b>APK</b> и нажмите <b>Next</b>.',
            '3. На следующем экране, если у вас еще нет ключа подписи, нажмите <b>Create new...</b>.',
            '4. Заполните форму для создания ключа: укажите путь для сохранения файла ключа (key store path), придумайте пароли для хранилища и самого ключа, укажите псевдоним ключа (alias) и заполните информацию о себе. <b>Надежно сохраните файл ключа и пароли!</b> Они понадобятся для всех будущих обновлений приложения.',
            '5. После создания (или выбора существующего) ключа, введите пароли, выберите `release` в качестве Build Variant и нажмите <b>Finish</b>.',
            'Готовый APK-файл будет находиться в папке `your-project/android/app/release/app-release.apk`.'
        ),
        commonSteps.ios.archiveApp("Архивирование и публикация",
            'Для публикации в App Store необходимо создать архив приложения.',
            '1. В Xcode убедитесь, что в качестве цели выбрано <b>Any iOS Device (arm64)</b>.',
            '2. В верхнем меню выберите <b>Product &rarr; Archive</b>.',
            '3. После завершения архивации откроется окно Organizer. Здесь вы можете проверить архив и нажать <b>Distribute App</b>, чтобы загрузить его в App Store Connect.',
            'Вам потребуется активная учетная запись Apple Developer.'
        )
    ]
};

const ua = {
    landing: {
        title: "З Веб-коду в Нативний Додаток",
        description: "Цей посібник проведе вас через увесь процес пакування вашого веб-додатку, створеного на React, Vue, Vite або будь-якому іншому сучасному фреймворку, в готовий <strong>.apk</strong> (Android) або <strong>.ipa</strong> (iOS) файл.",
        cta: "Почати",
        techTitle: "Підтримувані технології"
    },
    selector: {
        title: "Виберіть Платформу",
        description: "Для якої платформи ви створюєте додаток?",
        androidDescription: "Збірка нативного додатку для Android.",
        iosDescription: "Збірка нативного додатку для iOS."
    },
    guide: {
        title: "PWA в Нативний Додаток з Capacitor",
        platformLabel: "Платформа:",
        restart: "Почати спочатку"
    },
    success: {
        title: "Успіх!",
        description: "Ви завершили посібник. Ваш додаток готовий до фінальних кроків та публікації!",
        cta: "Почати знову"
    },
    progressBar: {
        title: "Прогрес",
        of: "{current} з {total}"
    },
    common: {
        back: "Назад",
        next: "Далі",
        finish: "Завершити",
        copy: "Копіювати",
        copied: "Скопійовано!"
    },
    steps: [
        commonSteps.prepareProject("Підготовка проєкту", "Цей посібник передбачає, що у вас є готовий веб-проєкт (наприклад, на React, Vue, Vite). Переконайтеся, що всі залежності встановлені, і проєкт готовий до збірки."),
        commonSteps.android.installStudio("Підготовка: Встановлення Android Studio", 'Вам знадобиться <a href="https://developer.android.com/studio" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300">Android Studio</a>. Вона встановить усі необхідні SDK, інструменти командного рядка та менеджер віртуальних пристроїв (емуляторів).'),
        commonSteps.ios.installXcode("Підготовка: Встановлення Xcode", 'Встановіть <a href="https://developer.apple.com/xcode/" target="_blank" rel="noopener noreferrer" class="text-sky-400 hover:text-sky-300">Xcode</a> з App Store. Це основний інструмент для розробки під iOS.'),
        commonSteps.ios.installCliTools("Підготовка: Встановлення Xcode Command Line Tools", "Тепер встановіть інструменти командного рядка Xcode. Виконайте в терміналі:"),
        commonSteps.ios.installCocoaPods("Підготовка: Встановлення CocoaPods", "CocoaPods — це менеджер залежностей для iOS-проєктів. Встановіть його командою:"),
        commonSteps.buildApp("Збірка веб-додатку", "Зберіть ваш веб-додаток у статичні файли. Ця команда створить папку `dist`."),
        commonSteps.installCore("Встановлення Capacitor Core", "Додайте ядро Capacitor у ваш проєкт."),
        commonSteps.installCli("Встановлення Capacitor CLI", "CLI (Command Line Interface) — це інструмент для управління проєктами Capacitor."),
        commonSteps.initCapacitor("Ініціалізація Capacitor", "Ця команда створить конфігураційний файл `capacitor.config.ts` і відразу вкаже в ньому папку зі збіркою `dist`."),
        commonSteps.android.installPlatform("Встановлення Android-платформи", "Встановіть нативний пакет для Android."),
        commonSteps.android.addPlatform("Додавання платформи Android", "Створіть нативний проєкт Android у вашому додатку."),
        commonSteps.ios.addPlatform("Додавання платформи iOS", "Створіть нативний проєкт iOS у вашому додатку."),
        commonSteps.android.syncWebCode("Синхронізація веб-коду", "Скопіюйте вашу веб-збірку (`dist`) в нативний проєкт. Цю команду потрібно виконувати після кожного `npm run build`."),
        commonSteps.ios.syncWebCode("Синхронізація веб-коду", "Скопіюйте вашу веб-збірку (`dist`) в нативний проєкт. Цю команду потрібно виконувати після кожного `npm run build`."),
        commonSteps.android.openStudio("Запуск з Android Studio", "Відкрийте нативний проєкт в Android Studio:", "Дочекайтеся синхронізації проєкту. Потім вгорі на панелі інструментів виберіть ваш емулятор або пристрій і натисніть <b>зелену кнопку 'Run' (▶)</b>."),
        commonSteps.ios.openXcode("Запуск з Xcode", "Відкрийте нативний проєкт у Xcode:", "Вгорі зліва виберіть ваш симулятор або підключений пристрій і натисніть <b>кнопку 'Run' (▶)</b>."),
        commonSteps.android.buildApk("Збірка APK-файлу для публікації",
            'Коли додаток готовий, можна зібрати підписаний APK-файл для встановлення на пристрої або завантаження в Google Play.',
            '1. У верхньому меню Android Studio виберіть <b>Build &rarr; Generate Signed Bundle / APK...</b>.',
            '2. Виберіть <b>APK</b> і натисніть <b>Next</b>.',
            '3. На наступному екрані, якщо у вас ще немає ключа підпису, натисніть <b>Create new...</b>.',
            '4. Заповніть форму для створення ключа: вкажіть шлях для збереження файлу ключа (key store path), придумайте паролі для сховища і самого ключа, вкажіть псевдонім ключа (alias) і заповніть інформацію про себе. <b>Надійно збережіть файл ключа та паролі!</b> Вони знадобляться для всіх майбутніх оновлень додатку.',
            '5. Після створення (або вибору існуючого) ключа, введіть паролі, виберіть `release` як Build Variant і натисніть <b>Finish</b>.',
            'Готовий APK-файл буде знаходитися в папці `your-project/android/app/release/app-release.apk`.'
        ),
        commonSteps.ios.archiveApp("Архівування та публікація",
            'Для публікації в App Store необхідно створити архів додатку.',
            '1. У Xcode переконайтеся, що в якості цілі вибрано <b>Any iOS Device (arm64)</b>.',
            '2. У верхньому меню виберіть <b>Product &rarr; Archive</b>.',
            '3. Після завершення архівації відкриється вікно Organizer. Тут ви можете перевірити архів і натиснути <b>Distribute App</b>, щоб завантажити його в App Store Connect.',
            'Вам знадобиться активний обліковий запис Apple Developer.'
        )
    ]
};

export const translations = { en, ru, ua };