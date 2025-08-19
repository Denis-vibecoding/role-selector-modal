import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { User, Building2, CheckCircle } from "lucide-react";

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

  const canSubmit = userType && subCategory && (subCategory !== "other" || otherText.trim());

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 border-0 bg-transparent shadow-none">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-subtle shadow-card">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-primary opacity-10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
          
          <div className="relative p-8">
            <DialogHeader className="text-center mb-8">
              <DialogTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Welcome to HomeDesignsAI
              </DialogTitle>
              <p className="text-muted-foreground text-lg mt-2">
                Tell us about yourself to get started
              </p>
            </DialogHeader>

            {!userType ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <button
                  onClick={() => setUserType("personal")}
                  className="group relative p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Personal</h3>
                    <p className="text-muted-foreground">
                      Individual homeowners looking to redesign their spaces
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setUserType("professional")}
                  className="group relative p-8 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-gradient-primary group-hover:scale-110 transition-transform duration-300">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">Professional</h3>
                    <p className="text-muted-foreground">
                      Industry professionals and businesses in design and real estate
                    </p>
                  </div>
                </button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-primary/20">
                      {userType === "personal" ? (
                        <User className="w-5 h-5 text-primary" />
                      ) : (
                        <Building2 className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground capitalize">
                      {userType} User
                    </h3>
                  </div>
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      setUserType(null);
                      setSubCategory("");
                      setOtherText("");
                    }}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Change
                  </Button>
                </div>

                <div className="space-y-4">
                  <Label className="text-base font-medium text-foreground">
                    What best describes your needs?
                  </Label>
                  <RadioGroup value={subCategory} onValueChange={setSubCategory}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {(userType === "personal" ? personalOptions : professionalOptions).map((option) => (
                        <div key={option.value} className="flex items-center space-x-3">
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
                    <div className="space-y-2 pt-4">
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

                <div className="flex justify-end pt-6">
                  <Button 
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="bg-gradient-primary hover:opacity-90 text-white px-8 py-3 rounded-lg font-medium transition-opacity disabled:opacity-50"
                  >
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};