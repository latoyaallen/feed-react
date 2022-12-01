import React from 'react';

const useReactPathname = () => {
  const [pathname, setPathname] = React.useState(window.location.pathname);

  const listenToPopstateEvent = () => {
    const pathname = window.location.pathname;
    setPathname(pathname);
  };

   React.useEffect(() => {
    window.addEventListener("popstate", listenToPopstateEvent);
    return () => {
      window.removeEventListener("popstate", listenToPopstateEvent);
    };
  }, []);

  return pathname;
}

export default useReactPathname;
/*
 *
 PROBLEM
 useEffect doesn't run on window.location.pahtname changes
 Because we're not using Next.js or React Router, we need a way
 to know what page we're on.

 SOLUTION
 Grab the pathname from the URL
 When the page loads, add an event listener that will listen for the
 Window popstate event.
 We can wrap the event listener in useEffect
 return the removal of it
 Don't forget the empty brackets because we only want the code inside useEffect to run once.  Without it, it would run at every render.

 RESOURCES
 https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event
 https://www.oreilly.com/library/view/learn-ecmascript/9781788620062/0dfb5d13-48b9-41d9-a1e7-c7f74522687a.xhtml
 */
