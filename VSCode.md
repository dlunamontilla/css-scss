# Mejorar rendimiendo Visual Studio Code

Puede realizar los siguientes pasos para evitar que **Visual Studio Code** utilice gráficos que no tiene disponible en su computadora.

Es decir, que se le puede decir de forma explícita que se ejecute deshabilitando el uso de la GPU.

## Usuarios Linux

Abra el lanzador `code.desktop` como se indica a continuación:

```bash
sudo nano /usr/share/applications/code.desktop
```

Ubique las líneas que empiecen por:

```desktop
Exec=/usr/share/code/code...
```

Y agregue el parámetro `--disable-gpu`, tal y como se observa a continuación:

**Archivo:** `code.desktop`

```desktop
[Desktop Entry]
Name=Visual Studio Code
Comment=Code Editing. Redefined.
GenericName=Text Editor
Exec=/usr/share/code/code --unity-launch --disable-gpu %F
Icon=com.visualstudio.code
Type=Application
StartupNotify=false
StartupWMClass=Code
Categories=Utility;TextEditor;Development;IDE;
MimeType=text/plain;inode/directory;application/x-code-workspace;
Actions=new-empty-window;
Keywords=vscode;

X-Desktop-File-Install-Version=0.24

[Desktop Action new-empty-window]
Name=New Empty Window
Exec=/usr/share/code/code --new-window --disable-gpu %F
Icon=com.visualstudio.code
```

Finalmente, guarde los cambios.

## Usuarios Windows

Solo deben ir a propiedades de **acceso directo** de **Visual Studio Code** y luego ubiquen algo parecido a esto:

```none
"C:\Program Files\Visual..."
```

Para agregar el parámetro `--disable-gpu`, por ejemplo:

```none
"C:\Program Files\Visual..." --disable-gpu
```
