import { baseGenerator, Generator } from '../generator';
import { StoryFormat } from '../../project_types';
import { copyTemplate } from '../../helpers';

const generator: Generator = async (npmOptions, options) => {
  await baseGenerator(npmOptions, options, 'react');
  if (options.storyFormat === StoryFormat.MDX) {
    copyTemplate(__dirname, StoryFormat.MDX);
  }
};

export default generator;