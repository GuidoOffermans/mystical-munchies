FROM golang:1.20.4-alpine

RUN apk add -v build-base
RUN apk add -v ca-certificates
RUN apk add --no-cache \
    unzip \
    openssh

WORKDIR /app

COPY /backend/go.mod /backend/go.sum ./

RUN go mod download && go mod verify

COPY /backend/*.go ./

RUN go build -o pb-build

EXPOSE 8080

CMD ["/app/pb-build", "serve", "--http=0.0.0.0:8080"]