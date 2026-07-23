interface Window {
  __voxServerStartedByApp?: boolean;
}

declare module 'virtual:changelog' {
  const raw: string;
  export default raw;
}
