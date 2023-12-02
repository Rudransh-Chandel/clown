function preload()
{

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    pose_net= ml5.poseNet(video,modelLoaded);
    pose_net.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("Pose Net is Working");
}

function draw()
{

}

function takePhoto()
{
    save("ClownPhoto.jpg");
}