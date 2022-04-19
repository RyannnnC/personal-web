import { useEffect, useState } from 'react';
import * as React from 'react';
import { Container, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Card from '../helpers/card.js';
import './component.scss'
import kong from "../assets/genshin/common/kong.jpg";
import paimeng from "../assets/genshin/common/paimeng.jpg";
import ye from "../assets/genshin/common/ye.jpg";

import diluke from "../assets/genshin/fire/diluke.jpg";
import hutao from "../assets/genshin/fire/hutao.jpg";
import keli from "../assets/genshin/fire/keli.jpg";
import xiangling from "../assets/genshin/fire/xiangling.jpg";
import xiaogong from "../assets/genshin/fire/xiaogong.jpg";
import yanfei from "../assets/genshin/fire/yanfei.jpg";

import qiqi from "../assets/genshin/ice/77.jpg";
import ganyu from "../assets/genshin/ice/ganyu.jpg";
import linghua from "../assets/genshin/ice/linghua.jpg";
import shenhe from "../assets/genshin/ice/shenhe.jpg";
import youla from "../assets/genshin/ice/youla.jpg";

import abeiduo from "../assets/genshin/rock/abeiduo.jpg";
import nvpu from "../assets/genshin/rock/nvpu.jpg";
import yunjin from "../assets/genshin/rock/yunjin.jpg";
import zhongli from "../assets/genshin/rock/zhongli.jpg";

import aimi from "../assets/genshin/thunder/aimi.jpg";
import keqing from "../assets/genshin/thunder/keqing.jpg";
import leishen from "../assets/genshin/thunder/leishen.jpg";
import shenzi from "../assets/genshin/thunder/shenzi.jpg";

import babala from "../assets/genshin/water/babala.jpg";
import lingren from "../assets/genshin/water/lingren.jpg";
import mona from "../assets/genshin/water/mona.jpg";
import xinhai from "../assets/genshin/water/xinhai.jpg";

import qin from "../assets/genshin/wind/qin.jpg";
import wanye from "../assets/genshin/wind/wanye.jpg";
import wendi from "../assets/genshin/wind/wendi.jpg";
import xiao from "../assets/genshin/wind/xiao.jpg";

import wind from "../assets/genshin/wind/wind.jpeg";
import water from "../assets/genshin/water/water.png";
import thunder from "../assets/genshin/thunder/thunder.jpeg";
import rock from "../assets/genshin/rock/rock.jpeg";
import ice from "../assets/genshin/ice/ice.jpeg";
import fire from "../assets/genshin/fire/fire.jpeg";

const elem = [wind, water, thunder, rock, ice, fire];

const common_chars = [
    { "src": kong, matched: false },
    { "src": paimeng, matched: false },
    { "src": ye, matched: false },
]

const fire_chars = [
    { "src": diluke, matched: false },
    { "src": hutao, matched: false },
    { "src": keli, matched: false },
    { "src": xiangling, matched: false },
    { "src": xiaogong, matched: false },
    { "src": yanfei, matched: false },
]

const ice_chars = [
    { "src": qiqi, matched: false },
    { "src": ganyu, matched: false },
    { "src": linghua, matched: false },
    { "src": shenhe, matched: false },
    { "src": youla, matched: false },
]

const rock_chars = [
    { "src": abeiduo, matched: false },
    { "src": nvpu, matched: false },
    { "src": yunjin, matched: false },
    { "src": zhongli, matched: false },
]

const thunder_chars = [
    { "src": aimi, matched: false },
    { "src": keqing, matched: false },
    { "src": leishen, matched: false },
    { "src": shenzi, matched: false },
]

const water_chars = [
    { "src": babala, matched: false },
    { "src": lingren, matched: false },
    { "src": mona, matched: false },
    { "src": xinhai, matched: false },
]

const wind_chars = [
    { "src": qin, matched: false },
    { "src": wanye, matched: false },
    { "src": wendi, matched: false },
    { "src": xiao, matched: false },
]

const chars = [common_chars, fire_chars, ice_chars, rock_chars, thunder_chars, water_chars, wind_chars]

function Genshin() {
    const [cards, setCards] = useState([]);
    const [bg, setBg] = useState('');
    const [turn, setTurn] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisabled] = useState(true);
    const [startFlip, setStartFlip] = useState(true);
    const { t } = useTranslation("translation");


    useEffect(() => {
        setTimeout(() => {
          setStartFlip(false)
        }, 1000);
        shuffleCards();
    }, []);

    function shuffleCards() {
        let initialCards= []
        while (initialCards.length < 8) {
            let rand_list = chars[Math.floor(Math.random() * chars.length)]
            let rand_char = rand_list[Math.floor(Math.random() * rand_list.length)]
            if (initialCards.includes(rand_char)) {
                continue
            } else {
                initialCards.push(rand_char)
            }      
        }

        let rand_elem = elem[Math.floor(Math.random() * elem.length)]
        setBg(rand_elem)
        const shuffledCards = [...initialCards, ...initialCards]
          .sort(() => Math.random() - 0.5)
          .map((card) => ({ ...card, id: Math.random() }));
    
        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffledCards);
        setTurn(0);
        setDisabled(false)
        setStartFlip(true)
        setTimeout(() => {
          setStartFlip(false)
        }, 1000);
    }

    function handleChoice(card) {
        choiceOne ? (
          choiceOne.id !== card.id &&
          setChoiceTwo(card))
          : setChoiceOne(card)
      }
    
    function resetTurn() {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurn(prevTurn => prevTurn + 1)
        setDisabled(false)
    }

    useEffect(() => {
        if (choiceOne && choiceTwo) {
          setDisabled(true);
          if (choiceOne.src === choiceTwo.src) {
            setCards(prevCards => {
              return prevCards.map(card => {
                if (card.src === choiceOne.src) {
                  return { ...card, matched: true }
                } else {
                  return card
                }
              })
            })
            resetTurn();
          } else {
            setTimeout(() => {
              resetTurn();
            }, 1000);
          }
        }
    }, [choiceOne, choiceTwo]);

    return (
        <React.Fragment>
            <Container maxWidth='false' className="game_container" sx={{display: 'flex', flexDirection:'column'}}>
                <button className="newGame" onClick={shuffleCards}>{t('newGame')}</button>
                <Grid container item sm={12} md={8} lg={6} spacing={1} >
                    {cards.map(card => (
                        <Card
                            key={card.id}
                            card={card}
                            bg={bg}
                            handleChoice={handleChoice}
                            flipped={card === choiceOne || card === choiceTwo || card.matched || startFlip}
                            disabled={disabled}
                            matched={card.matched}
                        />
                    ))}
                </Grid>
                <p className="gamep">{t('turns')}: {turn}</p>   
            </Container>
        </React.Fragment>
    )
}

export default Genshin;
