const projectMap = {
    lidarVR: ["Lidar VR", "description"],
    punchBack: ["Punch Back", "description"],
    ristrovikCrisis: ["Ristrovik Crisis", "description"]
}

let params = new URL(document.location).searchParams;
let projectParam = params.get("img");

document.getElementById("projectImg").src = `assets/projectLogos/${projectParam}Logo.png`;
document.getElementById("projectName").innerText = projectMap[projectParam][0];
document.getElementById("projectAbout").innerText = projectMap[projectParam][1];