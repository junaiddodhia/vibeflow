
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Playlist from "./pages/Playlist";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import CreatePlaylist from "./pages/CreatePlaylist";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

// Components
import BottomNavigation from "./components/layout/BottomNavigation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/playlists" element={<Search />} />
          <Route path="/playlist/:id" element={<Playlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-playlist" element={<CreatePlaylist />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNavigation />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
