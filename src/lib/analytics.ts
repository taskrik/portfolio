import posthog from "posthog-js";

export function trackEvent(name: string, params?: Record<string, unknown>) {
  posthog.capture(name, params);
}
