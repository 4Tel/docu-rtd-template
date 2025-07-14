// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

import { CardSection, ColumnSection, WidthSection, Card } from '../components/Card/Card';
import { Glossary } from '../components/Glossary/Glossary';
import { Color, Highlight, FontColor } from '../components/Highlight/Highlight';


export default {
  ...MDXComponents,
  Tabs, TabItem,
  CodeBlock,
  CardSection,  ColumnSection,  WidthSection,  Card,
  Glossary,
  Color, Highlight, FontColor,
};