/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/tools/tree/master/packages/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   anypoint-signin.js
 */


// tslint:disable:variable-name Describing an API that's defined elsewhere.
// tslint:disable:no-any describes the API as best we are able today

import {LitElement, html, css} from 'lit-element';

export {AnypointSignin};

declare namespace AnypointElements {

  /**
   * Anypoint sign in button allows to sign in the user in the Anypoint
   * core services.
   *
   * Authorization result is `accessToken` that can be used to call other APIs
   * and `user` object returned from the Exchange.
   *
   * If you do not need to show the button, use companion
   * `<anypoint-signin-aware>` element to check authentication state and
   * perform manula authentication.
   *
   * #### Examples
   *
   * ```html
   * <anypoint-signin client-id="..."
   *  redirect-uri="https://auth.domain.com/auth/redirect"></anypoint-signin>
   * <anypoint-signin label-signin="Sign-in" client-id="..."
   *  redirect-uri="https://auth.domain.com/auth/redirect"></anypoint-signin>
   * <anypoint-signin theme="dark" width="iconOnly" client-id="..."
   *  redirect-uri="https://auth.domain.com/auth/redirect"></anypoint-signin>
   * ```
   *
   * #### Notes
   *
   * The `clientId` and `redirectUri` properties has to be set before using the
   * component. `clientId` and associated with it `redirectUri` has to be set up
   * with Anypoint authorization server. Contact Anypoint Core services for
   * more information.
   *
   * ## Authorization type
   *
   * This element supports `implicit` authentication flow only. Web application
   * should not contain OAuth2 secret and most OAuth2 authorization do not allow
   * web clients to authenticate from a web client. If you have to use `code`
   * authorization flow when use different method to authenticate the user.
   *
   * ## Autho log in
   *
   * The element attempts to log in user in a non-interactive way (without
   * displaying the popup) when the lement is ready. It does nothing when
   * the response is errored.
   *
   * ## New in version 2.0
   *
   * - The element does not include polyfills library. If you targeting legacy
   * browsers you can include polyfills library from `advanced-rest-client/arc-polyfills`
   * - The element works with Polymer 2.0 library
   *
   * ## Styling
   *
   * `<anypoint-signin>` provides the following custom properties and mixins for styling:
   *
   * Custom property | Description | Default
   * ----------------|-------------|----------
   * `--anypoint-signin-disabled-background-color` | Background color of the disabled button | `#eaeaea`
   * `--anypoint-signin-disabled-color` | Color of the disabled button | `#a8a8a8`
   */
  class AnypointSignin extends LitElement {

    /**
     * True if user is signed in
     */
    signedIn: boolean|null|undefined;

    /**
     * True if user is signed in
     */
    accessToken: string|null|undefined;

    /**
     * User profile information.
     */
    user: object|null|undefined;
    readonly authAware: any;

    /**
     * An Anypoint clientId
     */
    clientId: string|null|undefined;

    /**
     * Authorization redirect URI
     */
    redirectUri: string|null|undefined;

    /**
     * The height to use for the button.
     *
     * Available options: short, standard, tall.
     *
     * Defaults to `standard`
     */
    height: string;

    /**
     * An optional label for the sign-in button.
     */
    labelSignin: string|null|undefined;

    /**
     * An optional label for the sign-out button.
     *
     * Defaults to `Sign out`
     */
    labelSignout: string|null|undefined;

    /**
     * If true, the button will be styled with a shadow.
     */
    raised: boolean|null|undefined;

    /**
     * The theme to use for the button.
     *
     * Available options: light, dark.
     */
    theme: string;

    /**
     * The width to use for the button.
     *
     * Available options: iconOnly, standard, wide.
     */
    width: string;

    /**
     * If set it will not render ripple effect
     */
    noink: boolean|null|undefined;

    /**
     * By default this element inserts `oauth2-authorization` element to the
     * body and uses direct API to authorize the client. Set this property to
     * force the element to use events system to call the OAuth endpoint.
     *
     * It is useful when your application has it's own OAuth 2 authorization
     * mechanism.
     */
    forceOauthEvents: boolean|null|undefined;
    constructor();
    render(): any;
    _computeButtonClass(height: any, width: any, theme: any, signedIn: any): any;

    /**
     * Determines the proper label based on the attributes.
     */
    _computeSigninLabel(labelSignin: String|null, width: Number|null): String|null;

    /**
     * Sign in user. Opens the authorization dialog for signing in.
     * The dialog will be blocked by a popup blocker unless called inside click handler.
     */
    signIn(): void;
    _signInKeyPress(e: any): void;

    /**
     * Sign out the user
     */
    signOut(): void;
    _signOutKeyPress(e: any): void;
    _atHandler(e: any): void;
    _userHandler(e: any): void;
    _signedinHandler(e: any): void;
  }
}

declare global {

  interface HTMLElementTagNameMap {
    "anypoint-signin": AnypointElements.AnypointSignin;
  }
}
