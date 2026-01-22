import { unstable_batchedUpdates } from 'react-native';
import { store } from '../ui/state.js';

export const cleanup = (): void => {
  const doCleanup = () => {
    store.getState().setRenderedElement(null);
    store.getState().setOnLayoutCallback(null);
    store.getState().setOnRenderCallback(null);
  };

  if (unstable_batchedUpdates) {
    unstable_batchedUpdates(doCleanup);
  } else {
    doCleanup();
  }
};
