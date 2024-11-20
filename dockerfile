# Étape 1 : Construire l'application
FROM node:16 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de configuration
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application
RUN npm run build

# Étape 2 : Configurer l'image pour la production
FROM nginx:alpine

# Copier les fichiers de build vers le répertoire de NGINX
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 5173

# Commande pour démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]