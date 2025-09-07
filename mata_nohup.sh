#!/bin/bash

# Listar todos los procesos que contienen 'nohup'
ps aux | grep '[n]ohup' | awk '{print $2}' | while read pid; do
  # Matar cada proceso encontrado
  kill -9 "$pid"
  echo "Proceso nohup con PID $pid ha sido terminado."
done
