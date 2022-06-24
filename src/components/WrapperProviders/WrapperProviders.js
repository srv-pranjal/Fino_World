import {
  AuthProvider,
  LoaderProvider,
  PlaylistProvider,
  SidebarProvider,
  VideoProvider,
} from "contexts";

export const WrapperProviders = ({ children }) => {
  return (
    <LoaderProvider>
      <AuthProvider>
        <PlaylistProvider>
          <VideoProvider>
            <SidebarProvider>{children}</SidebarProvider>
          </VideoProvider>
        </PlaylistProvider>
      </AuthProvider>
    </LoaderProvider>
  );
};

export default WrapperProviders;
