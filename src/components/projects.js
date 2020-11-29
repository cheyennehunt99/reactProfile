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
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#030204', height: '176px', background: 'url(https://github.com/cheyennehunt99/responsive-portfolio/blob/master/img/DayPlanner.jpg?raw=true) center / cover'}} >Day Planner</CardTitle>
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

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#030204', height: '176px', background: 'url(https://github.com/cheyennehunt99/Note_Taker/raw/master/demo/server.gif) center / cover'}} >Note Taker</CardTitle>
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

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#030204', height: '176px', background: 'url(https://github.com/cheyennehunt99/handle-EDB/raw/master/images/create.gif) center / cover'}} >Hamburger App</CardTitle>
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
            <CardTitle style={{color: '#030204', height: '176px', background: 'url(https://github.com/cheyennehunt99/T_0202Fit/raw/main/samples/db.png) center / cover'}} >Fitness Tracker</CardTitle>
            <CardText>
            Reach your fitness goals more quickly and effectively by tracking your workout progress and status.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/T_0202Fit" target="_blank">GitHub</Button>
              <Button colored a href="https://immense-refuge-82476.herokuapp.com/?id=5f94b8b44004b50024582667" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#030204', height: '176px', background: 'url(https://github.com/cheyennehunt99/ON-OFF/raw/main/sample/tracker.gif) center / cover'}} >Budget Tracker</CardTitle>
            <CardText>
            This application let's users keep track of their expenses, deposits, and budgets when offline and online. 
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/ON-OFF" target="_blank">GitHub</Button>
              <Button colored a href="https://arcane-garden-28730.herokuapp.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#030204', height: '176px', background: 'url(https://github.com/cheyennehunt99/edirect/raw/main/sample/direct.gif) center / cover'}} >Employee Directory</CardTitle>
            <CardText>
            This is a employee directory built with React which lets employers access employees information easily. 
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/edirect" target="_blank">GitHub</Button>
              <Button colored a href="https://cheyennehunt99.github.io/edirect/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#030204', height: '176px', background: 'url(https://github.com/cheyennehunt99/responsive-portfolio/blob/master/img/Project1.jpg?raw=true) center / cover'}} >Brewery Finder</CardTitle>
            <CardText>
            Get connected to your local breweries without leaving your home! Skip going to the store to find your favorite brew.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/projectone" target="_blank">GitHub</Button>
              <Button colored a href="https://mavn2.github.io/projectone/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#030204', height: '176px', background: 'url(https://github.com/cheyennehunt99/zen-app/raw/master/image/main-page2.png) center / cover'}} >The Zen</CardTitle>
            <CardText>
            Get inspired using this application to keep track and get your daily tasks done! You can do it with some motivation.  
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/zen-app" target="_blank">GitHub</Button>
              <Button colored a href="https://mighty-gorge-04831.herokuapp.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#030204', height: '176px', background: 'url(https://github.com/Toogii2019/safe_space/raw/master/image/safe-space-member.png) center / cover'}} >Safe Space</CardTitle>
            <CardText>
            Safe Space is an application to connect individuals by sharing their thoughts publicly or privately during COVID-19.
            </CardText>
            <CardActions border>
              <Button colored a href="https://github.com/cheyennehunt99/safe_space" target="_blank">GitHub</Button>
              <Button colored a href="https://safe-space-2020.herokuapp.com/" target="_blank">Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
            </CardMenu>
          </Card>
        </div>
      )
    } 

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Page 1</Tab>
          <Tab>Page 2</Tab>
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