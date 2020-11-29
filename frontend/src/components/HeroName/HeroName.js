import React from 'react';
import css from './heroName.module.css';

export default function HeroName(props) {
  const margin = css[props.margin] || css['topBottom'];
  const fontSize = css[props.fontSize] || css['small'];
  const fontWeight = css[props.fontWeight];

  return <p className={`${margin} ${fontSize} ${fontWeight}`}>{props.name}</p>;
}
