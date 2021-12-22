FROM ubuntu:21.10

RUN mkdir -p /root/.vscode-server/extensions

ADD .devcontainer/post_create.sh /tmp/post_create.sh
RUN [ "bash", "/tmp/post_create.sh" ]