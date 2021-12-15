## Должно быть установлено ##

node.js - https://nodejs.org/

npm

```bash
$ npm install npm -g
```

bower

```bash
$ npm install bower -g
```

gulp

```bash
$ npm install gulp -g
```

less

```bash
$ npm install less -g
```

## Настройка окружения ###

```bash
$ bower i
$ npm i
$ gulp
```
Запустится сервер http://localhost:3000

ВАЖНО: перед запуском gulp в /node_modules/less-plugin-autoprefix/lib/autoprefix-processor.js нужно заменить строку

```bash
sourceMapInline = sourceMap.isInline();
```

на

```bash
sourceMapInline = typeof sourceMapURL === 'undefined' || sourceMap.isInline();
```

иначе будет валиться ошибка в gulp-sourcemaps.

## Как и где работаем ##

Вся работа ведется в src/

### Сборка ###

По дефолту сборка происходит в build/, вебсервер так же смотрит в эту папку.

После интеграции верстки, все доработки ведутся так же в src/ с дефолтной сборкой, после делаем

```bash
$ gulp production
```

и сборка происходит в папку с интегрированной версткой, указанную в gulp/config.js (этот путь меняется для каждого проекта).

Обязательно делать конечной папкой "build", например, ../bitrix/templates/project_name/build/

## Что есть ##

gulp.spritesmith делает спрайт из картинок, которые лежат в src/img/sprite

Для "шаблонизации" используется gulp-file-include - позволяет импортировать один файл в другой.

Вебсервер - browsersync.