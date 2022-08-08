FROM cypress/browsers:node17.8.0-chrome99-ff97-slim as running

# Update the dependencies to get the latest and greatest (and safest!) packages.
# Install OpenJDK-8
RUN apt update && \
    apt install -y openjdk-11-jdk && \
    apt install -y ant && \
    apt clean;

# Fix certificate issues
RUN apt update && \
    apt install ca-certificates-java && \
    apt clean && \
    update-ca-certificates -f;

# Setup JAVA_HOME -- useful for docker commandline
ENV JAVA_HOME /usr/lib/jvm/openjdk-11-jdk/
RUN export JAVA_HOME

WORKDIR ./
# avoid too many progress messages
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1

# disable shared memory X11 affecting Cypress v4 and Chrome
# https://github.com/cypress-io/cypress-docker-images/issues/270
ENV QT_X11_NO_MITSHM=1
ENV _X11_NO_MITSHM=1
ENV _MITSHM=0
#USER root
ENV PATH /node_modules/.bin:$PATH
#
## should be root user
#RUN echo "whoami: $(whoami)"
#RUN npm config -g set user $(whoami)

# command "id" should print:
# uid=0(root) gid=0(root) groups=0(root)
# which means the current user is root
RUN id

RUN mkdir -p cypress/
WORKDIR /cypress/
COPY . /cypress/

COPY package.json ./cypress/
COPY package-lock.json ./cypress/
COPY cypress.config.js ./cypress/
COPY tr_credentials.json ./cypress/


# should be root user
RUN echo "whoami: $(whoami)"
RUN npm config -g set user $(whoami)

# give every user read access to the "/root" folder where the binary is cached
# we really only need to worry about the top folder, fortunately
RUN ls -la /cypress
RUN chmod 755 /cypress

# always grab the latest Yarn
# otherwise the base image might have old versions
# NPM does not need to be installed as it is already included with Node.
RUN npm i -g yarn@latest

# Show where Node loads required modules from
RUN node -p 'module.paths'

RUN npm ci
# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
RUN npx cypress verify

    #ENTRYPOINT $(npm bin)/cypress run --browser chrome --spec hrs/tests/ui/Login_moderator.spec.js --record --key 0eaf8e1d-16da-4cb9-84de-816a457e2ef8 --parallel --ci-build-id ${CI_PIPELINE_ID}
#ENTRYPOINT npm run cy:run
#ENTRYPOINT npm run allure:report
#ENTRYPOINT npm run allure:history
#ENTRYPOINT npm run allure:server
#RUN $(npm bin)/cypress run --browser chrome --spec hrs/tests/ui/patient_detail_page/metrics/*/*.spec.js
