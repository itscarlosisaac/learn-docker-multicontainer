let c = {
  "AWSEBDockerrunVersion": 2,
  "containerDefinitions": [
    {
      "name": "client",
      "image": "itscarlosisaac/multi-client",
      "hostname": "client",
      "essential": false
    },
    {
      "name": "server",
      "image": "itscarlosisaac/multi-server",
      "hostname": "api",
      "essential": false
    },
    {
      "name": "worker",
      "image": "itscarlosisaac/multi-worker",
      "hostname": "worker",
      "essential": false
    },
    {
      "name": "nginx",
      "image": "itscarlosisaac/multi-nginx",
      "hostname": "nginx",
      "essential": true,
      "portMappings": [
        { "hostPort": 80, "containerPort": 80}
      ],
      "links": [
        "client",
        "server"
      ]
    }
  ]
}