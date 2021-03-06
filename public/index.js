var socket = io();
var temp = document.getElementById('temp');
var cpu = document.getElementById('cpu');
var ram = document.getElementById('ram');

socket.on('msg', (msg)=>{
  document.getElementById('temp_value').textContent = 'Temp: ' + msg.temp + '°C';
  document.getElementById('cpu_value').textContent = 'CPU: ' + msg.cpu + '%';
  document.getElementById('ram_value').textContent = 'RAM: ' + msg.ram + '%';
  var temp_ = msg.temp * 1.8;
  var cpu_ = msg.cpu * 1.8;
  var ram_ = msg.ram * 1.8;
  temp.style.setProperty('--rotation', temp_ + 'deg');
  cpu.style.setProperty('--rotation', cpu_ + 'deg');
  ram.style.setProperty('--rotation', ram_ + 'deg');
});