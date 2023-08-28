/**
 * Asynchronously loads the component for FinishQuestionnairePage
 */

import { lazyLoad } from 'utils/loadable';

export const FinishQuestionnairePage = lazyLoad(
  () => import('./index'),
  module => module.FinishQuestionnairePage,
);
