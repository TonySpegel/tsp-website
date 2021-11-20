FROM debian:stable-slim

LABEL maintainer="Tony Spegel"
LABEL "com.github.actions.name" = "Zola Builder"
LABEL "com.github.actions.description" = "Build a Zola site"
LABEL "com.github.actions.icon" = "tool"
LABEL "com.github.actions.color" = "blue"

RUN apt-get update && apt-get install -y wget git

RUN wget -q -O - \
"https://github.com/getzola/zola/releases/download/v0.14.1/zola-v0.14.1-x86_64-unknown-linux-gnu.tar.gz" \
| tar xzf - -C /usr/local/bin

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]