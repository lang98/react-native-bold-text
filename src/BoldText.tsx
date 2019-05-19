import React, { Component, ReactNode } from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';

interface Props {
  tag?: string;
  textStyle?: StyleProp<TextStyle>;
  boldTextStyle?: StyleProp<TextStyle>;
}

export class BoldText extends Component<Props> {
  render() {
    const { children, textStyle } = this.props;
    if (typeof children !== 'string') {
      return null;
    }

    return <Text style={textStyle}>{this.getChildNodes(children)}</Text>;
  }

  private getChildNodes(text: string): React.ReactNodeArray {
    const nodes: React.ReactNodeArray = [];
    const startTag = `<${this.props.tag || 'b'}>`;
    const endTag = `</${this.props.tag || 'b'}>`;
    let remainingText = text;
    while (remainingText.length) {
      let startIndex = remainingText.indexOf(startTag);
      let endIndex = remainingText.indexOf(endTag);
      if (startIndex != -1 && endIndex != -1) {
        let taggedText = remainingText.substring(startIndex + startTag.length, endIndex);
        nodes.push(remainingText.substring(0, startIndex));
        nodes.push(this.renderBoldText(taggedText));
        remainingText = remainingText.substring(endIndex + endTag.length);
      }
      nodes.push(remainingText);
      remainingText = '';
    }
    return nodes;
  }

  private renderBoldText(text: string): ReactNode {
    return <Text style={this.props.boldTextStyle}>{text}</Text>;
  }
}
