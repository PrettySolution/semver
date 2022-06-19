FROM nginx
WORKDIR /usr/share/nginx/html/
RUN echo "Hello VF&SOFT!" > index.html
# step2 implement new feature for 1.x users