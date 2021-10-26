# Educación

## Recopilación de ejercicios

Vaya a [Recopilación de ejercicios][1] para ver el planteamiento de cada uno de ellos con su respectiva solución.

[1]: docs "Ver la lista de ejercicios recopilados"

## ¿Cómo modificar el proyecto?

Este repositorio es netamente educativo. En ello se colocarán ejemplos de códigos.

Para modificar los estilos utilizando **SASS** instale su intérprete y ejecute en el directorio raíz la siguiente línea:

```bash
make compiler
```

Si está utilizando **Windows** y no tiene `make` instalado, alternativamente puede escribir la siguiente línea:

```bash
scss -w src/sass:css -t expanded
```

Tomando en cuenta que el parámetro `-t expanded` hará que se transpile el archivo CSS en formato legible.

Si lo quiere visualizar en el navegador en tiempo real mientras guardas los cambios deberá escribir la siguiente línea:

```bash
make server
```

Alternativamente, si tienes Windows y no tiene instalado el comando `make` puede escribir en la terminal:

```bash
live-server
```

Sin embargo, en ambos casos, deberá instalarlo primero. Para instalarlo globalmente escriba la siguiente línea:

```bash
npm install -g live-server
```

## Transpilar con Visual Studio Code

Si tiene extensiones instalada en tu editor de código que permita transpilar código SCSS a CSS, deberá crear en tu proyecto una carpeta denominada `.vscode` y luego dentro de ella, crear un archivo denominado `setting.json` que tendrá las siguientes líneas:

```json
{
    "liveSassCompile.settings.formats": [
        {
            "format": "expanded",
            "extensionName": ".css",
            "savePath": "/css"
        }
    ]
}
```

Luego, en `"savePath": "/css"`, deberás colocar la ruta de destino de tus archivos CSS. Actualmente se está indicando que el directorio `/css` está en el directorio raíz del proyecto.
