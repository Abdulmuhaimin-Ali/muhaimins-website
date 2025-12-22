import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const tabs = [
  { value: "about", label: "About" },
  { value: "experience", label: "Experience" },
  { value: "projects", label: "Projects" },
  { value: "skills", label: "Skills" },
];

const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <div className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container max-w-4xl mx-auto px-4">
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
          <TabsList className="w-full h-16 bg-transparent gap-2 md:gap-8 justify-center">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="font-body text-sm md:text-base font-medium px-4 py-2 data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none text-muted-foreground hover:text-foreground transition-colors"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default TabNavigation;
