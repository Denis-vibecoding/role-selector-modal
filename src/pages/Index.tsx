import { useState } from "react";
import { UserTypeModal } from "@/components/UserTypeModal";
import { Button } from "@/components/ui/button";
import { Sparkles, Home, Palette, Wand2 } from "lucide-react";

const Index = () => {
  const [showModal, setShowModal] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-subtle relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              HomeDesignsAI
            </span>
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowModal(true)}
            className="border-border/50 hover:border-primary/50 hover:bg-card/50"
          >
            Get Started
          </Button>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
          <div className="max-w-4xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  MAGIC REDESIGN
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Transform your spaces with advanced AI that generates stunning designs based on your instructions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => setShowModal(true)}
                className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 text-lg font-medium shadow-glow"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Now
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-border/50 hover:border-primary/50 hover:bg-card/50 px-8 py-4 text-lg"
              >
                <Palette className="w-5 h-5 mr-2" />
                View Gallery
              </Button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300">
                <div className="p-3 rounded-lg bg-primary/20 w-fit mb-4">
                  <Wand2 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Magic Redesign</h3>
                <p className="text-muted-foreground text-sm">
                  Transform any space instantly with our conversational AI
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300">
                <div className="p-3 rounded-lg bg-primary/20 w-fit mb-4">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Perfect Redesign</h3>
                <p className="text-muted-foreground text-sm">
                  Complete redesign with enhanced results and structural preservation
                </p>
              </div>

              <div className="p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 transition-all duration-300">
                <div className="p-3 rounded-lg bg-primary/20 w-fit mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Virtual Staging</h3>
                <p className="text-muted-foreground text-sm">
                  Stage spaces with realistic furniture and decor visualization
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserTypeModal 
        open={showModal} 
        onClose={() => setShowModal(false)} 
      />
    </div>
  );
};

export default Index;