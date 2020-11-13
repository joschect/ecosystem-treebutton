import * as React from 'react';
import {Stack, Button} from '@fluentui/react'

export interface ButtonProps {
text: string;
onClick?: (ev: React.MouseEvent<any>) => void;
}

export interface ButtonTreeProps {
buttons: ButtonProps[];
}

const RenderButtonTree = (props: { buttons: ButtonProps[]}) => {
  let countPerRow = 1;
  let cc = 0;
  let row = 0;
  let count = 0;
  let ret: ButtonProps[][] = [];
  let bts = props.buttons;


  while(count < props.buttons.length) {
    if(ret[row] === undefined) {
      ret[row] = []
    }

    ret[row].push(bts[count]);
    count++;
    cc ++;

    if(cc === countPerRow) {
      cc = 0;
      countPerRow ++;
      row ++;
    }
  }

  return ret.map(v => {
    return <Stack horizontalAlign={'center'} horizontal>
      {v.map( b => (<Button onClick={b.onClick}> {b.text} </Button>))}
    </Stack>
  });
}

export const ButtonTree = (props: ButtonTreeProps) => {
  return <div>
  {RenderButtonTree({buttons: props.buttons})}
  </div>
}

