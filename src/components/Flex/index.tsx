import * as React from 'react';

interface FlexProps {
 flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  spaceBetween?: boolean;
  flexStart?: boolean;
  horizontalPadding?: number;
  verticalPadding?: number;
  padding?: number;
  margin?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  backgroundColor?: string;
  style?: React.CSSProperties;
  children?:any;
}

const styleProps = [
  'padding',
  'margin',
  'marginTop',
  'marginLeft',
  'marginRight',
  'marginBottom',
  'backgroundColor',
  'flexDirection',
];

const Flex = (props: FlexProps) => {
  const {
    flexDirection,
    spaceBetween,
    flexStart,
    horizontalPadding = 0,
    verticalPadding = 0,
    padding,
    margin,
    marginTop,
    marginLeft,
    marginBottom,
    marginRight,
    backgroundColor,
    style,
    children
  } = props;
  let defaultStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection:flexDirection || 'row',
    alignItems: 'center',
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    paddingTop: verticalPadding,
    paddingBottom: verticalPadding,
  };
  if (spaceBetween) {
    defaultStyle.justifyContent = 'space-between';
  }
  if (flexStart) {
    defaultStyle.justifyContent = 'flex-start';
  }
  //遍历props key 注入style
  const keys = Object.keys(props);
  keys.forEach((key: string) => {
    if (styleProps.includes(key) && props.hasOwnProperty(key)) {
      (defaultStyle as any)[key] = (props as any)[key];
    }
  });

  if (style) {
    defaultStyle = {
      ...defaultStyle,
      ...style,
    };
  }

  return <div style={defaultStyle}>{children}</div>;
};

export default Flex;
