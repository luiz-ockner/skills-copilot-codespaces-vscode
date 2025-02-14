function skillsMember()
{
    var skill = document.getElementById("skill").value;
    var skills = document.getElementById("skills").value;

    if (skills.length > 0) {
        skills += ", " + skill;
    } else {
        skills = skill;
    }

    document.getElementById("skills").value = skills;
}