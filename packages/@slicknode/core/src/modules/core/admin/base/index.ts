/**
 * Created by Ivo Meißner on 23.04.17.
 *
 */

import { ModuleAdminConfig } from '../../../../definition';
import pages from './pages';
import types from './types';

const config: ModuleAdminConfig = {
  name: 'Core',
  description: 'Module with all core functionality',
  pages,
  types,
  mutations: {},
};

export default config;
