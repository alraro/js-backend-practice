FROM node:22

# Directorio de trabajo en el contenedor
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto que usa tu backend
EXPOSE 3000

# Comando para levantar tu app
CMD ["npm", "run", "dev"]
