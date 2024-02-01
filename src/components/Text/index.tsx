interface TextProps {
  size?: number;
  color?: string;
  paddingLeft?: number;
  paddingRight?: number;
  bold?: number;
  children: any;
  style?: React.CSSProperties;
}
const unit = 'px';
const defaultFontSize = 15;

const Text = (props: TextProps) => {
  const { children, paddingLeft, paddingRight, size, color, bold, style } =
    props;
  let defaultStyle: React.CSSProperties = {
    fontSize: (size || defaultFontSize)+unit,
    color: color || '',
  };
  if (bold) {
    defaultStyle.fontWeight = bold;
  }
  if (paddingLeft) {
    defaultStyle.paddingLeft = paddingLeft + unit;
  }
  if (paddingRight) {
    defaultStyle.paddingRight = paddingRight + unit;
  }

  if (style) {
    defaultStyle = {
      ...defaultStyle,
      ...style,
    };
  }
  return <span style={defaultStyle}>{children}</span>;
};

export default Text;
