FROM node:8.11.3

MAINTAINER Jason Kinnear <jason@thebetmakers.com>

USER root

RUN rm -f /usr/local/bin/yarn && \
	curl -o- -L https://yarnpkg.com/install.sh | bash && \
	chmod +x ~/.yarn/bin/yarn && \
	ln -s ~/.yarn/bin/yarn /usr/local/bin/yarn

RUN yarn global add webpack-cli webpack-dev-server

WORKDIR /usr/src/app/

COPY . /usr/src/app/

RUN yarn install
