# JSON para migración de datos

En la inmobiliaria familiar están migrando la página de un proveedor a otro. Del portal antiguo pude exportar dos conjuntos de datos:
- Uno con información sobre cada publicación de inmueble (aviso) en particular. Ubicación: carpeta *json* -> `propiedades.json`
- Otro con la información de todas las imagenes subidas a la página. Ubicación: carpeta *json* -> `imagenes.json`

Bien, el implementador de la plataforma que albergará la nueva página pidió dos planillas de excel: una con la información de las propiedades, y otra con la información de las imágenes. El código de este repositorio se encarga de obtener un archivo .json para cada una de esas planillas requeridas. Dichos *.json* se generarán a partir de los exports mencionados más arriba, y se almacenarán en la carpeta *productoFinal*; sus nombres son `listado-final-propiedades.json` y `listado-final-imagenes.json`. Ambos conjuntos tienen su model correspondiente: `PropiedadTokko` y `InfoFinalImagenes` respectivamente (ver en archivo `models.ts`). 

Al margen de seleccionar la información pertinente que debe contener cada *.json* final, tuve que hacer un mapeo entre las imagenes y las propiedades ya que:
1. En el export de imagenes, éstas no contienen ninguna referencia al aviso en el cual estaban publicadas; simplemente cuentan con un ID propio que sirve para identificar cada imagen.
2. En el export de los avisos, cada aviso contiene un array con los id's de cada imagen. 

De esta manera, el  `listado-final-imagenes.json` debe tener una referencia al id del aviso que la contiene; y en eso consiste precisamente el mapeo.

------------
***Nota: las carpetas productoFinal y json no se encuentran en este repositorio por tener información sensible sobre clientes de la inmobiliaria. Se podrá mostrar sin problema en entrevistas llegado el caso**.

 
 




