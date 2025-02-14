pipeline {
      agent any
      stages { 
         
         stage('Build docker images ...'){
               steps {
               
               sh "echo Build docker images ... "
               
               dir('Angular-App') {

                  dir('backend') {
                   sh "echo Build backend image ... "
                   sh "docker build -t aliahmed312/backend:$BUILD_NUMBER ."

                  }
                   
                  dir('front-end') {
                   sh "echo Build frontend image ... "
                   sh "docker build -t aliahmed312/frontend:$BUILD_NUMBER ."

                  }

               }


               }
                     
         }

         stage('Push docker images ...'){
               steps {
                     
               withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                  sh  "docker login -u $USER -p $PASS"

                  sh "docker push aliahmed312/frontend:$BUILD_NUMBER "
                  sh "docker push aliahmed312/backend:$BUILD_NUMBER "
               } 

               }
                     
         }


         stage('Deployment ...'){
               steps {
               
               sh "sed -i 's/image: .*/image: aliahmed312/backend:$BUILD_NUMBER/g' k8s/backend.yml"
               sh "sed -i 's/image: .*/image: aliahmed312/frontend:$BUILD_NUMBER/g' k8s/frontend.yml"
                

               withCredentials([file(credentialsId: 'k8s-config', variable: 'k8s')]) {
                  
               sh "kubectl --kubeconfig=$k8s apply -f k8s/backend.yml"   
               sh "kubectl --kubeconfig=$k8s apply -f k8s/frontend.yml"

               }



               }
                     
         }

   }
}
