/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';




export namespace Components {

  interface IonlabApp {}
  interface IonlabAppAttributes extends StencilHTMLAttributes {}

  interface IonlabDeviceFrame {
    'icon': string;
    'platform': string;
    'platformName': string;
    'url': string;
  }
  interface IonlabDeviceFrameAttributes extends StencilHTMLAttributes {
    'icon'?: string;
    'platform'?: string;
    'platformName'?: string;
    'url'?: string;
  }

  interface IonlabPlatformDropdown {
    'activePlatforms': string[];
  }
  interface IonlabPlatformDropdownAttributes extends StencilHTMLAttributes {
    'activePlatforms'?: string[];
    'onIonlabPlatformToggled'?: (event: CustomEvent) => void;
  }

  interface IonlabPreview {
    'activeDevices': string[];
    'projectType': string;
    'url': string;
  }
  interface IonlabPreviewAttributes extends StencilHTMLAttributes {
    'activeDevices'?: string[];
    'projectType'?: string;
    'url'?: string;
  }

  interface IonlabSidebar {
    'visible': boolean;
  }
  interface IonlabSidebarAttributes extends StencilHTMLAttributes {
    'onIonlabSidebarCloseClicked'?: (event: CustomEvent) => void;
    'visible'?: boolean;
  }

  interface SkFadingCircle {}
  interface SkFadingCircleAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'IonlabApp': Components.IonlabApp;
    'IonlabDeviceFrame': Components.IonlabDeviceFrame;
    'IonlabPlatformDropdown': Components.IonlabPlatformDropdown;
    'IonlabPreview': Components.IonlabPreview;
    'IonlabSidebar': Components.IonlabSidebar;
    'SkFadingCircle': Components.SkFadingCircle;
  }

  interface StencilIntrinsicElements {
    'ionlab-app': Components.IonlabAppAttributes;
    'ionlab-device-frame': Components.IonlabDeviceFrameAttributes;
    'ionlab-platform-dropdown': Components.IonlabPlatformDropdownAttributes;
    'ionlab-preview': Components.IonlabPreviewAttributes;
    'ionlab-sidebar': Components.IonlabSidebarAttributes;
    'sk-fading-circle': Components.SkFadingCircleAttributes;
  }


  interface HTMLIonlabAppElement extends Components.IonlabApp, HTMLStencilElement {}
  var HTMLIonlabAppElement: {
    prototype: HTMLIonlabAppElement;
    new (): HTMLIonlabAppElement;
  };

  interface HTMLIonlabDeviceFrameElement extends Components.IonlabDeviceFrame, HTMLStencilElement {}
  var HTMLIonlabDeviceFrameElement: {
    prototype: HTMLIonlabDeviceFrameElement;
    new (): HTMLIonlabDeviceFrameElement;
  };

  interface HTMLIonlabPlatformDropdownElement extends Components.IonlabPlatformDropdown, HTMLStencilElement {}
  var HTMLIonlabPlatformDropdownElement: {
    prototype: HTMLIonlabPlatformDropdownElement;
    new (): HTMLIonlabPlatformDropdownElement;
  };

  interface HTMLIonlabPreviewElement extends Components.IonlabPreview, HTMLStencilElement {}
  var HTMLIonlabPreviewElement: {
    prototype: HTMLIonlabPreviewElement;
    new (): HTMLIonlabPreviewElement;
  };

  interface HTMLIonlabSidebarElement extends Components.IonlabSidebar, HTMLStencilElement {}
  var HTMLIonlabSidebarElement: {
    prototype: HTMLIonlabSidebarElement;
    new (): HTMLIonlabSidebarElement;
  };

  interface HTMLSkFadingCircleElement extends Components.SkFadingCircle, HTMLStencilElement {}
  var HTMLSkFadingCircleElement: {
    prototype: HTMLSkFadingCircleElement;
    new (): HTMLSkFadingCircleElement;
  };

  interface HTMLElementTagNameMap {
    'ionlab-app': HTMLIonlabAppElement
    'ionlab-device-frame': HTMLIonlabDeviceFrameElement
    'ionlab-platform-dropdown': HTMLIonlabPlatformDropdownElement
    'ionlab-preview': HTMLIonlabPreviewElement
    'ionlab-sidebar': HTMLIonlabSidebarElement
    'sk-fading-circle': HTMLSkFadingCircleElement
  }

  interface ElementTagNameMap {
    'ionlab-app': HTMLIonlabAppElement;
    'ionlab-device-frame': HTMLIonlabDeviceFrameElement;
    'ionlab-platform-dropdown': HTMLIonlabPlatformDropdownElement;
    'ionlab-preview': HTMLIonlabPreviewElement;
    'ionlab-sidebar': HTMLIonlabSidebarElement;
    'sk-fading-circle': HTMLSkFadingCircleElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
