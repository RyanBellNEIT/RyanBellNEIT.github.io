const projectMap = {
    lidarVR: ["Lidar VR", "LiDAR VR is a unique 3D VR horror game built in Unity Engine C#. You take the role of a scientist entering a simulation where the world can only be drawn by using your LiDAR scanner. After getting stuck inside of the simulation, you must traverse your way out of the world and find your freedom among the simulation. However, you are not alone as the thing that trapped you also wants you dead. Developed in Unity VR with C#."],
    punchBack: ["Punch Back", "Punch Back is a Fast-paced 2D Platformer built in Unity Engine and C#. In Punch Back, you play as a lumberjack on his daily shift in the winter. Unfortunately during your shift, the birds and the snow men have teamed up to steal your axe for good and rid you from doing your job. It is up to you to retrive your axe back from the birds. Use your first to traverse the map in this 2D fast paced platformer. Developed in Unity 2d with C#."],
    ristrovikCrisis: ["The Ristrovik Crisis", "The Ristrovik Crisis is a 3D horror game taking place in the 80s. You are a liquidator being sent in to stop the disaster taking place at a nuclear facility that has melted down. Your job is to prevent radiation from spreading outside the country and causing mass destruction on the surrounding area. You are not alone in the facility however, the radiation has caused some unforeseen cirumstances among the facility grounds. Developed in Unity 3d with C#."],
    membershipDatabase: ["MySQL Membership Database", "This software is a simple database that holds registration information for users for a membership. It connects directly to MySQL to store and receive all of it's information. The software is able to add new entries to the database, as well as update and remove these entries. The software is made in windows forms, developed in C++ and MySQL."]
}

let params = new URL(document.location).searchParams;
let projectParam = params.get("img");

document.getElementById("projectImg").src = `assets/projectLogos/${projectParam}Logo.png`;
document.getElementById("projectName").innerText = projectMap[projectParam][0];
document.getElementById("projectAbout").innerText = projectMap[projectParam][1];