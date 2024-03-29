/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
type GoogleTag = {
  cmd: {
    push: Function;
  };
  companionAds: Function;
  content: Function;
  defineOutOfPageSlot: Function;
  defineSlot: Function;
  defineUnit: Function;
  destroySlots: Function;
  disablePublisherConsole: Function;
  display: Function;
  enableServices: Function;
  evalScripts: Function;
  getEventLog: Function;
  getVersions: Function;
  getWindowsThatCanCommunicateWithHostpageLibrary: Function;
  onPubConsoleJsLoad: Function;
  openConsole: Function;
  pubads: Function;
  setAdIframeTitle: Function;
  setConfig: Function;
  sizeMapping: Function;
  enums: {
    OutOfPageFormat: {
      TOP_ANCHOR: any;
      BOTTOM_ANCHOR: any;
      REWARDED: any;
    };
  };
  encryptedSignalProviders: Object;
  secureSignalProviders: Object;
  _vars_: Object;
  _loaded_: boolean;
  _loadStarted_: boolean;
  apiReady: boolean;
  pubadsReady: boolean;
};

/** Declaration override */
interface Window {
  googletag: GoogleTag | undefined;
}
