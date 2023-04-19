import React, { useEffect } from 'react';

const withScrollUp = (WrappedComponent: any) => {
  return (props: any) => {

    const { location } = props;

    useEffect(() => {
      const handleScroll = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          window.scrollTo(0, 0);
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [location]);

    return <WrappedComponent {...props} />;
  };
};

export default withScrollUp;