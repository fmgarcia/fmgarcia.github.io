# 2. Fundamentos de Programación en Python

## 1. Introducción a Python

Python es un **lenguaje de programación de alto nivel** diseñado para la legibilidad y productividad. Fue creado a finales de los años 80 por Guido van Rossum, basándose en el lenguaje educativo ABC, y lanzado públicamente en 1991. Destacan en Python su sintaxis clara (usa indentación en lugar de llaves), tipado **dinámico** y fuerte apoyo a paradigmas multi-paradigma (procedural, orientado a objetos, funcional, etc.). Python se distribuye con un intérprete multiplataforma y una **biblioteca estándar** muy amplia.

* **Historia:** Nació en 1989 como continuación de ABC, lanzándose la primera versión en 1991. Guido van Rossum lo diseñó como un lenguaje fácil de aprender, potente para scripting y extensible en C/C++.
* **Características clave:** Tipado dinámico, recolector de basura, soporte integrado para estructuras de datos (listas, diccionarios, etc.), *baterías incluidas* (gran librería estándar) y un diseño enfocado en la legibilidad del código. Su sintaxis enfatiza la identación de bloques, no usa puntos y coma (salvo opcionalmente) ni llaves para delimitar bloques de código.
* **Uso actual:** Se usa desde scripts simples hasta servidores web de gran escala, interfaces gráficas, aplicaciones científicas y enseñanza de programación. Su comunidad activa mantiene miles de paquetes adicionales (NumPy, Django, Flask, etc.).
* **Diferencias con otros lenguajes:** A diferencia de Java o C++, Python **no requiere declarar tipos** de variable (es dinámico), lo que hace el código más conciso. El tipado dinámico permite mayor flexibilidad, pero puede provocar errores en tiempo de ejecución que en un lenguaje estático aparecerían en compilación. Python usa indentación obligatoria para delimitar bloques (en Java/C++ se usan `{}`), lo que mejora la legibilidad pero exige consistencia. Por ser interpretado, Python suele ser más lento en tiempo de ejecución que lenguajes compilados como C++/Java, pero el desarrollo es mucho más rápido y directo. En resumen, **Python prioriza la legibilidad y velocidad de desarrollo**, sacrificando un poco de rendimiento en comparación con lenguajes compilados.

## 2. Elementos básicos del lenguaje

### Variables y tipos de datos

En Python, **las variables son etiquetas para objetos en memoria**. No se declaran con tipo; basta con asignar un valor para crearlas. Por ejemplo:

```python
numero = 42         # entero
temperatura = 36.6  # flotante
nombre = "Carlos"   # cadena de texto (str)
activo = True       # booleano
```

* Python soporta varios tipos básicos integrados: `int` (enteros), `float` (decimales), `bool` (booléanos) y `str` (cadenas de texto), entre otros. Además, son comunes los tipos compuestos: **listas, tuplas, diccionarios y conjuntos** (se verán en la sección de estructuras de datos). Al asignar `x = 5`, el tipo de `x` es `int`. Si luego hacemos `x = "cinco"`, ahora `x` es `str`. Esta flexibilidad se llama *tipado dinámico*.
* Python también implementa **tipado fuerte**: aunque no declaremos tipos, las operaciones verifican la compatibilidad. Por ejemplo, `5 + "hola"` dará un error `TypeError`.
* Para *verificar* el tipo de un objeto podemos usar la función `type()`, y el operador `isinstance(obj, Tipo)`.

### Operadores

Python incluye todos los operadores básicos y más:

* **Aritméticos:** `+`, `-`, `*`, `/` (división flotante), `//` (división entera), `%` (módulo), `**` (potencia). Ejemplos:

  ```python
  a = 7 + 3   # 10
  b = 7 / 2   # 3.5
  c = 7 // 2  # 3
  d = 2 ** 3  # 8
  ```

* **Comparación:** `==`, `!=`, `>`, `<`, `>=`, `<=`. Retornan booleanos (`True`/`False`):

  ```python
  print(5 == 5)  # True
  print(5 < 3)   # False
  ```

* **Lógicos:** `and`, `or`, `not` (en Python las palabras reservadas son las palabras en inglés). Por ejemplo: `if x > 0 and x < 10:`.
  
* **Asignación:** `=`, y combinados como `+=`, `-=`, `*=`, etc. (p.ej. `x += 1` es equivalente a `x = x + 1`).
  
* **Pertenencia:** `in`, `not in`, para probar si un elemento está en una colección:

  ```python
  lista = [1, 2, 3]
  print(2 in lista)    # True
  ```

* **Identidad:** `is`, `is not` (verifica si dos nombres referencian el *mismo* objeto en memoria, no sólo valores iguales).

  Python optimiza enteros pequeños (por ejemplo -5 a 256) para que referencien el mismo objeto, por eso `x = 100; y = 100; x is y` puede ser `True`. Sin embargo, en general para comparar valores iguales se usan `==`.

### Entrada/Salida y comentarios

* **Salida:** Se usa la función incorporada `print()` para mostrar texto o datos en la consola. Por ejemplo: `print("Hola, mundo")`. `print` puede imprimir múltiples valores separados por comas, o usar *f-strings* o el método `.format()` para formatear salidas. De hecho, la documentación oficial indica que hasta ahora se han utilizado la sentencia de expresión y la función `print()` para generar salida.
* **Entrada:** La función `input()` detiene el programa y espera que el usuario escriba algo por teclado, devolviendo lo que se escribió como cadena de texto. Por ejemplo:

  ```python
  nombre = input("¿Cómo te llamas? ")
  print("Hola,", nombre)
  ```

  Importante: **`input()` siempre devuelve un `str`**. Si el usuario escribe un número y queremos usarlo como entero, hay que convertirlo con `int()`, sabiendo que un valor no numérico causará una excepción `ValueError`.
  
* **Comentarios:** Para **comentarios de una línea** se usa `#`. Python ignora todo lo que sigue a `#` en la misma línea:

  ```python
  # Esto es un comentario
  x = 5  # Comentario al final de una línea de código
  ```

  Para comentarios multilínea se suelen usar cadenas de triple comillas (`"""Comentario"""` o `'''Comentario'''`). Técnicamente éstas crean un string que no se asigna a nada, por lo que el intérprete lo ignora (además de servir como docstring cuando está al inicio de una función o clase).

## 3. Control de flujo

### Condicionales (`if/elif/else`)

Permiten ejecutar código sólo si se cumplen condiciones booleanas. Ejemplos prácticos:

```python
edad = 20
if edad >= 18:
    print("Eres mayor de edad.")
else:
    print("Eres menor de edad.")
```

```python
num = int(input("Ingresa un número: "))
if num % 2 == 0:
    print(f"{num} es par.")
else:
    print(f"{num} es impar.")
```

```python
nota = 85
if nota >= 90:
    print("A")
elif nota >= 80:
    print("B")
elif nota >= 70:
    print("C")
else:
    print("D o inferior")
```

Estos ejemplos muestran un `if`, `if/else`, y una cadena `if/elif/else`. Python evalúa las condiciones de arriba abajo y ejecuta **a lo sumo un bloque** (el primero verdadero), luego sale del condicional. Dentro de cada bloque se pueden anidar más `if` o bucles.

### Bucles (`for`, `while`)

Permiten repetir un bloque de código. En Python:

* **`for`** recorre secuencias (como listas, cadenas, tuplas, rango, etc.). Ejemplos:

  ```python
  # Iterar con range
  for i in range(5):
      print(i)
  # Salida: 0 1 2 3 4
  ```

  ```python
  frutas = ["manzana", "banana", "cereza"]
  for fruta in frutas:
      print(fruta.upper())
  # Salida: MANZANA BANANA CEREZA
  ```

  ```python
  # Sumar elementos de una lista
  nums = [1, 3, 5, 7]
  total = 0
  for n in nums:
      total += n
  print("Suma =", total)  # Suma = 16
  ```

* **`while`** repite mientras una condición sea verdadera. Ejemplos:

  ```python
  cuenta = 0
  while cuenta < 3:
      print("Cuenta:", cuenta)
      cuenta += 1
  # Imprime 0, 1, 2
  ```

  ```python
  # Bucle infinito con break
  while True:
      texto = input("Escribe 'salir' para terminar: ")
      if texto.lower() == "salir":
          print("Terminando bucle.")
          break
      print("Dijiste:", texto)
  ```

  ```python
  # Uso de continue para saltar iteraciones
  for i in range(5):
      if i % 2 == 0:
          continue  # salta los pares
      print(i)
  # Imprime 1, 3
  ```

En bucles es común usar `break` para salir antes de tiempo y `continue` para saltar a la siguiente iteración. El bucle `for` recorre un iterable hasta agotarlo; el `while` debe cuidar su condición o puede quedar infinito.

## 4. Funciones

Definir funciones permite reutilizar código. Se usa la palabra clave `def`. Ejemplo:

```python
def saludar(nombre):
    """Retorna un saludo personalizado."""
    mensaje = f"Hola, {nombre}!"
    return mensaje

print(saludar("Ana"))  # Hola, Ana!
```

* **Argumentos:** Podemos pasar parámetros posicionales o nombrados. Ejemplo:

  ```python
  def potencia(base, exponente=2):
      return base ** exponente

  print(potencia(5))     # 25, usa exponente por defecto 2
  print(potencia(5, 3))  # 125
  ```

* **Valor de retorno:** La sentencia `return` devuelve un valor. Si no se usa `return`, la función retorna `None`.

* **Funciones lambda:** Son funciones anónimas de una sola expresión, útiles en llamadas cortas. Ejemplo:

  ```python
  cuadrado = lambda x: x * x
  print(cuadrado(4))  # 16

  # Uso en combinación con sorted
  puntos = [(1,2), (3,1), (5,0)]
  puntos_ordenados = sorted(puntos, key=lambda par: par[1])
  # Ordena por la segunda componente: [(5,0), (3,1), (1,2)]
  ```

* **Argumentos variables:** A veces no sabemos cuántos argumentos se pasarán. Usamos `*args` para tuplas de argumentos posicionales y `**kwargs` para diccionarios de argumentos nombrados. Ejemplo:

  ```python
  def mostrar_info(*args, **kwargs):
      print("Posicionales:", args)
      print("Nombrados:", kwargs)

  mostrar_info(1, 2, a="hola", b="mundo")
  # Posicionales: (1, 2)
  # Nombrados: {'a': 'hola', 'b': 'mundo'}
  ```

Cada función puede incluir una cadena triple (`"""docstring"""`) justo debajo de la definición, describiendo su propósito (buenas prácticas de documentación). Por ejemplo, `"""Retorna un saludo personalizado."""` en el ejemplo de `saludar` sirve como docstring de la función.

## 5. Estructuras de datos

Python provee varias estructuras de datos integradas:

* **Listas (`list`):** Son arreglos ordenados y *mutables*. Por ejemplo:

  ```python
  lista = [10, 20, 30]
  lista.append(40)          # [10, 20, 30, 40]
  print(lista[1])           # 20
  lista[0] = 15             # [15, 20, 30, 40]
  print(len(lista))         # 4
  for elem in lista:
      print(elem)           # itera e imprime cada elemento
  ```

  Se pueden usar **slicing**: `lista[1:3]` devuelve sublista `[20, 30]`. Las listas permiten duplicados y se pueden ordenar (`lista.sort()`), invertir (`lista.reverse()`), etc.

* **Tuplas (`tuple`):** Son secuencias ordenadas e *inmutables*. Se crean con paréntesis `(1, 2, 3)` o usando la coma `x = 1, 2`. Ejemplos:

  ```python
  tupla = (100, 200, 300)
  print(tupla[2])       # 300
  x, y, z = tupla       # desempaquetado de tupla
  print(x, y, z)        # 100 200 300
  ```

  Como no se pueden modificar tras crearla, las tuplas se usan para datos “fijos” o como claves de diccionario (al ser *hashables*). Por ejemplo, `min,max = mi_funcion()` puede devolver varios valores empaquetados en una tupla.

* **Diccionarios (`dict`):** Almacenan pares *clave\:valor* sin orden fijo (en Python 3.7+ mantienen orden de inserción). Ejemplo:

  ```python
  persona = {"nombre": "Luis", "edad": 30}
  print(persona["nombre"])    # Luis
  persona["edad"] = 31        # modifica el valor asociado a 'edad'
  persona["ciudad"] = "Madrid"  # agrega nueva clave
  if "edad" in persona:
      print("Edad:", persona.get("edad"))
  # Iterar por claves y valores:
  for clave, valor in persona.items():
      print(clave, "=", valor)
  del persona["ciudad"]       # elimina la clave 'ciudad'
  ```

  Los diccionarios son muy útiles para representar objetos o estructuras de datos complejas. Métodos comunes: `.keys()`, `.values()`, `.items()`.

* **Conjuntos (`set`):** Colección de elementos únicos *desordenada*. Se crean con `{1,2,3}` o `set([1,2,2,3])`. Ejemplos:

  ```python
  s = {1, 2, 2, 3}
  print(s)        # {1, 2, 3} (duplica elim.)
  s.add(4)        # {1,2,3,4}
  s.remove(2)     # {1,3,4}
  print(2 in s)   # False
  s2 = {3, 4, 5}
  print(s | s2)   # {1,3,4,5} (unión)
  print(s & s2)   # {3,4} (intersección)
  ```

  Los conjuntos son útiles para operaciones matemáticas rápidas (unión, intersección, diferencia) y para eliminar duplicados en una secuencia.

En resumen, cada estructura de datos se elige según la necesidad: listas/tuplas para colecciones ordenadas, diccionarios para mapeos clave-valor, conjuntos para colecciones únicas sin orden. Estas estructuras tienen métodos propios (p.ej. `.append()`, `.pop()`, `.union()`, etc.) y se cubren en la documentación oficial de tipos incorporados.

## 6. Manejo de excepciones

En Python, los errores en tiempo de ejecución disparan **excepciones**. Para evitar que el programa termine abruptamente, se usan bloques `try/except`:

```python
try:
    x = int(input("Número: "))
    resultado = 10 / x
    print("Resultado =", resultado)
except ValueError:
    print("Error: debes ingresar un número válido.")
except ZeroDivisionError:
    print("Error: división por cero.")
else:
    print("Todo fue bien.")
finally:
    print("Bloque finally: se ejecuta siempre, ocurra error o no.")
```

* **`try`:** Se coloca el código que puede fallar.
* **`except`:** Captura excepciones específicas y maneja el error. Se puede usar múltiples `except` para distintos tipos (por ejemplo `ValueError`, `KeyError`, etc.).
* **`else`:** (opcional) código a ejecutar si *no* ocurrió ninguna excepción en el `try`.
* **`finally`:** (opcional) código que se ejecuta siempre, incluso si hubo excepción; útil para limpiar recursos abiertos.

Para **lanzar excepciones** nosotros mismos se usa `raise`. Por ejemplo, la sentencia `raise NameError("¡Alto ahí!")` forzaría un error de tipo `NameError`. Esto sirve para señalar condiciones anómalas. Se pueden definir **excepciones personalizadas** creando una clase que herede de `Exception`:

```python
class MiError(Exception):
    pass

def chequear_edad(edad):
    if edad < 18:
        raise MiError("Edad mínima 18 años requerida.")

try:
    chequear_edad(16)
except MiError as e:
    print("Excepción personalizada:", e)
```

En este ejemplo, al llamar `chequear_edad(16)` se levanta `MiError`, que luego se captura en el bloque `except`. Esta es la forma recomendada de crear jerarquías propias de excepciones. En la práctica se heredaría de `Exception` (u otro tipo más específico) y se puede añadir información adicional en el constructor o atributos.

## 7. Programación orientada a objetos (POO)

Python soporta POO con **clases y objetos**. Para definir una clase se usa la palabra clave `class`. Ejemplo básico:

```python
class Persona:
    """Clase que representa una persona."""
    def __init__(self, nombre, edad):
        self.nombre = nombre  # atributo de instancia
        self.edad = edad

    def saludar(self):
        """Método que devuelve un saludo."""
        return f"Hola, soy {self.nombre} y tengo {self.edad} años."
    
    def __str__(self):
        """Representación en texto (p.ej. para print)."""
        return f"{self.nombre}, {self.edad} años"

# Crear instancia:
p = Persona("Ana", 30)
print(p.saludar())     # Hola, soy Ana y tengo 30 años.
print(p)               # Usa __str__: Ana, 30 años
```

* `__init__(self, ...)` es el **constructor**; se ejecuta al crear un objeto. Los parámetros después de `self` son los argumentos para inicializar.
* `self` representa la instancia actual. Los atributos se definen como `self.atributo = valor`.
* `__str__(self)` es un método especial para definir cómo se convierte el objeto a cadena (por ejemplo, al usar `print(obj)`). Al llamarse `print(p)`, Python utiliza `p.__str__()`. Si no se define `__str__`, se mostrará algo como `<__main__.Persona object at 0x...>`.
* **Herencia:** Una clase puede heredar de otra. Ejemplo:

  ```python
  class Empleado(Persona):
      def __init__(self, nombre, edad, salario):
          super().__init__(nombre, edad)  # llama al __init__ de Persona
          self.salario = salario

      def __str__(self):
          return f"{self.nombre}, salario: {self.salario}€"

  e = Empleado("Luis", 28, 2500)
  print(e)  # Luis, salario: 2500€
  ```

  Aquí `Empleado` hereda de `Persona`. Se usa `super()` para invocar el constructor de la clase base y así inicializar sus atributos. En POO, esto facilita reutilizar código de la clase padre mientras se añaden nuevos atributos o métodos en la subclase.
* **Encapsulamiento:** Por convención, los atributos “protegidos” se nombran con un guión bajo inicial (`_valor`) y los privados con dos guiones bajos (`__secreto`). Python no impide el acceso, pero convierte los nombres con dos guiones iniciando un proceso de *name mangling*. Por ejemplo:

  ```python
  class Contador:
      def __init__(self):
          self._valor = 0
          self.__secreto = 42
      def incrementar(self):
          self._valor += 1

  c = Contador()
  # c._valor es accesible (pero indicando convención de interno).
  # c.__secreto daría error, internamente se guarda como _Contador__secreto.
  ```

  En general, se sigue la convención de PEP 8 para nombres (ver sección de Buenas prácticas). La documentación oficial de POO en Python expone estos conceptos en detalle.

## 8. Módulos y paquetes

* **Módulos:** Son archivos `.py` que agrupan código (funciones, clases, variables). Por ejemplo, podemos crear un archivo `aritmetica.py` con funciones matemáticas:

  ```python
  # aritmetica.py
  def sumar(a, b):
      return a + b
  def restar(a, b):
      return a - b
  ```

  Luego, en otro archivo del mismo directorio podemos importar y usar esas funciones:

  ```python
  import aritmetica
  print(aritmetica.sumar(7, 5))  # 12
  ```

  Como explica RecursosPython, *“un módulo es un archivo de Python cuyos objetos (funciones, clases, excepciones, etc.) pueden ser accedidos desde otro archivo”*. También es posible importar elementos específicos: `from aritmetica import sumar` permite usar directamente `sumar(7,5)`.

* **Paquetes:** Son carpetas que contienen módulos (y un archivo especial `__init__.py`). Por ejemplo, podríamos crear:

  ```
  matematica/
      __init__.py
      aritmetica.py
      geometria.py
  ```

  Aquí `matematica` es un paquete. Para usarlo:

  ```python
  import matematica.aritmetica
  print(matematica.aritmetica.sumar(7, 5))  # 12
  ```

  O bien:

  ```python
  from matematica.aritmetica import sumar
  print(sumar(7, 5))
  ```

  El tutorial de Recursospython define así un paquete: *“Una carpeta que contiene varios módulos. ... Debe contener siempre un archivo `__init__.py` (por el momento vacío) para que Python entienda que se trata de un paquete y no de una simple carpeta.”*. Los paquetes permiten organizar el código en grandes proyectos.

* **Biblioteca estándar:** Python incluye muchos módulos/packs oficiales para distintas tareas. Ejemplos populares:

  * `math` (funciones matemáticas avanzadas, constantes como `pi`),
  * `random` (números aleatorios),
  * `datetime` (fechas y horas),
  * `os` (operaciones de sistema de archivos, entorno),
  * `sys` (variables del intérprete, argumentos de línea de comandos, ruta de módulos, etc.).

  Ejemplo de uso:

  ```python
  import math, random, datetime, os, sys

  print(math.sqrt(16))                  # 4.0
  print(random.randint(1, 10))         # número aleatorio 1-10
  print(datetime.datetime.now())       # fecha y hora actuales
  print(os.getcwd())                   # directorio de trabajo actual
  print(sys.version)                   # versión de Python
  ```

  Estos módulos se importan con `import nombre_modulo`. Muchos otros (como `json`, `re`, `sys`, `os`, etc.) están documentados en la **referencia de la biblioteca estándar de Python**.

## 9. Buenas prácticas

Para escribir código Python claro y mantenible, se siguen convenciones y estilos:

* **PEP 8 (estilo de código):** Es la guía oficial de estilo de Python. Recomienda, por ejemplo, usar indentación de 4 espacios, líneas de longitud máxima \~79 caracteres, y mantener consistencia. Algunos puntos clave:

  * **Nombres de funciones y variables:** en minúsculas con palabras separadas por guiones bajos (`snake_case`), p.ej. `mi_funcion()`.
  * **Nombres de clases:** con la Convención CapWords (iniciando cada palabra con mayúscula), p.ej. `MiClase`.
  * **Nombres constantes:** en mayúsculas con guiones bajos (`UPPER_CASE`), por ejemplo `MAX_LIMITE`.
  * **Espacios:** una línea en blanco para separar funciones/clases grandes, espacios alrededor de operadores, etc.
* **Docstrings:** Cada módulo, función y clase pública debe llevar documentación interna (docstring) al inicio, encerrada en triple comillas (`"""Descripción"""`). Por ejemplo:

  ```python
  def calcular_area(base, altura):
      """
      Calcula el área de un triángulo dado su base y altura.
      Argumentos:
          base (float): longitud de la base.
          altura (float): altura del triángulo.
      Retorna:
          float: área calculada.
      """
      return (base * altura) / 2
  ```

  Estas cadenas son accesibles en tiempo de ejecución vía el atributo `.__doc__` del objeto y herramientas de documentación pueden extraerlas (PEP 257 define las convenciones de docstring).

  * **Convenciones de nombres:** Se mencionó PEP 8 (ver arriba). Además, se usa `_variable` como convención de “privado” y `__var` para nombre-mangling. Los nombres de módulos deben ser cortos y minúsculos (`mimodulo.py`).
  
  * **Estructura de proyectos:** En proyectos más grandes se suelen organizar carpetas, por ejemplo:

  ```
  mi_proyecto/
      README.md
      setup.py  (o pyproject.toml)
      src/      
          moduloprincipal.py
          paquete/
              __init__.py
              submodulo.py
      tests/
          test_moduloprincipal.py
  ```

  Es común usar un entorno virtual (`venv`) para aislar dependencias (ver siguiente sección). Documentar con un README e incluir un archivo de requerimientos (`requirements.txt`) o utilizar herramientas como Poetry también se considera buena práctica.

## 10. Depuración y pruebas

* **`assert`:** Se usa para comprobar condiciones que **deben ser verdad**. Si la condición es falsa, lanza un `AssertionError`. Por ejemplo:

  ```python
  x = -5
  assert x >= 0, "x debe ser no negativo"
  ```

  Si `x` fuera negativo, el programa se detendría mostrando `"AssertionError: x debe ser no negativo"`. Es útil en desarrollo para verificar invariantes. En modo optimizado (`python -O`), las aserciones se ignoran.

* **Pruebas unitarias:** Python incluye el módulo `unittest` para automatizar pruebas. Se definen clases que heredan de `unittest.TestCase` y métodos que empiezan con `test_`. Dentro, se usan métodos como `self.assertEqual()`, `self.assertTrue()`, etc., para verificar comportamientos esperados. Ejemplo básico (tomado de la documentación oficial):

  ```python
  import unittest

  class TestOperaciones(unittest.TestCase):
      def test_suma(self):
          self.assertEqual(1 + 1, 2)

      def test_upper(self):
          self.assertTrue("hola".upper() == "HOLA")

  if __name__ == '__main__':
      unittest.main()
  ```

  En este caso, `unittest` ejecutará cada método `test_*`, reportando qué pasó. Como indica la documentación: *“Para crear un caso de prueba se genera una subclase de `unittest.TestCase`. Las pruebas se definen con métodos cuyos nombres comienzan por `test`. El corazón de cada prueba son llamadas a `assertEqual()`, `assertTrue()`, etc., en lugar de la sentencia `assert`, para que el ejecutor pueda recopilar los resultados”*.

* **Depuración básica:** Para encontrar errores comunes se puede usar herramientas como el debugger integrado (`pdb`), o imprimir valores intermedios. Además, al leer trazas de error (`Traceback`) se identifica el tipo de excepción y la línea donde ocurrió. Errores frecuentes incluyen: `SyntaxError` (error en la sintaxis), `NameError` (uso de variable no definida), `TypeError`, `IndexError`, `KeyError`, etc. Manejar estos con `try/except` ayuda a crear programas robustos.

## 11. Herramientas y entornos

Para desarrollar en Python existen varias herramientas:

* **Editores/IDEs:** Recomendados PyCharm (de JetBrains, con versión Community gratuita) o VS Code (editor ligero con extensión de Python). También Spyder, Sublime Text o editores de texto simples funcionan. Estas herramientas ofrecen resaltado de sintaxis, autocompletado, depuración integrada y demás ayudas.
* **Notebooks:** Jupyter Notebook y JupyterLab permiten escribir código Python en un entorno interactivo, mezclando texto, ecuaciones y gráficos. Son muy usados en ciencia de datos y enseñanza.
* **Entornos virtuales:** Es crucial aislar los proyectos. Python trae el módulo `venv` para crear entornos virtuales ligeros: cada entorno tiene su propio intérprete y librerías independientes. Por ejemplo:

  ```bash
  python3 -m venv venv       # crea el entorno en la carpeta 'venv'
  source venv/bin/activate   # (Unix) lo activa
  venv\Scripts\activate      # (Windows)
  ```

  Una vez activado, instalar paquetes con `pip install paquete` los deja sólo en ese entorno. El documento oficial explica que *“un entorno virtual contiene un intérprete de Python específico y librerías necesarias para soportar un proyecto... aislados de otros entornos y del sistema”*.

* **Gestión de paquetes:** Python usa `pip` para instalar paquetes desde el repositorio PyPI. Se suele usar un archivo `requirements.txt` o herramientas de empaquetado (`setuptools`, `poetry`) para especificar dependencias.
* **Otras herramientas:** Linters como `flake8`, formateadores como `black`, y herramientas de documentación (`Sphinx`) son comunes en equipos profesionales. Sistemas de control de versiones (Git) son estándar en desarrollo de software.

En resumen, un buen entorno de trabajo Python incluye un editor o IDE de confianza, un entorno virtual para cada proyecto, y uso de la línea de comandos para instalar/ejecutar. Aprender a usar la línea `python`, manejar paquetes con `pip` y usar depuradores hará la programación en Python más eficaz.

**Referencias:** Para profundizar, la [documentación oficial de Python](https://docs.python.org/es/3/), tutoriales educativos y recursos como Real Python, DataCamp, o libros especializados son excelentes guías. Varios extractos de documentación se han citado arriba. Estos recursos cubren cada tema con más detalle y ejemplos adicionales.
