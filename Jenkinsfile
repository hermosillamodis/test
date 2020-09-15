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
        sh 'npm run coverage-jenkins'
      }
      post {
        always {
          junit allowEmptyResults: true, keepLongStdio: true, testResults: 'artifacts/test/*.xml'
          publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'artifacts/coverage/lcov-report', reportFiles: 'index.html', reportName: 'Coverage Report', reportTitles: ''])
        }     
      } 
    }

    stage('Performance') {
      steps {
        sh 'npm run test-performance'
      }
    }
  }
}
