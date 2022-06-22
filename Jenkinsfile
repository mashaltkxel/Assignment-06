// pipeline {
//     agent any
//     //     	environment {
// 	// 	DOCKERHUB_CREDENTIALS=credentials('dockerhub')
//     //         }
//     // tools {
//     //     nodejs 'nodejs'
//     // }
//     stages {
//         stage('Master Branch Deploy Code') {
//             when {
//                 branch 'master'
//             }
//             steps {
//                 sh '''
//                 echo "Building Artifact from Master branch yayyyyy"
//                 '''

//                 sh '''
//                 echo "Deploying Code from Master branch yayyyyyyy"
//                 '''
//             }
//         }
//         stage('Develop Branch Feature Code') {
//             when {
//                 branch 'feature-branch'
//             }
//             steps {
//                 sh '''
//                 echo "Building Artifact from Feature branch yayyyy"
//                 '''
//                 sh '''
//                 echo "Deploying Code from Feature branch yayyyyyyy"
//                 '''
//             }
//         }
//         // stage('Building our image') {
//         // steps{
//         // script {
//         // sh 'docker build -t react-app:latest .'
//         // }
//         // }
//         // }
//         // stage('Login and Push') {
// 		// 	steps {
// 		// 	withDockerRegistry([ credentialsId: "dockerhub", url: "" ]) {
// 		// 	    sh 'docker tag react-app:latest mashalaman/assignment-06:latest'
// 		// 	    sh 'docker images'
// 		// 		sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
// 		// 		sh 'docker push mashalaman/assignment-06:latest '
// 		// 	}
// 		// 	}
// 		// }
//         // stage('Sonarqube') {
//         //     environment {
//         //         scannerHome = tool 'SonarQubeScanner'
//         //     }
//         //     steps {
//         //         withSonarQubeEnv(installationName: 'SonarCloudOne', credentialsId: 'SonarCloudOne') {
//         //             sh "${scannerHome}/bin/sonar-scanner"
//         //         }
//         //     }

//         // steps {
//         //     withSonarQubeEnv('SonarQube') {
//         //         //sh "${scannerHome}/bin/sonar-scanner"
//         //         echo 'SonarQube Scanning with Jenkins'
//         //     }
//         //     timeout(time: 10, unit: 'MINUTES') {
//         //         waitForQualityGate abortPipeline: true
//         //     }
//         // }

//         // stage('SonarQube analysis') {
//         //     steps {
//         //         script {
//         //             sh 'node sonarqube.js'
//         //         }
//         //     }
//         // }
//         // }

//     }

pipeline {
    agent any
    stages {
        stage('Master Branch Deploy Code') {
            when {
                branch 'master'
            }
            steps {
                sh """
                echo "Building Artifact from Master branch"
                """
 
                sh """
                echo "Deploying Code from Master branch"
                """
            }
        }
        stage('Feature Branch Deploy Code') {
            when {
                branch 'feature'
            }
            steps {
                sh """
                echo "Building Artifact from Feature branch"
                """
                sh """
                echo "Deploying Code from Feature branch"
                """
           }
        }
        stage('Feature Branch Pro Deploy Code') {
            when {
                branch 'feature-branch'
            }
            steps {
                sh """
                echo "Building Artifact from Feature pro branch"
                """
                sh """
                echo "Deploying Code from Feature pro branch"
                """
           }
        }
    }
}
