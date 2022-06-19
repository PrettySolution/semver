FROM nginx
WORKDIR /usr/share/nginx/html/
RUN echo "Hello VF&SOFT!" > index.html
# Step3 fix for 1.0.x users