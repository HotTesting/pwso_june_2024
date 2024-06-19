export interface LoadableComponent {
  open(): Promise<void>;
  expectLoaded(): Promise<void>;
}
