import { writeFileAsJson, readFileAsJson, copyTemplate } from '../../helpers';
import { baseGenerator, Generator } from '../generator';

function addStorybookExcludeGlobToTsConfig() {
  const tsConfigJson = readFileAsJson('tsconfig.json', true);
  const glob = '**/*.stories.ts';
  if (!tsConfigJson) {
    return;
  }

  const { exclude = [] } = tsConfigJson;
  if (exclude.includes(glob)) {
    return;
  }

  tsConfigJson.exclude = [...exclude, glob];
  writeFileAsJson('tsconfig.json', tsConfigJson);
}

const generator: Generator = async (npmOptions, options) => {
  addStorybookExcludeGlobToTsConfig();
  baseGenerator(npmOptions, options, 'aurelia', {
    extraPackages: ['aurelia'],
  });
  copyTemplate(__dirname, options.storyFormat);
};

export default generator;