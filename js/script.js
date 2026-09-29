const IMG={
"inicio": "images/salones.jpg",
  "primeros": "images/inicio.jpg",
  "sociabilidad": "images/nuevasformas.jpg",
  "salones": "images/hotel.jpg",
  "academias": "images/academias.jpg",
  "paseos": "images/paseos.jpg",
  "teatro": "images/teatro.jpg",
  "epilogo": "images/epilogo.jpg",
  // Imágenes adicionales para la galería de "Los salones" y "Academias y sociedades".
  // Sustituye estos 4 archivos por tus propias imágenes (mismo nombre, o cambia
  // la ruta aquí) y aparecerán automáticamente en su pestaña.
  "salonExtra1": "images/hotel1.jpg",
  "salonExtra2": "images/hotel2.jpg",
  "academiaExtra1": "images/academias1.jpg",
  "academiaExtra2": "images/academias2.jpg",
  // Imagen para la actividad "señala las partes del teatro" (pestaña El teatro).
  // Reemplaza el archivo images/teatro-partes.jpg por tu propio diagrama o foto,
  // y ajusta las coordenadas en ACT.teatro.puntos más abajo.
  "teatroPartes": "images/teatro-partes.jpg"
};
const VIEW={salones:['3/2','center'],academias:['16/10','center'],paseos:['4/3','right'],teatro:['3/2','center'],inicio:['16/10','center'],sociabilidad:['16/10','center'],epilogo:['16/10','center'],primeros:['16/10','center']};
const T=[
["inicio","Inicio","","La huella de las mujeres en la Ilustración","#4b1d8f",["La Ilustración fue un parteaguas para muchos movimientos sociales, entre ellos el papel de la mujer en la sociedad. Las mujeres participaron en esos procesos, pero la pregunta es cuál era su posición dentro de ellos.","Esta revista recorre los espacios donde las mujeres ganaron visibilidad en el siglo XVIII: salones, academias, paseos y teatro."],"XVIII","El siglo en que se dijo que la razón era universal, mientras las mujeres seguían excluidas de la ciudadanía."],
["primeros","Primeros pasos","Siglo XVIII","Feminismo e Ilustración","#4b1d8f",["A la mujer se la mantenía en sumisión frente al esposo, el padre y la figura patriarcal de Dios, y todo se fundamentaba en la maternidad. Esos determinismos pasaron de religiosos a científicos.","Fray Benito Jerónimo Feijoo, en su defensa de la mujer, sostuvo que el alma no es varón ni hembra y que no había base para decir que ellas eran menos capaces. La educación, aunque limitada a formar esposas y madres, abrió el camino: con la lectura nacieron círculos de pensadoras."],"4","preguntas abiertas: ¿dónde estaban las mujeres pobres?, ¿cuál era el contraste entre clases?, ¿tenían acceso a la educación? y ¿ya podemos hablar de la cuestión racial?"],
["sociabilidad","Sociabilidad","Siglo XVIII","Las nuevas formas de sociabilidad","#3a2159",["Antes de la Ilustración, la casa, la calle, la plaza y la iglesia no estaban tan separadas entre lo público y lo privado. Fue el propio siglo XVIII el que impuso la frontera rígida entre una esfera pública y masculina y una esfera privada y femenina.","Aun así, en la práctica, el salón, la academia, el paseo y el teatro desmintieron esa separación día a día. Estos cuatro espacios son los que recorremos a continuación."],],
["salones","Los salones","Siglo XVII","Los salones","#b0175e",["El salón nace en la Francia del siglo XVII, en el hotel de Rambouillet y su famosa chambre bleue. Catherine de Vivonne, marquesa de Rambouillet, reunió a mujeres y hombres de talento para conversar de arte y de ideas.","A finales del siglo XVIII todas las grandes ciudades europeas tenían salones. En España se comentaban libros llegados de Francia y política. Por primera vez, mujeres de una capa privilegiada convirtieron espacios privados en semipúblicos donde se escuchó su voz."],"XVII","siglo del origen del salón. Nació como espacio de tertulia y en el XVIII se volvió mecenas intelectual, con debates, teatro y conciertos."],
["academias","Academias","1775","Academias y sociedades","#0b7a75",["Las academias científicas no excluían a las mujeres, pero casi no iban, y las aceptadas eran las que se parecían al varón. Entre 1775 y 1787 se debatió la admisión de las damas en la Real Sociedad Económica Matritense, con José Manuel Marín como pionero.","Los argumentos eran de utilidad, de igual capacidad intelectual y de educación común. El reformismo ilustrado no llegó más lejos: una cosa era entreabrir un espacio y otra reconocer derechos ciudadanos."]],
["paseos","Los paseos","Siglo XVIII","Los paseos","#b85c00",["El paseo fue el punto donde chocaban dos fuerzas: un discurso que recluía a la mujer en lo doméstico y una práctica social donde ganaba visibilidad. Franco Rubio señala que fue el siglo XVIII el que impuso la separación rígida entre lo público y lo privado.","Bolufer distingue entre ser vista y hacerse ver: cuidar la apariencia era una estrategia de autoafirmación. Martín Gaite describe el paso del recato barroco al despejo, con el cortejo."],"3","tensiones estructuran la investigación: continuidad frente a ruptura, visibilidad como instrumento frente a agencia, y el sesgo social del corpus (mujeres nobles o burguesas)."],
["teatro","El teatro","Siglo XVIII","El teatro","#2a4bb5",["Durante el siglo XVIII, impulsado por las reformas del Conde de Aranda, el teatro español se convirtió en un instrumento ilustrado para educar al ciudadano e inculcar buenas costumbres. Este movimiento se proyectó en los tres grandes coliseos construidos por la Corona en el siglo XVII (la Cruz, el Príncipe y los Caños del Peral), donde el público femenino reflejaba la brecha social de la época: la aristocracia en los palcos y las mujeres populares en las cazuelas.El periodo contó con importantes autores como Clavijo y Fajardo, Nicolás Fernández de Moratín, Tomás de Iriarte, Mariano Nifo y Pablo de Olavide. Entre sus figuras y obras más representativas destacan Leandro Fernández de Moratín (El sí de las niñas), Don Ramón de la Cruz (La boda de Chinita, La oposición al cortejo) y María Rosa de Gálvez, referente Neoclásico y autora de piezas como Un loco hace ciento, La familia a la moda, Los figurones literarios, El egoísta y Las esclavas Amazonas."],"2","espacios, dos clases: los palcos, que mostraban el poder del esposo y la moda de la esposa, y las cazuelas, donde las mujeres populares opinaban en voz alta."],
["epilogo","Epílogo","Balance","Epílogo","#5a2a82",["En el siglo XVIII se gestaron las bases del feminismo español gracias a la apertura de nuevos espacios de sociabilidad. Según Carmen Martín Gaite, el fenómeno del cortejo y el cambio de código social permitieron la presencia pública de las mujeres casadas, abriendo fisuras en el matrimonio patriarcal tradicional. Asimismo, Gloria Franco Rubio destaca que las tertulias y salones funcionaron como redes informales de poder con influencia en la administración borbónica. Sin embargo, este avance no eliminó la subordinación legal patriarcal con una educación utilitaria enfocada solo en formar «madres educadoras» y sufrió un duro retroceso en el siglo XIX con el mito liberal del «Ángel del Hogar»."],]];
const EV=[["1600s","Hotel de Rambouillet","Catherine de Vivonne diseña su casa y su chambre bleue: nace el salón como espacio de tertulia.","💬"],
["1660","Zabaleta y el paseo","En El día de fiesta describe el paseo como cortejo ritualizado y exige a la mujer estar recogida.","🚶"],
["1673","Poulain de la Barre","Argumenta que la mente no tiene sexo y que la desigualdad viene de la costumbre, no de la naturaleza.","🧠"],
["Mediados XVIII","El cortejo","Según Martín Gaite, permite a mujeres casadas de la élite salir acompañadas, y el recato cede ante el despejo.","💃"],
["1775","Debate en la Matritense","Comienza el debate sobre admitir damas en la Real Sociedad Económica Matritense; dura hasta 1787.","🏛️"],
["1788","Junta de Damas","Tiene 22 socias, redacta estatutos y recibe el encargo de fundar la Escuela Patriótica.","📜"],
["1791","Olympe de Gouges","Publica la Declaración de los Derechos de la Mujer y de la Ciudadana, calcada de la de 1789.","✊"],
["1798","Hambruna de Madrid","Los salones y sus damas impulsan obras para dar de comer a los pobres de forma económica y eficaz.","🍞"]];
const Q=[["¿Dónde nació el salón, según el documento?",["En el hotel de Rambouillet, en Francia","En la Real Sociedad Económica Matritense","En la Escuela Patriótica","En los teatros de Madrid"],"Catherine de Vivonne lo inventó con su chambre bleue en el siglo XVII."],
["¿En qué institución se debatió entre 1775 y 1787 la admisión de las damas?",["Real Sociedad Económica Matritense","Real Academia Española","Junta de Damas","Teatro de la Cruz"],"José Manuel Marín fue pionero de esa defensa."],
["¿Cuántas socias tenía la Junta de Damas en 1788?",["22","12","50","100"],"Elaboró estatutos y fundó la Escuela Patriótica."],
["¿Dónde se ubicaban las mujeres populares en el teatro?",["En las cazuelas","En los palcos","En el escenario","En los camerinos"],"Desde ahí podían aplaudir o abuchear."],
["¿Qué valor sustituyó al recato barroco, según Martín Gaite?",["El despejo","La ociosidad","La singularidad","La maternidad"],"Soltura, conversación y visibilidad sin apuro."],
["¿Qué obra de Moratín cuestiona los matrimonios arreglados?",["El sí de las niñas","La boda de Chinita","La oposición al cortejo","Defensa de las mujeres"],"Francisca, don Diego y el amor de Carlos."],
["¿Qué escribió Fray Benito Jerónimo Feijoo en 1726?",["La Defensa de las mujeres","La Vindicación de los derechos de la mujer","El sí de las niñas","Emilio"],"Sostuvo que \"el alma no es varón ni hembra\"."],
["Según Poulain de la Barre, ¿de dónde venía la desigualdad entre hombres y mujeres?",["De la costumbre y la educación","De la naturaleza","De la voluntad divina","De la falta de razón femenina"],"Fue una de las primeras defensas racionalistas de la igualdad, en 1673."],
["¿Quién impulsó la reforma de los teatros en la segunda mitad del siglo XVIII?",["El Conde de Aranda","Carlos III","Napoleón","Manuel Godoy"],"Buscó modernizar los espacios teatrales y renovar el repertorio."],
["Según Bolufer, ¿qué distinción explica el cuidado de la apariencia en el paseo?",["Ser vista frente a hacerse ver","Ser rica frente a ser pobre","Ser casada frente a ser soltera","Vivir en la ciudad frente al campo"],"Cuidar la apariencia era una estrategia activa de autoafirmación social, no vanidad pasiva."],
["¿Cuántos espacios recorre el apartado \"Las nuevas formas de sociabilidad\"?",["4","2","6","3"],"Salones, academias, paseos y teatro."],
["Según el epílogo, el acceso a la educación o al trabajo útil...",["No alteró de forma automática la subordinación legal ni el sistema patriarcal","Acabó de inmediato con el sistema patriarcal","No tuvo ninguna relación con el feminismo","Solo benefició a las mujeres nobles"],"La educación femenina servía sobre todo para formar esposas y madres virtuosas."]];
/* Rótulos del menú superior, calcados del esquema a mano:
   1. Feminismo e Ilustración
   2. Las nuevas formas de sociabilidad
      • Salones / • Academias y sociedades / • Los paseos / • El teatro
   3. Epílogo
   Para renombrar una pestaña del menú, cambia aquí su texto. Si quitas una
   llave, esa pestaña vuelve a mostrar su rótulo automático (kicker · título). */
const NAV={
  primeros:'Feminismo e Ilustración',
  sociabilidad:'Las nuevas formas de sociabilidad',
  salones:'Salones',
  academias:'Academias y sociedades',
  paseos:'Los paseos',
  teatro:'El teatro',
  epilogo:'Epílogo'
};
/* Botones de acceso rápido que aparecen dentro del texto de una pestaña.
   "id" debe ser el id de otra pestaña de la lista T. */
const BOTONES={
  inicio:[{texto:'Empezar el recorrido', id:'primeros'}],
  salones:[{texto:'← Volver a Las nuevas formas de sociabilidad', id:'sociabilidad'}],
  academias:[{texto:'← Volver a Las nuevas formas de sociabilidad', id:'sociabilidad'}],
  paseos:[{texto:'← Volver a Las nuevas formas de sociabilidad', id:'sociabilidad'}],
  teatro:[{texto:'← Volver a Las nuevas formas de sociabilidad', id:'sociabilidad'}]
};
/* Imágenes adicionales que se muestran en una pequeña galería, justo
   debajo del texto principal de la pestaña (antes del dato grande).
   Usa las llaves de IMG de arriba, o agrega tus propias rutas. */
const GALERIA={
  salones:[IMG.salonExtra1, IMG.salonExtra2],
  academias:[IMG.academiaExtra1, IMG.academiaExtra2]
};
const menu=document.getElementById('menu'),main=document.getElementById('main');
const ids=[...T.map(t=>t[0]),"tiempo","quiz","completo"],labs=[...T.map(t=>NAV[t[0]]||(t[2]?t[2]+" · "+t[1]:t[1])),"Línea del tiempo","Quiz y resultados","Documento completo"];
function el(t,c,x){const e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e}
ids.forEach((id,i)=>{const b=el('button','',labs[i]);b.setAttribute('role','tab');b.dataset.id=id;b.onclick=()=>show(id);menu.appendChild(b);const p=el('section','panel');p.id='p-'+id;main.appendChild(p)});

/* =====================================================================
   MATERIAL DE APOYO POR PESTAÑA
   Cada pestaña del tema (inicio, primeros, sociabilidad, salones,
   academias, paseos, teatro, epilogo) puede tener UNA actividad
   interactiva debajo de su dato grande. Se arma con esta lista ACT:
   la llave es el id de la pestaña (el mismo de la lista T de arriba)
   y el valor dice qué tipo de actividad es y con qué contenido.

   Tipos disponibles (tipo: '...'):
   - 'puntos'      → puntos numerados sobre una imagen que muestran un texto al tocarlos
   - 'tarjetas'    → tarjetas que se voltean (frente/dorso)
   - 'dialogo'     → frases que se leen una por una, con "Anterior/Siguiente"
   - 'relaciona'   → juego de relacionar: toca una tarjeta de cada columna para emparejarlas
   - 'escenario'   → botones tipo menú que muestran información al tocarlos
   - 'antesdespues'→ dos columnas de comparación, con una pregunta de reflexión opcional
   - 'grafica'     → gráfica de barras sencilla, para mostrar una o más cifras
   - 'panel'       → tarjetas grandes que, al tocarlas, llevan a otra pestaña
   - 'puntosclave' → lista de "No olvides" que se recorre con Anterior/Siguiente

   Una pestaña puede tener MÁS DE UNA actividad: en vez de un objeto,
   pon una lista de objetos, por ejemplo academias: [ {...}, {...} ].

   Para quitar la actividad de una pestaña, borra su línea completa.
   Para agregar una pestaña nueva a la lista T, solo añade aquí su
   propia entrada con el mismo id.
   ===================================================================== */
const ACT = {

  primeros: {
    tipo:'tarjetas',
    titulo:'Conoce a las pensadoras y pensadores',
    // "frente" es lo que se ve primero; "dorso" aparece al tocar la tarjeta.
    tarjetas:[
      {frente:'Fray Benito Jerónimo Feijoo · 1726', dorso:'Publicó la Defensa de las mujeres y sostuvo que "el alma no es varón ni hembra".'},
      {frente:'Poulain de la Barre · 1673', dorso:'Argumentó que la mente no tiene sexo y que la desigualdad viene de la costumbre, no de la naturaleza.'},
      {frente:'Josefa Amar y Borbón · 1786', dorso:'Escribió en defensa del talento de las mujeres y de su aptitud para el gobierno y otros cargos.'},
      {frente:'Mary Wollstonecraft · 1792', dorso:'Publicó la Vindicación de los derechos de la mujer: la educación igualitaria las haría ciudadanas racionales.'},
      {frente:'Olympe de Gouges · 1791', dorso:'Escribió la Declaración de los Derechos de la Mujer y de la Ciudadana, calcada de la de 1789.'},
      {frente:'Condorcet · 1790', dorso:'Pidió el derecho de ciudadanía para las mujeres: los derechos no dependen del sexo.'}
    ]
  },
  sociabilidad: {
    tipo:'panel',
    titulo:'Elige un espacio para explorar',
    // Cada tarjeta manda a la pestaña con ese "id" (debe existir en la lista T).
    items:[
      {icono:'💬', titulo:'Salones', texto:'Tertulias literarias y políticas en espacios privados que se volvieron semipúblicos.', id:'salones'},
      {icono:'📚', titulo:'Academias y sociedades', texto:'El debate sobre si las mujeres podían integrarse a la vida académica e institucional.', id:'academias'},
      {icono:'🌳', titulo:'Los paseos', texto:'El espacio público donde la mujer ganaba visibilidad, entre el control y la agencia.', id:'paseos'},
      {icono:'🎭', titulo:'El teatro', texto:'Palcos y cazuelas: la sociabilidad teatral, dividida por clase.', id:'teatro'}
    ]
  },
  
  // "academias" tiene DOS actividades: el juego de relacionar y, debajo,
  // una lista de "No olvides" que se recorre con Anterior/Siguiente.
  academias: [

  {
    tipo:'puntosclave',
    titulo:'No olvides:',
    // Cada texto es un punto de la lista; se recorren uno por uno.
    puntos:[
      'Las academias científicas no excluían a las mujeres por ley, pero casi no acudían.',
      'El debate sobre admitir damas en la Real Sociedad Económica Matritense duró de 1775 a 1787.',
      'José Manuel Marín fue pionero en defender esa admisión.',
      'En 1788 la Junta de Damas ya tenía 22 socias.',
      'Abrir un espacio no era lo mismo que reconocer derechos ciudadanos a las mujeres.'
    ]
  }
  ],
  paseos: {
    tipo:'escenario',
    titulo:'Un paseo por la ciudad',
    inicial:'Toca un punto del paseo para saber qué pasaba ahí.',
    botones:[
      {etiqueta:'🌳 El paseo', texto:'Zabaleta ya describía en 1660 el paseo como un escenario de cortejo, con las damas sentadas y los galanes acercándose.'},
      {etiqueta:'💃 El cortejo', texto:'A mediados del XVIII, el cicisbeo permitía a mujeres casadas de la élite salir acompañadas por un galán, con aprobación social.'},
      {etiqueta:'👀 Ser vista', texto:'Cuidar la apariencia en el paseo no era vanidad pasiva: era una forma de reclamar el derecho a ser vista y a proyectar una identidad propia.'}
    ]
  },
  teatro: {
    tipo:'puntos',
    titulo:'Señala las partes del teatro',
    // Esta imagen es un marcador de posición (revista/images/teatro-partes.jpg).
    // Reemplázala por tu propio diagrama o foto del teatro (con el palco, la
    // cazuela y el escenario visibles) y luego ajusta x/y de cada punto para
    // que caigan sobre el lugar correcto de TU imagen.
    imagen: IMG.teatroPartes,
    puntos:[
      {x:20, y:28, titulo:'🎫 El palco', texto:'Reservado a las mujeres de la aristocracia: mostraba el poder económico del esposo y la moda de la esposa.'},
      {x:50, y:80, titulo:'🎟️ La cazuela', texto:'Al fondo de la sala, para las mujeres populares. Desde ahí podían aplaudir o abuchear al autor.'},
      {x:80, y:45, titulo:'🎭 El escenario', texto:'Ahí se representaban obras como El sí de las niñas, de Moratín, que cuestiona los matrimonios arreglados.'}
    ]
  },
  epilogo: {
    tipo:'antesdespues',
    titulo:'¿Qué cambió con la Ilustración?',
    antes:['La mujer, recluida en el papel doméstico.','Educación pensada solo para formar esposas y madres.','Sociabilidad limitada al ámbito privado.'],
    despues:['La mujer gana presencia en salones, paseos y teatro.','La educación empieza a debatirse como derecho, no solo como deber.','Nuevos espacios semipúblicos donde se escucha su voz.']
  }
};

function renderPuntos(cont, act){
  const wrap=el('div','act-puntos'), marco=el('div','puntos-marco'), img=el('img');
  img.src=act.imagen; img.alt=act.titulo||''; img.loading='lazy'; marco.appendChild(img);
  const panel=el('div','punto-panel'); panel.appendChild(el('p','','Toca un punto de la imagen.'));
  act.puntos.forEach((pt,i)=>{
    const b=el('button','punto',String(i+1)); b.style.left=pt.x+'%'; b.style.top=pt.y+'%'; b.setAttribute('aria-label',pt.titulo);
    b.onclick=()=>{panel.innerHTML='';panel.append(el('h4','',pt.titulo),el('p','',pt.texto));[...marco.querySelectorAll('.punto')].forEach(x=>x.setAttribute('aria-pressed',String(x===b)))};
    marco.appendChild(b);
  });
  wrap.append(marco,panel); cont.appendChild(wrap);
}
function renderTarjetas(cont, act){
  const grid=el('div','tarjetas');
  act.tarjetas.forEach(c=>{
    const card=el('div','tarjeta'); card.tabIndex=0; card.setAttribute('role','button'); card.setAttribute('aria-pressed','false');
    const inner=el('div','tarjeta-inner'), front=el('div','tarjeta-cara tarjeta-frente'), back=el('div','tarjeta-cara tarjeta-dorso');
    front.append(el('strong','',c.frente),el('span','','Toca para ver más')); back.appendChild(el('p','',c.dorso));
    inner.append(front,back); card.appendChild(inner);
    const flip=()=>{const on=card.classList.toggle('volteada');card.setAttribute('aria-pressed',String(on))};
    card.onclick=flip; card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip()}};
    grid.appendChild(card);
  });
  cont.appendChild(grid);
}
function renderDialogo(cont, act){
  let idx=0; const box=el('div','card dialogo'), quien=el('div','dialogo-quien'), linea=el('p','dialogo-linea'), nav=el('div','tn'), pv=el('button','btn ghost','Anterior'), nx=el('button','btn','Siguiente');
  function draw(){quien.textContent=act.lineas[idx].quien;linea.textContent='«'+act.lineas[idx].texto+'»';pv.disabled=idx===0;nx.textContent=idx===act.lineas.length-1?'Reiniciar':'Siguiente'}
  pv.onclick=()=>{idx=Math.max(0,idx-1);draw()}; nx.onclick=()=>{idx=idx===act.lineas.length-1?0:idx+1;draw()};
  nav.append(pv,nx); box.append(quien,linea,nav); draw(); cont.appendChild(box);
}
function renderRelaciona(cont, act){
  let sel=null, hechos=0; const wrap=el('div','relaciona'), colA=el('div','columna'), colB=el('div','columna'), msg=el('p','','Toca una actividad y luego su espacio.');
  const as=act.pares.map(x=>x.a).sort(()=>Math.random()-.5), bs=act.pares.map(x=>x.b).sort(()=>Math.random()-.5);
  function mk(txt,col,tipo){
    const b=el('button','opt',txt); b.dataset.tipo=tipo;
    b.onclick=()=>{
      if(b.disabled)return;
      if(!sel){sel={btn:b,txt};b.classList.add('sel');return}
      if(sel.btn===b){sel.btn.classList.remove('sel');sel=null;return}
      const esA=sel.btn.dataset.tipo==='a', a=esA?sel.txt:txt, bb=esA?txt:sel.txt, ok=act.pares.some(p=>p.a===a&&p.b===bb);
      if(ok){sel.btn.classList.remove('sel');sel.btn.classList.add('ok');b.classList.add('ok');sel.btn.disabled=true;b.disabled=true;sel=null;hechos++;msg.textContent=hechos===act.pares.length?'¡Completado! Ya relacionaste todo.':'Bien. Sigue con el resto.'}
      else{const s0=sel.btn;b.classList.add('bad');s0.classList.add('bad');msg.textContent='Esa no va junta. Intenta otra vez.';setTimeout(()=>{b.classList.remove('bad');s0.classList.remove('bad','sel')},450);sel=null}
    };
    col.appendChild(b);
  }
  as.forEach(t=>mk(t,colA,'a')); bs.forEach(t=>mk(t,colB,'b'));
  wrap.append(colA,colB); cont.append(msg,wrap);
}
function renderEscenario(cont, act){
  const men=el('div','escenario-menu'), panel=el('div','card'); panel.appendChild(el('p','',act.inicial||'Toca una opción para ver información.'));
  act.botones.forEach(b=>{
    const btn=el('button','btn ghost',b.etiqueta);
    btn.onclick=()=>{panel.innerHTML='';panel.append(el('h4','',b.etiqueta),el('p','',b.texto));[...men.children].forEach(x=>x.setAttribute('aria-pressed',String(x===btn)))};
    men.appendChild(btn);
  });
  cont.append(men,panel);
}
function renderAntesDespues(cont, act){
  const grid=el('div','antesdespues'), ca=el('div','ad-col'), cb=el('div','ad-col ad-despues');
  ca.appendChild(el('h4','','Antes')); act.antes.forEach(x=>ca.appendChild(el('p','',x)));
  cb.appendChild(el('h4','','Después')); act.despues.forEach(x=>cb.appendChild(el('p','',x)));
  grid.append(ca,cb); cont.appendChild(grid);
  const r=act.reflexion; if(!r)return;
  const box=el('div','card reflexion'); box.appendChild(el('h4','',r.pregunta));
  let conteo={}; try{conteo=JSON.parse(localStorage.getItem('reflexion-'+r.pregunta.slice(0,20))||'{}')}catch(e){}
  const barra=el('div','reflexion-barras');
  function pintar(){barra.innerHTML='';const total=Object.values(conteo).reduce((a,b)=>a+b,0)||1;r.opciones.forEach(o=>{const n=conteo[o]||0,pct=Math.round(n/total*100),fila=el('div','reflexion-fila'),tr=el('div','reflexion-track');tr.style.setProperty('--p',pct+'%');fila.append(el('span','',o),tr,el('span','reflexion-pct',n?pct+'%':''));barra.appendChild(fila)})}
  r.opciones.forEach(o=>{
    const b=el('button','opt',o);
    b.onclick=()=>{conteo[o]=(conteo[o]||0)+1;try{localStorage.setItem('reflexion-'+r.pregunta.slice(0,20),JSON.stringify(conteo))}catch(e){}pintar();[...box.querySelectorAll('.opt')].forEach(x=>x.disabled=true)};
    box.appendChild(b);
  });
  pintar(); box.appendChild(barra); cont.appendChild(box);
}
function renderGrafica(cont, act){
  const wrap=el('div','grafica'), max=Math.max(...act.datos.map(d=>d.valor));
  act.datos.forEach(d=>{
    const fila=el('div','grafica-fila'), pista=el('div','grafica-track');
    pista.style.setProperty('--p', Math.round(d.valor/max*100)+'%');
    fila.append(el('span','grafica-etq',d.etiqueta), pista, el('span','grafica-valor', String(d.valor)+(d.unidad?' '+d.unidad:'')));
    wrap.appendChild(fila);
  });
  cont.appendChild(wrap);
  if(act.nota) cont.appendChild(el('p','grafica-nota', act.nota));
}
function renderPanelNav(cont, act){
  const grid=el('div','panel-grid');
  act.items.forEach(it=>{
    const b=el('button','panel-card');
    b.append(el('div','panel-icono',it.icono||''), el('div','panel-titulo',it.titulo), el('div','panel-texto',it.texto||''));
    b.onclick=()=>show(it.id);
    grid.appendChild(b);
  });
  cont.appendChild(grid);
}
function renderPuntosClave(cont, act){
  let idx=0; const box=el('div','card puntosclave'), contador=el('div','pc-contador'), linea=el('p','pc-linea'), nav=el('div','tn'), pv=el('button','btn ghost','Anterior'), nx=el('button','btn','Siguiente');
  function draw(){contador.textContent='Punto '+(idx+1)+' de '+act.puntos.length;linea.textContent='✅ '+act.puntos[idx];pv.disabled=idx===0;nx.textContent=idx===act.puntos.length-1?'Reiniciar':'Siguiente'}
  pv.onclick=()=>{idx=Math.max(0,idx-1);draw()}; nx.onclick=()=>{idx=idx===act.puntos.length-1?0:idx+1;draw()};
  nav.append(pv,nx); box.append(contador,linea,nav); draw(); cont.appendChild(box);
}
const RENDER={puntos:renderPuntos,tarjetas:renderTarjetas,dialogo:renderDialogo,relaciona:renderRelaciona,escenario:renderEscenario,antesdespues:renderAntesDespues,grafica:renderGrafica,panel:renderPanelNav,puntosclave:renderPuntosClave};
function renderActividad(panel, id){
  const dato=ACT[id]; if(!dato)return;
  const lista=Array.isArray(dato)?dato:[dato];
  lista.forEach(act=>{
    const body=el('div','body act-body'), inb=el('div','in');
    inb.appendChild(el('h3','act-titulo',act.titulo||'Actividad'));
    const cont=el('div','act-cont'); const f=RENDER[act.tipo]; if(f)f(cont,act);
    inb.appendChild(cont); body.appendChild(inb); panel.appendChild(body);
  });
}

function renderGaleria(figura, id){
  const lista=GALERIA[id]; if(!lista||!lista.length)return;
  const fila=el('div','galeria-mini');
  lista.forEach(src=>{const im=el('img');im.src=src;im.alt='Imagen adicional';im.loading='lazy';fila.appendChild(im)});
  figura.appendChild(fila);
}
T.forEach(t=>{const p=document.getElementById('p-'+t[0]);const h=el('div','hero');h.style.setProperty('--pc',t[4]);const i=el('div');
if(t[2])i.appendChild(el('div','kick',t[2]));i.appendChild(el(t[0]==='inicio'?'h1':'h2','',t[3]));t[5].forEach(x=>i.appendChild(el('p','',x)));
const botones=BOTONES[t[0]];if(botones){const bw=el('div','hero-botones');botones.forEach(bo=>{const b=el('button','btn',bo.texto);b.onclick=()=>show(bo.id);bw.appendChild(b)});i.appendChild(bw)}
const w=el('div','in hw'),f=el('figure','fig'),g=el('img');g.src=IMG[t[0]];g.style.aspectRatio=VIEW[t[0]][0];g.style.objectPosition=VIEW[t[0]][1];g.alt='Ilustración: '+t[3];g.loading='lazy';f.appendChild(g);renderGaleria(f,t[0]);w.append(i,f);h.appendChild(w);p.appendChild(h);const s=el('div','stat'),si=el('div','in');si.append(el('div','big',t[6]),el('hr'),el('p','',t[7]));s.appendChild(si);p.appendChild(s);renderActividad(p,t[0]);});
const tp=document.getElementById('p-tiempo');tp.innerHTML='<div class="body"><div class="in"><h2 style="font-size:3rem;margin:0 0 .5rem">Línea del tiempo</h2><p>Toca un punto de la línea, o usa las flechas del teclado.</p><div class="tl-track" id="yr"></div><div class="card tl-card" id="tb" aria-live="polite"></div><div class="tn"><button class="btn ghost" id="pv">Anterior</button><span class="tl-contador" id="tc"></span><button class="btn" id="nx">Siguiente</button></div></div></div>';
let ti=0;const yr=document.getElementById('yr'),tb=document.getElementById('tb'),tc=document.getElementById('tc');
EV.forEach((e,i)=>{const b=el('button','tl-punto');b.append(el('span','dot'),el('span','anio',e[0]));b.onclick=()=>ev(i);yr.appendChild(b)});
function ev(i){ti=i;[...yr.children].forEach((b,j)=>b.setAttribute('aria-pressed',String(j===i)));tb.innerHTML='';tb.append(el('div','tl-icono',EV[i][3]||''),el('h3','',EV[i][1]),el('p','',EV[i][2]));tc.textContent=(i+1)+' / '+EV.length;pv.disabled=i===0;nx.disabled=i===EV.length-1;yr.children[i].scrollIntoView({inline:'center',block:'nearest'})}
const pv=document.getElementById('pv'),nx=document.getElementById('nx');pv.onclick=()=>ev(ti-1);nx.onclick=()=>ev(ti+1);ev(0);
document.addEventListener('keydown',e=>{if(!document.getElementById('p-tiempo').classList.contains('on'))return;if(e.key==='ArrowRight'&&ti<EV.length-1)ev(ti+1);if(e.key==='ArrowLeft'&&ti>0)ev(ti-1)});
const qp=document.getElementById('p-quiz');qp.innerHTML='<div class="body"><div class="in"><h2 style="font-size:3rem;margin:0 0 .8rem">Quiz</h2><div class="card" id="qe" style="margin-top:0"></div><h2 style="font-size:2.4rem;margin:2.5rem 0 .5rem">Tabla de resultados</h2><div class="tw"><table><thead><tr><th>#</th><th>Nombre</th><th>Puntaje</th></tr></thead><tbody id="rb"></tbody></table></div><p><button class="btn ghost" id="cl">Borrar resultados</button></p></div></div>';
const qe=document.getElementById('qe');let qi=0,sc=0,nm='';
function rd(){try{return JSON.parse(localStorage.getItem('rk')||'[]')}catch(e){return window._r||[]}}
function sv(r){window._r=r;try{localStorage.setItem('rk',JSON.stringify(r))}catch(e){}}
function rr(){const b=document.getElementById('rb');b.innerHTML='';const r=rd().sort((a,c)=>c.s-a.s);
if(!r.length){const t=el('tr'),d=el('td','','Aún no hay resultados.');d.colSpan=3;t.appendChild(d);b.appendChild(t);return}
r.forEach((x,i)=>{const t=el('tr');[i+1,x.n,x.s+' / '+Q.length].forEach(v=>t.appendChild(el('td','',v)));b.appendChild(t)})}
document.getElementById('cl').onclick=()=>{sv([]);rr()};
function st(){qe.innerHTML='';const l=el('label','','Escribe tu nombre para empezar'),i=el('input'),b=el('button','btn','Empezar quiz');l.htmlFor='nm';l.style.display='block';l.style.marginBottom='.6rem';i.type='text';i.id='nm';i.maxLength=24;
b.onclick=()=>{nm=i.value.trim()||'Anónimo';qi=0;sc=0;ask()};qe.append(l,i,b)}
function ask(){const q=Q[qi];qe.innerHTML='';const pr=el('div','prog'),h=el('h3','',(qi+1)+'. '+q[0]),fb=el('div');fb.id='fb';const n=el('button','btn',qi===Q.length-1?'Ver resultado':'Siguiente');n.style.display='none';
pr.innerHTML='<i style="width:'+(qi/Q.length*100)+'%"></i>';h.style.fontSize='1.8rem';qe.append(pr,h);
q[1].map(t=>[Math.random(),t]).sort((a,b)=>a[0]-b[0]).forEach(([,t])=>{const o=el('button','opt',t);o.onclick=()=>{const g=t===q[1][0];if(g)sc++;qe.querySelectorAll('.opt').forEach(x=>{x.disabled=true;if(x.textContent===q[1][0])x.classList.add('ok')});if(!g)o.classList.add('bad');fb.textContent=(g?'Correcto. ':'No es esa. ')+q[2];n.style.display='inline-block'};qe.appendChild(o)});
n.onclick=()=>{qi++;qi<Q.length?ask():fin()};qe.append(fb,n)}
function fin(){const r=rd();r.push({n:nm,s:sc});sv(r);rr();qe.innerHTML='';const h=el('h3','',nm+', sacaste '+sc+' de '+Q.length),p=el('p','',sc>=5?'Excelente: dominas el tema.':sc>=3?'Buen resultado. Repasa las pestañas para afinar.':'Repasa las pestañas y vuelve a intentarlo.'),b=el('button','btn ghost','Jugar de nuevo');b.onclick=st;qe.append(h,p,b)}
st();rr();
const fp=document.getElementById('p-completo');fp.innerHTML='<div class="body full"><div class="in"></div></div>';fp.querySelector('.in').appendChild(document.getElementById('fulltext').content.cloneNode(true));
function show(id){document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('on',p.id==='p-'+id));[...menu.children].forEach(b=>{b.setAttribute('aria-selected',b.dataset.id===id);if(b.dataset.id===id)b.scrollIntoView({inline:'center',block:'nearest'})});window.scrollTo(0,0)}
show('inicio');


/* =====================================================================
   PIE DE PÁGINA (FOOTER): DATOS DEL EQUIPO Y REDES SOCIALES
   Solo cambia los textos entre comillas. No borres las comas ni corchetes.
   ===================================================================== */
const EQUIPO = {
  titulo: 'Equipo Gramcsi',
  proyecto: 'El feminismo y la Ilustración',
  institucion: 'Benemérita Universidad Autónoma de Puebla',
  materia: 'Mundo Moderno',
  profesor: 'Dra. Ester Cuatzon Mora',
  fecha: '29 de septiembre del 2026',
  // Agrega o quita integrantes copiando/borrando una línea { ... },
  integrantes: [
    { nombre: 'Camila de la Cruz', rol: '' },
    { nombre: 'Alejandro Lira', rol: '' },
    { nombre: 'Enriqueta Zafra', rol: '' },
    { nombre: 'Sandra Alicia', rol: '' },
    { nombre: 'Diego Zarate', rol: '' }
  ]
};

// Pon en "url" el enlace de cada red. Borra una línea si no la usarás.
// Los íconos son sencillos; puedes cambiar el texto de "icono" por el SVG oficial que prefieras.
const REDES = [
  { nombre: 'Instagram', url: 'https://www.instagram.com/buapoficial?stkn=bWJ1bXA1OHFzM2pt', icono: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.3" cy="6.7" r=".8" fill="currentColor"/>' },
  { nombre: 'Facebook', url: 'https://www.facebook.com/share/1MTDGnKRcU/', icono: '<circle cx="12" cy="12" r="10"/><path d="M14 8h2V5h-2.5C11 5 10 6.5 10 8.5V10H8v3h2v6h3v-6h2.2l.4-3H13V8.7c0-.5.2-.7.9-.7z" fill="currentColor" stroke="none"/>' },
  { nombre: 'X', url: 'https://x.com/BUAPoficial', icono: '<path d="M5 5l14 14M19 5L5 19"/>' },
  { nombre: 'YouTube', url: 'https://youtube.com/@buapoficial?si=SOnOg6jrI-tS_Frl', icono: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>' },
];

(function crearPie() {
  const pie = el('footer', 'pie'), caja = el('div', 'in');
  caja.append(el('h2', '', EQUIPO.titulo), el('p', 'meta', EQUIPO.proyecto));
  const lista = el('div', 'eq');
  EQUIPO.integrantes.forEach(p => {
    const d = el('div'); d.append(el('strong', '', p.nombre), el('span', '', p.rol)); lista.appendChild(d);
  });
  caja.appendChild(lista);
  [EQUIPO.institucion, EQUIPO.materia, EQUIPO.profesor, EQUIPO.fecha].forEach(t => caja.appendChild(el('p', 'meta', t)));
  const redes = el('div', 'redes');
  REDES.forEach(r => {
    const a = el('a'); a.href = r.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    a.setAttribute('aria-label', r.nombre); a.title = r.nombre;
    a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + r.icono + '</svg>';
    redes.appendChild(a);
  });
  caja.appendChild(redes);
  pie.appendChild(caja);
  main.after(pie);
})();

/* =====================================================================
   MÚSICA DE FONDO
   1) Guarda tu audio en la carpeta "audio" (por defecto: audio/musica.mp3)
   2) Si tiene otro nombre, cámbialo en "archivo".
   Los navegadores no permiten sonar solos: empieza con el primer clic
   en la página o con el botón ▶ de la esquina.
   ===================================================================== */
const MUSICA = {
  archivo: 'audio/musica1.mp3',
  volumen: 0.4,               // de 0 (silencio) a 1 (máximo)
  bucle: true,                // true = se repite; false = suena una vez
  iniciarConPrimerClic: true, // false = solo con el botón
  titulo: 'Música de fondo'
};

(function crearMusica() {
  const au = new Audio(MUSICA.archivo);
  au.loop = MUSICA.bucle; au.volume = MUSICA.volumen; au.preload = 'auto';
  const caja = el('div', 'musica'), btn = el('button', 'mbtn', '▶'), vol = el('input');
  btn.setAttribute('aria-label', 'Reproducir o pausar la música'); btn.title = MUSICA.titulo;
  vol.type = 'range'; vol.min = 0; vol.max = 1; vol.step = 0.05; vol.value = MUSICA.volumen;
  vol.setAttribute('aria-label', 'Volumen');
  const ui = () => { btn.textContent = au.paused ? '▶' : '❚❚'; btn.setAttribute('aria-pressed', String(!au.paused)); };
  btn.onclick = () => { au.paused ? au.play().catch(() => {}) : au.pause(); };
  vol.oninput = () => { au.volume = vol.value; };
  au.addEventListener('play', ui); au.addEventListener('pause', ui);
  au.addEventListener('error', () => { btn.disabled = true; btn.title = 'Falta el archivo ' + MUSICA.archivo; });
  if (MUSICA.iniciarConPrimerClic) {
    const iniciar = () => { au.play().catch(() => {}); document.removeEventListener('click', iniciar); };
    document.addEventListener('click', iniciar);
  }
  caja.append(btn, vol);
  document.body.appendChild(caja);
})();