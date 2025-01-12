import { createTreeWithEmptyWorkspace } from '@nrwl/devkit/testing';
import { Tree, readProjectConfiguration } from '@nrwl/devkit';

import generator from './generator';
import { LibraryGeneratorSchema } from './schema';

describe('vue3-vite library generator', () => {
  let appTree: Tree;
  const options: LibraryGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    appTree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await generator(appTree, options);
    const config = readProjectConfiguration(appTree, 'test');
    expect(config).toBeDefined();

    expect(Object.keys(config.targets)).toEqual([
      'build',
      'storybook',
      'build-storybook',
      'e2e',
      'lint',
      'test',
    ]);
  });
});
