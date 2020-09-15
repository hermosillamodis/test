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
        sh 'npm run test'
      }
    }

    stage('Coverage') {
      steps {
        sh 'npm run coverage-jenkins'
      }
      post {
        always {

          publishCoverage 
            adapters: [coberturaAdapter('coverage/cobertura-coverage.xml')], 
            sourceFileResolver: sourceFiles('NEVER_STORE')

          publishHTML([
            allowMissing: false, 
            alwaysLinkToLastBuild: false, 
            keepAll: true, 
            reportDir: 'coverage/lcov-report', 
            reportFiles: 'index.html', 
            reportName: 'Coverage Report', reportTitles: ''
          ])
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
