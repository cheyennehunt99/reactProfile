import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Cheyenne Hunt</h2>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am from Seattle, WA where I work as a Brand Ambassador at Facebook. In my spare time, I enjoy learning new things and meeting new people.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Phone</h5>
            <p>(123) 456-7890</p>
            <h5>Email</h5>
            <p>cheyennehunt78@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
              <h2>Experience</h2>

            <Experience
              startYear={"September 2019"}
              endYear={"current"}
              jobName="Milestone.tech @Facebook, Seattle,WA — Brand Ambassador"
              jobDescription="Organized and carried out promotional events by setting up and tearing down event sites, interacting with full time employees.
              Created positive and rewarding client experiences through warm and friendly customer interactions.
              Worked closely with team members to deliver project requirements, develop solutions and meet deadlines.
              Handled all delegated tasks, including daily posting of events and scheduling of meetings.
              Improved customer satisfaction by finding creative solutions to problems.
              Improved operations by working with team members and customers to find workable solutions.
              Learned Excel and Outlook to support office needs.
              "
              />

              <Experience
                startYear={"January 2019"}
                endYear={"September 2019"}
                jobName="Starbucks, Farmington,NM — Barista"
                jobDescription="Managed morning rush of over 100 customers daily with efficient, level headed customer service.
                Listened to customer desires and needs to recommend optimal products.
                Maintained calm demeanor during high-volume periods and special events.
                Resolved customer disputes with tact and professionalism.
                "
                />
                <hr style={{ borderTop: '3px solid #e22947' }} />

            <h2>Education</h2>


            <Education
              startYear={"June 2020"}
              endYear={"November 2020"}
              schoolName="UW Coding Bootcamp, Seattle,WA — Certificate"
              schoolDescription="Studied Full-Stack Web Development of  HTML, CSS, & JavaScript and the fundamentals of Computer Science. Built a series of fully functioning projects using API’s, jQuery, & Ajax."
            />

            <Education
              startYear={"August 2014"}
              endYear={"May 2018"}
              schoolName="Shiprock High School, Shiprock, NM — Diploma"
              schoolDescription="Graduated from High School with a 3.0 GPA."
            />
            <hr style={{ borderTop: '3px solid #e22947' }} />
            <h2>Skills</h2>
        
            <ul>Javascript</ul>
            <ul>HTML/CSS</ul>
            <ul>NodeJS</ul>
            <ul>REACT</ul>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;