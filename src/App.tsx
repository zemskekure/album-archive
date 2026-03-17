import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ColorModeProvider } from "@/hooks/ColorModeContext";
import { PlayerProvider } from "@/hooks/PlayerContext";
import Index from "./pages/Index.tsx";
import Lyrics from "./pages/Lyrics.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ColorModeProvider>
      <PlayerProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/album-archive">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/texty" element={<Lyrics />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
      </PlayerProvider>
    </ColorModeProvider>
  </QueryClientProvider>
);

export default App;
