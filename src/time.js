export function HoraActual() 
{
    const tiempo = new Date();
    const horas = tiempo.getHours();
    const minutos = tiempo.getMinutes();
    const segundos = tiempo.getSeconds();
    return horas + ":" + minutos + ":" + segundos; 
  }

  export function FechaCompleta() {
    const tiempo = new Date();
    const opciones = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: false 
    };
    return tiempo.toLocaleDateString('es-ES', opciones);
  }