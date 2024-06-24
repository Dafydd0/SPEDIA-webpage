# Utiliza la imagen oficial de Node 16 como base
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos necesarios para instalar las dependencias
COPY package.json package-lock.json /app/

# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación al contenedor
COPY . /app/

# Construye la aplicación
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación
EXPOSE 3001

# Comando para iniciar la aplicación cuando el contenedor se ejecute
CMD ["npm", "start"]
