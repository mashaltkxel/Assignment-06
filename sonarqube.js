// sonar-scanner \
//   -Dsonar.projectKey=Jenkins \
//   -Dsonar.sources=. \
//   -Dsonar.host.url=http://172.17.0.1:9000 \
//   -Dsonar.login=1a0ef8686df35940ca12b43441232b59ec4b7894

sonar-scanner \
  -Dsonar.projectKey=Jenkins \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://172.17.0.1:9000 \
  -Dsonar.login=1a0ef8686df35940ca12b43441232b59ec4b7894


const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://172.17.0.1:9000/',
    token : "46220d4a56661af0fcfdd2827a651760e8accd2d",
    options: {
      'sonar.projectName': 'mashal',
      'sonar.projectDescription': 'Assignment_6',
    
    }
  },
  () => process.exit()
)
