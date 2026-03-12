export interface Unit {
  id: number;
  name: string;
  isClean: boolean;
  priority: 'high' | 'medium' | 'low';
  cleanedBy: string | null;
  cleanedAt: string | null;
}
