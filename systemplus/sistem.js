
const USUARIO = "estudiante";
const CONTRASENA = "1234";

const cursos = {
    "Programación Web": {
        descripcion: "Aprende a crear páginas web utilizando HTML, CSS y JavaScript.",
        lecciones: [
            [
                "Introducción a HTML",
                "HTML permite organizar el contenido de una página web mediante títulos, párrafos e imágenes."
            ],
            [
                "Diseño con CSS",
                "CSS permite cambiar colores, tamaños, espacios y la apariencia de una página."
            ],
            [
                "Fundamentos de JavaScript",
                "JavaScript permite agregar interactividad y funciones a las páginas web."
            ]
        ]
    },

    "Informática Básica": {
        descripcion: "Conoce los componentes del computador y los conceptos básicos de informática.",
        lecciones: [
            [
                "El computador",
                "Un computador es un dispositivo electrónico que recibe, procesa y almacena información."
            ],
            [
                "Hardware y software",
                "El hardware son los componentes físicos y el software son los programas del computador."
            ],
            [
                "Sistemas operativos",
                "Un sistema operativo administra los recursos del computador y permite ejecutar programas."
            ]
        ]
    },

    "Marketing Digital": {
        descripcion: "Aprende cómo promocionar productos y servicios utilizando internet.",
        lecciones: [
            [
                "Introducción al marketing",
                "El marketing digital utiliza internet para promocionar productos y conectar con clientes."
            ],
            [
                "Redes sociales",
                "Las redes sociales permiten compartir contenido, comunicarse con clientes y promocionar negocios."
            ],
            [
                "Publicidad digital",
                "La publicidad digital permite mostrar anuncios en internet para llegar a un público específico."
            ]
        ]
    }
};


const evaluaciones = {
    "Programación Web": [
        [
            {
                pregunta: "¿Para qué sirve HTML?",
                opciones: [
                    "Para estructurar el contenido de una página web",
                    "Para reparar el computador",
                    "Para crear redes eléctricas"
                ],
                correcta: 0
            },
            {
                pregunta: "¿Cuál etiqueta se utiliza para crear un párrafo en HTML?",
                opciones: ["<img>", "<p>", "<body>"],
                correcta: 1
            },
            {
                pregunta: "¿Qué se puede agregar a una página usando HTML?",
                opciones: [
                    "Solamente contraseñas",
                    "Únicamente cálculos",
                    "Títulos, textos e imágenes"
                ],
                correcta: 2
            }
        ],
        [
            {
                pregunta: "¿Cuál es la función principal de CSS?",
                opciones: [
                    "Diseñar la apariencia de una página web",
                    "Apagar el computador",
                    "Crear documentos de texto únicamente"
                ],
                correcta: 0
            },
            {
                pregunta: "¿Qué propiedad CSS cambia el color del texto?",
                opciones: ["background", "color", "margin"],
                correcta: 1
            },
            {
                pregunta: "¿Qué símbolo se utiliza para seleccionar una clase en CSS?",
                opciones: ["#", ".", "@"],
                correcta: 1
            }
        ],
        [
            {
                pregunta: "¿Para qué sirve JavaScript?",
                opciones: [
                    "Únicamente para cambiar el tamaño del monitor",
                    "Para reemplazar el hardware",
                    "Para agregar interactividad a una página web"
                ],
                correcta: 2
            },
            {
                pregunta: "¿Qué palabra permite declarar una variable en JavaScript?",
                opciones: ["let", "style", "color"],
                correcta: 0
            },
            {
                pregunta: "¿Qué método permite mostrar un mensaje en la consola?",
                opciones: ["document.color()", "console.log()", "html.print()"],
                correcta: 1
            }
        ]
    ],

    "Informática Básica": [
        [
            {
                pregunta: "¿Cuál es una función del computador?",
                opciones: [
                    "Procesar información",
                    "Producir agua",
                    "Fabricar electricidad por sí solo"
                ],
                correcta: 0
            },
            {
                pregunta: "¿Cuál de estos dispositivos permite introducir información?",
                opciones: ["Monitor", "Teclado", "Parlante"],
                correcta: 1
            },
            {
                pregunta: "¿Cuál es un dispositivo de salida?",
                opciones: ["Ratón", "Micrófono", "Monitor"],
                correcta: 2
            }
        ],
        [
            {
                pregunta: "¿Qué es el hardware?",
                opciones: [
                    "Los componentes físicos del computador",
                    "Los programas instalados",
                    "Una página de internet"
                ],
                correcta: 0
            },
            {
                pregunta: "¿Cuál de estos es un software?",
                opciones: ["Teclado", "LibreOffice", "Monitor"],
                correcta: 1
            },
            {
                pregunta: "¿Cuál de estos componentes permite almacenar archivos?",
                opciones: ["Ratón", "Parlante", "SSD"],
                correcta: 2
            }
        ],
        [
            {
                pregunta: "¿Cuál es una función del sistema operativo?",
                opciones: [
                    "Administrar los recursos del computador",
                    "Reemplazar todos los componentes físicos",
                    "Crear electricidad"
                ],
                correcta: 0
            },
            {
                pregunta: "¿Cuál de estos es un sistema operativo?",
                opciones: ["Microsoft Word", "Windows", "Google Chrome"],
                correcta: 1
            },
            {
                pregunta: "¿Qué permite hacer un sistema operativo?",
                opciones: [
                    "Únicamente escuchar música",
                    "Solo navegar por internet",
                    "Administrar archivos y ejecutar programas"
                ],
                correcta: 2
            }
        ]
    ],

    "Marketing Digital": [
        [
            {
                pregunta: "¿Qué es el marketing digital?",
                opciones: [
                    "Una forma de promocionar productos y servicios por internet",
                    "Una reparación de computadores",
                    "Un tipo de sistema operativo"
                ],
                correcta: 0
            },
            {
                pregunta: "¿Cuál es un objetivo del marketing digital?",
                opciones: [
                    "Eliminar las páginas web",
                    "Llegar a posibles clientes",
                    "Evitar la comunicación con los clientes"
                ],
                correcta: 1
            },
            {
                pregunta: "¿Qué se puede promocionar mediante marketing digital?",
                opciones: [
                    "Solo computadores",
                    "Únicamente productos gratuitos",
                    "Productos, servicios y negocios"
                ],
                correcta: 2
            }
        ],
        [
            {
                pregunta: "¿Para qué sirven las redes sociales en un negocio?",
                opciones: [
                    "Para promocionar productos y comunicarse con clientes",
                    "Para impedir que las personas conozcan el negocio",
                    "Para reemplazar el inventario físico"
                ],
                correcta: 0
            },
            {
                pregunta: "¿Qué contenido puede ayudar a promocionar un producto?",
                opciones: [
                    "Mensajes sin relación con el negocio",
                    "Fotos y videos del producto",
                    "Información falsa"
                ],
                correcta: 1
            },
            {
                pregunta: "¿Qué conviene hacer antes de publicar contenido?",
                opciones: [
                    "Publicar sin revisar",
                    "Ignorar a los clientes",
                    "Identificar al público al que se quiere llegar"
                ],
                correcta: 2
            }
        ],
        [
            {
                pregunta: "¿Qué es la publicidad digital?",
                opciones: [
                    "Una forma de mostrar anuncios en internet",
                    "Un componente físico del computador",
                    "Un lenguaje para crear páginas web"
                ],
                correcta: 0
            },
            {
                pregunta: "¿Qué es el público objetivo?",
                opciones: [
                    "Cualquier archivo del computador",
                    "El grupo de personas al que se dirige una campaña",
                    "El nombre de una red social"
                ],
                correcta: 1
            },
            {
                pregunta: "¿Qué dato ayuda a evaluar una campaña publicitaria?",
                opciones: [
                    "El color del computador utilizado",
                    "La marca del teclado",
                    "La cantidad de personas que hicieron clic en el anuncio"
                ],
                correcta: 2
            }
        ]
    ]
};

const avances = {};

const login = document.getElementById("login");
const dashboard = document.getElementById("dashboard");
const cursoDetalle = document.getElementById("cursoDetalle");
const error = document.getElementById("error");

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    if (usuario === USUARIO && contrasena === CONTRASENA) {
        login.hidden = true;
        dashboard.hidden = false;
        error.textContent = "";
    } else {
        error.textContent = "Usuario o contraseña incorrectos.";
    }
});

function estudiarCurso(nombre) {
    document.querySelector(".bienvenida").hidden = true;
    document.querySelector(".titulo-cursos").hidden = true;
    document.querySelector(".cursos").hidden = true;

    cursoDetalle.hidden = false;

    document.getElementById("tituloCurso").textContent = nombre;
    document.getElementById("descripcionCurso").textContent =
        cursos[nombre].descripcion;

    if (!avances[nombre]) {
        avances[nombre] = [];
    }

    mostrarLecciones(nombre);
}

function mostrarLecciones(nombre) {
    const lista = document.getElementById("listaLecciones");
    lista.innerHTML = "";

    cursos[nombre].lecciones.forEach((leccion, i) => {
        const completada = avances[nombre].includes(i);

        const tarjeta = document.createElement("div");
        tarjeta.className = "leccion" + (completada ? " completada" : "");

        const titulo = document.createElement("h3");
        titulo.textContent = `${i + 1}. ${leccion[0]}`;

        const descripcion = document.createElement("p");
        descripcion.textContent = leccion[1];

        const boton = document.createElement("button");
        boton.textContent = completada
            ? "✓ Lección aprobada"
            : "Realizar evaluación";

        boton.disabled = completada;

        tarjeta.append(titulo, descripcion, boton);
        lista.appendChild(tarjeta);

        boton.addEventListener("click", function() {
            mostrarEvaluacion(nombre, i, tarjeta);
        });
    });

    actualizarProgreso(nombre);
}

function mostrarEvaluacion(nombre, indice, tarjeta) {
    // Evita crear varias evaluaciones dentro de la misma lección.
    const anterior = tarjeta.querySelector(".evaluacion");

    if (anterior) {
        anterior.remove();
        return;
    }

    const preguntas = evaluaciones[nombre][indice];

    const formulario = document.createElement("form");
    formulario.className = "evaluacion";

    const titulo = document.createElement("h4");
    titulo.textContent = "Evaluación de la lección";

    const indicacion = document.createElement("p");
    indicacion.textContent =
        "Responde las 3 preguntas. Necesitas mínimo 2 respuestas correctas para aprobar.";

    formulario.append(titulo, indicacion);

    preguntas.forEach((pregunta, numero) => {
        const grupo = document.createElement("fieldset");
        grupo.className = "pregunta";

        const leyenda = document.createElement("legend");
        leyenda.textContent = `${numero + 1}. ${pregunta.pregunta}`;
        grupo.appendChild(leyenda);

        pregunta.opciones.forEach((opcion, posicion) => {
            const etiqueta = document.createElement("label");
            etiqueta.className = "opcion";

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = `pregunta-${numero}`;
            radio.value = posicion;
            radio.required = true;

            etiqueta.append(radio, document.createTextNode(" " + opcion));
            grupo.appendChild(etiqueta);
        });

        formulario.appendChild(grupo);
    });

    const enviar = document.createElement("button");
    enviar.type = "submit";
    enviar.textContent = "Calificar evaluación";

    const resultado = document.createElement("p");
    resultado.className = "resultado-evaluacion";
    resultado.setAttribute("aria-live", "polite");

    formulario.append(enviar, resultado);
    tarjeta.appendChild(formulario);

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let puntaje = 0;

        preguntas.forEach((pregunta, numero) => {
            const respuesta = formulario.querySelector(
                `input[name="pregunta-${numero}"]:checked`
            );

            if (respuesta && Number(respuesta.value) === pregunta.correcta) {
                puntaje++;
            }
        });
        
if (puntaje >= 2) {
    if (!avances[nombre].includes(indice)) {
        avances[nombre].push(indice);
    }

    resultado.textContent =
        `¡Felicitaciones! Obtuviste ${puntaje}/3. Lección aprobada.`;

    resultado.className = "resultado-evaluacion aprobado";

    tarjeta.classList.add("completada");

    const botonLeccion = tarjeta.querySelector(":scope > button");
    botonLeccion.textContent = "✓ Lección aprobada";
    botonLeccion.disabled = true;

    formulario.querySelectorAll("input").forEach(input => {
        input.disabled = true;
    });

    enviar.disabled = true;

    actualizarProgreso(nombre);
}
        else {
            resultado.textContent =
                `Obtuviste ${puntaje}/3. Necesitas mínimo 2 respuestas correctas. Repasa el contenido e inténtalo nuevamente.`;

            resultado.className = "resultado-evaluacion no-aprobado";
        }
    });
}

function actualizarProgreso(nombre) {
    const total = cursos[nombre].lecciones.length;
    const porcentaje = Math.round(
        avances[nombre].length / total * 100
    );

    document.getElementById("progreso").style.width = porcentaje + "%";

    document.getElementById("porcentaje").textContent =
        porcentaje + "% completado";
}

document.getElementById("volverCursos").addEventListener("click", function() {
    cursoDetalle.hidden = true;
    document.querySelector(".bienvenida").hidden = false;
    document.querySelector(".titulo-cursos").hidden = false;
    document.querySelector(".cursos").hidden = false;
});

document.getElementById("cerrarSesion").addEventListener("click", function() {
    dashboard.hidden = true;
    cursoDetalle.hidden = true;
    login.hidden = false;

    document.getElementById("loginForm").reset();
    error.textContent = "";
});
