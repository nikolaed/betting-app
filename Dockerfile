FROM openjdk:8
ADD target/betting-0.0.1-SNAPSHOT.jar docker-betting.jar
EXPOSE 5000
ENTRYPOINT ["java", "-jar", "/docker-betting.jar"]