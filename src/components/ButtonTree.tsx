import * as React from 'react';
import {Stack, Button} from '@fluentui/react'

export interface ButtonProps {
  /**
   * Text for your fancy button! Really should be able to use different colors though.
   */
  text: string;

  /**
   * Click to do things! Rather than not doing things, which is bad
   */
  onClick?: (ev: React.MouseEvent<any>) => void;

  /**
   * @default []
   */
  ornaments?: JSX.Element[];
}

export type Trunkation = 'trunk' | 'hide' | 'crown' | 'bark';
export type ButtonTreeAlignment = 'evergreen' | 'deciduous';

/**
 * All of the amazing props that you can pass to your
 * tall and evergrowing tree of buttons
 */
export interface ButtonTreeProps {

  /**
   * An array of all of your buttons! They'll magically arranged in our favorite shape,
   * a tree! sure it's not always balanced right but who is counting?
   */
  buttons: ButtonProps[];

  /**
   * @default 'trunk'
   */
  trunkation?: Trunkation;

  /**
   * @default 'evergreen'
   */
  alignment?: ButtonTreeAlignment;


}

const RenderButtonTree = (props: ButtonTreeProps) => {
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

