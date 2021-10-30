function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3r7dSZB5k/model.json",modelready);
}
 function modelready(){
     classifier.classify(gotresults);
 }   
 function gotresults(error,results){
     if(error){
         console.log(error)
     }
     else{
         console.log(results)
     }
 }