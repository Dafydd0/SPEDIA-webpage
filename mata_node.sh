#!/bin/bash

# Listar todos los procesos que contienen 'node'
ps aux | grep '[n]ode' | awk '{print $2}' | while read pid; do
  # Matar cada proceso encontrado
  kill -9 "$pid"
  echo "Proceso node con PID $pid ha sido terminado."
done
