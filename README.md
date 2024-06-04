## About Application:

* Bookmarker is a web-application that allows users to save/fetch saved urls from database.
* Front-end of the application is built using `Next-js` & `React` framework.
* REST API endpoints of the application are implemented using `SpringBoot` framework & testcases using `Junit 5` and `Mockito`.
* Enabled `Continuous Integration` using `Github Actions` workflow.
* Containerized solution using `Docker`. This application have 3-containers (UI, Backend & Database).
* Deployment automation, scaling & container management using `Kubernetes & Kind Cluster`
## How to run?

### 1. Running application using Docker
#### Ensure Docker is installed and running on your system...
```shell
$ git clone https://github.com/sambit77/bookmarker-app
$ cd bookmarker-app
$ ./run.sh start
$ ./run.sh stop
```
* `start` : spins up 3 containers in docker daemon (UI, API & DB) <br>
* `stop` : stops & removes the containers from docker daemon
* Access the application: <http://localhost:13000/bookmarks> <br>
* Access backend application: <http://localhost:18080/api/bookmarks>

### 2. Running on kubernetes 

#### 1. Ensure Docker, Kind & Kubectl is installed and running on your system locally...
#### 2. Optionally Lens GUI app can be installed to visualized running pods, deployment & clusters
```shell
$ cd bookmarker-app
$ cd kind
$ ./create-cluster.sh
$ cd ../
$ kubectl apply -f k8s/
```
* Access API using NodePort http://localhost:18080/api/bookmarks
* Access UI using NodePort http://localhost:30080/
* Access API using Ingress http://localhost/bookmarker-api/api/bookmarks
* Access UI using Ingress http://localhost/


### 3. Manually running frontend & backend application (For development only) 
##### Dependencies : `JDK` `NodeJS` `Yarn`

* Run the backend spring-boot application: `cd bookmarker-api` -> `./mvnw spring-boot:run`
* Hardcode base api url to 'http://localhost:8080' in /bookmarker-ui/services/api.ts
* Run frontend server using command `cd bookmarker-ui` -> `yarn dev`
* By following the above steps , spring-boot in-memory h2 database will be used (not recommended for production)
* Access backend application: <http://localhost:8080/api/bookmarks>
* Access frontend application: <http://localhost:3000/bookmarks>
* Access the database: <http://localhost:8080/h2-console/>


#### To use a postgres db container for application
* Set spring-boot application with env variable SPRING_PROFILES_ACTIVE=local
* And run the following command from root
```shell
$ ./run.sh start_infra
$ ./run.sh stop-infra
$ cd  bookmarker-api && ./mvnw spring-boot:run
$ cd ..
$ cd bookmarker-api
$ yarn dev
```
* `start_infra` : spins up a postgres db container on docker daemon.
*  `stop_infra` : stops and removes the postgres db container.
* Access backend application: <http://localhost:8080/api/bookmarks>
* Access frontend application: <http://localhost:3000/bookmarks>
