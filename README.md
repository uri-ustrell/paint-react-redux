## Github Page
para no tener que instalarlo, puedes echarle un vistazo aquí:
### https://uri-ustrell.github.io/paint-react-redux/

## Install
```
git clone git@github.com:uri-ustrell/paint-react-redux.git
cd paint-react-redux
npm install
```

## Run or Test
`npm start`
`npm test`

### Pensamiento inicial:
> "Nunca he desarrollado una aplicación orientada al _drawing_ en HTML."

## CUADERNO DE BITACORA

### Canvas
Lo primero que hago es una búsqueda de librerías que me faciliten una **API** ágil para implementar este comportamiento en un canvas.
Después de descartar unas cuantas, tengo 3 sobre la mesa: **paper.js**, **fabric.js** y **konva.js**. Entiendo que cualquiera de ellas me serviría para el propósito que me planteo e incluso permitirían una buena escalabilidad del proyecto.

Observo en **GitHub** que **paper.js** no tiene _release_ actualizados, mientras que las otras dos sí. La descarto.
Entre **Fabric** y **Konva**. Veo que, aunque **Konva** tiene menos estrellas en **GitHub**, es más usado actualmente en proyectos de terceros.

Después de echar un segundo vistazo a las _landings_ de ambas librerías, me doy cuenta que **Konvas** cuenta con documentación específica para **Vue** y **React**. Aunque no es mucha (la documentación),
esto me ayuda a tomar dos decisiones: **React + Konva**.

-------------------------------

### Stack (_steady?_)
- ¿Por qué React?

Ya era una idea que tenía des del principio. Es una librería / _framework_ que considero excelente en muchísimos aspectos: **escalabilidad, _functional programming_, _testing_, componentes, Redux(state management)**...

Hay que tener muy en cuenta el **_state_** en una aplicación de este tipo, dónde todas las acciones influencian o implican la mayoría de componentes. El _state_ está muy relacionado con la escalabilidad, por eso **Redux** es un gran 2 en 1.

En cuanto a **testing**, ya que **React Testing Library** utiliza **Jest** considero que me será bastante factible de aplicar, tanto como me sea posible, los principios **TDD**.

Es muy posible que incorpore **Enzyme** si necesito implementar a mi manera el _render-test_ en vez del nativo. Estoy más acostumbrado a **Enzyme**, la comodidad es la razón principal a parte de las ventajas de la herramienta.

Además, teniendo en cuenta la demanda de **_cross-platform_** de las especificaciones del proyecto, creo que el uso de **Babel** y **Webpack** son adecuados, sino imprescindibles.

Como contrapunto, hay que tener en cuenta que **React** genera un _bundles_ un poco pesados. Aun así, para mí, sigue siendo una de las mejores opciones para implementar una app que requiere este nivel de interacción.

Usaré la versión oficial de **create-react-app** por cuestión de tiempo. Yo prefiero el diseño propio desde zero de forma que controle por mí mismo las **dependencias** a usar, y no empezar con un _bunch_ de dependencias que quizás ni use y no puedo controlar directamente des del **_package_**. Pero **Create-react-app** está muy bien diseñada y es una forma muy eficaz de empezar una **SPA** en tiempo record. En cuanto a dependencias, en ella se incluyen la mayoría de las que necesito.

Una vez resuelto el _stack_ principal (React, Redux, Jest+Enzyme, Konva, Webpack, Babel). Inicio la app y hago una prueba rápida de Konva, esto me permitirá sacar conclusiones de su uso y encontrar documentación.

-------------------------------
### Arquitectura (_ready?_)

Bien, trasteando un poco la KonvaJS y, sobre todo, parcheando códigos de terceros :P para crear un _free drawing_ en un lienzo. He ido tomando algunas decisiones.

Visualizando la App me hago una idea de 2 grandes componentes **Tools** y **Display**.
En el segundo es donde pintaré el **canvas**, pero prefiero dejarlo dentro de otro componente ya que es probable que en un futuro pueda haber más de un lienzo o incluso información adicional como la posición del puntero, pero ejemplo.

- Entonces los componentes serán:
```
app
|-display
|---canvas
|-tools
|---Palette
|-----Color
|---HistoryNavigator
|-----StepMove
|---BrushWeigh
|-----WeightOption
```
Mi **Canvas** inicial deberá mejorar un poco pero esto vendrá más adelante (lo importante es que se puede pintar en él).

-------------------------------
### _GO! GO! GO!_

> "Es momento de empezar la casa por los fundamentos."

Al menos de momento, decido que el **Canvas** necesita ser un **stateful component**. No necesito pasar el todo el _state_ del mismo al resto de componentes. Evidentemente con alguna excepción: el historial (deshacer/rehacer) por ejemplo. Según parece por la documentación de KonvaJS, podré serializar los pasos. Esto supongo que me facilitará las cosas para el **_state handle_** desde Redux.

Para el resto, espero poder mantener al máximo los componentes en **stateless**. Así el _testing_ será más completo, podré mantener la **inmutabilidad**... En definitiva, mantenerlos como funciones puras (_functional programming_).

Empezaré creando los archivos en la estructura de carpetas que intenta emular la estructura de componentes. Más adelante seguramente añadiría un commons para los pequeños componentes más reutilizados: inputs, buttons...

Me impongo seguir un **TDD** lo máximo de estricto que sepa. Así que una vez creados 3 archivos por componente (**.js / .test.js / .css**), empiezo por los tests. Será algo tan simple como cerciorarme de que se renderizan apropiadamente.

Haré un apunte. 

- _Si bien tengo entendido que los snapshots no son propiamente TDD, ya que normalmente se crean al final del desarrollo del componente para evitar futuras modificaciones involuntarias del DOM, los considero extremadamente útiles para el desarrollo inicial también.  
Así que me permito la licencia de añadirlos solo empezar.
Me explico, una vez empiezo a modificar el layout/estructura componentes, me voy dando cuenta de exactamente a cuales de ellos estoy afectando. Así que, a mi manera, los incluyo en un TDD. Actualizar el snapshot es muy rápido y, en definitiva, ver el red-green en el test me da más sensación de control sobre las modificaciones._

-----------------------------

>¡Bien, todo luz verde en la consola! ¡sigo!

Es hora de ver algo en la pantalla, voy a dar algunos estilos a los pocos componentes que tengo así podré re-inspirarme viendo qué pasa en pantalla.

Hablando de **CSS**: opto por definir tantas variables como creo necesarias en el :root; Ya que fracciono bastante los estilos, me viene de perlas poder modificar, por ejemplo, todos los _backgrounds_ de las tools de una sola vez.

Evidentemente, esto estará en continuo _update_, según necesidad. Para ser sincero, esto seria mejor con un preprocesado usando, por ejemplo, **Sass**. Pero para esta aplicación decido hacerlo así. En el futuro, al escalarla y añadir un procesado de los estilos, solo hará falta modificar las definiciones de las variables.

-------------------------

>Ya lo tengo en pantalla, bien!

Conclusión: 

>"queda bastante por hacer".

Ahora la historia es cíclica, voy a ir añadiendo tests primarios para los componentes restantes y al tiempo que los construyo iré añadiendo CSS.

> Y así hasta el Green!

Apunte.
- _Mientras levantaba el <Canvas /> he descubierto que Kova da ciertos errores en el testing. Afortunadamente ya hay quien lo ha solventado y solo he tenido que añadir una devDependency de más. Además, he preferido optar por React Testing Library, viendo que es lo más utilizado con Konva, no es el momento de aventurarse.

Otro apunte.
- _Decido mover todos los tests a una carpeta **\__test__**. De repente he visto demasiado ruido entre los **.test.js** y las carpetas de **snapshots**. Lo prefiero un poco más límpio para navegar entre carpetas el máximo de intuitivamente.

Una vez tengo levantados los principales componentes es momento de no demorar más el _state handling_.

Hay que tomar varias decisiones además de instalar **Redux**. De hecho, este puede ser el primer paso, instalaré Redux y lo configuraré mientras pienso en los _states_ que hay que mantener. De momento descarto **Thunks** o **Saga** porque no veo dónde utilizaré una call asíncrona, pero seria tan "sencillo" como añadirlo y configurarlo.

-------------------------

> Una vez configurado Redux, me dispongo a hidratar toda la App!

Utilizo **PropTypes** de **React** para ahorrarme todo el testing relacionado con las props. Solo especifico cuáles son required y el tipo que deben ser y React se encarga del testing por mí. :P

En cuanto al **initialState**, podría ser una **mockApi**. Pero voy a plantearlo como un estado inicial hardoded, al menos al principio y por cuestión de comodidad. Lo dejaré de forma que si queremos solaparlo/mergearlo con una api, podamos hacerlo llamándolo al iniciar la **App** e iniciarlo desde el **entry point > configureStore(initialState)**. De esta forma si la _API call_ fallase, nunca nos quedaríamos sin una herramienta o feature del State, porque tendría un fallback.

------------------------------

Decido mantener el componente **<Color />** sin vincularlo al **state**, dejándolo como **presentation Component** me permitirá reutilizarlo de varias formas. Primero por lo evidente, el color. Pero después este mismo color puede ir vinculado a herramientas que no sean el pincel, o al relleno o marco de una forma, etc... Probablemente haré lo propio con el resto de Tools.

Al seleccionar color, me doy cuenta que puede haber más de una herramienta en juego (color para línia, para relleno, para marco...), por lo que prefiero separar en dos acciones distintas: seleccionar color de la paleta y dar un color al pincel.

-------------------------------

Al guardar las líneas del lienzo me aprovecharé del _state_ inmutable, de forma que solo se guardarán ahí. Esto no es ideal, pero el _stack_ (en **canvasActions**) quedará preparado para, por ejemplo, añadir 2 líneas de código y hacer un save en una supesta **API REST**. O incluso guardarlo como **cookie....** >¿porqué no?

-------------------------

Mientras empiezo a mejorar la paleta he de tomar una decisión: 
> ¿testeo con provider o exporto el componente sin Redux, dándome la opción de testear el componente "limpio" sin Redux de por medio?

Opto por la segunda, ya que la suite de Redux la testeo por separado.

---------------------------

Repetitivamente, voy haciendo lo mismo con el resto de componentes que requieren hidratarse con el initialState y/o se actualizan dependiendo del State.

Esto me lleva a crear algunos reducers y actions más. 

Apunte.
- _Para mi no hay problema en crecer a través de reducers y actions; igual que en porciones del Store. Creo, de hecho, que es la forma más ordenada de escalar la App. Aun así hago trampa en cuanto a TDD, dejo que se testee exclusivamente la inmutabilidad en los reducers, después añado suite de testing. ¿Por qué? Bueno, las actions (sobretodo si no son async) y los reducers son funciones puras muy subdivididas y por lo tanto super-rápidas de desarrollar. Esto hace que para no afectar el workflow las vaya escribiendo mientras miro el test del componente. Después, sí creo del tirón los tests manuales para el stack Redux, así prevengo futuras modificaciones.

-------------------------------

dispongo todas las actionTypes en un módulo aparte para evitar mistypings y ganar texto predictivo. Aunque siempre voy tarde con esto, después al escalar la app es una ventaja.

--------------------------------

> voy con prisas, miro el reloj... 

Retoque de estylos para responsive, fijo el scroll para mobile i...

# GAME OVER

## _credits_ 
### (¿Dónde y qué falta mejorar?)

1. Tests: 
Es evidente que alguno es redundante, aunque tiene su razón en mi cabeza :D. Además, he procurado dejar suficientes para que se vea por dónde voy, pero faltaría bastante en este campo, he procurado dejar ejemplos de todo, pero faltarían tests de :Dispatchers, reducers, click-events, etc.
También faltan algunos PropTypes.required por añadir, creo que en los stateLess components. Al no conectarlos con Redux, se me olvida de entrada.
Además, también podría haver ordenado un poco el folders tree de los tests :P

2. Error Handlings: 
Opino que harían falta algunos en la App. He optado por no seguir más por ahí por cuestión de tiempo. Disculpas de antemano. El echo de no tener async calls, también reduce mucho la posibilidad de error. Los hooks de React como useEffect, además, proporcionan un modo de solventar muchos posibles errores de carga, mala rehidratación, etc.

3. Haberlo pensado antes:
El módulo brushWeight no debería llamarse así, siguiendo la lógica final de la app, debería llamarse weights.

4. Mobile / Responsive: 
Ahora mismo no está bien optimizada para pantallas pequeñas. Viéndolo en perspectiva, redefiniría y haría un lienzo de toda la pantalla con las opciones desplegables en float buttons. Aun así, sin este desarrollo, he procurado dejarlo bastante estable para una pantalla más tipo tablet (que mobil).

- Estilos:
Faltaria reunificar apropiadamente estilos y media queries que pueden estar mejor estructurados.
