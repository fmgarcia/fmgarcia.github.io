# 1. Introducción a la Programación en Inteligencia Artificial

## 1. Definición de programa informático

Un **programa informático** es un conjunto secuencial de instrucciones escritas en un lenguaje de programación, que una computadora interpreta para resolver un problema o realizar una tarea específica. Estas instrucciones se escriben como *código fuente* legible por humanos, y luego se compilan o interpretan para generar el *código ejecutable* que la máquina puede procesar. En resumen, un programa informático transforma datos de entrada en resultados deseados siguiendo los pasos definidos por el programador.

## 2. Etapas en el desarrollo de un programa informático

El desarrollo de software sigue un **ciclo de vida** o **proceso de desarrollo**, comúnmente dividido en etapas clave. Según diversas fuentes, las fases típicas incluyen planificación/definición de requisitos, análisis, diseño, codificación, pruebas, implementación (despliegue) y mantenimiento. En términos generales:

* **Planificación y requisitos**: Definir objetivos del proyecto, alcance y recopilar necesidades del usuario.
* **Análisis**: Especificar detalladamente qué debe hacer el programa y los datos que necesitará.
* **Diseño**: Determinar la arquitectura del software, estructuras de datos, algoritmos y tecnología a usar.
* **Codificación/implementación**: Traducir el diseño a código en el lenguaje elegido.
* **Pruebas**: Verificar el programa mediante pruebas unitarias, de integración y validación para asegurar que cumple los requisitos.
* **Despliegue/operación**: Instalar el programa en el entorno de producción y verificar su funcionamiento real.
* **Mantenimiento**: Corregir errores, optimizar el rendimiento y actualizar el software según surjan nuevas necesidades.

Este proceso iterativo (también conocido como SDLC) asegura un desarrollo ordenado y controlado del software, permitiendo retroalimentación en cada fase.

## 3. Lenguajes de programación y su evolución

Los lenguajes de programación han evolucionado desde los primitivos **código máquina** (núm. binarios) hasta los actuales lenguajes de alto nivel. Tradicionalmente se agrupan en generaciones: la **1ª generación** es el código máquina (0s y 1s) y la **2ª generación** incluye ensambladores simplificados; la **3ª generación** comprende lenguajes de alto nivel independientes del hardware (por ejemplo Fortran, C, COBOL, Java). Posteriormente surgen herramientas de **4ª generación** (bases de datos y lenguajes declarativos como SQL, Visual Basic) y las **5ª generación** (lenguajes orientados a IA, lógica y conocimiento, como Prolog o Lisp avanzado).

A medida que avanzaba la evolución, los lenguajes incorporaron nuevos paradigmas de programación: la programación estructurada (Año 1970), la orientada a objetos (década de 1980), la programación funcional (como Haskell o Scala), y estilos imperativo, declarativo o concurrente. Cada nueva generación aportó mayor abstracción, sintaxis más amigable y librerías estándar. Por ejemplo, Python (creado por Guido van Rossum en 1991) es un lenguaje de alto nivel, interpretado y multiparadigma (soporta orientación a objetos, programación imperativa y funcional). Python hoy en día es un ejemplo de lenguaje de **tercera generación** muy popular por su sintaxis legible y su versatilidad. En general, la evolución ha tendido a simplificar la expresión de algoritmos (reutilizando librerías, herramientas visuales, máquinas virtuales) a costa de detalles de bajo nivel.

## 4. Características de lenguajes orientados a inteligencia artificial

Los lenguajes idóneos para IA suelen tener las siguientes características:

* **Sintaxis clara y alto nivel de abstracción**: Facilitan expresar algoritmos complejos de forma concisa. Por ejemplo, Python es conocido por su sintaxis legible y simple.
* **Multiparadigma y flexibilidad**: Deben soportar diferentes estilos (orientado a objetos, funcional, imperativo, simbólico). Esto permite modelar ideas de IA (por ejemplo, programación lógica en Prolog, programación funcional en Haskell) de manera natural.
* **Gestión automática de memoria y tipado dinámico**: Facilitan el prototipado rápido y reducen errores de bajo nivel. Aunque Python usa tipado dinámico, tiene librerías sólidas para manejo de datos.
* **Ricas librerías y frameworks especializados**: Deben contar con amplios ecosistemas para cálculo numérico, álgebra lineal y aprendizaje automático. Por ejemplo, Python destaca en IA gracias a bibliotecas como NumPy, TensorFlow y PyTorch, mientras que R tiene múltiples paquetes estadísticos.
* **Potentes operaciones de cómputo científico**: Soporte nativo de estructuras matemáticas complejas (matrices, tensores) y operaciones vectorizadas. Python/NumPy, por ejemplo, implementa internamente en C operaciones muy rápidas con arrays multidimensionales.
* **Paralelismo y aceleración hardware**: Debe permitir aprovechar GPUs/TPUs u otras arquitecturas para entrenar modelos a gran escala. Lenguajes como Python, a través de TensorFlow o PyTorch, ofrecen interfaces que gestionan la ejecución en GPU/CUDA con alto rendimiento.
* **Ecosistema activo y comunidad de soporte**: Un lenguaje útil para IA tiene una gran comunidad que contribuye con tutoriales, foros (StackOverflow, GitHub) y actualizaciones constantes. Por ejemplo, Python cuenta con una comunidad global muy activa.

En resumen, un buen lenguaje para IA combina **facilidad de uso** (rápido desarrollo y pruebas) con **capacidad de cómputo** (librerías optimizadas), además de fuerte soporte comunitario. Python ejemplifica estos atributos: su sintaxis simple y amplio set de bibliotecas avanzadas lo hacen la elección preferida para IA.

## 5. Bibliotecas relevantes en Python para IA

En Python existen muchas bibliotecas clave para IA y ciencia de datos. Algunas de las más importantes son:

* **NumPy**: Biblioteca fundamental para cálculo numérico. Proporciona el objeto `ndarray` para arreglos n-dimensionales homogéneos y funciones de álgebra lineal optimizadas. NumPy está diseñada para operaciones matemáticas de alto rendimiento con vectores/matrices. Ejemplo de uso:

  ```python
  import numpy as np
  arr = np.array([1, 2, 3])
  print(arr.dtype, arr.shape)
  ```

  NumPy sirve como base de muchas otras librerías (SciPy, Pandas, TensorFlow) y acelera los cálculos intensivos.

* **pandas**: Biblioteca para manipulación y análisis de datos tabulares. Ofrece estructuras como `DataFrame` (tablas bidimensionales con etiquetas) y `Series`. Pandas está diseñada específicamente para **análisis de datos** en Python, y es potente, flexible y fácil de usar. Permite cargar datos (CSV, bases SQL, etc.), limpiarlos y transformarlos eficientemente. Ejemplo:

  ```python
  import pandas as pd
  df = pd.DataFrame({
      'nombre': ['Ana', 'Luis', 'Marta'],
      'edad': [28, 34, 22]
  })
  print(df.describe())
  ```

  Pandas agiliza tareas de *data wrangling* esenciales antes de entrenar modelos de IA.

* **TensorFlow**: Framework de código abierto de Google para aprendizaje automático y **Deep Learning**. TensorFlow facilita la construcción, entrenamiento y despliegue de redes neuronales complejas. Es uno de los frameworks de ML más usados en la industria por su flexibilidad y escalabilidad. Se basa en tensores y grafos computacionales, y soporta ejecución en CPU, GPU y móviles. Ejemplo básico con TensorFlow:

  ```python
  import tensorflow as tf
  a = tf.constant([[1, 2], [3, 4]])
  print(a @ a)  # multiplicación de matrices
  ```

  Además, TensorFlow incluye Keras (API de alto nivel) y herramientas para servir modelos en producción.

* **PyTorch**: Biblioteca de Deep Learning de código abierto creada por Facebook (Meta). PyTorch permite definir redes neuronales de forma imperativa (dinámicamente en tiempo de ejecución) con sintaxis clara de Python. Es muy utilizado en investigación académica por su flexibilidad y facilidad de uso. PyTorch integra autograd (cálculo automático de gradientes) y soporta GPUs. Ejemplo rápido con PyTorch:

  ```python
  import torch
  x = torch.tensor([1.0, 2.0, 3.0])
  print(x.mean())  # cálculo de media con backprop
  ```

  PyTorch ofrece también modelos preentrenados y una comunidad creciente (ecosistema *torch*).

* **scikit-learn**: Biblioteca para machine learning tradicional. Incluye algoritmos de clasificación, regresión, clustering, reducción de dimensionalidad, etc. Scikit-learn se centra en modelos “clásicos” (SVM, árboles de decisión, regresión logística, etc.) y es muy valorada por su **simplicidad y eficiencia**. Permite hacer validación cruzada, preprocesamiento de datos y evaluar fácilmente modelos. Ejemplo de uso:

  ```python
  from sklearn import datasets, linear_model
  diabetes = datasets.load_diabetes()
  X, y = diabetes.data, diabetes.target
  model = linear_model.LinearRegression()
  model.fit(X, y)
  print("Score:", model.score(X, y))
  ```

  Scikit-learn es ideal para prototipar modelos de ML rápidamente con una API unificada.

Cada una de estas bibliotecas cuenta con **documentación oficial** extensa y comunidad activa. Por ejemplo, TensorFlow y PyTorch ofrecen tutoriales y foros (GitHub, discusiones) específicos; NumPy y pandas tienen páginas de referencia con guías de uso. Su integración en Python permite combinar fácilmente diferentes herramientas: por ejemplo, usar NumPy/Pandas para preparar datos, luego TensorFlow/PyTorch para entrenar una red, y finalmente scikit-learn para análisis adicionales. Esta riqueza de bibliotecas es una de las razones por las que Python es tan dominante en IA.

## 6. Consideraciones de rendimiento en IA

El **rendimiento de ejecución** es crítico en IA debido a los grandes volúmenes de datos y la complejidad de los algoritmos. En general, los lenguajes compilados (C, C++, Java) son más rápidos en tiempo de ejecución que los interpretados (como Python); sin embargo, Python mitiga esta diferencia al delegar operaciones numéricas intensivas a extensiones en C/C++. Por ejemplo, NumPy está implementado en C y logra **alto rendimiento** en cálculos con matrices. Asimismo, TensorFlow y PyTorch ejecutan internamente operaciones en C/C++ o en GPU, maximizando la velocidad pese a que el código fuente sea escrito en Python.

En proyectos de IA es común aprovechar **aceleradores hardware**. GPU (procesador gráfico) y TPU permiten procesar redes neuronales en paralelo mucho más rápido que la CPU tradicional. Las bibliotecas modernas reconocen esto: TensorFlow y PyTorch tienen soporte integrado para GPUs, por lo que entrenar modelos grandes puede reducirse de días a horas. Asimismo, el rendimiento del software mejora con técnicas como *batching*, vectorización de operaciones (gracias a NumPy) y compilación just-in-time (p.ej. Numba).

Otro factor es la **memoria y escalabilidad**. Modelos IA complejos consumen mucha RAM y ancho de memoria (para parámetros y operaciones intermedias). Elegir un lenguaje/framework eficiente en uso de memoria es clave. Por ejemplo, TensorFlow es diseñado para ser **escalable** y desplegable en producción. Además, lenguajes con gestión automática de memoria (Python, Java) simplifican el desarrollo, aunque puede haber sobrecarga (garbage collector).

En síntesis, el rendimiento en IA depende más del uso de **frameworks y librerías optimizadas** que del lenguaje en sí. Python, a pesar de su menor velocidad pura, suele alcanzar rendimiento competitivo porque apalanca librerías eficientes. Al final, la clave es usar herramientas que se ejecuten en C/C++ o hardware especializado, y emplear paralelismo y vectores para maximizar la velocidad en el entrenamiento y la inferencia de modelos.

## 7. Herramientas de desarrollo comunes

Para programar en IA con Python y otros lenguajes se emplean diversas herramientas de desarrollo:

* **Entornos de desarrollo integrados (IDEs)**: Ofrecen edición de código, depuración y autocompletado. Ejemplos populares para Python incluyen **PyCharm** (JetBrains) y **Visual Studio Code** (con extensiones de Python). Para R es común **RStudio**. Existen también entornos científicos como **Spyder**. Estos IDEs aceleran el desarrollo mostrando errores en tiempo real y gestionando proyectos.
* **Notebooks interactivos**: Herramientas como **Jupyter Notebook/Lab** o **Google Colab** permiten combinar código, gráficos y texto en un mismo documento. Son muy útiles para prototipado y visualización de datos. Jupyter, por ejemplo, es un entorno interactivo que soporta Python y otros lenguajes y facilita compartir experimentos en la web. Google Colab añade recursos gratuitos de GPU.
* **Entornos virtuales**: Son instalaciones aisladas de Python para cada proyecto. Usando `venv` (incluido en Python) o **conda** (Anaconda), se puede crear un “entorno” independiente con versiones específicas de paquetes. Esto evita conflictos entre proyectos y facilita gestionar dependencias. Por ejemplo, `python -m venv .env` crea un entorno nuevo en la carpeta del proyecto. Se recomienda siempre activar un entorno virtual al iniciar el desarrollo.
* **Control de versiones**: Es esencial usar sistemas como **Git** para rastrear cambios en el código, colaborar y gestionar historial. Git (y plataformas como GitHub/GitLab) permite a equipos coordinarse sin pisarse el código mutuamente. El control de versiones mejora la productividad al poder volver a estados anteriores y revisar diferencias. Por ejemplo, con Git se *commit*, *push* y *merge* ramas para trabajar en paralelo. Atlassian Git Tutorial define el control de versiones como la práctica de **gestionar cambios en el código** de forma coordinada.
* **Otras herramientas**: Los desarrolladores de IA suelen usar herramientas adicionales como **pip** o **pipenv** (para gestión de paquetes en Python), **Docker** (contenedores para entornos reproducibles), **Jenkins**/**GitHub Actions** (integración continua), etc. Para notebooks científicos se integran bibliotecas de visualización (Matplotlib, Seaborn) y depuradores de Python.

Estas herramientas potencian el desarrollo: los IDEs y notebooks aceleran la escritura y prueba de código, los entornos virtuales evitan incompatibilidades, y el control de versiones garantiza desarrollo ágil y colaborativo. Adicionalmente, las comunidades proporcionan extensiones y plugins específicos para IA (por ejemplo, extensiones de VSCode para Jupyter o TensorFlow).

## 8. Soporte: comunidades, documentación y mantenimiento

El soporte comunitario y la documentación son cruciales para cualquier tecnología de IA. A continuación se destaca el ecosistema de algunos lenguajes y herramientas principales:

* **Python**: Respaldado por la *Python Software Foundation* (PSF), cuenta con documentación oficial muy completa (docs.python.org) y un ciclo de actualizaciones activo (por ejemplo, Python 3.13.4 fue lanzado en abril de 2025). Existe una gran comunidad global (foros, StackOverflow, grupos de usuarios) que contribuye con soluciones y paquetes. Además, **PyPI** es el repositorio centralizado de librerías (más de 400K paquetes). Los desarrolladores pueden reportar problemas en GitHub o usar foros como StackOverflow para obtener ayuda.
* **R**: Tiene la comunidad de *R Consortium* y CRAN (repositorio de paquetes). R publica versiones regulares (la 4.4.1 en junio de 2024). Existe amplia documentación (The R Manual) y comunidades (StackOverflow, R-Users, foros académicos). Sus paquetes (ggplot2, dplyr, etc.) se actualizan frecuentemente y cuentan con documentación de referencia.
* **Java**: Oracle mantiene OpenJDK, con versiones nuevas anualmente. Documentación oficial (Oracle Docs) y comunidades como Oracle Java Community o StackOverflow cubren dudas. Para IA hay frameworks como Weka o Deeplearning4j con sus propias comunidades. Al ser un lenguaje empresarial, tiene soporte de grandes empresas (Oracle, IBM, Red Hat) y estándares de la industria.
* **JavaScript/Node.js**: JavaScript tiene respaldo de ECMA (estándar ECMAScript). Su documentación (MDN Web Docs) es extensa. Para IA surgieron librerías como TensorFlow\.js o Brain.js; TensorFlow\.js, por ejemplo, es mantenido por Google y tiene tutoriales oficiales. Node.js, plataforma de servidor basada en JS, tiene una comunidad activa (*Node.js Foundation*) y repositorio de paquetes NPM. Ambas tecnologías cuentan con foros, cursos y grupos de usuarios (por ejemplo, la comunidad JS de GitHub supera millones de desarrolladores).
* **JSON**: Aunque no es un lenguaje de programación sino un formato de datos, merece mención. JSON está estandarizado en RFC 8259 y proviene de especificaciones de JavaScript. Es mantenido como estándar abierto (JSON.org). Tiene una comunidad amplia porque es el formato de intercambio de datos universal en APIs web. La documentación de JSON (por ejemplo, por IETF/ECMA) está libremente disponible.

En resumen, todos estos lenguajes/formats tienen **fuerte soporte comunitario** y **buena documentación**. Python, por ejemplo, exhibe actualizaciones regulares (con planes a varios años vista). Las bibliotecas de IA en Python (TensorFlow, PyTorch, scikit-learn) provienen de organizaciones líderes (Google, Meta, INRAE) y publican **nuevas versiones periódicamente** con mejoras. Las comunidades en línea (StackOverflow, Reddit, foros especializados) son muy activas; por ejemplo, las etiquetas “python” o “machine-learning” en StackOverflow cuentan con decenas de miles de preguntas resueltas. Todo esto asegura que los desarrolladores de IA encuentren tutoriales, ejemplos y ayuda fácilmente, y que los proyectos se mantengan actualizados y seguros.

## 9. Principales lenguajes de programación para IA

A continuación se analiza cada lenguaje solicitado, enfocándose en su uso en IA:

| Lenguaje       | Paradigma / Tipado                                                                            | Uso en IA y librerías destacadas                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Python**     | Alto nivel, multiparadigma (orientado a objetos, funcional); tipado dinámico.                 | Es el **lenguaje principal para IA** hoy día. Su amplia comunidad y librerías (TensorFlow, PyTorch, scikit-learn, pandas, etc.) lo hacen ideal. Simplifica prototipado de modelos con sintaxis clara; sin embargo, su ejecución pura es más lenta que C++, aunque se compensa con extensiones optimizadas y GPU.                                                                                                                                                              |
| **R**          | Multiparadigma: estadístico/funcional, tipado dinámico.                                       | Diseñado para **análisis estadístico** y minería de datos. Muy usado en investigación y *data science*. Tiene paquetes IA (caret, randomForest, xgboost, TensorFlow para R) y es potente en visualización. Ventaja en estadísticas y gráficos; menos usado para sistemas de producción debido a rendimiento y sintaxis menos general.                                                                                                                                         |
| **Java**       | Lenguaje compilado a bytecode (JVM), orientado a objetos; tipado estático.                    | Aunque no es de los más usados en investigación de IA, Java se emplea en entornos de producción empresariales. Existen bibliotecas de ML/IA (Weka, Deeplearning4j, Java-ML) y frameworks web de servicios IA. Destaca por su robustez, optimización de memoria y concurrencia nativa. Puntos fuertes: portabilidad (“write once, run anywhere”), rendimiento mejor que Python puro. Inconveniente: sintaxis más verbosa y ecosistema de IA más reducido comparado con Python. |
| **JavaScript** | Lenguaje interpretado, multiparadigma (event-driven, funcional, imperativo); tipado dinámico. | Tradicionalmente usado en navegador web, ahora con **TensorFlow\.js** y **ML5.js** se puede ejecutar modelos de IA directamente en clientes web. JavaScript permite prototipos rápidos de IA para páginas web (reconocimiento de imagen en navegador, por ejemplo). Ventajas: ubicuidad en web y entorno Node.js. Desventaja: rendimiento limitado (V8), no tan optimizado para cómputos pesados (aunque TensorFlow\.js usa WebGL).                                           |
| **Node.js**    | Entorno de ejecución de JavaScript en servidor (no lenguaje distinto).                        | Permite usar JavaScript (y librerías de IA en JS) en el back-end. Puede ejecutar TensorFlow\.js o llamadas a Python. Útil para integrar IA en aplicaciones web/server. Comparte ventajas de JS (asimétrico, NPM) y permite paralelismo I/O. No es un lenguaje de IA en sí, pero su ecosistema permite construir APIs de IA.                                                                                                                                                   |
| **JSON**       | Formato de intercambio de datos (sintaxis basada en JavaScript). No es Turing completo.       | JSON se utiliza **para transportar datos** (p. ej. resultados de modelos, parámetros) entre clientes y servidores. No permite programación de lógica, pero es fundamental en APIs REST y para guardar configuraciones ligeras de IA. Ventajas: legible, portátil entre lenguajes y ampliamente soportado. Inconveniente: No tiene conceptos de programa, solo datos.                                                                                                          |

Estos lenguajes difieren en **paradigmas y usos**, pero todos encuentran aplicación en proyectos de IA. Python domina por su equilibrio entre facilidad y potencia, R destaca en análisis estadístico, Java en entornos empresariales, JavaScript/Node permiten IA en la web, y JSON sirve para intercambiar datos. Eligiendo uno u otro dependerá de los requisitos: por ejemplo, Python para experimentos y prototipos rápidos; Java para sistemas escalables; JavaScript para interfaces web interactivas; R para análisis exploratorio; JSON para formatos de configuración y comunicación.

## 10. Lenguajes de marcado: HTML, XML y YAML

Los **lenguajes de marcado** definen estructuras de datos o documentos mediante etiquetas. Se explican sus usos y etiquetas más comunes:

* **HTML (HyperText Markup Language)**: Lenguaje estándar para estructurar documentos web. Un documento HTML típico tiene esta forma:

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Página de Ejemplo</title>
    </head>
    <body>
      <h1>Encabezado</h1>
      <p>Este es un párrafo de texto.</p>
      <a href="https://example.com">Enlace</a>
      <img src="imagen.jpg" alt="Texto alternativo"/>
    </body>
  </html>
  ```

  * Etiquetas comunes: `<html>` (raíz), `<head>` (metadatos como `<title>`), `<body>` (contenido visible), `<h1>`–`<h6>` (cabeceras de texto), `<p>` (párrafo), `<a href="URL">` (hipervínculo), `<img src="..." alt="...">` (imagen), `<div>`, `<span>`, `<ul>`, `<li>`, `<table>`, `<form>`, entre otras. Cada etiqueta define secciones o elementos de la página. El navegador interpreta estas etiquetas para renderizar la página web.

* **XML (eXtensible Markup Language)**: Formato de texto para almacenar y transportar datos. Es auto-descriptivo: las etiquetas las define el propio usuario según conveniencia. Por ejemplo:

  ```xml
  <persona>
    <nombre>Alicia</nombre>
    <edad>30</edad>
    <ciudad>Madrid</ciudad>
  </persona>
  ```

  En este caso, `<persona>`, `<nombre>`, `<edad>`, `<ciudad>` son etiquetas personalizadas. XML exige que los elementos estén bien formados (cada etiqueta abierta debe cerrarse). Se utiliza en configuraciones (p. ej. archivos de Spring, Android), en intercambio de datos (*SOAP*, RSS) y en bases de datos XML. Las etiquetas más comunes dependen del esquema definido; por sí mismo XML no impone etiquetas fijas, sino estructuras jerárquicas de elementos.

* **YAML (YAML Ain’t Markup Language)**: Aunque su nombre incluye “Mark-up Language”, es en realidad un lenguaje de **serialización de datos** fácil de leer. Se usa principalmente para archivos de configuración. La sintaxis está basada en indentación. Ejemplo:

  ```yaml
  persona:
    nombre: "Alicia"
    edad: 30
    habilidades:
      - Python
      - "Aprendizaje Automático"
  ```

  En YAML, los niveles de indentación definen la jerarquía de datos. Las listas se indican con guiones (`-`). Se enfatiza la legibilidad para humanos. No tiene “etiquetas” como HTML/XML, sino pares `clave: valor`. Aunque YAML se considera “no marcado” (de ahí su acrónimo), comparte la idea de estructurar datos (a diferencia de código de programación).

**Resumen de etiquetas comunes**: en HTML se usan etiquetas semánticas (`<p>`, `<h1>`, `<a>`, `<img>`, `<table>`, `<form>`, etc.) para dar significado al contenido. XML acepta cualquier etiqueta válida (por ejemplo, `<item>`, `<title>` en RSS). YAML no usa etiquetas, pero sí sintaxis clave-valor. Su elección depende del contexto: HTML para la web, XML/YAML para datos y configuración.

**Fuentes:** La información de HTML se basa en la referencia oficial de MDN Web Docs (Mozilla) sobre elementos HTML; la definición de YAML proviene de Red Hat; JSON se describe en la documentación de IBM. Otros puntos están asentados en la práctica estándar de desarrollo de software y fuentes educativas citadas. Cada sección incorpora código de ejemplo ilustrativo según corresponde.
