import { CookieManager } from "react-cookie-manager";
function CookiesProvider({ children }: { children: React.ReactNode }) {
  return (
    <CookieManager
      cookieKitId="68f0e4971bbc36d40feb9dfe"
      classNames={{
        popupTitle: "text-xl font-gilory-bold text-dark",
        popupMessage: "text-sm font-gilory text-gray-700",
        acceptButton: "cookie-button red",
        declineButton: "cookie-button",
      }}
      translations={{
        title: "Želite li kolačić? 🍪",
        message:
          "Cijenimo vašu privatnost. Osnovni kolačići su uvijek omogućeni jer su neophodni za pravilno funkcioniranje web stranice.",
        buttonText: "Prihvati sve",
        declineButtonText: "Odbij sve",
      }}
      showManageButton={false}
      displayType="popup"
    >
      {children}
    </CookieManager>
  );
}

export default CookiesProvider;
