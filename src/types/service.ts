export interface ServiceItem {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

export interface ServiceGroup {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  items: ServiceItem[];
}