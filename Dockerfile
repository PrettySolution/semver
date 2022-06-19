FROM nginx
WORKDIR /usr/share/nginx/html/
RUN echo "Hello VF&SOFT!" > index.html
# Step 1. Breaking changes