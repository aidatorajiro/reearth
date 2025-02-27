import { Auth0Provider } from "@auth0/auth0-react";
import { ReactNode } from "react";

const Provider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const domain = window.REEARTH_CONFIG?.auth0Domain;
  const clientId = window.REEARTH_CONFIG?.auth0ClientId;
  const audience = window.REEARTH_CONFIG?.auth0Audience;

  return domain && clientId ? (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: audience,
        scope: "openid profile email offline_access",
        redirectUri: window.location.origin,
      }}
      useRefreshTokens
      cacheLocation="localstorage">
      {children}
    </Auth0Provider>
  ) : (
    // TODO
    <>{children}</>
  );
};

export default Provider;
