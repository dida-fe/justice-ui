/* eslint-disable no-empty */
/* eslint-disable getter-return */
/* eslint-disable import/no-mutable-exports */
import { isServer } from '..';
import { EventHanlder } from '../types';

export let supportsPassive = false;

if (!isServer) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null as any, opts);
  } catch (e) {}
}

export function on(
  target: HTMLElement,
  event: string,
  handler: EventHanlder,
  passive = false
) {
  if (!isServer) {
    target.addEventListener(
      event,
      handler,
      supportsPassive ? { capture: false, passive } : false
    );
  }
}

export function off(target: HTMLElement, event: string, handler: EventHanlder) {
  if (!isServer) {
    target.removeEventListener(event, handler);
  }
}

export function stopPropagation(event: Event) {
  event.stopPropagation();
}

export function preventDefault(event: Event, isStopPropagation?: boolean) {
  /* istanbul ignore else */
  if (typeof event.cancelable !== 'boolean' || event.cancelable) {
    event.preventDefault();
  }

  if (isStopPropagation) {
    stopPropagation(event);
  }
}
