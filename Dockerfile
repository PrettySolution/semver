FROM nginx
WORKDIR /usr/share/nginx/html/
RUN echo "Hello VF&SOFT!" > index.html
# Step 1. Breaking changes
# step2 implement new feature for 1.x users
# Step3 fix for 1.0.x users
# test