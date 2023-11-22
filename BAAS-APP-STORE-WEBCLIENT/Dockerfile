# CreatedBy : Dinesh
# ModifiedBy : Harish Raj
# CreatedTime : 12 Dec 2022
# Description : This file will be read as an instruction by docker to build a image

# Stage 1: Build the application
FROM node:16-slim AS build
WORKDIR /baasappstorewebclient

# Copy package.json and .npmrc files for dependency installation
COPY package.json ./ 
COPY .npmrc ./

# Copy the rest of the application source code
COPY . .

# Install dependencies
RUN npm install -f
RUN npm install sonar-scanner

# RUN npm run sonar

# Build the application
RUN npm run build

# Stage 2: Create the production image
FROM node:16-slim
WORKDIR /baasappstorewebclient

RUN groupadd -r appuser && useradd -r -g appuser -m appuser
USER appuser

# Labels are key-value pairs stored as a string that can be used to organize your images
LABEL maintaner="Harish Raj"
LABEL email="harish_raj@gove.co"
LABEL release-date="2023-10-30"

# Copy only the necessary files from the previous build stage
#COPY --from=build /dmswebclient/package.json ./
COPY --from=build /baasappstorewebclient/node_modules ./node_modules
COPY --from=build /baasappstorewebclient/.next ./.next
COPY --from=build /baasappstorewebclient/public ./public
COPY --from=build /baasappstorewebclient/.npmrc ./.npmrc
# Install only production dependencies
#RUN npm install -f
COPY . .
# Expose the necessary port(s)
EXPOSE 3000

# Start the application
CMD ["npx", "next", "start", "-p", "3000"]

