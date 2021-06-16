function setup() {
    createCanvas(640, 480);
    background(0);
    setupPoseNet(); // ***
  }
  
  function draw() {
    background(0);
    drawMirroredCam(0, 0);
  
    updatePoseNet(); // ***
  
    //drawKeypoints(poses);
    //drawKeypointNames(poses);
    //drawSkeleton(poses);
    // add your code here.

    applyPattern();
    //interactPattern(); //cannot separate uses same variables
    
  function applyPattern() {
    // remix from Moon workshop-sin-cos-noise
    let resolution = 100; 
  
    for (let y = 0; y < height; y += resolution) {
      for (let x = 0; x < width; x += resolution) {
        let freqX = (x + frameCount) * 0.01; // pos
        let freqY = (y + frameCount) * 0.01; // pos
        //sinValue = map(sin(freq), -1, 1, 0, 255);
        let noiseValue = map(noise(freqX, freqY), 0, 1, 0, 255);
        
        //redsquares below nose
        push();
        fill(255, noiseValue, noiseValue, noiseValue);
        rect(x, pose.nose.y, resolution, y);
        pop();

        //purple sun
        noStroke(0);
        fill(noiseValue, freqX, noiseValue, 10);
        ellipse(pose.leftEye.x, pose.rightEye.x, pose.rightEye.y, pose.rightEye.y);
        //tint(255, 127);
        //line(pose.leftEye.x, pose.rightEye.x, pose.rightEye.y, pose.rightEye.y); // line is not connecting eyes ASK MOON ABOUT THIS
      }
    }
  }
}
 
  
  /*
  Keypoints
  All keypoints are indexed by part id. The parts and their ids are:
  
  Id	Part
  0	nose
  1	leftEye
  2	rightEye
  3	leftEar
  4	rightEar
  5	leftShoulder
  6	rightShoulder
  7	leftElbow
  8	rightElbow
  9	leftWrist
  10	rightWrist
  11	leftHip
  12	rightHip
  13	leftKnee
  14	rightKnee
  15	leftAnkle
  16	rightAnkle
  */
