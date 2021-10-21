mvn clean package
docker build -t docker-betting .
docker images
docker run -p 5000:5000 docker-betting

#stop running container
docker stop [container_id]

#show the running containers
docker ps

#show all containers
docker ps -a

#ssh into docker container
docker exec -it [container_id] bash

#see the logs for certain container
docker logs [container_id]


#mount the folder to the container
cd some_files
docker run -it -v "%cd%":/data1 ubuntu
ls

exit