import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';


function AboutPage() {
    return (
        <div className="about"> 
            <h3>Keeper is a simple note-taking app.</h3>
                <p> You can create, edit, delete and view notes.</p>
                
                <a class="aboutIcons" href="mailto:emmanueltejuosho@gmail.com">  <EmailIcon color="action"/> </a>
                <a class="aboutIcons" href="https://github.com/Toluwase10/keeeper">  <GitHubIcon color="primary"/> </a>
                <p id="aboutMod">Modified from the Keeper project by Angela Yu's Web Development Bootcamp on Udemy.</p>
        </div>
    );
}

export default AboutPage;




