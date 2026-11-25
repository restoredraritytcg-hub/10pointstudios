export function ToConfirm({ children }: { children?: string | null }) {
  if (!children) return null;
  return <p className="to-confirm">{children}</p>;
}
