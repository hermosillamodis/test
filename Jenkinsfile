pipeline {
  agent {
    docker {
      image 'node:14-alpine'
      args '-p 3000:3000'
    }
  }

  environment {
    CI = 'true' 
  }

  stages {
    stage('Git') {
      steps {
        git 'https://github.com/hermosillamodis/test.git'
      }
    }

    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Test') {
      steps {
        sh 'npm run test-jenkins'

      }
      post {
        always {
          junit allowEmptyResults: true, keepLongStdio: true, testResults: 'reports/*.xml'
        }      
    }

    stage('Performance') {
      steps {
        sh 'npm run test-performance'
      }
    }
  }
}
