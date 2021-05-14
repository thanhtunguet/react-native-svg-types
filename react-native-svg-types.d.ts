declare module 'react-native-svg-types' {
    import type {SvgProps} from 'react-native-svg';
    import type {FC} from 'react';
  
    export type SvgComponent = FC<SvgProps>;
  }
  
  declare module '*.svg' {
    import type {SvgComponent} from 'react-native-svg-types';
  
    const component: SvgComponent;
  
    export default component;
  }
  