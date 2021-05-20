import { v4 as uuidv4 } from "uuid";
import rl from './img/rl.jpg';
import csgo from './img/csgo.jpg';
import csgo2 from "./img/test.png";
import cs1 from "./img/test2.png";
import cs from "./img/cs.jpg";
import ball from "./img/car.png";


export const cupInfo = () => {
  return [
    {
      url: "/Tournament/1",
      key: 1,
      id: uuidv4(),
      active: false,
      mainImg: csgo,
      secondImg: csgo2, 
      cupInformation: [
          {
              rules: "Dont cheat",
              startDate: "2021-05-12",
              startTime: "18:00",
              admin: "Brauler Bawooser"
            }
          ],
        },
    {
      url: "/Tournament/2",
      key: 2,
      id: uuidv4(),
      active: false,
      mainImg: cs,
      secondImg: cs1,
      cupInformation: [
          {
            rules: "Dont cheat",
            startDate: "2021-04-27",
            startTime: "22:00",
            admin: "Brauler Bawooser"
          }
        ],
      },
      
      {
      url: "/Tournament/3",
      key: 3,
      id: uuidv4(),
      active: false,
      mainImg: rl,
      secondImg: ball,
      cupInformation: [
          {
            rules: "Dont cheat",
            startDate: "2022-05-12",
            startTime: "18:30",
            admin: "Brauler Bawooser"
          }
        ],
      },
        
    //Add More Here
  ];
}

export const nyheter = () => {
  return[
    {
      cupName: "Trolle",
      firstPlace: "Russki-Electrics", 
      mvp: "Schröder",
      videoClutch: "https://www.youtube.com/watch?v=_2eo_XMJWi8",
      blobText: "RuE starts seris strong an take home the The ultimate Gmaers Cup",
    }
  ]
};


