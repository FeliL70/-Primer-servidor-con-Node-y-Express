import express from 'express';
import { HoraActual, FechaCompleta } from './time.js';

const app = express();

app.get('/', (req, res) => {
  res.send('bienvenidos');
});

app.get('/hora', (req, res) => {
  const hora = HoraActual();
  
  res.send('La hora actual es: ' + hora);  
});

app.get('/fecha-completa', (req, res) => {
  const fechaCompleta = FechaCompleta();

  res.send('Fecha y hora completa: ' + fechaCompleta);
});

app.use((req, res) => {
  res.status(404).sendFile('https://http.cat/404.jpg');
});

export default app;
