pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    stages {
        stage('Master Branch Deploy Code') {
            when {
                branch 'master'
            }
            steps {
                sh '''
                echo "Building Artifact from Master branch"
                '''

                sh '''
                echo "Deploying Code from Master branch"
                '''
            }
        }
        stage('Develop Branch Feature Code') {
            when {
                branch 'feature-branch'
            }
            steps {
                sh '''
                echo "Building Artifact from Feature branch"
                '''
                sh '''
                echo "Deploying Code from Feature branch"
                '''
            }
        }
        // stage('Sonarqube') {
        //     environment {
        //         scannerHome = tool 'SonarQubeScanner'
        //     }
        //     steps {
        //         withSonarQubeEnv(installationName: 'SonarCloudOne', credentialsId: 'SonarCloudOne') {
        //             sh "${scannerHome}/bin/sonar-scanner"
        //         }
        //     }

        // steps {
        //     withSonarQubeEnv('SonarQube') {
        //         //sh "${scannerHome}/bin/sonar-scanner"
        //         echo 'SonarQube Scanning with Jenkins'
        //     }
        //     timeout(time: 10, unit: 'MINUTES') {
        //         waitForQualityGate abortPipeline: true
        //     }
        // }

        stage('SonarQube analysis') {
            steps {
                script {
                    sh 'node sonarqube.js'
                }
            }
        }
        }
    }

