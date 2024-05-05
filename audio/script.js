// Obtém o elemento Canvas pelo ID
var canvas = document.getElementById('myCanvas');

// Obtém o contexto 2D do Canvas
var ctx = canvas.getContext('2d');

// Define a cor de preenchimento como vermelho
ctx.fillStyle = 'red';

// Desenha um círculo vermelho nas coordenadas (150, 100) com raio 50
ctx.beginPath();
ctx.arc(150, 100, 50, 0, 2 * Math.PI); // x, y, raio, ângulo inicial, ângulo final
ctx.fill();