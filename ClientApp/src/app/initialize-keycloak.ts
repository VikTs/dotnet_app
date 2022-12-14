import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(
    keycloak: KeycloakService
    ) {
      return () =>
        keycloak.init({
          config: {
            url: 'http://localhost:8080' + '/auth',
            realm: 'master',
            clientId: 'demo-app',
          },
          initOptions: {
            onLoad: "login-required",
            checkLoginIframe: false,
        }
    });
  }