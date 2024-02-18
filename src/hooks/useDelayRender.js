import { useEffect, useState } from "react";

export function useDelayRender(time) {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, time);

    return () => clearTimeout(timeout);
  }, []);

  return showComponent;
}
