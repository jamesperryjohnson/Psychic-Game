FROM nginx:1.15.8-alpine
COPY assets/ /usr/share/nginx/html/assets/
# COPY files/ /usr/share/nginx/html/files/
COPY index.html /usr/share/nginx/html/