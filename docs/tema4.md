# 4. Modelos Pre-entrenados en IA y cloud-computing

Los **modelos pre-entrenados** son redes neuronales entrenadas con grandes volúmenes de datos genéricos (texto, imágenes, audio, etc.) antes de ser aplicados a tareas específicas. Estos modelos han capturado **representaciones** de conocimiento útil (patrones, relaciones semánticas, características visuales) que pueden reutilizarse. En lugar de entrenar un modelo desde cero, se parte de uno ya entrenado y se ajusta a la tarea concreta (aprendizaje por transferencia). Entre sus **ventajas** destacan:

* **Ahorro de tiempo y recursos:** se evita el costoso entrenamiento inicial con grandes datos.
* **Mejora de precisión:** al aprovechar conocimiento previo de datos extensos y diversos, suelen obtener mejores resultados que entrenamientos desde cero.
* **Versatilidad:** permiten adaptar un único modelo base a múltiples aplicaciones mediante técnicas como afinamiento (fine-tuning).
* **Accesibilidad:** democratizan la IA, ya que con pocos datos o recursos limitados se pueden lograr modelos competitivos.

En la siguiente figura se ilustra cómo el aprendizaje profundo (deep learning, DL) es un subconjunto del *machine learning*, que a su vez es parte de la *inteligencia artificial*; los modelos pre-entrenados suelen ser de DL (p. ej. redes neuronales profundas):

![Diagrama IA-ML-DL](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/AI-ML-DL.svg/543px-AI-ML-DL.svg.png).

## Tipos de Modelos Pre-entrenados

En función de los datos y tareas, existen diversas categorías de modelos pre-entrenados:

* **Modelos de Lenguaje (LLMs):** Redes de gran tamaño entrenadas con corpus textuales masivos. Ejemplos notables son GPT (OpenAI), BERT y T5 (Google). Estos modelos aprenden a predecir palabras o convertir texto en vectores de características durante el pre-entrenamiento; luego se ajustan (fine-tuning) con datos específicos para tareas (clasificación, traducción, pregunta-respuesta). La fase de preentrenamiento suele implicar tareas como *enmascarar palabras* o *predicción de token siguiente*, mientras que el ajuste fino adapta el modelo a una nueva tarea particular.

* **Visión por Computador:** Modelos entrenados con imágenes. Por ejemplo, **YOLO** (You Only Look Once) para detección de objetos, **EfficientNet** para clasificación de imágenes y **ResNet**, **MobileNet**, etc. Recientemente, modelos como **CLIP** (de OpenAI) aprenden conceptos visuales a partir de descripciones en texto; CLIP puede aplicarse a tareas de clasificación visual dando los nombres de las categorías que se desean reconocer, logrando capacidades de *zero-shot* similares a GPT-3.

* **Audio y Voz:** Modelos de reconocimiento y procesamiento de audio. Por ejemplo, **Whisper** (OpenAI) es un modelo de transcripción de voz a texto entrenado con grandes cantidades de audio multilingüe. Otro ejemplo es **Wav2Vec** (de Meta), modelo auto-supervisado de reconocimiento de voz. Estos modelos capturan características de señales sonoras que luego pueden afinarse para tareas específicas (reconocimiento de emociones, transcripción, detección de palabras clave).

* **Multimodales:** Modelos que procesan simultáneamente diferentes modalidades (texto, imagen, audio, video). Además de CLIP, destacan **DALL·E** (OpenAI) para generación de imágenes a partir de texto, **FLAVA** (Facebook) o **VirTex** (NVIDIA) para visión-texto, y las versiones multimodales de GPT-4 (texto e imágenes). Estos modelos combinan los conocimientos de lenguaje natural y visión/otros datos, permitiendo tareas como búsqueda de imágenes por texto, descripción automática de imágenes o generación creativa de contenido.

## Repositorios de Modelos Pre-entrenados

Existen plataformas y bibliotecas donde se pueden descargar miles de modelos pre-entrenados:

* **Hugging Face (Model Hub):** Biblioteca líder en NLP y ML. Ofrece una amplia colección de modelos (BERT, GPT, T5, Whisper, Stable Diffusion, etc.) en formato fácil de usar. El *Model Hub* de Hugging Face es un repositorio público con modelos entrenados (p. ej. BLOOM, BERT multilingüe). Se descargan localmente con la librería `transformers` (ej. `from transformers import AutoModel; AutoModel.from_pretrained("bert-base-cased")`).

* **TensorFlow Hub:** Biblioteca de Google con módulos y modelos listos para reutilizar. Permite usar con pocas líneas modelos populares (BERT, FastText, Faster R-CNN, etc.). Por ejemplo:

  ```python
  import tensorflow_hub as hub
  model = hub.KerasLayer("https://tfhub.dev/google/nnlm-en-dim128/2")
  embeddings = model(["The rain in Spain."])
  ```

  Como se describe en la documentación de TensorFlow Hub, basta con instalar `tensorflow_hub` y cargar el módulo deseado (texto, imágenes, audio). Además, Google ofrece un **TensorFlow Model Zoo** especializado en visión, con modelos para detección, segmentación, etc..

* **PyTorch Hub (Torchvision):** PyTorch dispone de modelos pre-entrenados para visión en su paquete `torchvision`. Por ejemplo, instanciando `torchvision.models.resnet50(pretrained=True)` descarga pesos en ImageNet automáticamente. También existe `torch.hub.load()` para obtener modelos de repositorios públicos.

* **Otros repositorios y “Model Zoos”:** Existen repositorios como **ONNX Model Zoo**, **Model Zoo** de MXNet, TensorFlow Model Garden, y sitios como Papers with Code. En general, los hubs de modelos (p. ej. Hugging Face, TensorFlow Hub, PyTorch Hub) y los model zoos reducen drásticamente el esfuerzo de desarrollo al ofrecer un inicio rápido con modelos sofisticados.

## Descarga, Instalación y Adaptación de Modelos

Para usar un modelo pre-entrenado, típicamente se instala la biblioteca correspondiente (por ejemplo, `pip install transformers` o `pip install tensorflow_hub`). Luego se carga el modelo deseado y sus pesos. Por ejemplo, con Hugging Face:

```python
from transformers import pipeline
clf = pipeline("sentiment-analysis")  # carga un modelo pre-entrenado de análisis de sentimiento
print(clf("La IA mejora nuestras vidas."))
```

Para TensorFlow Hub se instalan módulos con `hub.KerasLayer`. En PyTorch se emplea `torch.hub.load` o `torchvision.models` para descargar y usar pesos pre-entrenados.

Una vez descargado, el modelo puede **ajustarse o modificarse**:

* **Ajuste fino (fine-tuning):** Se reentrena parcialmente el modelo con datos de la tarea específica, manteniendo gran parte de los pesos originales. El modelo se “afina” modificando sus parámetros para adaptarse mejor al dominio objetivo.
* **Ingeniería de *prompts* (prompt engineering):** En el caso de LLMs, se diseñan y refinan las instrucciones o preguntas (*prompts*) que se le dan al modelo para obtener respuestas concretas. Una buena formulación de prompt puede guiar al modelo de lenguaje hacia el resultado deseado sin necesidad de entrenamiento adicional.
* **Aprendizaje por transferencia (Transfer Learning):** El modelo pre-entrenado actúa como base de conocimiento. Al reutilizarlo se aprovecha el “aprendizaje” de datos anteriores, reduciendo tiempo y recursos. Por ejemplo, se puede congelar la mayoría de capas (bloquear sus pesos) y solo entrenar nuevas capas finales con datos locales. Esto permite obtener buenos resultados aún con conjuntos de datos pequeños.
* **Destilación de conocimiento (Knowledge Distillation):** Técnica para crear un modelo más compacto. Un modelo grande (“profesor”) guía a uno más pequeño (“estudiante”) imitando sus salidas. La destilación entrena al estudiante con las predicciones del profesor, logrando que el modelo ligero aprenda el mismo comportamiento. Esto es útil para desplegar modelos eficientemente en dispositivos limitados.

## Servicios de IA en la Nube

Las principales plataformas cloud ofrecen servicios gestionados de IA basados en modelos pre-entrenados y AutoML. A continuación se describen los más relevantes:

* **Google Cloud Platform:**

  * **Vertex AI:** Plataforma unificada de ML que simplifica todo el ciclo de vida (datos, entrenamiento, despliegue). Permite desarrollar y escalar modelos de IA empresariales. Incluye herramientas para preparar datos, entrenar modelos personalizados (TensorFlow, PyTorch, AutoML) e implementar inferencias.
  * **AutoML:** Con AutoML de Google se pueden entrenar modelos personalizados de alta calidad con poca experiencia en ML. Ofrece soluciones “sin código” para visión, video, texto, traducción, etc.
  * **Vision AI:** Servicio de visión cognitiva con API que automatiza tareas de análisis de imágenes y vídeo. Se accede a modelos avanzados para detección de objetos, OCR, etiquetado de imágenes, etc.. Con Vision AI se pueden extraer texto de documentos, detectar rostros o analizar escenas de manera sencilla.
  * **Dialogflow:** Plataforma de NLP para crear agentes conversacionales (chatbots). Usa comprensión de lenguaje natural para interpretar la intención del usuario y generar respuestas. Se integra con canales de voz y chat populares.

* **Amazon Web Services (AWS):**

  * **SageMaker (AI):** Plataforma de ML totalmente gestionada que unifica datos, análisis e IA. Permite preparar datos, entrenar y desplegar modelos de ML a escala. SageMaker proporciona entornos de notebooks, algoritmos predefinidos y administración integrada de modelos.
  * **Rekognition:** Servicio de visión que automatiza el reconocimiento de imágenes y vídeo sin experiencia en ML. Permite detectar objetos, texto, escenas y rostros (reconocimiento facial) en imágenes/vídeos. Incluye API fáciles de usar para analizar archivos en Amazon S3.
  * **Comprehend:** Servicio de NLP que extrae insights de texto. Identifica entidades, sentimientos, lenguaje, temas y relaciones en documentos no estructurados. Facilita análisis de opiniones, categorización de texto y generación de resúmenes automáticos.
  * **Lex:** Servicio para construir interfaces conversacionales de voz y texto. Utiliza la tecnología del motor de Alexa para crear chatbots inteligentes sin necesidad de experiencia profunda en ML. Lex gestiona el flujo de diálogo y reconoce intenciones del usuario mediante NLP/ASR.
  * **Translate:** Servicio de traducción automática neuronal de idiomas. Permite traducir texto entre decenas de idiomas de manera escalable. Por ejemplo, *Amazon Translate* ofrece traducción de alta calidad bajo demanda.
  * **Otros servicios:** AWS incluye también **Polly** (texto-a-voz), **Transcribe** (voz a texto), **Comprehend Medical** (NLP para datos de salud), etc., todos aprovechando modelos pre-entrenados internos.

* **Microsoft Azure:**

  * **Azure Machine Learning:** Servicio PaaS para el ciclo de vida ML extremo a extremo. Facilita la creación, entrenamiento, despliegue y administración de modelos con herramientas colaborativas. Compatible con frameworks populares e incluye capacidades de AutoML y MLOps.
  * **Cognitive Services (Azure AI):** Conjunto de APIs preconstruidas para visión, lenguaje, voz, decisión, etc. Por ejemplo, **Computer Vision** analiza imágenes (OCR, clasificación, segmentación), **Text Analytics** extrae sentimiento, entidades y clave de texto, **Speech Services** convierte voz en texto y viceversa. Estos servicios permiten añadir rápidamente funcionalidades de IA a aplicaciones sin entrenar modelos. Azure AI ofrece además **Azure OpenAI Service** (acceso a modelos GPT de OpenAI en la nube de Microsoft).

* **IBM Cloud (Watson):**

  * **Watson Assistant:** Plataforma para crear asistentes virtuales conversacionales. Permite definir intenciones y flujos de diálogo con NLP integrado. Está basada en la misma tecnología de IBM Watson y admite despliegues en cloud o on-premises.
  * **Watson Natural Language Understanding (NLU):** Extrae significado de texto (sentimiento, conceptos, entidades, relaciones) usando deep learning.
  * **Watson Speech to Text:** Convierte audio en texto mediante modelos de reconocimiento de voz entrenados. Soporta múltiples idiomas y se puede personalizar para dominios específicos.
  * **Otros Watson:** Servicios para traducción (Language Translator), análisis de imágenes (Visual Recognition), extracción de conocimientos (Discovery), etc.

* **OpenAI (API):**

  * Ofrece acceso a modelos de vanguardia como **GPT-4** (texto y visión multimodal), **Codex** (generación de código), **DALL·E** (imágenes a partir de texto) y **Whisper** (voz a texto). Estos modelos se acceden mediante una API REST.
  * La **documentación oficial** de la API describe casos de uso (chatbots, generación de texto, soporte al desarrollador, etc.), ejemplos de código y buenas prácticas.
  * **Precios y licencias:** El uso de la API se cobra por consumo de tokens. Por ejemplo, GPT-4.1 cobra aproximadamente 2 USD por 1M de tokens de entrada y 8 USD por 1M de tokens de salida. OpenAI gestiona versiones de modelo y requisitos de licencia en su portal. (Los modelos de OpenAI son propiedad de OpenAI y se usan bajo licencia comercial).

A continuación se muestra un resumen de servicios principales por proveedor (no exhaustivo):

| Plataforma     | Servicios destacados                                    |
| -------------- | ------------------------------------------------------- |
| **GCP**        | Vertex AI, AutoML, Vision AI, Dialogflow                |
| **AWS**        | SageMaker, Rekognition, Comprehend, Lex, Translate      |
| **Azure**      | Azure ML, Computer Vision, Speech, Language, Translator |
| **IBM Watson** | Assistant, NLU, Speech-to-Text, Language Translator     |
| **OpenAI**     | GPT-4, Codex, DALL·E, Whisper (vía API)                 |

## Casos de Uso y Ejemplos Prácticos

Los modelos pre-entrenados y servicios cloud pueden aplicarse en infinidad de escenarios. A modo de ejemplo:

* **Clasificación de texto con modelos pre-entrenados:** usando Hugging Face Transformers se puede clasificar opiniones o detectar spam con pocas líneas de código. Por ejemplo:

  ```python
  from transformers import pipeline
  sentiment_analyzer = pipeline("sentiment-analysis") 
  result = sentiment_analyzer("La inteligencia artificial está revolucionando la tecnología.")
  print(result)  # e.g. [{'label': 'POSITIVE', 'score': 0.99}]
  ```

  Este código carga un modelo entrenado en análisis de sentimiento y evalúa una frase.

* **Detección de objetos en imágenes:** se puede usar un servicio en la nube o un modelo local. Por ejemplo, con AWS Rekognition en Python (bastan credenciales configuradas):

  ```python
  import boto3
  client = boto3.client("rekognition")
  with open("imagen.jpg", "rb") as img:
      resp = client.detect_labels(Image={"Bytes": img.read()})
  labels = [label['Name'] for label in resp['Labels']]
  print(labels)  # e.g. ['Person', 'Bicycle', 'Helmet', ...]
  ```

  Este fragmento envía la imagen a Rekognition y recibe etiquetas detectadas.

* **Análisis de imágenes con Google Vision AI:** usando la librería de cliente de GCP:

  ```python
  from google.cloud import vision
  client = vision.ImageAnnotatorClient()
  with open("imagen.jpg", "rb") as img:
      content = img.read()
  image = vision.Image(content=content)
  response = client.label_detection(image=image)
  labels = [l.description for l in response.label_annotations]
  print(labels)  # e.g. ['mountain', 'snow', 'landscape', ...]
  ```

  Con Vision AI se obtienen etiquetas, texto (OCR), rostros y otros atributos sin entrenar modelos propios.

* **Chatbot conversacional con GPT-4:** mediante la API de OpenAI y su biblioteca Python:

  ```python
  import openai
  openai.api_key = "TU_API_KEY"
  resp = openai.ChatCompletion.create(
      model="gpt-4o",
      messages=[{"role": "user", "content": "¿Quién escribió Cien años de soledad?"}]
  )
  print(resp.choices[0].message.content)
  ```

  Esto consulta a GPT-4 y devuelve la respuesta generada (“Gabriel García Márquez”).

Estos ejemplos ilustran cómo, con pocos pasos, se aprovechan modelos pre-entrenados o servicios cloud para tareas de **NLP**, **visión por computador**, **voz** y otros. La combinación de modelos potentes y recursos en la nube acelera el desarrollo de aplicaciones de IA avanzadas. Cada proveedor ofrece además **documentación**, **tutoriales** y SDKs detallados para integrar estos servicios, así como mecanismos de **control de versiones** y **seguimiento de costos** (por ejemplo, alertas de presupuesto en la nube o límites de token en las API).
