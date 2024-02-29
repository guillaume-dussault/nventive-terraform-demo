# Use the official NGINX image as a parent image
FROM nginx:alpine

# Remove the default NGINX configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom configuration file from the current directory to the container
COPY nginx.conf /etc/nginx/conf.d
