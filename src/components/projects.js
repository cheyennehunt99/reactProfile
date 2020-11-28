import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Day Planner</CardTitle>
            <CardText>
            This simple calendar application allows users to save events for each hour of the day. It features HTML and CSS powered by jQuery.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/Day-Planner" target="_blank">GitHub</Button>
              <Button colored a href="https://cheyennehunt99.github.io/Day-Planner/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Note Taker</CardTitle>
            <CardText>
            This application can be used to write, save, and delete notes. It also uses an express backend to save and retrieve note data from a JSON file.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/Note_Taker" target="_blank">GitHub</Button>
              <Button colored a href="https://tunh-notetaker.herokuapp.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Hamburger App</CardTitle>
            <CardText>
            Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/handle-EDB" target="_blank">GitHub</Button>
              <Button colored a href="https://limitless-scrubland-83787.herokuapp.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Fitness Tracker</CardTitle>
            <CardText>
            Reach your fitness goals more quickly and effectively by tracking your workout progress and status.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/T_0202Fit" target="_blank">GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored a href="https://immense-refuge-82476.herokuapp.com/?id=5f94b8b44004b50024582667" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Note Taker</CardTitle>
            <CardText>
            CLI app deployed on Heroku that allows you to "ADD", "SAVE", and "DELETE" notes to help keep track of your day!
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/Note_Taker" target="_blank">GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored a href="https://tunh-notetaker.herokuapp.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Hamburger App</CardTitle>
            <CardText>
            Burger app created using multiple technologies to allow users to create and devour fresh burgers!
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/handle-EDB" target="_blank">GitHub</Button>
              <Button colored>CodePen</Button>
              <Button colored a href="https://limitless-scrubland-83787.herokuapp.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>Projects</h1></div>
      )
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Heroku</Tab>
          <Tab>MongoDB</Tab>
          <Tab>Projects</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;