// Seleccionamos los elementos de nuestra tarjeta
const adviceNumber = document.getElementById('advice-number');
const adviceText = document.getElementById('advice-text');
const generateBtn = document.getElementById('generate-btn');

// Función para obtener el consejo de la API pública
const getAdvice = async () => {
  try {
    // Aquí hacemos la consulta a la API (Fetch API)
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    
    // Ponemos los datos que llegaron en nuestra tarjeta HTML
    adviceNumber.textContent = data.slip.id;
    adviceText.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error("Error al obtener el consejo:", error);
    adviceText.textContent = `"Oops! Algo salió mal. Intenta de nuevo."`;
  }
};

// Hacemos que el botón reaccione al clic
generateBtn.addEventListener('click', getAdvice);

// Para que salga un consejo aleatorio apenas abres la página
window.onload = getAdvice;
