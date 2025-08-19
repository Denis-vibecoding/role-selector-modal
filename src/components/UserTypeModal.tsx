import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Building2, CheckCircle, ChevronDown } from "lucide-react";

interface UserTypeModalProps {
  open: boolean;
  onClose: () => void;
}

export const UserTypeModal = ({ open, onClose }: UserTypeModalProps) => {
  const [userType, setUserType] = useState<"personal" | "professional" | null>(null);
  const [subCategory, setSubCategory] = useState<string>("");
  const [otherText, setOtherText] = useState("");

  const personalOptions = [
    { value: "single-project", label: "Single Project" },
    { value: "ongoing-project", label: "Ongoing Project" },
  ];

  const professionalOptions = [
    { value: "real-estate", label: "Real Estate" },
    { value: "architecture", label: "Architecture" },
    { value: "interior-design", label: "Interior Design" },
    { value: "landscaping", label: "Landscaping" },
    { value: "property-development", label: "Property Development" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = () => {
    console.log({
      userType,
      subCategory,
      otherText: subCategory === "other" ? otherText : null,
    });
    onClose();
  };

  const handleUserTypeChange = (type: "personal" | "professional") => {
    setUserType(type);
    setSubCategory("");
    setOtherText("");
  };

  const canSubmit = userType && subCategory && (subCategory !== "other" || otherText.trim());

  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent className="max-w-3xl p-0 border-0 bg-transparent shadow-none [&>button]:hidden">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-subtle shadow-card transition-all duration-500">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative p-6">
            <DialogHeader className="text-center mb-6">
              <DialogTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent text-center">
                Welcome to HomeDesignsAI
              </DialogTitle>
              <p className="text-muted-foreground text-base mt-2 text-center">
                Tell us about yourself to get started
              </p>
            </DialogHeader>

            {/* User Type Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <button
                onClick={() => handleUserTypeChange("personal")}
                className={`group relative p-6 rounded-xl border transition-all duration-300 ${
                  userType === "personal"
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border/50 bg-card/50 hover:bg-card/80 hover:border-primary/50"
                } backdrop-blur-sm hover:shadow-glow`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-full transition-all duration-300 ${
                    userType === "personal" 
                      ? "bg-gradient-primary scale-110" 
                      : "bg-gradient-primary group-hover:scale-110"
                  }`}>
                    <User className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Personal</h3>
                  <p className="text-muted-foreground text-sm">
                    Individual homeowners looking to redesign their spaces
                  </p>
                  {userType === "personal" && (
                    <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
                  )}
                </div>
              </button>

              <button
                onClick={() => handleUserTypeChange("professional")}
                className={`group relative p-6 rounded-xl border transition-all duration-300 ${
                  userType === "professional"
                    ? "border-primary bg-primary/10 shadow-glow"
                    : "border-border/50 bg-card/50 hover:bg-card/80 hover:border-primary/50"
                } backdrop-blur-sm hover:shadow-glow`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-full transition-all duration-300 ${
                    userType === "professional" 
                      ? "bg-gradient-primary scale-110" 
                      : "bg-gradient-primary group-hover:scale-110"
                  }`}>
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Professional</h3>
                  <p className="text-muted-foreground text-sm">
                    Industry professionals and businesses in design and real estate
                  </p>
                  {userType === "professional" && (
                    <ChevronDown className="w-4 h-4 text-primary animate-bounce" />
                  )}
                </div>
              </button>
            </div>

            {/* Expanded Options */}
            {userType && (
              <div className="animate-fade-in">
                <div className="p-5 rounded-xl bg-card/30 backdrop-blur-sm border border-primary/30 shadow-glow">
                  <div className="space-y-5">
                    <div className="text-center">
                      <div className="inline-flex items-center space-x-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/20">
                          {userType === "personal" ? (
                            <User className="w-4 h-4 text-primary" />
                          ) : (
                            <Building2 className="w-4 h-4 text-primary" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-foreground capitalize">
                            {userType} User Selected
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            Choose what best describes your needs
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <RadioGroup value={subCategory} onValueChange={setSubCategory}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {(userType === "personal" ? personalOptions : professionalOptions).map((option) => (
                            <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg border border-border bg-card/50 hover:border-primary/50 hover:bg-card/70 transition-all duration-200 backdrop-blur-sm">
                              <RadioGroupItem 
                                value={option.value} 
                                id={option.value}
                                className="border-border data-[state=checked]:border-primary data-[state=checked]:bg-primary"
                              />
                              <Label 
                                htmlFor={option.value}
                                className="flex-1 text-sm font-medium text-foreground cursor-pointer hover:text-primary transition-colors"
                              >
                                {option.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </RadioGroup>

                      {subCategory === "other" && (
                        <div className="space-y-2 pt-3 animate-fade-in">
                          <Label htmlFor="other-text" className="text-sm font-medium text-foreground">
                            Please specify your profession
                          </Label>
                          <Input
                            id="other-text"
                            value={otherText}
                            onChange={(e) => setOtherText(e.target.value)}
                            placeholder="Enter your profession..."
                            className="bg-input/50 border-border focus:border-primary"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex justify-center pt-4">
                      <Button 
                        onClick={handleSubmit}
                        disabled={!canSubmit}
                        className="bg-gradient-primary hover:opacity-90 text-white px-10 py-3 rounded-lg font-medium transition-opacity disabled:opacity-50 text-base"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};