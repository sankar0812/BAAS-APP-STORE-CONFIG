FROM node:16-slim AS builder
WORKDIR /baasappstorerestbusiness
COPY package.json .
RUN npm i

# Create a new stage for the production image
FROM node:16-slim
WORKDIR /baasappstorerestbusiness

RUN groupadd -r appuser && useradd -r -g appuser -m appuser
USER appuser

# Labels are key-value pairs stored as a string that can be used to organize your images
LABEL maintaner="Harish Raj"
LABEL email="harish_raj@gove.co"
LABEL release-date="2023-10-30"

# Copy only necessary files from the builder stage
COPY --from=builder /baasappstorerestbusiness/node_modules ./node_modules
COPY . .

EXPOSE 5003
CMD npm start
