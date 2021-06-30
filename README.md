# Psychic-Game

This is a very simple JavaScript app that I built during a coding boot camp in 2017. You can press letters on the keyboard to guess the secret letter. I added images and sounds from <em>The Simpsons</em> Homer Simpson for fun.

## Getting Started

These instructions will cover usage information and for the Docker container.

## Prerequisities

In order to run this container you'll need Docker installed.

* [Windows](https://docs.docker.com/windows/started)
* [OS X](https://docs.docker.com/mac/started/)
* [Linux](https://docs.docker.com/linux/started/)

## Usage

#### Building the Docker image for this application


On your local machine, clone this repo:

```shell
git clone --recursive https://github.com/jamesperryjohnson/Psychic-Game.git
cd Psychic-Game
```

Then build a Docker image for your application using the following command:

```shell
docker build -t my-application -f Dockerfile .
```

where my-application is the name you want to give your created Docker image.

#### Running the Docker image for this application

After the Docker image has been created for this application, you can run it using either of the following commands:

* ##### Run as an interactive application on your command line:

    ```shell
    docker run -i -p 80:80 -t my-application
    ```

    This maps port 80 in the Docker image to port 80 on your machine.

* ##### Run as a daemon process:

    ```shell
    docker run -d -p 80:80 -t my-application
    ```

    This uses the `-d` flag rather than the `-i` flag to run the Docker image as a background task.

#### Accessing the application in a web browser

Once the container is built and running, visit http://localhost:80 in your web browser to view the application.

To rebuild the Docker image after changes are made, repeat the steps above.

* If you are using a Docker Machine environment, you will need to run the following command to get the DOCKER_HOST address to substitue for localhost:

    ```shell
    docker-machine env default
    ```

* If you are using minikube, you will need to run a similar command to this instead:

    ```shell
    minikube -p minikube docker-env
    ```

## Built With

* Bootstrap 4 CSS
* Bootstrap jQuery 3.2.1 slim min and JS 
* Docker version 20.10.6, build 370c289
* Nginx Docker image nginx:1.15.8-alpine

## Authors

* **James Perry Johnson** - [LinkedIn](https://www.linkedin.com/in/jamesperryjohnson)

## Acknowledgments

* The creators of <em>The Simpsons</em>
* [GitHub Gist readme template](https://gist.github.com/PurpleBooth/ea518ae68a49029bae95)