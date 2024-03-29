import { useEffect, useState } from "react";

export default function useDelayRender(time) {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, time);

    return () => clearTimeout(timeout);
  }, [time]);

  return showComponent;
}
