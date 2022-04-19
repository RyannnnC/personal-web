import * as React from 'react';
import { Container, Grid } from '@mui/material';
import './component.scss'
import {bg,fg, bird0, bird1, bird2, pipeN, pipeS, gameover, _ok_, splash, ready} from './sprite.js'
import {observer} from 'mobx-react'
import {width, height} from '../helpers/detectWidth'
import {rungame, states} from '../helpers/store';

const SpriteWrapper = observer (class SpriteWrapper extends React.Component {
    render () {
        const gameSprite = this.props.gameSprite;
        const rotate = 'rotate('+ gameSprite.rotation +'rad)'
        const translate = 'translate(' + gameSprite.cx + 'px,' + gameSprite.cy + 'px)'
        const ctrans = (gameSprite.rotation == null) ? translate : translate + ' ' + rotate;
        const onClickHandler = (this.props.onClickHandler) == null ? null : this.props.onClickHandler;
        var style = {
          transform: ctrans,
          position: 'absolute'
        }
    
        return (
          <div style={style} onClick={onClickHandler}>
            {this.props.children}
          </div>)
      }
})

const Bg = observer (
    class Bg extends React.Component {
        render () {
            return (
                <SpriteWrapper gameSprite={this.props.bg}>
                    {bg}
                </SpriteWrapper>
            )
        }
    }
)

const Fg = observer (
    class Fg extends React.Component {
        render () {
            return (
                <SpriteWrapper gameSprite={this.props.fg}>
                    {fg}
                </SpriteWrapper>
            )
        }
    }
)

const Bird = observer (
    class Bird extends React.Component {
        render () {
            let wbird;
            switch( this.props.bird.frame) {
                case 0:
                case 1:
                case 2:
                    wbird = bird2
                    break
                case 3:
                    wbird = bird1
                    break
                default:
                    wbird = bird0
                    break
            }
            return (
                <SpriteWrapper gameSprite={this.props.bird}>
                    {wbird}
                </SpriteWrapper>
            )
        }
    }
)

const Pipe = observer(
    class Pipe extends React.Component {
    render () {
      let wpipe;
      switch(this.props.pipe.type) {
        default:
        case "N":
          wpipe = pipeN
          break
        case "S":
          wpipe = pipeS
          break
      }
  
      return <SpriteWrapper gameSprite={this.props.pipe}> {wpipe} </SpriteWrapper>;
  
    }
})

const Gameover = observer(
    class Gameover extends React.Component {
  
    render () {
        return <SpriteWrapper gameSprite={{cx: width/2 - 94, cy: height-400}}> {gameover} </SpriteWrapper>;
    }
  
})
  
export const OK = observer(
    class OK extends React.Component {
  
    render () {
        return <SpriteWrapper gameSprite={{cx: width/2 - 40, cy: height-340}} onClickHandler={rungame} > {_ok_} </SpriteWrapper>;
    }
  
})
  
export const Splash = observer(
    class Splash extends React.Component {
  
    render ()  {
        return <SpriteWrapper gameSprite={{cx: width/2 - 59, cy: height-300}}> {splash} </SpriteWrapper>;
    }
  
})
  
  export const Ready = observer(
    class Ready extends React.Component {
  
    render () {
        return <SpriteWrapper gameSprite={{cx: width/2 - 87, cy: height-380}}> {ready} </SpriteWrapper>;
    }
  
})

export const FlappyBird = observer(class FlappyBird extends React.Component {
    componentDidMount() {
        this.req = window.requestAnimationFrame(this.appUpdateFrame)
    }
    appUpdateFrame = () => {
        this.props.updateFrame();
        this.req = window.requestAnimationFrame(this.appUpdateFrame)
    }

    press() {
        switch (this.props.game.currentstate) {
        default:
        case this.props.stats.Splash:
          this.props.rungame()
          this.props.birdjump(this.props.store.bird)
          break
        case this.props.stats.Game:
          this.props.birdjump(this.props.store.bird)
          break
        case this.props.stats.Score:
          break
        }
    }

    render() {
    const {bgs, fgs, bird, pipes} = this.props.store;
    const { currentstate } = this.props.game;
    const style = {
        width: width,
        height: height
    }
    
    return (
        <React.Fragment>
            <Container maxWidth='false' className="game_container" sx={{display: 'flex'}}>
                <div className="fakecanvas" style={style} onClick={()=>this.press()}>
                { bgs.map( (bg) => ( <Bg bg={bg} key={bg.id} /> )     )}
                { pipes.map( (pipe) => (  <Pipe pipe={pipe} key={pipe.id} /> )   )}
                { (currentstate === states.Score) ? <Gameover /> : null }
                { (currentstate === states.Score) ? <OK /> : null }
                { (currentstate === states.Splash) ? <Splash /> : null }
                { (currentstate === states.Splash) ? <Ready /> : null }
                { fgs.map( (fg) => ( <Fg fg={fg} key={fg.id} /> )     )}
                <Bird bird={bird} />
                </div>
            </Container>
        </React.Fragment>
    )
    }
})


