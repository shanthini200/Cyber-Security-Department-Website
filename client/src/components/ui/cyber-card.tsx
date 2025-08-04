import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface CyberCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
}

const CyberCard = forwardRef<HTMLDivElement, CyberCardProps>(
  ({ className, children, hover = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "cyber-card",
          hover && "hover:scale-105 transition-transform duration-300",
          className
        )}
        data-testid="cyber-card"
        {...props}
      >
        {children}
      </div>
    );
  }
);

CyberCard.displayName = "CyberCard";

export { CyberCard };
export default CyberCard;
